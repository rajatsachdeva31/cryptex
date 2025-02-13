"use client";

import { GetUserDetails } from "@/api/users";
import Container from "@/components/global/container";
import StatsCard from "@/components/main/dashboard/cards";
import { User } from "@/types/user";
import { Bitcoin, ChartNoAxesCombined, DollarSign, Wallet } from "lucide-react";
import React, { Suspense, useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);

  async function getUserDetails() {
    try {
      const response = await GetUserDetails();
      setUserData(response);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
      setUserData(null);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <Container className="pt-2 h-full flex flex-col gap-4 overflow-y-scroll">
      <h1 className="font-medium md:text-xl">Dashboard</h1>
      <Container
        delay={0.4}
        className="h-fit grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <Suspense
          fallback={[1, 2, 3, 4].map((i) => (
            <div
              key={"statsCard" + i}
              className="p-20 w-full rounded-lg bg-light-background dark:bg-dark-background animate-pulse"
            ></div>
          ))}
        >
          <StatsCard
            className="shadow-primary"
            key={"portfolioValue"}
            loaded={isLoaded}
            icon={<Wallet className="text-primary" />}
            title={"Portfolio Value"}
            value={`$ ${String(15320.75)}`}
          />
          <StatsCard
            className="shadow-green-500"
            key={"profitLoss"}
            loaded={isLoaded}
            icon={<ChartNoAxesCombined className="text-green-500" />}
            title={"Total Profit/Loss"}
            value={`${String(+6.42)} %`}
          />
          <StatsCard
            className="shadow-yellow-500"
            key={"topAsset"}
            loaded={isLoaded}
            icon={<Bitcoin className="text-yellow-500" />}
            title={"Top Asset"}
            value={`ETH (${String(+8.5)} %)`}
          />
          <StatsCard
            className="shadow-red-500"
            key={"availableBalance"}
            loaded={isLoaded}
            icon={<DollarSign className="text-red-500" />}
            title={"Available Balance"}
            value={`$ ${userData?.balance ?? 0}`}
          />
        </Suspense>
      </Container>
      <Container delay={0.6} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[1, 2].map((i) => (
          <div
            key={"first-array" + i}
            className="p-80 rounded-lg bg-light-background dark:bg-dark-background animate-pulse"
          ></div>
        ))}
      </Container>
    </Container>
  );
};

export default Dashboard;
