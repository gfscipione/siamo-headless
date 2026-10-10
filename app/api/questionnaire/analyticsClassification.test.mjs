import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
const localRequire = createRequire(import.meta.url);
const testDirectory = path.dirname(fileURLToPath(import.meta.url));

function load(file, overrides = {}) {
  const loadedModule = { exports: {} };
  const source = fs.readFileSync(path.join(testDirectory, file), "utf8");
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true }
  }).outputText;
  vm.runInNewContext(code, {
    module: loadedModule, exports: loadedModule.exports, require: localRequire, Buffer, URL, AbortController,
    setTimeout, clearTimeout, console: { info() {}, warn() {} }, ...overrides
  });
  return loadedModule.exports;
}
const classifier = load("analyticsClassification.ts");
for (const [name, expected] of [
  ["Krystle Valentina Torres Brizuela", "company_internal"],
  ["  STÉPHANIA Vanessa Scipione  ", "company_internal"],
  ["Gabriel Scipione Villarroel", "company_internal"],
  ["PRUEBA TECNICA SIAMO ADJUNTO - NO ES CLIENTE", "documented_qa"],
  ["PRUEBA TECNICA SIAMO NEXT INDEPENDIENTE - NO ES CLIENTE", "documented_qa"],
  ["Gabriel Pérez", "external"],
  ["Ana Krystlewood", "external"],
  ["Prueba de diseño", "external"],
  [undefined, "external"],
  [{ contactName: "Krystle" }, "external"]
]) {
  test(`analytics classification: ${String(name)}`, () => {
    assert.equal(classifier.classifyQuestionnaireAnalytics(name), expected);
  });
}

for (const [name, internal] of [["Krystle", true], ["Stephania", true], ["Gabriel Scipione", true], ["PRUEBA TECNICA SIAMO - NO ES CLIENTE", true], ["Gabriel Pérez", false]]) {
  test(`submit preserves delivery/attachment and classifies both analytics records: ${name}`, async () => {
    const sent = []; const ingested = []; const signed = [];
    const template = load("emailTemplate.ts");
    const route = load("submit/route.ts", {
      process: { env: {
        SUPABASE_URL: "https://storage.example.invalid", SUPABASE_SERVICE_ROLE_KEY: "fixture",
        SUPABASE_BUCKET: "fixture", SMTP_HOST: "smtp.example.invalid", SMTP_USER: "fixture",
        SMTP_PASS: "fixture", QUESTIONNAIRE_TO: "recipient@example.invalid", INSIGHTS_SERVER_API_KEY: "fixture"
      } },
      require(id) {
        if (id === "next/server") return { NextResponse: { json: (body, options = {}) => ({ status: options.status || 200, body }) } };
        if (id === "@supabase/supabase-js") return { createClient: () => ({ storage: { from: () => ({ createSignedUrl: async (p) => {
          signed.push(p); return { data: { signedUrl: "https://storage.example.invalid/fixture.png" } };
        } }) } }) };
        if (id === "nodemailer") return { createTransport: () => ({ sendMail: async (message) => sent.push(message) }) };
        if (id === "../analyticsClassification") return classifier;
        if (id === "../emailTemplate") return template;
        return localRequire(id);
      },
      fetch: async (url, options) => { ingested.push({ url, body: JSON.parse(options.body) }); return { ok: true, status: 200 }; }
    });
    const request = new Request("https://siamodesign.com/api/questionnaire/submit", {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ contactName: name, email: "sender@example.invalid", submissionId: "fixture-submission",
        locale: "en", pagePath: "/questionnaire/", is_internal: !internal,
        files: [{ name: "fixture.png", path: "fixture.png" }] })
    });
    const response = await route.POST(request);
    assert.equal(response.status, 200);
    assert.equal(sent.length, 1);
    assert.ok(sent[0].html.includes("https://storage.example.invalid/fixture.png"));
    assert.equal(signed.length, 1);
    assert.equal(ingested.length, 2);
    const event = ingested.find(x => x.url.endsWith("/api/events")).body;
    const ledger = ingested.find(x => x.url.endsWith("/api/leads/submit")).body;
    assert.equal(event.is_internal, internal);
    assert.equal(event.metadata.is_internal, internal);
    assert.equal(ledger.status, internal ? "test" : "accepted");
    assert.equal(ledger.metadata.is_internal, internal);
    assert.equal(ledger.submission_id, "fixture-submission");
    assert.equal(ledger.metadata.contactName, undefined);
    assert.equal(ledger.metadata.email, undefined);
  });
}
