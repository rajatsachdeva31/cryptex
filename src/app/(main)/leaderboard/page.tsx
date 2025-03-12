"use client";

import { GetAllUsers } from "@/api/users";
import { getCoinsList } from "@/api/trade/route";
import Container from "@/components/global/container";
import { User } from "@/types/user";
import { Coin } from "@/types/coin";
import React, { useEffect, useState } from "react";
import LeaderboardCard from "@/components/leaderboard/card";

export interface UserWithProfit extends User {
  totalProfit: number;
}

const LeaderBoard = () => {
  const [users, setUsers] = useState<UserWithProfit[]>([]);

  async function fetchUsers() {
    const [userData, coinData] = await Promise.all([
      GetAllUsers(),
      getCoinsList(),
    ]);
    // setListing(coinData);

    if (userData && coinData) {
      const usersWithProfit = userData.map((user) => {
        const totalProfit = user.Portfolio.reduce((acc, position) => {
          const currentCoin = coinData.find(
            (coin: Coin) => coin.id === position.symbol
          );
          if (!currentCoin) return acc;

          const purchaseValue = position.quantity * position.purchasePrice;
          const currentValue = position.quantity * currentCoin.current_price;
          const profit = currentValue - purchaseValue;
          return acc + profit;
        }, 0);

        return {
          ...user,
          totalProfit,
        };
      });

      // Sort users by total profit in descending order
      const sortedUsers = usersWithProfit.sort(
        (a, b) => b.totalProfit - a.totalProfit
      );
      setUsers(sortedUsers);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container className="pt-2 h-full flex flex-col gap-4 overflow-y-scroll">
      <h1 className="font-medium md:text-xl">Leaderboard</h1>
      {users.map((user, index) => (
        <Container key={user.id} className="h-fit">
          <LeaderboardCard user={user} index={index} />
        </Container>
      ))}
    </Container>
  );
};

export default LeaderBoard;
