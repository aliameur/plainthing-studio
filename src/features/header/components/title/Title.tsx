"use client";
import { motion, useAnimation } from "framer-motion";
import { Twinkle } from "@/components/twinkle";
import { useEffect, useRef } from "react";

export const Title = () => {
  const controls = useAnimation();
  const colors = ["#EB6FD5", "#D88B94", "#31BBD6"];
  let index = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start(
        {
          color: colors[index.current],
          opacity: 0.8,
        },
        {
          duration: 0.15,
        },
      );

      index.current = (index.current + 1) % colors.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <h1 className="relative flex flex-col items-center px-32 font-inktrap text-[140px] font-extrabold leading-none text-white">
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
          rotate: 60,
        }}
        animate={{
          rotate: 36,
          opacity: 1,
          scale: 1.2,
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        className="absolute left-32 top-1/2"
      >
        <Twinkle className="stroke-pink-500" />
      </motion.div>
      <motion.div
        initial={{
          scale: 1,
          opacity: 0,
          rotate: -45,
        }}
        animate={{
          rotate: -20,
          opacity: 1,
          scale: 1.8,
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        className="absolute right-1/3 top-2/3"
      >
        <Twinkle className="fill-pink-500" />
      </motion.div>
      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.7,
        }}
      >
        EXPERIENCED
      </motion.span>
      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
        className="ml-auto flex items-center space-x-10 font-migra text-[150px] italic"
      >
        <motion.span animate={controls} className="text-[#31BBD6]">
          DESIGN
        </motion.span>
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="155"
          height="88"
          viewBox="0 0 155 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="svg407734761_1865"
        >
          <path
            d="M155 44.5H51.5"
            stroke="#FFFFFF"
            strokeWidth="5px"
            strokeLinecap="round"
            fill="none"
          ></path>
          <path
            d="M78.5009 0.432012C78.5385 -0.94819 79.6878 -2.03662 81.068 -1.99908C82.4482 -1.96153 83.5366 -0.812213 83.4991 0.567988L78.5009 0.432012ZM42 44.4898L41.4452 46.9275C40.3042 46.6678 39.496 45.6513 39.5 44.4811C39.5041 43.3109 40.3194 42.3001 41.4622 42.0483L42 44.4898ZM83.5 88C83.5 89.3807 82.3807 90.5 81 90.5C79.6193 90.5 78.5 89.3807 78.5 88H83.5ZM83.4991 0.567988C83.3238 7.01159 82.027 16.6481 76.2278 25.6902C70.3792 34.8092 60.1205 43.058 42.5378 46.9313L41.4622 42.0483C57.8795 38.4318 66.9519 30.8915 72.019 22.9909C77.1354 15.0135 78.3386 6.39998 78.5009 0.432012L83.4991 0.567988ZM42.5548 42.0521C59.4202 45.8904 69.7924 52.3769 75.8869 60.6398C81.9677 68.884 83.5 78.5102 83.5 88H78.5C78.5 78.9898 77.0323 70.616 71.8631 63.6077C66.7076 56.618 57.5798 50.5994 41.4452 46.9275L42.5548 42.0521Z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M36.5009 0.432012C36.5385 -0.94819 37.6878 -2.03662 39.068 -1.99908C40.4482 -1.96153 41.5366 -0.812213 41.4991 0.567988L36.5009 0.432012ZM0 44.4898L-0.554768 46.9275C-1.69582 46.6678 -2.50405 45.6513 -2.49998 44.4811C-2.49592 43.3109 -1.68064 42.3001 -0.537827 42.0483L0 44.4898ZM41.5 88C41.5 89.3807 40.3807 90.5 39 90.5C37.6193 90.5 36.5 89.3807 36.5 88H41.5ZM41.4991 0.567988C41.3238 7.01159 40.027 16.6481 34.2278 25.6902C28.3792 34.8092 18.1205 43.058 0.537827 46.9313L-0.537827 42.0483C15.8795 38.4318 24.9519 30.8915 30.019 22.9909C35.1354 15.0135 36.3386 6.39998 36.5009 0.432012L41.4991 0.567988ZM0.554768 42.0521C17.4202 45.8904 27.7924 52.3769 33.8869 60.6398C39.9677 68.884 41.5 78.5102 41.5 88H36.5C36.5 78.9898 35.0323 70.616 29.8631 63.6077C24.7076 56.618 15.5798 50.5994 -0.554768 46.9275L0.554768 42.0521Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </motion.span>
      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
        }}
        className="mr-auto"
      >
        STUDIO
      </motion.span>
    </h1>
  );
};
