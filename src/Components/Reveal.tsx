import { Variants, motion } from "framer-motion";
import React from "react";
import cn from "../utils/cn";

interface RevealProps {
  children: React.ReactElement;
  className?: string;
}

export default function Reveal({ children, className = "w-fit" }: RevealProps) {
  const varaints: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const sliderVaraints: Variants = {
    hidden: {
      left: "100%",
    },
    show: {
      left: "0%",
    },
  };

  return (
    <div id="reveal-container" className={cn("relative", className)}>
      <motion.div
        id="reveal"
        className={cn("h-full")}
        variants={varaints}
        initial={"hidden"}
        whileInView={"show"}
        transition={{
          delay: 0.25,
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
      <motion.div
        className={cn("bg-secondary absolute left-0 top-0 right-0 bottom-0")}
        variants={sliderVaraints}
        initial={"show"}
        whileInView={"hidden"}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      ></motion.div>
    </div>
  );
}
