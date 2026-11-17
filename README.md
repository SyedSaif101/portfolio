# Syed Saif Gillani — Portfolio refresh

A React + Vite rebuild of the supplied portfolio, retaining its dark scientific visual identity while adding a component-based structure and more deliberate motion.

## Stack

- **React 19 + Vite** — component architecture and local development.
- **GSAP + ScrollTrigger + `@gsap/react`** — hero entrance, spectral-line draw-on, and scroll reveals. Motion respects `prefers-reduced-motion`.
- **Aceternity UI pattern** — the local `CardSpotlight.jsx` adapts the free Card Spotlight interaction using `motion/react`. The Aceternity registry is configured in `components.json` for optional CLI installation.
- **Tremor Raw patterns** — locally themed Badge and BarList components in `src/components/`. The BarList summarizes the count of project cards shown by track; it is not a skill score.
- **Tailwind CSS v4** — utility layer for the component primitives, with the portfolio's visual system in `src/index.css`.

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Add your report PDFs

The original HTML referenced five local PDF files. They were not included in the pasted source, so the app links to these expected paths:

```text
public/reports/Internship_SARL.pdf
public/reports/Hackathon_Report.pdf
public/reports/Asymmetric_Encryption_to_Sign_and_Verify_Data.pdf
public/reports/Security_Infrastructure_Design.pdf
public/reports/Linux_Shell_Scripting.pdf
```

Copy your actual PDF files into `public/reports/` using those names, or change the relevant `href` values in `src/App.jsx`. Do not upload private or unpublished research material unless you intend it to be public.

## Optional: install the official Aceternity registry component

The current `CardSpotlight.jsx` is already included and functional. To compare it with the latest official registry source or add more Aceternity components, use:

```bash
npx shadcn@latest add @aceternity/card-spotlight
```

The Aceternity registry is configured in `components.json`. Review the generated files and imports before replacing the existing local component. More components are available at https://ui.aceternity.com/components.

## Content review before publishing

- CGPA is shown as **3.35**, using your latest correction from our earlier discussion. Change it in `src/App.jsx` if your transcript now shows a different figure.
- The page keeps the **25+ certifications** headline you supplied, while the table currently displays 24 named credentials. Add the missing credential(s) or adjust the headline if that total is no longer current.
- The research card keeps the **15,955 FITS files** figure from the supplied HTML. Verify it against the final report before publishing.
- The research-duration, project-performance, and hackathon-fidelity claims are retained from the supplied copy. Confirm that each is supported by a report or demonstrable artifact.
- The PDF files are not bundled. The report buttons will return 404 until you add the files or update the links.
- The predictive-keyboard button currently points to your GitHub profile because the supplied HTML did not provide a repository URL. Replace it with the direct repository URL when ready.
- The site uses no paid APIs, no analytics, and no external form backend.

## Useful source documentation

- GSAP installation and React integration: https://gsap.com/docs/v3/Installation/ and https://gsap.com/resources/React/
- Tremor Raw documentation: https://www.tremor.so/docs/getting-started/installation
- Tremor Badge: https://www.tremor.so/docs/ui/badge
- Tremor BarList: https://www.tremor.so/docs/visualizations/barlist
- Aceternity UI components and installation: https://ui.aceternity.com/components and https://ui.aceternity.com/installation
