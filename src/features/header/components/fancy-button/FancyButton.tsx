import { FC, HTMLProps, PropsWithChildren } from "react";

interface FancyButtonProps extends PropsWithChildren {}

export const FancyButton: FC<FancyButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="h-[70px] overflow-hidden rounded-full px-8 text-[20px] font-extrabold tracking-wide text-white"
      style={{
        background: "linear-gradient(to right, #E032DB, #741EE2)",
      }}
      {...props}
    >
      {children}
    </button>
  );
};
