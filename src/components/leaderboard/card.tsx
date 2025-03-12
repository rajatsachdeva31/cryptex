import { UserWithProfit } from "@/app/(main)/leaderboard/page";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

const LeaderboardCard = ({
  user,
  index,
}: {
  user: UserWithProfit;
  index: number;
}) => {
  return (
    <Card
      className={cn(
        "w-full lg:w-[800px]",
        index == 0 && "border border-amber-500 shadow-md shadow-amber-500",
        index == 1 && "border border-gray-500 shadow-md shadow-gray-500"
      )}
    >
      <CardContent className="flex justify-between p-8">
        <div className="flex flex-row items-center gap-2">
          <span className="font-medium text-gray-500">#{index + 1}</span>
          <span className="font-medium">{user.name || "Anonymous"}</span>
        </div>
        <span
          className={`font-medium ${
            user.totalProfit >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          ${user.totalProfit.toFixed(2)}
        </span>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
