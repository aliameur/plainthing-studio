"use client";
import { Carousel } from "../carousel";
import { BigVideo } from "../big-video";
import { motion } from "framer-motion";
import { SmallGrid } from "@/components/illustrations";

export const CopyComponent = () => {
  return (
    <div className="-mx-16">
      <BigVideo />
      <div className="relative p-16 py-[100px]">
        <div className="absolute z-0 -mx-16 -my-24 flex w-full items-center space-x-6">
          <SmallGrid variant="blue" style={{ width: "100%", height: "100%" }} />
          <SmallGrid style={{ width: "100%", height: "100%" }} />
          <SmallGrid style={{ width: "100%", height: "100%" }} />
          <SmallGrid style={{ width: "100%", height: "100%" }} />
        </div>
        <motion.p
          initial={{
            y: 80,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            margin: "-30%",
            once: true,
          }}
          className="relative p-10 font-inktrap text-[42px] text-white"
        >
          Commitment to the highest quality production standards, a broad
          expertise, and a genuine strive to help our clients have secured us
          strategic cooperation with market-leading companies in many sectors
          and regions.
        </motion.p>
      </div>
      <Carousel />
    </div>
  );
};
