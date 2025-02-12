"use client";

import Container from "@/components/global/container";
import { useClerk } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import React from "react";

const Logout = () => {
  const { signOut } = useClerk();

  try {
    signOut({ redirectUrl: "/" });
  } catch (error) {
    console.error(error);
  }

  return (
    <Container className="flex justify-center gap-2 py-10">
      <LoaderCircle className="animate-spin" />
      <h1 className="text-xl font-medium">Redirecting to login page...</h1>
    </Container>
  );
};

export default Logout;
