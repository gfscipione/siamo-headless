export const planningGuides = {
  es: { path: "/es/guias/planificar-diseno-equipamiento-vivienda/", label: "Guía para planificar tu vivienda" },
  en: { path: "/guides/planning-home-design-and-furnishing/", label: "Home design & furnishing guide" },
} as const;

export const planningGuidePath = planningGuides.es.path;
export const planningGuideLabel = planningGuides.es.label;
export const planningGuideLanguages = {
  en: planningGuides.en.path,
  es: planningGuides.es.path,
  "x-default": planningGuides.en.path,
};
