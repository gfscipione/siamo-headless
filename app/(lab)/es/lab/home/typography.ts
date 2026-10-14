import localFont from "next/font/local";

const serif = localFont({
  src: [
    { path: "./fonts/instrument-serif-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--lab-serif", display: "swap",
});
const sans = localFont({
  src: [
    { path: "./fonts/instrument-sans-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/instrument-sans-medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--lab-sans", display: "swap",
});

// Typography trial is consumed only by the lab hero and its navigation.
const heroSerif = localFont({
  src: "./fonts/cormorant-garamond-light.ttf", weight: "300", style: "normal",
  variable: "--hero-serif", display: "swap",
});
const heroSans = localFont({
  src: "./fonts/libre-franklin-extra-light.ttf", weight: "200", style: "normal",
  variable: "--hero-sans", display: "swap",
});

export const homeFontClasses = `${serif.variable} ${sans.variable} ${heroSerif.variable} ${heroSans.variable}`;
