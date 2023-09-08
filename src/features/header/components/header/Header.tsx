import { Showreels } from "../showreels";
import { CTA } from "@/components/cta";
import { Title } from "../title";
import { AnimatedCurve } from "@/components/illustrations";
import { SmallGrid } from "@/components/illustrations";

export const Header = () => {
  return (
    <header className="relative pb-24">
      <div className="relative z-50 py-8">
        <Title />
      </div>
      <CTA buttonText="Let's Talk">
        We are a Design Agency Specialized in Illustrations, UI/UX Design and
        Motion Graphic Based in Indonesia
      </CTA>
      <Showreels />
      <AnimatedCurve />
      <div className="absolute left-0 top-4 z-0 h-[250px] w-[250px]">
        <SmallGrid />
      </div>
      <div className="absolute right-32 top-[40vh] z-0 h-[250px] w-[250px]">
        <SmallGrid />
      </div>
    </header>
  );
};
