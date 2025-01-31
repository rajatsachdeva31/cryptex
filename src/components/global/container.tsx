import React from "react";
import * as motion from "motion/react-client";

interface Props {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  reverse?: boolean;
  simple?: boolean;
}

const Container = ({ children, delay = 0.2, reverse, simple }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
        duration: 0.6,
        type: simple ? "keyframes" : "spring",
        stiffness: simple && 100,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Container;
