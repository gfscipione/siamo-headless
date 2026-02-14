This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Insights Conversion Tracking (Questionnaire)

When a user submits the `/questionnaire` (EN) or `/es/cuestionario` (ES) form, the server generates a unique `submission_id` and emits a server-side analytics event:

- `event_name`: `contact_form_submit`
- Join keys (when available): `__insights_sid_siamo` (session_id), `__insights_vid_siamo` (visitor_id)

Client context sent with the form submit (no UI changes):

- `page_path`, `referrer`, `entry_page`
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`
- `language` (from `navigator.language`)

Server context:

- `accept-language` (request header)
- `country` (from `x-vercel-ip-country` when present)

PII policy:

- The analytics payload does **not** include name/email/phone.
- Optionally, `email_hash` is included in analytics metadata as `sha256(lowercase(trim(email)))` for audit joins without exposing the email.

Required environment:

- `NEXT_PUBLIC_INSIGHTS_API_KEY` (public write key used server-side to post events)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
