import type { Metadata } from "next";
import PlanningGuideArticle from "@/app/components/planning-guide/PlanningGuideArticle";
import { guideCopy, guideUI } from "./copy";

const title = "Muebles a medida o de catálogo para tu vivienda | Siamo";
const description = "Compara muebles a medida y de catálogo para tu vivienda en Riviera Maya: medidas, especificaciones y coordinación dentro del diseño del conjunto.";
const path = "/es/guias/muebles-a-medida-o-de-catalogo/";
const image = "/assets/mayan-sanctuary/main-lounge-3.webp";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path, languages: {"en": "/guides/custom-vs-ready-made-furniture/", "es": "/es/guias/muebles-a-medida-o-de-catalogo/", "x-default": "/guides/custom-vs-ready-made-furniture/"} },
  openGraph: { type: "article", locale: "es_ES", siteName: "Siamo Design", title, description, url: path, images: [{ url: image }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function ArticlePage() {
  return <PlanningGuideArticle copy={guideCopy} ui={guideUI} locale="es" alternateHref="/guides/custom-vs-ready-made-furniture/" />;
}
