import { CTA } from "@/components/cta";
import Image from "next/image";
import { Carousel } from "../carousel";
import { Curve } from "@/components/illustrations";

export const Footer = () => {
  return (
    <footer className="relative -mx-16 overflow-hidden">
      <Curve className="absolute -bottom-1/2 right-4 z-0 -translate-y-8 translate-x-1/4 -rotate-[30deg]" />
      <div className="p-16">
        <Carousel />
        <div>
          <CTA buttonText="Let's Talk" line="bottom">
            Have a project in mind? <br />
            Let’s work together!
          </CTA>
          <div className="py-16">
            <Image
              src="/logo.png"
              alt="logo"
              height={72}
              width={294}
              className="h-[50px] -translate-x-[44px] object-contain"
            />
          </div>
          <div className="relative flex justify-between font-inktrap text-white">
            <p className="flex max-w-[450px] flex-col space-y-2.5 font-inktrap text-[18px] font-light">
              <span>hello@plainthing.studio</span>
              <span>
                Griya permata hijau no D1 Purwomartani, Kalasan, Yogyakarta
              </span>
            </p>
            <ul className="flex items-end space-x-2.5">
              <li className="rounded-full border border-white px-5 py-2.5 text-[20px]">
                Dribble
              </li>
              <li className="rounded-full border border-white px-5 py-2.5 text-[20px]">
                Instagram
              </li>
              <li className="rounded-full border border-white px-5 py-2.5 text-[20px]">
                Behance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
