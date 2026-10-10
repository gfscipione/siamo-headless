export type AnalyticsClassification = "external" | "company_internal" | "documented_qa";

// Owner-confirmed company identities. This only classifies analytics;
// it must never prevent questionnaire delivery or attachment processing.
export function classifyQuestionnaireAnalytics(contactName: unknown): AnalyticsClassification {
  if (typeof contactName !== "string") return "external";
  const name = contactName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (name.startsWith("prueba tecnica siamo") && /\bno es cliente\b/.test(name)) {
    return "documented_qa";
  }
  if (/\b(stephania|krystle)\b/.test(name) ||
      (/\bgabriel\b/.test(name) && /\bscipione\b/.test(name))) {
    return "company_internal";
  }
  return "external";
}
