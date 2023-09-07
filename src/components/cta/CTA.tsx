import { FC, ReactNode } from "react";

interface CtaProps {
  buttonText: string;
  children: ReactNode;
  line?: "top" | "bottom";
}

export const CTA: FC<CtaProps> = ({ buttonText, children, line = "top" }) => {
  return (
    <>
      {line === "top" && <div className="h-[1px] w-full bg-[#737373]" />}
      <div className="flex items-center justify-between py-10">
        <p className="w-1/2 text-[22px] font-light text-white">{children}</p>
        <button
          className="h-[70px] overflow-hidden rounded-full px-8 text-[20px] font-extrabold tracking-wide text-white"
          style={{
            background: "linear-gradient(to right, #E032DB, #741EE2)",
          }}
        >
          {buttonText}
        </button>
      </div>
      {line === "bottom" && <div className="h-[1px] w-full bg-[#737373]" />}
    </>
  );
};
