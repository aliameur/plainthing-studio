import { Showreels } from "../showreels";
import { CTA } from "@/components/cta";

export const Header = () => {
  return (
    <header className="pb-24">
      <CTA buttonText="Let's Talk">
        We are a Design Agency Specialized in Illustrations, UI/UX Design and
        Motion Graphic Based in Indonesia
      </CTA>
      <Showreels />
    </header>
  );
};
