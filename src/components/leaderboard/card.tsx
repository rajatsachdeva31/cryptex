import { UserWithProfit } from "@/app/(main)/leaderboard/page";
import React from "react";
import { Card, CardContent } from "../ui/card";

const LeaderboardCard = ({
  user,
  index,
}: {
  user: UserWithProfit;
  index: number;
}) => {
  return (
    <Card className="w-full lg:w-[800px]">
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
