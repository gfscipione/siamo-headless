import type { Metadata } from "next";
import PlanningGuideArticle from "@/app/components/planning-guide/PlanningGuideArticle";
import { guideCopy, guideUI } from "./copy";

const title = "Cuándo contratar diseño de interiores en obra | Siamo";
const description = "¿Tu casa en Riviera Maya sigue en construcción? Revisa qué decisiones de interiores quedan abiertas, cómo coordinar con tu constructor y qué puedes delegar.";
const path = "/es/guias/diseno-interiores-casa-en-construccion/";
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
    type: "article", locale: "es_ES", siteName: "Siamo Design",
    title, description, url: path, images: [{ url: image }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function ConstructionGuidePage() {
  return <PlanningGuideArticle
    copy={guideCopy}
    ui={guideUI}
    locale="es"
    alternateHref="/guides/interior-design-during-home-construction/"
    caseImageSrc="/assets/mayan-sanctuary/kitchen-3.webp"
  />;
}
