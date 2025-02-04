import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import Icons from "@/components/global/icons";
import { Button } from "@/components/ui/button";
import { FADE_IN_VARIANTS } from "@/components/global/animation";

const Login = () => {
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
        <h1 className="mt-2 text-2xl">Login to Cryptex</h1>
        <p className="mt-1 text-base text-neutral-500 dark:text-neutral-400">Start your journey into crypto.</p>
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
        <p className="pt-4">Don&apos;t have an account? <Link className="font-semibold" href="/signup">Sign up</Link></p>
      </motion.div>
    </div>
  );
};

export default Login;
