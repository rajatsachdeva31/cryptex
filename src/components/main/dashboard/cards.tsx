import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import PortfolioTable from "./table";

interface StatsCardsProps {
  className: string;
  loaded: boolean;
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatsCard = ({
  className,
  loaded,
  icon: Icon,
  title,
  value,
}: StatsCardsProps) => {
  return (
    <Card
      className={`w-full rounded-lg md:rounded-xl flex flex-col justify-between md:justify-normal shadow-md dark:border-neutral-700 ${className}`}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between gap-2 font-medium md:text-lg lg:text-xl">
          {title}
          {Icon}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-xl md:text-3xl font-semibold">
        {loaded ? value : <Skeleton className="h-7 md:h-10 w-1/3" />}
      </CardContent>
    </Card>
  );
};

const ChartCard = () => {
  return (
    <Card
      className={`w-full rounded-lg md:rounded-xl flex flex-col justify-between md:justify-normal shadow-md dark:border-neutral-700`}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between gap-2 font-medium md:text-lg lg:text-xl">
          Performance Chart
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

const PortfolioCard = () => {
  return (
    <Card
      className={`w-full h-full rounded-lg md:rounded-xl flex flex-col justify-between md:justify-normal shadow-md dark:border-neutral-700`}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between gap-2 font-medium md:text-lg lg:text-xl">
          Current Holdings
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <PortfolioTable />
      </CardContent>
    </Card>
  );
};
export { StatsCard, ChartCard, PortfolioCard };
