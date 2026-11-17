# Manus AI task prompt

Upload the `saif-portfolio-upgrade` project ZIP to a new Manus task, then paste this prompt:

---

You are reviewing and finishing an existing personal portfolio codebase. Do not discard it or rebuild it as a generic template. Work directly in the uploaded project and preserve the supplied content and visual direction.

## Objective

Prepare this portfolio for a production deployment as a polished, responsive personal website for Syed Saif Gillani, focused on Space Science, applied AI/ML, astrophysics research, cybersecurity, and automation.

## Required stack — preserve it

- React 19 + Vite
- Tailwind CSS v4
- GSAP, ScrollTrigger, and `@gsap/react`
- Aceternity UI's Card Spotlight interaction (the local component is in `src/components/CardSpotlight.jsx`; you may replace it with the official registry implementation if it improves compatibility)
- Tremor Raw Badge and BarList patterns in `src/components/`

Do not switch to Next.js, add a paid service, introduce an API key requirement, or add a server/database unless absolutely necessary. This should remain a static portfolio that can be built and hosted cheaply or free.

## Work to perform

1. Inspect every project file before editing. Keep all four portfolio tracks, every project description, contact links, and the credential entries. Do not silently remove sections or claims.
2. Run `npm install` and `npm run build`. Fix all build-time errors and warnings that affect production.
3. Run the app and test desktop, tablet, and mobile layouts. Check navigation, tab switching, keyboard focus, external links, report links, and reduced-motion behavior.
4. Check the browser console for React warnings, broken imports, missing assets, and GSAP/ScrollTrigger errors. Fix them.
5. Check that every project card is readable on narrow screens and that workflow strips wrap without horizontal page overflow.
6. Do not invent metrics, testimonials, employers, client names, repository links, certifications, or performance claims. If content is ambiguous, leave it as-is and report it for the owner to verify.
7. Check the expected report paths under `public/reports/`. If the actual PDFs are absent, do not fabricate replacements; provide a clear missing-file list.
8. Preserve accessible headings, descriptive link labels, focus styles, semantic landmarks, and the `prefers-reduced-motion` fallback.
9. Optimize the final build for quick loading. Avoid unnecessary dependencies, autoplay media, trackers, and large decorative effects that hurt mobile performance.
10. Give me a concise QA report with: files changed, build result, responsive checks, accessibility checks, missing assets, and any claims that need owner verification.

## Publishing gate

Do not publish or connect a custom domain yet. First show me the working preview and QA report. Ask for explicit approval before making the site public or deploying it to any connected hosting account. If publishing is approved later, deploy the existing project rather than creating a duplicate site, and tell me the final URL and hosting target.

---

## After Manus finishes

Review its QA report, add the missing PDF reports, correct any content flagged for verification, then give Manus this follow-up only when ready:

> I approve publishing this reviewed portfolio. Deploy the current project to the hosting target connected to this task, keep the existing site rather than creating a duplicate, verify the published URL, and report the final URL and deployment status.
