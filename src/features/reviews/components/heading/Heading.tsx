"use client";
import { Twinkle } from "@/components/twinkle";
import { motion } from "framer-motion";

export const Heading = () => {
  return (
    <motion.h2
      className="relative flex flex-col items-center font-inktrap text-[90px] font-extrabold leading-none text-white"
      viewport={{
        once: true,
        margin: "-30%",
      }}
      whileInView={{ y: 0 }}
      initial={{ y: 40 }}
      transition={{
        duration: 0.5,
      }}
    >
      <span className="relative">
        What Our{" "}
        <motion.div
          viewport={{
            once: true,
            margin: "-30%",
          }}
          whileInView={{ rotate: -36, scale: 1.5 }}
          initial={{ rotate: -50 }}
          transition={{
            duration: 0.5,
          }}
          className="absolute -right-1/4 top-0 scale-150"
        >
          <Twinkle className="fill-pink-500" />
        </motion.div>
        <motion.div
          viewport={{
            once: true,
            margin: "-30%",
          }}
          whileInView={{ rotate: 30, scale: 1.5 }}
          initial={{ rotate: 50, translateX: "-33%" }}
          transition={{
            duration: 0.5,
          }}
          className="absolute -bottom-1/4 -left-1/4 scale-110"
        >
          <Twinkle className="stroke-pink-500" />
        </motion.div>
      </span>
      <span className="flex">
        <motion.span
          viewport={{
            once: true,
            margin: "-30%",
          }}
          whileInView={{ y: 0, rotate: -6 }}
          initial={{ y: 40 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="font-migra text-[100px] font-bold italic text-[#30BCD6]"
        >
          Clientsss
        </motion.span>
        <motion.span
          className="ml-2"
          viewport={{
            once: true,
            margin: "-30%",
          }}
          whileInView={{ y: 0 }}
          initial={{ y: 40 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          Say
        </motion.span>
      </span>
    </motion.h2>
  );
};
