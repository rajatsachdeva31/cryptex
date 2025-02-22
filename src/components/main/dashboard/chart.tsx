import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

const PerformanceChart = () => {
  const { user, isLoaded } = useContext(UserContext);

  return (
    <>
      {isLoaded && !user?.Portfolio && (
        <div className="h-full w-full flex items-center justify-center">
          Start trading to analyse your performance
        </div>
      )}
    </>
  );
};

export default PerformanceChart;
