"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export const Carousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="-mx-[64px] flex overflow-hidden" ref={ref}>
      {Array.from({ length: 2 }).map((_, idx) => (
        <motion.li
          key={idx}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0 items-center space-x-10 pr-10 font-inktrap text-[250px] font-extrabold leading-none text-white"
        >
          <span className="shrink-0">HAVE A</span>
          <span className="shrink-0 pr-10 font-migra text-[260px] italic text-[#EB6FD5]">
            GREAT
          </span>
          <span className="shrink-0">PROJECT?</span>
          <div className="h-[55px] w-[55px] rounded-full bg-[#31bdd6]" />
        </motion.li>
      ))}
    </div>
  );
};
