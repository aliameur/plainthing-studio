import { FC, ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const Card: FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex h-[450px] w-[500px] flex-col items-start justify-between rounded-[30px] bg-[#2b282f] bg-opacity-90 p-10 font-inktrap text-white">
      <div className="h-[198px]">{icon}</div>
      <h3 className="text-[32px] font-extrabold">{title}</h3>

      <p className="h-[85px] text-[18px]">{description}</p>
    </div>
  );
};
