import Container from "@/components/global/container";
import { LoaderCircle } from "lucide-react";
import React from "react";

const Logout = () => {
  return (
    <Container className="flex justify-center gap-2 py-10">
        <LoaderCircle className="animate-spin" /><h1 className="text-xl font-medium">Redirecting to login page...</h1>
    </Container>
  );
};

export default Logout;
