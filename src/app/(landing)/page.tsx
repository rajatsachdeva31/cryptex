import { Features } from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const LandingPage = () => {
  return (
    <div className="size-full h-full w-full mx-auto relative">
      <GridPattern
        width={85}
        height={85}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <Hero />
      <Features />
    </div>
  );
};

export default LandingPage;
