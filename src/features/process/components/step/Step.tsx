import { FC, ReactNode } from "react";

interface StepProps {
  number: string;
  titleStart: string;
  titleEnd: string;
  children: ReactNode;
}

export const Step: FC<StepProps> = ({
  number,
  titleStart,
  titleEnd,
  children,
}) => {
  return (
    <div className="flex">
      <div className="shrink-0">
        <div className="mr-4 flex aspect-[0.666] h-[80px] w-[60px] rotate-[30deg] items-center justify-center rounded-[100%] bg-[#EB6FD5] font-migra text-[44px] italic text-white">
          <div className="flex -rotate-[30deg] leading-6">{number}</div>
        </div>
      </div>
      <div className="w-4/5 space-y-8 font-inktrap">
        <h3 className="flex flex-col text-[74px] font-extrabold leading-none">
          <span className="font-inktrap text-white">{titleStart}</span>
          <span className="font-migra italic text-[#EB6FD5]">{titleEnd}</span>
        </h3>
        <p className="text-[18px] font-light text-white">{children}</p>
      </div>
    </div>
  );
};
