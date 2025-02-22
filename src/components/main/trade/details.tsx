import { getChartData } from "@/api/trade/route";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { SelectedCoinContext } from "@/contexts/SelectCoin";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CoinDetails = () => {
  const { selectedCoin } = useContext(SelectedCoinContext);
  const [chartData, setChartData] = useState([]);

  console.log(selectedCoin);

  useEffect(() => {
    if (!selectedCoin) return;

    const fetchCoinData = async () => {
      try {
        const data = await getChartData(selectedCoin.id);

        const formattedChartData = data.prices.map(
          ([timestamp, price]: [number, number]) => ({
            date: new Date(timestamp).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
            price,
          })
        );

        setChartData(formattedChartData);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData();
  }, [selectedCoin]);

  const chartConfig = {
    price: {
      label: "Price (CAD)",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <div className="w-full h-full p-2">
      {selectedCoin && (
        <div>
          <h1 className="text-xl font-semibold flex justify-between">
            <p className="flex gap-1">
              <Image
                alt={selectedCoin.id}
                src={selectedCoin.image}
                width={30}
                height={20}
              />
              <span>{selectedCoin.name}</span>
              <span className="uppercase">({selectedCoin.symbol})</span>
            </p>
            <p>
              ${" "}
              {selectedCoin?.current_price
                ? selectedCoin?.current_price
                    .toFixed(2)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A"}
            </p>
          </h1>
          {chartData.length > 0 && (
            <ChartContainer config={chartConfig} className="mt-4 h-1/2 w-full">
              <LineChart
                width={600}
                height={300}
                data={chartData}
                margin={{ left: 12, right: 12 }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis domain={["dataMin", "dataMax"]} />
                <Tooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="blue"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          )}
          <div className="grid grid-cols-3 mt-8 p-4">
            <h2 className="flex flex-col lg:flex-row lg:gap-2 items-center">
              24 hours High:{" "}
              <span className="font-medium text-xl">
                ${" "}
                {selectedCoin?.high_24h
                  ? selectedCoin?.high_24h
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                  : "N/A"}
              </span>
            </h2>
            <h2 className="flex flex-col lg:flex-row lg:gap-2 items-center">
              24 hours Low:{" "}
              <span className="font-medium text-xl">
                ${" "}
                {selectedCoin?.low_24h
                  ? selectedCoin?.low_24h
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                  : "N/A"}
              </span>
            </h2>
            <h2 className="flex flex-col lg:flex-row lg:gap-2 items-center">
              24 hours Price Change:{" "}
              <span className="font-medium text-xl">
                ${" "}
                {selectedCoin?.price_change_24h
                  ? selectedCoin?.price_change_24h
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                  : "N/A"}
              </span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinDetails;
