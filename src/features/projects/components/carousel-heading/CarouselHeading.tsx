"use client";
import { useEffect, useRef } from "react";
import { animate, motion, useAnimate, useMotionValue } from "framer-motion";
import { useHover, useUpdateEffect } from "usehooks-ts";

export const CarouselHeading = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isHover = useHover(ref);

  return (
    <div className="flex flex-col">
      <h2 className="text-center font-inktrap text-[90px] font-extrabold text-white">
        Our Great
      </h2>
      <div className="-mx-[64px] flex overflow-hidden" ref={ref}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <motion.li
            key={idx}
            animate={{ x: "-200%" }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center pr-10 font-migra text-[260px] font-extrabold italic leading-none text-[#EB6FD5]"
          >
            <span>WERK</span>
            <div className="h-[55px] w-[55px] rounded-full bg-[#31bdd6]" />
          </motion.li>
        ))}
      </div>
    </div>
  );
};
