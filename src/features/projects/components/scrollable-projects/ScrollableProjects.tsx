import { CarouselHeading } from "../carousel-heading";
import { FC, PropsWithChildren } from "react";

export const ScrollableProjects: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="">
      <div className="sticky top-[200px] pb-[80vh]">
        <CarouselHeading />
      </div>
      <div className="flex flex-col space-y-40 pb-48 pt-10">{children}</div>
    </div>
  );
};
