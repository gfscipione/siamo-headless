import localFont from "next/font/local";

const sans = localFont({
  src: [
    { path: "../(lab)/es/lab/home/fonts/instrument-sans-regular.ttf", weight: "400", style: "normal" },
    { path: "../(lab)/es/lab/home/fonts/instrument-sans-medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--lab-sans", display: "swap",
});

// Hero and shared site navigation use the same locally hosted typefaces.
const heroSerif = localFont({
  src: "../(lab)/es/lab/home/fonts/cormorant-garamond-light.ttf", weight: "300", style: "normal",
  variable: "--hero-serif", display: "swap",
});
const heroSans = localFont({
  src: "../(lab)/es/lab/home/fonts/libre-franklin-extra-light.ttf", weight: "200", style: "normal",
  variable: "--hero-sans", display: "swap",
});

export const navigationFontClasses = `${sans.variable} ${heroSerif.variable} ${heroSans.variable}`;
