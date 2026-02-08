import { NextResponse } from "next/server";
import { buildQuestionnaireEmail } from "../emailTemplate";

export const runtime = "nodejs";

function isProductionEnv() {
  const deployEnv = (
    process.env.VERCEL_ENV ??
    process.env.DEPLOY_ENV ??
    process.env.NODE_ENV ??
    "development"
  ).toLowerCase();
  return deployEnv === "production";
}

export async function GET() {
  if (isProductionEnv()) {
    return NextResponse.json({ error: "Not available in production." }, { status: 404 });
  }

  const samplePayload = {
    contactName: "Sample Client",
    email: "client@example.com",
    phoneCountry: "+1",
    phone: "555 123 4567",
    projectType: "Full Service",
    venue: "2424 N Clark Street",
    draw: "Loved your serene material palette.",
    notes: "We would love to begin in April.",
    budgetVirtual: "",
    budgetFull: "300,000 - 550,000 MXN",
    propertyStatusOther: "",
    hasNoPlans: false,
    referralSources: ["Instagram", "Referral"],
    propertyStatus: ["Completed"],
    areas: {
      "area-living-room": "1",
      "area-kitchen": "1",
      "area-bedroom": "2",
    },
  };

  const sampleFiles = [
    {
      name: "living-room-layout.jpg",
      size: 185632,
      signedUrl: "https://example.com/signed-url-1",
    },
    {
      name: "kitchen-plan.pdf",
      size: 432111,
      signedUrl: "https://example.com/signed-url-2",
    },
  ];

  const { html } = buildQuestionnaireEmail(samplePayload, sampleFiles);

  return new NextResponse(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}
