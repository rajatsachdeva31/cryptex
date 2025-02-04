import Container from "@/components/global/container";
import React from "react";

const Dashboard = () => {
  return (
    <Container className="mt-2 h-full flex flex-col gap-4 overflow-y-scroll">
      <h1 className="font-medium md:text-xl">Dashboard</h1>
      <Container delay={0.4} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={"first-array" + i}
            className="p-20 w-full rounded-lg bg-light-background dark:bg-dark-background animate-pulse"
          ></div>
        ))}
      </Container>
      <Container delay={0.6} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[1, 2].map((i) => (
          <div
            key={"first-array" + i}
            className="p-80 rounded-lg bg-light-background dark:bg-dark-background animate-pulse"
          ></div>
        ))}
      </Container>
    </Container>
  );
};

export default Dashboard;
