import type { Metadata } from "next";
import PlanningGuideArticle from "@/app/components/planning-guide/PlanningGuideArticle";
import { guideCopy, guideUI } from "./copy";

const title = "Custom vs Ready-Made Furniture for Your Home | Siamo";
const description = "Compare furniture choices for your Riviera Maya home: fit, specifications, approvals and delivery, as part of a coordinated whole-home design.";
const path = "/guides/custom-vs-ready-made-furniture/";
const image = "/assets/mayan-sanctuary/main-lounge-3.webp";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path, languages: {"en": "/guides/custom-vs-ready-made-furniture/", "es": "/es/guias/muebles-a-medida-o-de-catalogo/", "x-default": "/guides/custom-vs-ready-made-furniture/"} },
  openGraph: { type: "article", locale: "en_US", siteName: "Siamo Design", title, description, url: path, images: [{ url: image }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function ArticlePage() {
  return <PlanningGuideArticle copy={guideCopy} ui={guideUI} locale="en" alternateHref="/es/guias/muebles-a-medida-o-de-catalogo/" />;
}
