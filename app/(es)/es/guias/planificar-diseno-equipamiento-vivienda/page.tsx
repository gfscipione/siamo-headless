import PlanningGuideArticle from "@/app/components/planning-guide/PlanningGuideArticle";
import type { Metadata } from "next";
import { planningGuidePath, planningGuideLanguages } from "@/app/lib/planningGuide";
import { guideCopy as copy } from "./copy";

const title = "Cómo planificar el diseño y equipamiento de tu vivienda | Siamo Design";
const description = "Prepara tu proyecto de vivienda: qué información reunir, qué decisiones tomar y cuándo explorar diseño llave en mano o virtual con Siamo.";
const image = "/assets/mayan-sanctuary/main-lounge-3.webp";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: planningGuidePath, languages: planningGuideLanguages },
  openGraph: { type: "article", locale: "es_ES", siteName: "Siamo Design",
    title, description, url: planningGuidePath, images: [{ url: image }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

const ui = {
  "skip": "Saltar al contenido",
  "breadcrumb_label": "Ruta de navegación",
  "home": "Inicio",
  "breadcrumb_current": "Guía de planificación",
  "hero_link": "Preparar mi proyecto",
  "hero_target": "#preparar",
  "contents": "En esta guía",
  "contents_label": "Contenido de la guía",
  "mobile_contents_label": "Contenido móvil de la guía",
  "hero_alt": "Sala y cocina de Mayan Sanctuary, con piedra caliza y madera",
  "hero_caption": "Mayan Sanctuary · Playa del Carmen",
  "case_alt": "Comedor y materiales de Mayan Sanctuary, en Playa del Carmen",
  "case_caption": "Mayan Sanctuary · Senderos Mayakoba, Playa del Carmen"
};

export default function PlanningGuidePage() {
  return <PlanningGuideArticle copy={copy} ui={ui} locale="es" />;
}
