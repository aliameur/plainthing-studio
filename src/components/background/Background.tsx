"use client";
import React from "react";
import { motion } from "framer-motion";

export const Background = () => {
  return (
    <motion.div
      className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"
      transition={{
        duration: 0.3, // make it faster by setting a shorter duration
        repeat: Infinity, // repeat the animation infinitely
        repeatType: "loop", // loop the animation
        type: "tween",
      }}
      initial={{
        scale: "150%",
      }}
      animate={{
        translateX: [
          "0.367%",
          "0.070%",
          "-0.207%",
          "-0.065%",
          "0.079%",
          "0.367%",
        ],
        translateY: [
          "-0.432%",
          "0.189%",
          "0.367%",
          "-0.041%",
          "0.256%",
          "-0.432%",
        ],
      }}
    ></motion.div>
  );
};
