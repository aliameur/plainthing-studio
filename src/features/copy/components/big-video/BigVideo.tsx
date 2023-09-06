"use client";
import { useEffect, useRef } from "react";

export const BigVideo = () => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.play();
    }
  }, [ref]);
  return (
    <video
      ref={ref}
      loop
      autoPlay
      playsInline
      src="/video.mp4"
      className=""
    ></video>
  );
};
