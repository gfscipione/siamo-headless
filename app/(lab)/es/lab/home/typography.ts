import localFont from "next/font/local";
import { navigationFontClasses } from "@/app/components/siteTypography";

const serif = localFont({
  src: [
    { path: "./fonts/instrument-serif-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--lab-serif", display: "swap",
});
export const homeFontClasses = `${serif.variable} ${navigationFontClasses}`;
