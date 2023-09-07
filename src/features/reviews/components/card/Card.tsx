import { FC, ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  heading: string;
  client: string;
  text: string;
  className?: string;
}

export const Card: FC<CardProps> = ({
  children,
  heading,
  client,
  text,
  className,
}) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col space-y-6 rounded-[30px] bg-[#2b282f] bg-opacity-90 p-10 font-inktrap text-white",
        className,
      )}
    >
      <h3 className="text-[32px] font-extrabold">{heading}</h3>
      <p className="text-[18px]">{text}</p>
      <span className="text-[24px] font-extrabold">{client}</span>
      {children}
    </div>
  );
};
