type QuestionnairePayload = {
  contactName?: string;
  email?: string;
  phoneCountry?: string;
  phone?: string;
  projectType?: string;
  venue?: string;
  draw?: string;
  notes?: string;
  budgetVirtual?: string;
  budgetFull?: string;
  propertyStatusOther?: string;
  hasNoPlans?: boolean;
  referralSources?: string[];
  propertyStatus?: string[];
  areas?: Record<string, string>;
};

type SignedFile = {
  name?: string;
  size?: number;
  signedUrl?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export function buildQuestionnaireEmail(
  payload: QuestionnairePayload,
  signedFiles: SignedFile[]
) {
  const contactName = String(payload.contactName ?? "");
  const email = String(payload.email ?? "");
  const phoneCountry = String(payload.phoneCountry ?? "");
  const phone = String(payload.phone ?? "");
  const projectType = String(payload.projectType ?? "");
  const venue = String(payload.venue ?? "");
  const draw = String(payload.draw ?? "");
  const notes = String(payload.notes ?? "");
  const budgetVirtual = String(payload.budgetVirtual ?? "");
  const budgetFull = String(payload.budgetFull ?? "");
  const propertyStatusOther = String(payload.propertyStatusOther ?? "");
  const hasNoPlans = Boolean(payload.hasNoPlans);
  const referralSources = Array.isArray(payload.referralSources)
    ? payload.referralSources.map(String)
    : [];
  const propertyStatus = Array.isArray(payload.propertyStatus)
    ? payload.propertyStatus.map(String)
    : [];
  const areas =
    payload.areas && typeof payload.areas === "object" ? payload.areas : {};

  const fileLines = signedFiles.length
    ? signedFiles
        .map((file) => {
          const name = escapeHtml(String(file.name ?? "File"));
          const size = typeof file.size === "number" ? `${file.size} bytes` : "";
          const url = file.signedUrl
            ? `<a href="${file.signedUrl}" style="color:#0b57d0; text-decoration:underline;">Open</a>`
            : "Unavailable";
          return `<li style="margin:6px 0;">${name} ${size ? `(${size})` : ""} — ${url}</li>`;
        })
        .join("")
    : `<div style="color:#777;">No uploads.</div>`;

  const budgetVirtualMap: Record<string, string> = {
    "800-2000": "800 - 2,000 USD",
    "2000-3800": "2,000 - 3,800 USD",
    "3800-5000": "3,800 - 5,000 USD",
    "5000+": "More than 5,000 USD",
  };
  const budgetFullMap: Record<string, string> = {
    "300k-plus": "More than 300,000 MXN",
    "300-550": "300,000 - 550,000 MXN",
    "550-750": "550,000 - 750,000 MXN",
    "900k-plus": "More than 900,000 MXN",
  };
  const budgetVirtualLabel = budgetVirtualMap[budgetVirtual] ?? budgetVirtual;
  const budgetFullLabel = budgetFullMap[budgetFull] ?? budgetFull;
  const budgetCombined = budgetFullLabel || budgetVirtualLabel || "-";
  const propertyStatusCombined = propertyStatus.join(", ") || "-";
  const areaLabelMap: Record<string, string> = {
    "area-living-room": "Sala",
    "area-dining-room": "Comedor",
    "area-kitchen": "Cocina",
    "area-bedroom": "Habitación",
    "area-bathroom": "Baño",
    "area-office": "Oficina",
    "area-terrace": "Terraza",
    "area-outdoor": "Exterior",
    "area-others": "Otros",
  };
  const areasEntries = Object.entries(areas).map(([key, value]) => ({
    label: areaLabelMap[key] ?? key,
    value,
  }));

  const html = `
  <style>
    @media only screen and (max-width: 640px) {
      .email-container { width: 100% !important; }
      .stack-cell { display: block !important; width: 100% !important; }
      .stack-table { width: 100% !important; }
      .pad-mobile { padding: 16px !important; }
      .hide-mobile { display: none !important; }
      .show-mobile { display: block !important; width: 100% !important; max-height: none !important; overflow: visible !important; }
      .card-cell { padding: 6px 0 !important; }
    }
  </style>
  <div style="background:#f4f1eb; padding:32px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif;">
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
      <tr>
        <td align="center">
          <table width="100%" cellspacing="0" cellpadding="0" border="0" class="email-container" style="max-width:720px; width:100%; background:#ffffff; border:1px solid #e6e1d8;">
            <tr>
              <td align="center" class="pad-mobile" style="padding:26px 24px; border-bottom:1px solid #e6e1d8;">
                <img
                  src="https://siamodesign.com/wp-content/uploads/2024/03/cropped-9019c03768d3a9dc34a90a32adf82d72.png"
                  alt="Siamo Design"
                  width="180"
                  height="40"
                  style="display:block; width:180px; height:40px; object-fit:contain; margin:0 auto;"
                />
                <div style="font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:#8a847d; margin-top:10px;">
                  New Questionnaire Submission
                </div>
              </td>
            </tr>
            <tr>
              <td class="pad-mobile" style="padding:24px;">
                <table width="100%" cellspacing="0" cellpadding="0" border="0" class="stack-table" style="margin-bottom:18px;">
                  <tr>
                    <td class="stack-cell card-cell" style="padding:6px;">
                      <div style="border:1px solid #e6e1d8; padding:12px;">
                        <div style="font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#8a847d;">Tipo de proyecto</div>
                        <div style="font-family:'Playfair Display','Times New Roman',serif; font-size:16px; color:#3d3a36;">${escapeHtml(
                          projectType || "-"
                        )}</div>
                      </div>
                    </td>
                    <td class="stack-cell card-cell" style="padding:6px;">
                      <div style="border:1px solid #e6e1d8; padding:12px;">
                        <div style="font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#8a847d;">Presupuesto</div>
                        <div style="font-family:'Playfair Display','Times New Roman',serif; font-size:16px; color:#3d3a36;">${escapeHtml(
                          budgetCombined
                        )}</div>
                      </div>
                    </td>
                    <td class="stack-cell card-cell" style="padding:6px;">
                      <div style="border:1px solid #e6e1d8; padding:12px;">
                        <div style="font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#8a847d;">Estado de la propiedad</div>
                        <div style="font-family:'Playfair Display','Times New Roman',serif; font-size:16px; color:#3d3a36;">${escapeHtml(
                          propertyStatusCombined
                        )}${propertyStatusOther ? ` (${escapeHtml(propertyStatusOther)})` : ""}</div>
                      </div>
                    </td>
                  </tr>
                </table>

                <div style="border:1px solid #e6e1d8; padding:16px; margin-bottom:16px;">
                  <div style="font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#8a847d; margin-bottom:8px;">Contacto</div>
                  <div style="font-size:13px; color:#3d3a36; line-height:1.7;">
                    <div><b>Nombre:</b> ${escapeHtml(contactName || "-")}</div>
                    <div><b>Email:</b> <a href="mailto:${escapeHtml(
                      email || ""
                    )}" style="color:#3d3a36; text-decoration:underline;">${escapeHtml(
                      email || "-"
                    )}</a></div>
                    <div><b>Teléfono:</b> ${escapeHtml(
                      `${phoneCountry} ${phone}`.trim() || "-"
                    )}</div>
                  </div>
                </div>

                <div style="border:1px solid #e6e1d8; padding:16px; margin-bottom:16px;">
                  <div style="font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#8a847d; margin-bottom:8px;">Detalles</div>
                  <table width="100%" cellspacing="0" cellpadding="8" border="0" style="font-size:13px; color:#3d3a36; line-height:1.7; border-collapse:collapse;">
                    <tr>
                      <td style="width:200px; border:1px solid #e6e1d8; background:#f8f6f1;"><b>Dirección de la propiedad</b></td>
                      <td style="border:1px solid #e6e1d8;">${escapeHtml(venue || "-")}</td>
                    </tr>
                    <tr>
                      <td style="border:1px solid #e6e1d8; background:#f8f6f1;"><b>Fuentes de referencia</b></td>
                      <td style="border:1px solid #e6e1d8;">${escapeHtml(referralSources.join(", ") || "-")}</td>
                    </tr>
                    <tr>
                      <td style="border:1px solid #e6e1d8; background:#f8f6f1;"><b>Comentarios adicionales</b></td>
                      <td style="border:1px solid #e6e1d8;">${escapeHtml(notes || "-")}</td>
                    </tr>
                  </table>
                  ${
                    areasEntries.length
                      ? `
                  <table width="100%" cellspacing="0" cellpadding="8" border="0" class="hide-mobile" style="margin-top:12px; font-size:13px; color:#3d3a36; border-collapse:collapse;">
                    <tr>
                      ${areasEntries
                        .map(
                          (area) =>
                            `<td style="border:1px solid #e6e1d8; background:#f8f6f1; text-align:center;"><b>${escapeHtml(
                              area.label
                            )}</b></td>`
                        )
                        .join("")}
                    </tr>
                    <tr>
                      ${areasEntries
                        .map(
                          (area) =>
                            `<td style="border:1px solid #e6e1d8; text-align:center;">${escapeHtml(
                              String(area.value)
                            )}</td>`
                        )
                        .join("")}
                    </tr>
                  </table>
                  <table width="100%" cellspacing="0" cellpadding="8" border="0" class="show-mobile" style="display:none; margin-top:12px; font-size:13px; color:#3d3a36; border-collapse:collapse;">
                    ${areasEntries
                      .map(
                        (area) => `
                      <tr>
                        <td style="border:1px solid #e6e1d8; background:#f8f6f1;"><b>${escapeHtml(
                          area.label
                        )}</b></td>
                        <td style="border:1px solid #e6e1d8; text-align:center;">${escapeHtml(
                          String(area.value)
                        )}</td>
                      </tr>`
                      )
                      .join("")}
                  </table>
                  `
                      : ""
                  }
                </div>

                <div style="border:1px solid #e6e1d8; padding:16px;">
                  <div style="font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#8a847d; margin-bottom:8px;">Archivos subidos</div>
                  <div style="font-size:13px; color:#3d3a36; line-height:1.6;">
                    <ul style="margin:8px 0 0; padding-left:18px;">${fileLines}</ul>
                    <div style="margin-top:8px; color:#8a847d; font-size:12px;">Los enlaces expiran en 7 días.</div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <div style="margin-top:12px; color:#8a847d; font-size:12px; letter-spacing:0.08em;">Siamo Design • Cuestionario</div>
        </td>
      </tr>
    </table>
  </div>
  `;

  const text = [
    "New Questionnaire Submission",
    `Nombre: ${contactName}`,
    `Email: ${email}`,
    `Teléfono: ${phoneCountry} ${phone}`,
    `Tipo de proyecto: ${projectType}`,
    `Dirección de la propiedad: ${venue}`,
    `Presupuesto (Virtual): ${budgetVirtualLabel}`,
    `Presupuesto (Servicio completo): ${budgetFullLabel}`,
    `Estado de la propiedad: ${propertyStatus.join(", ")} ${
      propertyStatusOther ? `(${propertyStatusOther})` : ""
    }`,
    `Fuentes de referencia: ${referralSources.join(", ")}`,
    `Áreas: ${Object.entries(areas)
      .map(([key, value]) => `${areaLabelMap[key] ?? key}: ${value}`)
      .join(" | ")}`,
    `Comentarios adicionales: ${notes}`,
    "",
    "Archivos subidos (los enlaces expiran en 7 días):",
    ...signedFiles.map((file) => `${file.name ?? "File"}: ${file.signedUrl}`),
  ].join("\n");

  return { html, text };
}
