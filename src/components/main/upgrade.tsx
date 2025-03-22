"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { CheckIcon, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const pro = {
  id: "pro",
  title: "Upgrade to Pro",
  desc: "Level up with advanced simulations, analytics, and personalized insights.",
  monthlyPrice: 10,
  badge: "Most Popular",
  buttonText: "Upgrade",
  features: [
    "Advanced crypto portfolio simulations",
    "Real-time market analysis tools",
    "Priority email support",
    "Unlimited simulated portfolios",
    "In-depth analytics & performance tracking",
    "Customizable trading strategies",
    "Team collaboration & strategy sharing",
    "Exclusive educational resources",
  ],
  link: "",
};

const Upgrade = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="flex items-center gap-1">
          <Zap fill="#facc15" size={20} color="#facc15" />
          Upgrade
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-[#121212]">
        <DialogHeader>
          <DialogTitle>{pro.title}</DialogTitle>
          <DialogDescription>{pro.desc}</DialogDescription>
        </DialogHeader>
        <hr
          className="shrink-0 border-none w-full h-px bg-border"
          role="separator"
        />
        <div className="relative flex flex-col flex-1 align-top w-full h-full break-words text-left gap-4">
          <div className="flex items-end gap-2">
            <div className="flex items-end gap-2">
              <span className="text-3xl md:text-4xl font-bold">
                ${pro.monthlyPrice}
              </span>
              <span className="text-lg text-muted-foreground font-medium font-heading">
                per month
              </span>
            </div>
          </div>
          <ul className="flex flex-col gap-2">
            {pro.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckIcon
                  aria-hidden="true"
                  className="w-5 h-5 text-primary"
                />
                <p className="text-sm md:text-base text-muted-foreground">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <DialogFooter className="flex items-center justify-end">
          <Button
            asChild
            variant={"default"}
            className="hover:scale-100 hover:translate-y-0 shadow-none"
          >
            <Link href={pro.link}>{pro.buttonText}</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Upgrade;
