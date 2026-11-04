import Link from "next/link";
import { planningGuides } from "../lib/planningGuide";

export default function PlanningGuideLink({ locale = "es", contextual = false, label }: {
  locale?: keyof typeof planningGuides;
  contextual?: boolean;
  label?: string;
}) {
  const guide = planningGuides[locale];
  return <Link href={guide.path} prefetch={false}
    style={contextual ? { textDecoration: "underline", textUnderlineOffset: "4px" } : undefined}>{label ?? guide.label}</Link>;
}
