"use client";
import { motion, useAnimate, useAnimationControls } from "framer-motion";
import { ReactNode, useCallback } from "react";

const animationDuration = 15;
export const Carousel = () => {
  return (
    <div>
      <div className="-mx-16 flex items-center overflow-hidden">
        {Array.from({ length: 3 }).map((_, idx) => (
          <motion.li
            key={idx}
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex h-[120px] shrink-0 items-center space-x-2.5 font-migra text-[120px] font-extrabold italic leading-none text-[#27252C]"
          >
            <TopLine />
          </motion.li>
        ))}
      </div>
      <div className="-mx-16 flex items-center overflow-hidden">
        {Array.from({ length: 3 }).map((_, idx) => (
          <motion.li
            key={idx}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex h-[120px] shrink-0 items-center space-x-2.5 font-migra text-[120px] font-extrabold italic leading-none text-[#27252C]"
          >
            <BottomLine />
          </motion.li>
        ))}
      </div>
    </div>
  );
};

const TopLine = () => {
  return (
    <>
      <Tag>2D ILLUSTRATIONS</Tag>
      <Separator />
      <Tag>LOGO</Tag>
      <Separator />
      <Tag>UI/UX</Tag>
      <Separator />
      <Tag>BRANDING</Tag>
      <Separator />
    </>
  );
};

const BottomLine = () => {
  return (
    <>
      <Tag>PITCHDECK</Tag>
      <Separator />
      <Tag>3D CHARACTER</Tag>
      <Separator />
      <Tag>ANIMATION</Tag>
      <Separator />
      <Tag>POSTER</Tag>
      <Separator />
    </>
  );
};

const Tag = ({ children }: { children: ReactNode }) => {
  const [scope, animate] = useAnimate();
  const controls = useAnimationControls();

  const variants = {
    hoverStart: { color: "#EB6FD5", transition: { duration: 0.15 } },
    hoverEnd: { color: "#27252B", transition: { duration: 0.5 } },
  };

  const start = useCallback(() => {
    controls.start("hoverStart");
  }, [controls]);

  const end = useCallback(() => {
    controls.start("hoverEnd");
  }, [controls]);

  return (
    <motion.span
      onHoverStart={start}
      onHoverEnd={end}
      ref={scope}
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.span>
  );
};
const Separator = () => {
  return (
    <svg
      className="h-[83px] w-[83px] shrink-0 fill-[#30BCD6]"
      viewBox="0 0 83 83"
      xmlns="http://www.w3.org/2000/svg"
      id="svg1523293768_361"
    >
      <path d="M41.5 0L44.6763 33.8318L70.8449 12.1551L49.1682 38.3237L83 41.5L49.1682 44.6763L70.8449 70.8449L44.6763 49.1682L41.5 83L38.3237 49.1682L12.1551 70.8449L33.8318 44.6763L0 41.5L33.8318 38.3237L12.1551 12.1551L38.3237 33.8318L41.5 0Z"></path>
    </svg>
  );
};
