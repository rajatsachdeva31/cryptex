"use client";

import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/contexts/UserContext";
import { Zap } from "lucide-react";
import React, { useContext } from "react";

const Trade = () => {
  const { user, isLoaded } = useContext(UserContext);

  return (
    <Container className="pt-2 h-full flex flex-col gap-4 overflow-y-scroll">
      <div className="flex justify-between items-center">
        <h1 className="font-medium md:text-xl">Trade</h1>
        {user?.type == "FREE" && (
          <Button variant={"ghost"} className="flex items-center gap-1">
            <Zap fill="#facc15" size={20} color="#facc15" />
            Upgrade
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Trade;
