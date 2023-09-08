"use client";
import { useEffect, useRef } from "react";
import { animate, motion, useAnimate, useMotionValue } from "framer-motion";
import { useHover, useUpdateEffect } from "usehooks-ts";
import { Twinkle } from "@/components/twinkle";

export const CarouselHeading = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isHover = useHover(ref);

  return (
    <div className="flex flex-col">
      <motion.div
        viewport={{
          once: true,
          margin: "-30%",
        }}
        whileInView={{
          y: 0,
        }}
        initial={{
          y: 40,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative"
      >
        <h2 className="text-center font-inktrap text-[90px] font-extrabold text-white">
          Our Great
        </h2>
        <motion.div
          viewport={{
            once: true,
            margin: "-30%",
          }}
          whileInView={{ rotate: 24, scale: 1.2 }}
          initial={{ rotate: 60, translateX: 40 }}
          transition={{
            duration: 0.5,
          }}
          className="scale-120 absolute left-1/4 top-1/2"
        >
          <Twinkle className="stroke-pink-500" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="-mx-[64px] flex overflow-hidden"
        ref={ref}
      >
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
      </motion.div>
    </div>
  );
};
