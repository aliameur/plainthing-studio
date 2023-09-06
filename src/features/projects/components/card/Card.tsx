"use client";
import { FC, useEffect, useRef } from "react";
import Image from "next/image";

interface ProjectProps {
  src: string;
}

export const ProjectVideo: FC<ProjectProps> = ({ src }) => {
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
      src={src}
      className="relative w-3/5 overflow-hidden rounded-[30px] text-4xl text-white even:ml-auto "
    />
  );
};

export const ProjectImg: FC<ProjectProps> = ({ src }) => {
  return (
    <Image
      alt="project"
      src={src}
      height={490}
      width={816}
      className=" relative mx-auto w-3/5 grow overflow-hidden rounded-[30px] object-cover text-4xl text-white"
    />
  );
};
