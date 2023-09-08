"use client";
import { Card } from "../card";
import { data } from "../../data";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heading } from "../heading";
import {
  AnimatedCurve2,
  HorizontalLines,
  VerticalLines,
} from "@/components/illustrations";

export const ServicesScrollbar = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["80%", "-95%"]);
  const y = useTransform(scrollYProgress, [0, 0.12], ["-100%", "0%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0">
        <div className="relative -mx-16 flex h-screen flex-col items-center overflow-y-hidden pt-10">
          <VerticalLines className="absolute -left-0 -right-0 top-0 " />
          <HorizontalLines className="absolute -left-0 -right-0 top-0" />
          <AnimatedCurve2 />
          <div className="absolute -bottom-20 -left-16 -right-16 z-0 h-96 bg-gradient-to-t from-[#1A181E] from-20%" />
          <div className="py-10">
            <Heading />
          </div>
          <motion.div style={{ x, y }} className="flex gap-4">
            {data.map((service) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
