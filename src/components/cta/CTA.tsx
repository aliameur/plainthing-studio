"use client";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface CtaProps {
  buttonText: string;
  children: ReactNode;
  line?: "top" | "bottom";
}

export const CTA: FC<CtaProps> = ({ buttonText, children, line = "top" }) => {
  return (
    <>
      {line === "top" && (
        <div className="relative z-50 h-[1px] w-full bg-[#737373]" />
      )}
      <div className="relative z-50 flex items-center justify-between py-10">
        <motion.p
          initial={{ scale: 0.6, opacity: 0, y: "40%" }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="w-1/2 text-[22px] font-light text-white"
        >
          {children}
        </motion.p>
        <motion.button
          initial={{ scale: 0.7, opacity: 0, y: "40%" }}
          viewport={{ once: true }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="h-[70px] overflow-hidden rounded-full px-8 text-[20px] font-extrabold tracking-wide text-white"
          style={{
            background: "linear-gradient(to right, #E032DB, #741EE2)",
          }}
        >
          {buttonText}
        </motion.button>
      </div>
      {line === "bottom" && (
        <div className="relative z-50 h-[1px] w-full bg-[#737373]" />
      )}
    </>
  );
};
