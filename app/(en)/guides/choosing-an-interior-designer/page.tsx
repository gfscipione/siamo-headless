import type { Metadata } from "next";
import PlanningGuideArticle from "@/app/components/planning-guide/PlanningGuideArticle";
import { guideCopy, guideUI } from "./copy";

const title = "Choosing an Interior Designer in Riviera Maya | Siamo";
const description = "Compare interior design proposals for your Riviera Maya home: portfolio evidence, scope, purchasing, installation and the decisions you want to delegate.";
const path = "/guides/choosing-an-interior-designer/";
const image = "/assets/mayan-sanctuary/main-lounge-3.webp";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path, languages: {"en": "/guides/choosing-an-interior-designer/", "es": "/es/guias/elegir-estudio-interiorismo/", "x-default": "/guides/choosing-an-interior-designer/"} },
  openGraph: { type: "article", locale: "en_US", siteName: "Siamo Design", title, description, url: path, images: [{ url: image }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function ArticlePage() {
  return <PlanningGuideArticle copy={guideCopy} ui={guideUI} locale="en" alternateHref="/es/guias/elegir-estudio-interiorismo/" />;
}
