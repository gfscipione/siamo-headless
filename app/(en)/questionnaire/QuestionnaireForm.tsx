"use client";

import { useEffect, useRef, useState } from "react";

type UploadStatus = "idle" | "uploading" | "uploaded" | "error";

type UploadedFile = {
  name: string;
  size: number;
  path?: string;
  status: UploadStatus;
};

function createSubmissionId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `sub_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

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
  const submissionIdRef = useRef<string>(createSubmissionId());

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
      : "Select at least one area with a quantity greater than 0.";
    areaInputs.forEach((input, index) =>
      input.setCustomValidity(index === 0 ? message : "")
    );
  };

  const updateReferralValidity = () => {
    if (!formRef.current) return;
    const referralInputs = Array.from(
      formRef.current.querySelectorAll<HTMLInputElement>(
        'input[name="referralSources"]'
      )
    );
    if (!referralInputs.length) return;

    const hasSelection = referralInputs.some((input) => input.checked);
    const message = hasSelection ? "" : "Select at least one option.";
    referralInputs.forEach((input, index) =>
      input.setCustomValidity(index === 0 ? message : "")
    );
  };

  const updatePlansValidity = () => {
    const input = fileInputRef.current;
    if (!input) return;

    if (!projectType || hasNoPlans) {
      input.setCustomValidity("");
      return;
    }

    if (uploadedFiles.length === 0) {
      input.setCustomValidity("Upload at least one file or select I don't have plans.");
      return;
    }

    if (uploadedFiles.some((file) => file.status === "uploading")) {
      input.setCustomValidity("Please wait for uploads to finish.");
      return;
    }

    if (uploadedFiles.some((file) => file.status === "error")) {
      input.setCustomValidity("Please remove failed uploads and try again.");
      return;
    }

    const uploadedCount = uploadedFiles.filter((file) => file.status === "uploaded" && file.path)
      .length;
    input.setCustomValidity(
      uploadedCount > 0 ? "" : "Upload at least one file or select I don't have plans."
    );
  };

  const getInvalidFieldLabel = (form: HTMLFormElement) => {
    const invalid = form.querySelector<HTMLElement>(":invalid");
    if (!invalid) return "";

    const inputId = invalid.getAttribute("id");
    if (inputId) {
      const directLabel = form.querySelector<HTMLLabelElement>(`label[for="${inputId}"]`);
      if (directLabel?.textContent) {
        return directLabel.textContent.replace(/\s*\*+\s*$/, "").trim();
      }
    }

    const fieldLabel = invalid
      .closest(".questionnaire-field")
      ?.querySelector<HTMLElement>(".questionnaire-label");
    if (fieldLabel?.textContent) {
      return fieldLabel.textContent.replace(/\s*\*+\s*$/, "").trim();
    }

    return "";
  };

  const updateFormValidity = () => {
    if (!formRef.current) {
      setIsFormValid(false);
      return;
    }
    updateAreaValidity();
    updateReferralValidity();
    updatePlansValidity();
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
  }, [projectType, hasNoPlans, referralSources, uploadedFiles]);

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
      setFileError(`You can upload up to ${MAX_FILES} files.`);
      resetUploads();
      return;
    }

    const tooLarge = incoming.find((file) => file.size > MAX_FILE_SIZE_BYTES);
    if (tooLarge) {
      setIsUploading(false);
      setFileError(`Each file must be ${MAX_FILE_SIZE_MB} MB or smaller.`);
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
            throw new Error("Failed to create upload URL.");
          }
          const { uploadUrl, path } = await res.json();
          if (!uploadUrl || !path) {
            throw new Error("Missing upload URL.");
          }

          const uploadRes = await fetch(uploadUrl, {
            method: "PUT",
            headers: { "content-type": file.type || "application/octet-stream" },
            body: file,
          });

          if (!uploadRes.ok) {
            throw new Error("Upload failed.");
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
    updateFormValidity();

    if (!formRef.current.checkValidity()) {
      const fieldLabel = getInvalidFieldLabel(formRef.current);
      setSubmitError(
        fieldLabel
          ? `Please complete the required field: ${fieldLabel}.`
          : "Please complete all required fields."
      );
      formRef.current.reportValidity();
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
      setSubmitError("Please upload at least one file before submitting.");
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
      const pagePath = window.location.pathname;
      const referrer = document.referrer || "";
      const params = new URLSearchParams(window.location.search);
      const getCookie = (name: string) => {
        const parts = document.cookie.split(";").map((part) => part.trim());
        const match = parts.find((part) => part.startsWith(`${name}=`));
        if (!match) return "";
        return decodeURIComponent(match.slice(name.length + 1));
      };

      const utmSource = params.get("utm_source") ?? "";
      const utmMedium = params.get("utm_medium") ?? "";
      const utmCampaign = params.get("utm_campaign") ?? "";
      const utmContent = params.get("utm_content") ?? "";
      const utmTerm = params.get("utm_term") ?? "";
      const gclid = params.get("gclid") ?? "";
      const language = navigator.language ?? "";
      const entryPage = (() => {
        try {
          const key = "insights_entry_page";
          const existing = sessionStorage.getItem(key);
          if (existing) return existing;
          sessionStorage.setItem(key, pagePath);
          return pagePath;
        } catch {
          return pagePath;
        }
      })();

      const payload = {
        submissionId: submissionIdRef.current,
        locale: "en",
        pagePath: typeof window !== "undefined" ? window.location.pathname : "/questionnaire/",
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
        page_path: pagePath,
        referrer,
        entry_page: entryPage,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_term: utmTerm,
        gclid,
        insights_session_id: getCookie("__insights_sid_siamo"),
        insights_visitor_id: getCookie("__insights_vid_siamo"),
        language,
      };

      const res = await fetch("/api/questionnaire/send-email/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Submission failed.");
      }

      const submitData = await res.json().catch(() => null);
      if (submitData?.submission_id) {
        try {
          sessionStorage.setItem("questionnaire_submission_id", String(submitData.submission_id));
        } catch {
          // ignore storage errors
        }
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
      window.location.assign("/thank-you/");
      return;
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      className="questionnaire-form"
      aria-label="Contact form"
      onSubmit={handleSubmit}
      onInput={updateFormValidity}
      onChange={updateFormValidity}
    >
      <div className="questionnaire-field">
        <label className="questionnaire-label" htmlFor="contact-name">
          Name and Last Name *
        </label>
        <input
          className="questionnaire-input"
          id="contact-name"
          name="contactName"
          type="text"
          placeholder="Your name here"
          autoComplete="name"
          required
        />
      </div>

      <div className="questionnaire-field">
        <label className="questionnaire-label" htmlFor="phone">
          Phone Number *
        </label>
        <div className="questionnaire-phone-row">
          <select
            className="questionnaire-select questionnaire-phone-code"
            name="phoneCountry"
            aria-label="Country code"
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
            placeholder="E.g. 541 444 0755"
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div className="questionnaire-field">
        <label className="questionnaire-label" htmlFor="email">
          Email Address *
        </label>
        <input
          className="questionnaire-input"
          id="email"
          name="email"
          type="email"
          placeholder="E.g. myemail@email.com"
          autoComplete="email"
          required
        />
      </div>

      <div className="questionnaire-field">
        <label className="questionnaire-label" htmlFor="venue">
          Property Address *
        </label>
        <input
          className="questionnaire-input"
          id="venue"
          name="venue"
          type="text"
          placeholder="E.g. 742 Evergreen Terrace, Springfield"
          required
        />
      </div>

      <div className="questionnaire-field">
        <label className="questionnaire-label" htmlFor="project-type">
          What type of project are you seeking? *
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
            Select a service
          </option>
          <option value="full-service">Full Service</option>
          <option value="virtual">Virtual Design</option>
        </select>
      </div>

      {projectType && (
        <div className="questionnaire-reveal">
          <div className="questionnaire-field">
            <label className="questionnaire-label" htmlFor="plans-upload">
              Upload your property plans *
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
                Choose files
              </label>
              <span className="questionnaire-file-status">
                {uploadedFiles.length
                  ? `${uploadedFiles.length} file${uploadedFiles.length === 1 ? "" : "s"} selected`
                  : "No files selected"}
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
                      aria-label={`Remove ${file.name}`}
                      onClick={() => removeUploadedFile(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            <p className="questionnaire-file-hint">
              PDF, JPG, or PNG. Up to {MAX_FILES} files. Max {MAX_FILE_SIZE_MB} MB each.
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
              <span>I don&apos;t have plans</span>
            </label>
            {hasNoPlans && (
              <div className="questionnaire-subfield questionnaire-reveal">
                <p className="questionnaire-areas-title">
                  Specify the quantity of each area you would like us to consider.
                </p>
                <div className="questionnaire-areas-grid">
                  {[
                    { id: "area-living-room", label: "Living room" },
                    { id: "area-dining-room", label: "Dining room" },
                    { id: "area-kitchen", label: "Kitchen" },
                    { id: "area-bedroom", label: "Bedroom" },
                    { id: "area-bathroom", label: "Bathroom" },
                    { id: "area-office", label: "Office" },
                    { id: "area-terrace", label: "Terrace" },
                    { id: "area-outdoor", label: "Patio / Outdoor areas" },
                    { id: "area-others", label: "Others" },
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
                What is the status of the property? *
              </label>
              <div className="questionnaire-checklist">
                {[
                  { value: "under-construction", label: "Under construction" },
                  { value: "completed", label: "Completed" },
                  { value: "remodeling", label: "Under remodeling" },
                  { value: "not-received", label: "I haven't received it yet" },
                  { value: "other", label: "Other" },
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
                    Please specify
                  </label>
                  <input
                    className="questionnaire-input"
                    id="property-status-other"
                    name="propertyStatusOther"
                    type="text"
                    placeholder="Type here"
                  />
                </div>
              )}
            </div>
          )}

          {projectType === "virtual" && (
            <div className="questionnaire-field questionnaire-reveal">
              <label className="questionnaire-label">Estimated budget for this service *</label>
              <div className="questionnaire-radio-list">
                {[
                  { value: "800-2000", label: "800 - 2,000 USD" },
                  { value: "2000-3800", label: "2,000 - 3,800 USD" },
                  { value: "3800-5000", label: "3,800 - 5,000 USD" },
                  { value: "5000+", label: "More than 5,000 USD" },
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
                Estimated budget for the full project (design + execution) *
              </label>
              <div className="questionnaire-radio-list">
                {[
                  { value: "300k-plus", label: "More than 300,000 MXN" },
                  { value: "300-550", label: "300,000 - 550,000 MXN" },
                  { value: "550-750", label: "550,000 - 750,000 MXN" },
                  { value: "900k-plus", label: "More than 900,000 MXN" },
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
              Additional comments (optional)
            </label>
            <textarea
              className="questionnaire-textarea"
              id="notes"
              name="notes"
              placeholder="Tell us about your project, timing, expectations, or any special needs."
              rows={4}
            />
          </div>

          <div className="questionnaire-field">
            <label className="questionnaire-label">How did you hear about us? *</label>
            <div className="questionnaire-checklist">
              {[
                { value: "google", label: "Google" },
                { value: "instagram", label: "Instagram" },
                { value: "facebook", label: "Facebook" },
                { value: "youtube", label: "YouTube" },
                { value: "linkedin", label: "LinkedIn" },
                { value: "referral", label: "Referral" },
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
          disabled={isUploading || isSubmitting || submitSuccess}
          aria-disabled={isUploading || isSubmitting || submitSuccess}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Continue to Scheduling "}
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
          Thanks! We received your details. Next, schedule your video call below.
        </p>
      )}
      <small className="questionnaire-required-note">* Required fields.</small>
    </form>
  );
}
