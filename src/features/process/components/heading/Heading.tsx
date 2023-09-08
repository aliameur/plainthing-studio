"use client";
import React from "react";
import { Twinkle } from "@/components/twinkle";
import { motion } from "framer-motion";
import { SmallGrid } from "@/components/illustrations";

export const Heading = () => {
  return (
    <motion.div
      viewport={{
        once: true,
        margin: "-30%",
      }}
      whileInView={{ y: 0 }}
      initial={{ y: 40 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
      className="sticky top-0 flex h-screen w-1/2 flex-col pt-[200px]"
    >
      <h2 className="relative flex max-w-[500px] flex-col font-inktrap text-[90px] font-extrabold leading-none text-white">
        <span>How We</span>
        <motion.span
          viewport={{
            once: true,
            margin: "-30%",
          }}
          whileInView={{ y: 0, rotate: -6 }}
          initial={{ y: 40 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="-translate-y-4 -rotate-6 font-migra text-[100px] font-bold italic text-[#30BCD6]"
        >
          Work?
        </motion.span>
        <motion.div
          initial={{ translateX: "100%", rotate: 50, scale: 0.8 }}
          whileInView={{
            rotate: 36,
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="absolute left-0 top-0"
        >
          <Twinkle className="stroke-pink-400" />
        </motion.div>
        <motion.div
          initial={{ rotate: -45, scale: 1 }}
          whileInView={{
            rotate: -24,
            scale: 1.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="absolute bottom-6 right-1/4"
        >
          <Twinkle className="fill-pink-400" />
        </motion.div>
      </h2>
      <motion.p
        viewport={{
          once: true,
          margin: "-30%",
        }}
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 40, opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.45,
        }}
        className="relative max-w-[500px] pt-4 font-inktrap text-[22px] font-light text-white"
      >
        Some of the processes that usually we use when we have a project with
        our client
        <SmallGrid className="absolute -bottom-full -right-10 h-[245px] w-[241px] translate-y-full" />
      </motion.p>
    </motion.div>
  );
};
