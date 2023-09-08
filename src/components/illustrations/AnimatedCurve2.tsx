"use client";
import { motion } from "framer-motion";
import { Curve } from "./Curve";

export const AnimatedCurve2 = () => {
  return (
    <motion.div
      className="absolute left-1/2 top-40"
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ scale: 0.5, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Curve />
    </motion.div>
  );
};
