import { Variants, motion } from "framer-motion";
import React from "react";

export default function Reveal({ children }: { children: React.ReactElement }) {
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
  return (
    <motion.div
      id="reveal-container"
      variants={varaints}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}
