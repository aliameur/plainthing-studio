import localFont from "next/font/local";

export const PPNeueMachinaPlain = localFont({
  src: [
    {
      path: "../../public/fonts/PPNeueMachina-PlainLight.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/PPNeueMachina-PlainRegular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/PPNeueMachina-PlainUltrabold.otf",
      weight: "800",
    },
  ],
  variable: "--font-machinaplain",
});

export const PPNeueMachinaInktrap = localFont({
  src: [
    {
      path: "../../public/fonts/PPNeueMachina-InktrapLight.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/PPNeueMachina-InktrapRegular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/PPNeueMachina-InktrapUltrabold.otf",
      weight: "800",
    },
  ],
  variable: "--font-machinainktrap",
});

export const migra = localFont({
  src: [
    {
      path: "../../public/fonts/Migra-Extrabold.otf",
      weight: "800",
    },
  ],
  variable: "--font-migra",
});
