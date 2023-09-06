import { Twinkle } from "@/components/twinkle";

export const Heading = () => {
  return (
    <h2 className="relative flex flex-col items-center font-inktrap text-[90px] font-extrabold leading-none text-white">
      <span className="relative">
        What We{" "}
        <Twinkle className="absolute -right-1/4 top-0 -rotate-[36deg] scale-150 fill-pink-500" />
        <Twinkle className="absolute -bottom-1/4 -left-1/4 -translate-x-1/3 rotate-[30deg] scale-110 stroke-pink-500" />
      </span>
      <span className="flex">
        <span className="-rotate-6 font-migra text-[100px] font-bold text-[#30BCD6]">
          Realllly
        </span>
        <span className="ml-2">Do?</span>
      </span>
    </h2>
  );
};
