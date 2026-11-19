import type { Metadata } from "next";
import PlanningGuideArticle from "@/app/components/planning-guide/PlanningGuideArticle";
import { guideCopy, guideUI } from "./copy";

const title = "When to Hire an Interior Designer for a New Build | Siamo";
const description = "Building a home in the Riviera Maya? See which interior decisions to discuss before handover, how to coordinate with your builder and what you can delegate.";
const path = "/guides/interior-design-during-home-construction/";
const image = "/assets/mayan-sanctuary/main-lounge-3.webp";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: path,
    languages: {
      en: "/guides/interior-design-during-home-construction/",
      es: "/es/guias/diseno-interiores-casa-en-construccion/",
      "x-default": "/guides/interior-design-during-home-construction/",
    },
  },
  openGraph: {
    type: "article", locale: "en_US", siteName: "Siamo Design",
    title, description, url: path, images: [{ url: image }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function ConstructionGuidePage() {
  return <PlanningGuideArticle
    copy={guideCopy}
    ui={guideUI}
    locale="en"
    alternateHref="/es/guias/diseno-interiores-casa-en-construccion/"
    caseImageSrc="/assets/mayan-sanctuary/kitchen-3.webp"
  />;
}
