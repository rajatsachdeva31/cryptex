"use client";

import React, { useContext } from "react";
import Container from "@/components/global/container";
import {
  ChartCard,
  PortfolioCard,
  StatsCard,
} from "@/components/main/dashboard/cards";
import { Button } from "@/components/ui/button";
import {
  ChartNoAxesCombined,
  DollarSign,
  LucideHandCoins,
  Wallet,
  Zap,
} from "lucide-react";
import { UserContext } from "@/contexts/UserContext";

const Dashboard = () => {
  const { user, isLoaded } = useContext(UserContext);

  return (
    <Container className="pt-2 h-full flex flex-col gap-4 overflow-y-scroll">
      <div className="flex justify-between items-center">
        <h1 className="font-medium md:text-xl">Dashboard</h1>
        {isLoaded && user?.type == "FREE" && (
          <Button variant={"ghost"} className="flex items-center gap-1">
            <Zap fill="#facc15" size={20} color="#facc15" />
            Upgrade
          </Button>
        )}
      </div>
      <Container
        delay={0.4}
        className="h-fit grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <StatsCard
          className=""
          key={"portfolioValue"}
          loaded={isLoaded}
          icon={<Wallet className="text-primary" />}
          title={"Portfolio Value"}
          value={`$ ${(15320.74)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}
        />
        <StatsCard
          className=""
          key={"profitLoss"}
          loaded={isLoaded}
          icon={<ChartNoAxesCombined className="text-primary" />}
          title={"Total Profit/Loss"}
          value={`${String(+6.42)} %`}
        />
        <StatsCard
          className=""
          key={"topAsset"}
          loaded={isLoaded}
          icon={<LucideHandCoins className="text-primary" />}
          title={"Top Asset"}
          value={`ETH (${String(+8.5)} %)`}
        />
        <StatsCard
          className=""
          key={"availableBalance"}
          loaded={isLoaded}
          icon={<DollarSign className="text-primary" />}
          title={"Available Balance"}
          value={`$ ${
            user?.balance
              ? user?.balance
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
              : 0
          }`}
        />
      </Container>
      <Container
        delay={0.6}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-2"
      >
        <ChartCard />
        <PortfolioCard />
      </Container>
    </Container>
  );
};

export default Dashboard;
