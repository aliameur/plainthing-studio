"use client";
import { Card } from "../card";
import { data } from "../../data";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heading } from "../heading";

export const ServicesScrollbar = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["80%", "-95%"]);
  const y = useTransform(scrollYProgress, [0, 0.12], ["-100%", "0%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh] bg-red-600 pt-10">
      <div className="sticky top-0 flex h-screen flex-col items-center overflow-hidden">
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
  );
};
