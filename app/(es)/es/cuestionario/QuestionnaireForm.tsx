"use client";

import { useEffect, useRef, useState } from "react";

type UploadStatus = "idle" | "uploading" | "uploaded" | "error";

type UploadedFile = {
  name: string;
  size: number;
  path?: string;
  status: UploadStatus;
};

export default function QuestionnaireForm() {
  const [projectType, setProjectType] = useState("");
  const [hasNoPlans, setHasNoPlans] = useState(false);
  const [propertyStatus, setPropertyStatus] = useState("");
  const [referralSources, setReferralSources] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const MAX_FILES = 10;
  const MAX_FILE_SIZE_MB = 10;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
  const areaFields = [
    "area-living-room",
    "area-dining-room",
    "area-kitchen",
    "area-bedroom",
    "area-bathroom",
    "area-office",
    "area-terrace",
    "area-outdoor",
    "area-others",
  ];

  const updateAreaValidity = () => {
    if (!formRef.current) return;
    const areaInputs = areaFields
      .map((field) =>
        formRef.current?.querySelector<HTMLSelectElement>(`#${field}`)
      )
      .filter((input): input is HTMLSelectElement => Boolean(input));

    if (!areaInputs.length) return;

    if (!hasNoPlans) {
      areaInputs.forEach((input) => input.setCustomValidity(""));
      return;
    }

    const hasPositive = areaInputs.some((input) => Number(input.value) > 0);
    const message = hasPositive
      ? ""
      : "Selecciona al menos un área con cantidad mayor a 0.";
    areaInputs.forEach((input, index) =>
      input.setCustomValidity(index === 0 ? message : "")
    );
  };

  const updateFormValidity = () => {
    if (!formRef.current) {
      setIsFormValid(false);
      return;
    }
    updateAreaValidity();
    setIsFormValid(formRef.current.checkValidity());
  };

  const toggleMultiSelect = (
    value: string,
    list: string[],
    setList: (next: string[]) => void,
  ) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
      return;
    }
    setList([...list, value]);
  };

  useEffect(() => {
    updateFormValidity();
  }, [projectType, hasNoPlans]);

  useEffect(() => {
    const input = fileInputRef.current;
    if (!input) return;
    if (hasNoPlans) {
      input.setCustomValidity("");
      updateFormValidity();
      return;
    }
    if (uploadedFiles.length === 0) {
      input.setCustomValidity("Sube al menos un archivo.");
    } else if (uploadedFiles.some((file) => file.status === "uploading")) {
      input.setCustomValidity("Espera a que terminen las cargas.");
    } else if (uploadedFiles.some((file) => file.status === "error")) {
      input.setCustomValidity("Elimina los archivos fallidos e inténtalo de nuevo.");
    } else {
      input.setCustomValidity("");
    }
    updateFormValidity();
  }, [uploadedFiles, hasNoPlans]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(kb < 10 ? 1 : 0)} KB`;
    const mb = kb / 1024;
    return `${mb.toFixed(mb < 10 ? 1 : 0)} MB`;
  };

  const resetUploads = () => {
    setUploadedFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeUploadedFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const incoming = Array.from(event.target.files ?? []);
    if (!incoming.length) {
      return;
    }

    setSubmitError(null);
    setSubmitSuccess(false);
    setFileError(null);
    setIsUploading(true);

    const existing = uploadedFiles.filter((file) => file.status !== "error");
    const combined = [...existing, ...incoming];

    if (combined.length > MAX_FILES) {
      setIsUploading(false);
      setFileError(`Puedes subir hasta ${MAX_FILES} archivos.`);
      resetUploads();
      return;
    }

    const tooLarge = incoming.find((file) => file.size > MAX_FILE_SIZE_BYTES);
    if (tooLarge) {
      setIsUploading(false);
      setFileError(`Cada archivo debe ser de ${MAX_FILE_SIZE_MB} MB o menos.`);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    const newEntries: UploadedFile[] = incoming.map((file) => ({
      name: file.name,
      size: file.size,
      status: "uploading",
    }));
    setUploadedFiles([...existing, ...newEntries]);

    await Promise.all(
      incoming.map(async (file, index) => {
        const entryIndex = existing.length + index;
        try {
          const res = await fetch("/api/questionnaire/upload/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              filename: file.name,
              contentType: file.type || "application/octet-stream",
            }),
          });
          if (!res.ok) {
            throw new Error("No se pudo crear la URL de carga.");
          }
          const { uploadUrl, path } = await res.json();
          if (!uploadUrl || !path) {
            throw new Error("Falta la URL de carga.");
          }

          const uploadRes = await fetch(uploadUrl, {
            method: "PUT",
            headers: { "content-type": file.type || "application/octet-stream" },
            body: file,
          });

          if (!uploadRes.ok) {
            throw new Error("La carga falló.");
          }

          setUploadedFiles((prev) =>
            prev.map((entry, idx) =>
              idx === entryIndex ? { ...entry, status: "uploaded", path } : entry
            )
          );
        } catch (error) {
          setUploadedFiles((prev) =>
            prev.map((entry, idx) =>
              idx === entryIndex ? { ...entry, status: "error" } : entry
            )
          );
        }
      })
    );

    setIsUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;
    setSubmitError(null);
    setSubmitSuccess(false);

    if (!formRef.current.reportValidity()) {
      return;
    }

    const formData = new FormData(formRef.current);
    const filesToSend = uploadedFiles
      .filter((file) => file.status === "uploaded" && file.path)
      .map((file) => ({
        name: file.name,
        size: file.size,
        path: file.path as string,
      }));

    if (!hasNoPlans && filesToSend.length === 0) {
      setSubmitError("Sube al menos un archivo antes de enviar.");
      return;
    }

    const areas: Record<string, string> = {};
    areaFields.forEach((field) => {
      const value = formData.get(field);
      const numeric = Number(value);
      if (Number.isFinite(numeric) && numeric > 0) {
        areas[field] = String(numeric);
      }
    });

    setIsSubmitting(true);
    try {
      const payload = {
        contactName: String(formData.get("contactName") ?? ""),
        phoneCountry: String(formData.get("phoneCountry") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        email: String(formData.get("email") ?? ""),
        venue: String(formData.get("venue") ?? ""),
        projectType: String(formData.get("projectType") ?? ""),
        hasNoPlans,
        referralSources: formData.getAll("referralSources").map(String),
        propertyStatus: formData.getAll("propertyStatus").map(String),
        propertyStatusOther: String(formData.get("propertyStatusOther") ?? ""),
        budgetVirtual: String(formData.get("budgetVirtual") ?? ""),
        budgetFull: String(formData.get("budgetFull") ?? ""),
        draw: String(formData.get("draw") ?? ""),
        notes: String(formData.get("notes") ?? ""),
        areas,
        files: filesToSend,
      };

      const res = await fetch("/api/questionnaire/send-email/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "No se pudo enviar.");
      }

      setSubmitSuccess(true);
      const prefillName = String(formData.get("contactName") ?? "").trim();
      const prefillEmail = String(formData.get("email") ?? "").trim();
      if (prefillName || prefillEmail) {
        try {
          sessionStorage.setItem(
            "calendly_prefill",
            JSON.stringify({ name: prefillName, email: prefillEmail })
          );
        } catch {
          // ignore storage errors (private mode, quota, etc.)
        }
      }
      if (formRef.current) {
        formRef.current.reset();
      }
      setProjectType("");
      setHasNoPlans(false);
      setPropertyStatus("");
      setReferralSources([]);
      setUploadedFiles([]);
      setFileError(null);
      setIsFormValid(false);
      setIsSubmitting(false);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Algo salió mal.");
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      className="questionnaire-form"
      aria-label="Formulario de contacto"
      onSubmit={handleSubmit}
      onInput={updateFormValidity}
      onChange={updateFormValidity}
    >
      <div className="questionnaire-field">
        <label className="questionnaire-label" htmlFor="contact-name">
          Nombre y Apellido *
        </label>
        <input
          className="questionnaire-input"
          id="contact-name"
          name="contactName"
          type="text"
          placeholder="Tu nombre aquí"
          autoComplete="name"
          required
        />
      </div>

      <div className="questionnaire-field">
        <label className="questionnaire-label" htmlFor="phone">
          Teléfono de contacto *
        </label>
        <div className="questionnaire-phone-row">
          <select
            className="questionnaire-select questionnaire-phone-code"
            name="phoneCountry"
            aria-label="Código de país"
          >
            <option value="+1">+1 US/CA</option>
            <option value="+52">+52 MX</option>
            <option value="+34">+34 ES</option>
            <option value="+44">+44 UK</option>
            <option value="+33">+33 FR</option>
            <option value="+49">+49 DE</option>
            <option value="+57">+57 CO</option>
            <option value="+54">+54 AR</option>
          </select>
          <input
            className="questionnaire-input questionnaire-phone-input"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Ej. 541 444 0755"
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div className="questionnaire-field">
        <label className="questionnaire-label" htmlFor="email">
          Correo Electrónico *
        </label>
        <input
          className="questionnaire-input"
          id="email"
          name="email"
          type="email"
          placeholder="Ej. miemail@email.com"
          autoComplete="email"
          required
        />
      </div>

      <div className="questionnaire-field">
        <label className="questionnaire-label" htmlFor="venue">
          Dirección de la propiedad *
        </label>
        <input
          className="questionnaire-input"
          id="venue"
          name="venue"
          type="text"
          placeholder="Ej. 742 Evergreen Terrace, Springfield"
        />
      </div>

      <div className="questionnaire-field">
        <label className="questionnaire-label" htmlFor="project-type">
          ¿Qué tipo de proyecto necesitas? *
        </label>
        <select
          className="questionnaire-select"
          id="project-type"
          name="projectType"
          required
          defaultValue=""
          onChange={(event) => setProjectType(event.currentTarget.value)}
        >
          <option value="" disabled>
            Seleccione servicio
          </option>
          <option value="virtual">Diseño Virtual</option>
          <option value="full-service">Diseño y Ejecución / Servicio Full</option>
        </select>
      </div>

      {projectType && (
        <div className="questionnaire-reveal">
          <div className="questionnaire-field">
            <label className="questionnaire-label" htmlFor="plans-upload">
              Sube los planos de la propiedad *
            </label>
            <div className="questionnaire-file-row">
              <input
                ref={fileInputRef}
                className="questionnaire-file-input"
                id="plans-upload"
                name="plansUpload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                disabled={hasNoPlans}
                onChange={handleFileChange}
              />
              <label
                className={`questionnaire-file-button${hasNoPlans ? " is-disabled" : ""}`}
                htmlFor="plans-upload"
              >
                Elegir archivos
              </label>
              <span className="questionnaire-file-status">
                {uploadedFiles.length
                  ? `${uploadedFiles.length} archivo${uploadedFiles.length === 1 ? "" : "s"} seleccionado${
                      uploadedFiles.length === 1 ? "" : "s"
                    }`
                  : "No hay archivos seleccionados"}
              </span>
            </div>
            {uploadedFiles.length > 0 && (
              <div className="questionnaire-file-list" aria-live="polite">
                {uploadedFiles.map((file, index) => (
                  <div
                    className={`questionnaire-file-item${file.status === "error" ? " is-error" : ""}${
                      file.status === "uploading" ? " is-uploading" : ""
                    }`}
                    key={`${file.name}-${index}`}
                  >
                    <span className="questionnaire-file-name" title={file.name}>
                      {file.name}
                    </span>
                    <span className="questionnaire-file-size">
                      {formatFileSize(file.size)}
                    </span>
                    <span className="questionnaire-file-dot" aria-hidden="true" />
                    <button
                      type="button"
                      className="questionnaire-file-remove"
                      aria-label={`Quitar ${file.name}`}
                      onClick={() => removeUploadedFile(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            <p className="questionnaire-file-hint">
              PDF, JPG o PNG. Hasta {MAX_FILES} archivos. Máximo {MAX_FILE_SIZE_MB} MB cada uno.
            </p>
            {fileError && (
              <p className="questionnaire-file-error" role="alert">
                {fileError}
              </p>
            )}
            <label className="questionnaire-check">
              <input
                type="checkbox"
                name="noPlans"
                checked={hasNoPlans}
                onChange={(event) => {
                  const nextValue = event.target.checked;
                  setHasNoPlans(nextValue);
                  if (nextValue) {
                    resetUploads();
                  }
                }}
              />
              <span>No tengo planos</span>
            </label>
            {hasNoPlans && (
              <div className="questionnaire-subfield questionnaire-reveal">
                <p className="questionnaire-areas-title">
                  Especifica la cantidad de cada área que debemos considerar.
                </p>
                <div className="questionnaire-areas-grid">
                  {[
                    { id: "area-living-room", label: "Sala" },
                    { id: "area-dining-room", label: "Comedor" },
                    { id: "area-kitchen", label: "Cocina" },
                    { id: "area-bedroom", label: "Recámara" },
                    { id: "area-bathroom", label: "Baño" },
                    { id: "area-office", label: "Oficina" },
                    { id: "area-terrace", label: "Terraza" },
                    { id: "area-outdoor", label: "Patio / áreas exteriores" },
                    { id: "area-others", label: "Otros" },
                  ].map((area) => (
                    <div className="questionnaire-area-field" key={area.id}>
                      <label className="questionnaire-label" htmlFor={area.id}>
                        {area.label} *
                      </label>
                      <select
                        className="questionnaire-select"
                        id={area.id}
                        name={area.id}
                        defaultValue="0"
                        required={hasNoPlans}
                      >
                        {Array.from({ length: 11 }, (_, index) => (
                          <option key={index} value={index}>
                            {index}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {projectType === "full-service" && (
            <div className="questionnaire-field questionnaire-reveal">
              <label className="questionnaire-label">
                ¿Cuál es el estado de la propiedad? *
              </label>
              <div className="questionnaire-checklist">
                {[
                  { value: "under-construction", label: "En construcción" },
                  { value: "completed", label: "Terminada" },
                  { value: "remodeling", label: "En remodelación" },
                  { value: "not-received", label: "Aún no la recibo" },
                  { value: "other", label: "Otro" },
                ].map((item) => (
                  <label className="questionnaire-check" key={item.value}>
                    <input
                      type="radio"
                      name="propertyStatus"
                      value={item.value}
                      checked={propertyStatus === item.value}
                      onChange={(event) => setPropertyStatus(event.target.value)}
                      required
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
              {propertyStatus === "other" && (
                <div className="questionnaire-subfield">
                  <label className="questionnaire-label" htmlFor="property-status-other">
                    Especifica
                  </label>
                  <input
                    className="questionnaire-input"
                    id="property-status-other"
                    name="propertyStatusOther"
                    type="text"
                    placeholder="Escribe aquí"
                  />
                </div>
              )}
            </div>
          )}

          {projectType === "virtual" && (
            <div className="questionnaire-field questionnaire-reveal">
              <label className="questionnaire-label">Presupuesto estimado para este servicio *</label>
              <div className="questionnaire-radio-list">
                {[
                  { value: "800-2000", label: "800 - 2,000 USD" },
                  { value: "2000-3800", label: "2,000 - 3,800 USD" },
                  { value: "3800-5000", label: "3,800 - 5,000 USD" },
                  { value: "5000+", label: "Más de 5,000 USD" },
                ].map((item) => (
                  <label className="questionnaire-radio" key={item.value}>
                    <input type="radio" name="budgetVirtual" value={item.value} required />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {projectType === "full-service" && (
            <div className="questionnaire-field questionnaire-reveal">
              <label className="questionnaire-label">
                Presupuesto estimado para el proyecto completo (diseño + ejecución) *
              </label>
              <div className="questionnaire-radio-list">
                {[
                  { value: "300k-plus", label: "Más de 300,000 MXN" },
                  { value: "300-550", label: "300,000 - 550,000 MXN" },
                  { value: "550-750", label: "550,000 - 750,000 MXN" },
                  { value: "900k-plus", label: "Más de 900,000 MXN" },
                ].map((item) => (
                  <label className="questionnaire-radio" key={item.value}>
                    <input type="radio" name="budgetFull" value={item.value} required />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="questionnaire-field">
            <label className="questionnaire-label" htmlFor="notes">
              Comentarios adicionales
            </label>
            <textarea
              className="questionnaire-textarea"
              id="notes"
              name="notes"
              placeholder="Cuéntanos sobre tu proyecto, tiempos, expectativas o necesidades especiales."
              rows={4}
            />
          </div>

          <div className="questionnaire-field">
            <label className="questionnaire-label">¿Cómo supiste de nosotros?</label>
            <div className="questionnaire-checklist">
              {[
                { value: "google", label: "Google" },
                { value: "instagram", label: "Instagram" },
                { value: "facebook", label: "Facebook" },
                { value: "youtube", label: "YouTube" },
                { value: "linkedin", label: "LinkedIn" },
                { value: "referral", label: "Recomendación" },
              ].map((item) => (
                <label className="questionnaire-check" key={item.value}>
                  <input
                    type="checkbox"
                    name="referralSources"
                    value={item.value}
                    checked={referralSources.includes(item.value)}
                    onChange={() =>
                      toggleMultiSelect(item.value, referralSources, setReferralSources)
                    }
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="questionnaire-submit-row">
        <button
          className="questionnaire-submit"
          type="submit"
          disabled={!isFormValid || isUploading || isSubmitting || submitSuccess}
          aria-disabled={!isFormValid || submitSuccess}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Continuar para agendar "}
          <span aria-hidden="true">→</span>
        </button>
      </div>
      {submitError && (
        <p className="questionnaire-submit-error" role="alert">
          {submitError}
        </p>
      )}
      {submitSuccess && (
        <p className="questionnaire-submit-success" role="status">
          ¡Gracias! Recibimos tus datos. Ahora agenda tu videollamada abajo.
        </p>
      )}
    </form>
  );
}
