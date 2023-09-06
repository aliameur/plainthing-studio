import { FancyButton } from "../fancy-button";
import { Showreels } from "../showreels";

export const Header = () => {
  return (
    <header className="pb-24">
      <div className="h-[1px] w-full bg-[#737373]" />
      <div className="flex items-center justify-between py-10">
        <p className="w-1/2 text-[22px] font-light text-white">
          We are Design Agency Specialized in Illustrations, UI/UX Design and
          Motion Graphic Based in Indonesia
        </p>
        <FancyButton>Let&apos;s Talk!</FancyButton>
      </div>
      <Showreels />
    </header>
  );
};
