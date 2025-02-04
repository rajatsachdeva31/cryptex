"use client";
import React, { useState } from "react";
import * as motion from "motion/react-client";
import { NavMenu } from "./menu";
import Link from "next/link";
import Icons from "../global/icons";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Button } from "../ui/button";
import { Menu, XIcon } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <motion.header
      className="fixed top-4 inset-x-0 max-w-4xl px-4 lg:max-w-6xl mx-auto z-50 transform"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="backdrop-blur-lg rounded-lg lg:rounded-xl border px-2 py-1 flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-start gap-8">
            <Link href="/">
              <Icons.logo className="h-8 w-auto" />
            </Link>
            <div className="hidden lg:flex items-center">
              <NavMenu />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <ThemeSwitcher />
            <div className="flex ml-2 gap-2">
              <Button variant={"secondary"} size={"sm"} className="text-sm">
                <Link href="/login">Login</Link>
              </Button>
            </div>
            <Button variant={"ghost"} size={"sm"} className="lg:hidden">
              {isOpen ? (
                <XIcon className="w-4 h-4 duration-300" />
              ) : (
                <Menu className="w-3.5 h-3.5 duration-300" />
              )}
            </Button>
          </div>
          {/* <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
