import type { Metadata } from "next";
import PlanningGuideArticle from "@/app/components/planning-guide/PlanningGuideArticle";
import { guideCopy, guideUI } from "./copy";

const title = "Elegir un estudio de interiorismo en Riviera Maya | Siamo";
const description = "Compara propuestas para tu vivienda en Riviera Maya: experiencia, alcance, compras, instalación y las decisiones que quieres delegar al estudio.";
const path = "/es/guias/elegir-estudio-interiorismo/";
const image = "/assets/mayan-sanctuary/main-lounge-3.webp";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path, languages: {"en": "/guides/choosing-an-interior-designer/", "es": "/es/guias/elegir-estudio-interiorismo/", "x-default": "/guides/choosing-an-interior-designer/"} },
  openGraph: { type: "article", locale: "es_ES", siteName: "Siamo Design", title, description, url: path, images: [{ url: image }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function ArticlePage() {
  return <PlanningGuideArticle copy={guideCopy} ui={guideUI} locale="es" alternateHref="/guides/choosing-an-interior-designer/" />;
}
