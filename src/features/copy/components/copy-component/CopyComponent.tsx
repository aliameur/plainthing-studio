import { Carousel } from "../carousel";
import { BigVideo } from "../big-video";

export const CopyComponent = () => {
  return (
    <div className="-mx-16">
      <BigVideo />
      <div className="p-16 py-[100px]">
        <p className="p-10 font-inktrap text-[42px] text-white">
          Commitment to the highest quality production standards, a broad
          expertise, and a genuine strive to help our clients have secured us
          strategic cooperation with market-leading companies in many sectors
          and regions.
        </p>
      </div>
      <Carousel />
    </div>
  );
};
