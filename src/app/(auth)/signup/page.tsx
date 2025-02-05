import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import Icons from "@/components/global/icons";
import { Button } from "@/components/ui/button";
import { FADE_IN_VARIANTS } from "@/components/global/animation";

const Signup = () => {
  
  return (
    <div className="flex flex-col justify-center items-center text-center w-full h-full">
      <motion.div
        variants={FADE_IN_VARIANTS}
        animate="visible"
        initial="hidden"
      >
        <div className="flex justify-center">
          <Link href="/">
            <Icons.logo className="h-12 w-auto" />
          </Link>
        </div>
        <h1 className="pt-2 text-2xl">Sign Up for Cryptex</h1>
        <p className="pt-1 text-base text-neutral-500 dark:text-neutral-400">
          Join today and start learning crypto.
        </p>
      </motion.div>
      <motion.div
        className="w-full flex flex-col max-w-xs gap-3 py-6"
        variants={FADE_IN_VARIANTS}
        animate="visible"
        initial="hidden"
      >
        <Button size={"lg"} variant={"secondary"} type="button">
          <Icons.google size={12} className="w-auto" />
          Continue with Google
        </Button>
        <Button size={"lg"} variant={"secondary"} type="button">
          <Icons.apple size={12} className="w-auto" />
          Continue with Apple
        </Button>
        <Button size={"lg"} variant={"secondary"} type="button">
          <Icons.coinbase size={12} className="w-auto" />
          Continue with Coinbase
        </Button>
        <p className="pt-4">
          Already have an account?{" "}
          <Link className="font-semibold" href="/login">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
