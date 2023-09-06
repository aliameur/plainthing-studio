import { FC, PropsWithChildren } from "react";

interface TextProps extends PropsWithChildren {}

export const Text: FC<TextProps> = ({ children }) => {
  return <p className="text-[22px] text-white">{children}</p>;
};
