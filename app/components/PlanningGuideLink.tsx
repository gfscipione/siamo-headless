import Link from "next/link";
import { planningGuideLabel, planningGuidePath } from "../lib/planningGuide";

export default function PlanningGuideLink({ contextual = false }: { contextual?: boolean }) {
  return <Link href={planningGuidePath} prefetch={false}
    style={contextual ? { textDecoration: "underline", textUnderlineOffset: "4px" } : undefined}>{planningGuideLabel}</Link>;
}
