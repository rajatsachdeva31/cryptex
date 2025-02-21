"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserContext } from "@/contexts/UserContext";
import { cn } from "@/lib/utils";
import { useContext } from "react";

const portfolio = [
  {
    symbol: "BTC",
    quantity: 0.5,
    purchasePrice: 50000,
    currentPrice: 52000, // Example current price
    profitLoss: (52000 - 50000) * 0.5, // (Current - Purchase) * Quantity
  },
  {
    symbol: "ETH",
    quantity: 2,
    purchasePrice: 3000,
    currentPrice: 2900,
    profitLoss: (2900 - 3000) * 2,
  },
  {
    symbol: "SOL",
    quantity: 10,
    purchasePrice: 150,
    currentPrice: 180,
    profitLoss: (180 - 150) * 10,
  },
  {
    symbol: "ADA",
    quantity: 100,
    purchasePrice: 1.2,
    currentPrice: 1.0,
    profitLoss: (1.0 - 1.2) * 100,
  },
  {
    symbol: "XRP",
    quantity: 500,
    purchasePrice: 0.5,
    currentPrice: 0.55,
    profitLoss: (0.55 - 0.5) * 500,
  },
  {
    symbol: "DOT",
    quantity: 20,
    purchasePrice: 25,
    currentPrice: 22,
    profitLoss: (22 - 25) * 20,
  },
  {
    symbol: "MATIC",
    quantity: 200,
    purchasePrice: 2,
    currentPrice: 2.5,
    profitLoss: (2.5 - 2) * 200,
  },
];

const PortfolioTable = () => {
  const { user, isLoaded } = useContext(UserContext);
  return (
    <>
      {isLoaded && !user?.Portfolio && (
        <div className="h-full w-full flex items-center justify-center">
          Start trading to view your portfolio
        </div>
      )}
      {isLoaded && user?.Portfolio && (
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Symbol</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Cost</TableHead>
              <TableHead className="text-right">Profit/Loss</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {portfolio.map((holding) => (
              <TableRow key={holding.symbol}>
                <TableCell className="font-medium">{holding.symbol}</TableCell>
                <TableCell>{holding.quantity}</TableCell>
                <TableCell>${holding.purchasePrice}</TableCell>
                <TableCell
                  className={cn(
                    "text-right",
                    holding.profitLoss > 0 ? "text-green-500" : "text-red-500"
                  )}
                >
                  {holding.profitLoss.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </>
  );
};

export default PortfolioTable;
