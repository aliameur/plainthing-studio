"use client";
import { Twinkle } from "@/components/twinkle";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const viewportSettings = {
  margin: "-40%",
  once: true,
};

export const Showreels = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      viewport={viewportSettings}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      className="relative z-10 w-full rounded-[40px] bg-white p-10"
    >
      <motion.div
        initial={{
          y: "30%",
        }}
        whileInView={{ y: 0 }}
        viewport={viewportSettings}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="flex justify-between"
      >
        <h2 className="flex flex-col font-inktrap text-[90px] font-extrabold leading-none text-black">
          <span className="relative">
            Our Nice{" "}
            <Twinkle className="absolute -bottom-0 left-1/3 -translate-x-3 translate-y-4 rotate-[36deg] scale-110 stroke-pink-400" />
          </span>
          <span className="translate-y-2 -rotate-6 font-migra text-[100px] font-bold text-[#30BCD6]">
            Showreels
          </span>
        </h2>
        <p className="relative pl-32 font-inktrap text-[20px] font-light text-[#3b3b3b]">
          Our team is expert in developing designs and animations that can help
          you showcase and represent your business.
        </p>
      </motion.div>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        src="/showreel.mp4"
        className="mt-12 rounded-[20px] object-cover"
      ></video>
    </motion.div>
  );
};
