"use client";

import { GetAllUsers } from "@/api/users";
import { getCoinsList } from "@/api/trade/route";
import Container from "@/components/global/container";
import { User } from "@/types/user";
import { Coin } from "@/types/coin";
import React, { useEffect, useState } from "react";
import LeaderboardCard from "@/components/main/leaderboard/card";

export interface UserWithPortfolio extends User {
  portfolioValue: number;
}

const LeaderBoard = () => {
  const [users, setUsers] = useState<UserWithPortfolio[]>([]);

  async function fetchUsers() {
    const [userData, coinData] = await Promise.all([
      GetAllUsers(),
      getCoinsList(),
    ]);

    if (userData && coinData) {
      const usersWithPortfolio = userData.map((user) => {
        const portfolioValue = user.Portfolio.reduce((acc, position) => {
          const currentCoin = coinData.find(
            (coin: Coin) => coin.id === position.symbol
          );
          if (!currentCoin) return acc;

          const currentValue = position.quantity * currentCoin.current_price;
          return acc + currentValue;
        }, 0);

        return {
          ...user,
          portfolioValue,
        };
      });

      // Sort users by portfolio value in descending order
      const sortedUsers = usersWithPortfolio.sort(
        (a, b) => b.portfolioValue - a.portfolioValue
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
