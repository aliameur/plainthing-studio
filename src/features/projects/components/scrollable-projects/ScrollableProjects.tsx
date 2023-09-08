import { CarouselHeading } from "../carousel-heading";
import { FC, PropsWithChildren } from "react";
import { SmallGrid } from "@/components/illustrations";

export const ScrollableProjects: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="py-[200px]">
      <div className="sticky top-[200px] pb-[80vh]">
        <div className="relative">
          <div className="absolute -top-32 left-0 z-0 h-[250px] w-[250px]">
            <SmallGrid />
          </div>
          <div className="absolute right-32 top-[40vh] z-0 h-[250px] w-[250px]">
            <SmallGrid />
          </div>
        </div>
        <CarouselHeading />
      </div>
      <div className="flex flex-col space-y-40 pb-48 pt-10">{children}</div>
    </div>
  );
};
