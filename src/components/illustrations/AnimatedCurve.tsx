"use client";
import { motion } from "framer-motion";
import { Curve } from "./Curve";

export const AnimatedCurve = () => {
  return (
    <motion.div
      className="absolute -left-1/3 bottom-1/2 z-0"
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.5, y: 160 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <Curve />
    </motion.div>
  );
};
