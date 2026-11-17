# Syed Saif Gillani — Portfolio

A personal portfolio built with React and Vite, presenting my projects, research, technical interests, certifications, and experience through a dark, science-inspired visual design.

**Live Website:** [syedsaif101.github.io/portfolio](https://syedsaif101.github.io/portfolio/)  
**Repository:** [github.com/SyedSaif101/portfolio](https://github.com/SyedSaif101/portfolio)

## Technology Stack

- **React 19** — component-based frontend architecture.
- **Vite** — development server and production build tooling.
- **JavaScript** — application logic and interactivity.
- **Tailwind CSS v4** — utility-based styling and component primitives.
- **GSAP, ScrollTrigger and `@gsap/react`** — entrance animations, scroll-triggered reveals, and visual effects.
- **Motion (`motion/react`)** — interactive component animations and transitions.

## UI Components and Design

- **Aceternity UI pattern:** A locally implemented `CardSpotlight.jsx` component using Motion, adapted from the Card Spotlight interaction.
- **Tremor Raw patterns:** Locally themed Badge and BarList components for displaying project information and visual summaries.
- **Custom visual system:** Dark scientific aesthetic, responsive layouts, spectral-line graphics, and animated interface elements.
- **Reduced-motion support:** Animations account for the user's `prefers-reduced-motion` setting.

The components are included in the repository and do not require separate registry installation to run the portfolio.

## Features

- Responsive portfolio layout for desktop and mobile.
- Research, projects, skills, certifications, and experience sections.
- Animated hero section and scroll-triggered content reveals.
- Interactive project cards and visual components.
- Access to project documentation and PDF reports.
- Production deployment through GitHub Pages and GitHub Actions.

## Project Reports

PDF reports are included in `public/reports/` and served through the portfolio website.

Available reports:

- `Internship_SARL.pdf`
- `Hackathon_Report.pdf`
- `Asymmetric_Encryption_to_Sign_and_Verify_Data.pdf`
- `Security_Infrastructure_Design.pdf`
- `Linux_Shell_Scripting.pdf`

These documents are publicly accessible as part of the deployed portfolio.

## Run Locally

**Requirements:** Node.js 20 or newer and npm.

Clone the repository:

```bash
git clone https://github.com/SyedSaif101/portfolio.git
```

Navigate into the project directory:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL in the terminal.

## Production Build

Generate an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated website is written to the `dist/` directory.

## Deployment

The portfolio is deployed using **GitHub Pages** with **GitHub Actions**.

The deployment workflow installs dependencies, builds the React application, and publishes the generated `dist/` directory.

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── reports/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Documentation

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs/v3/)
- [GSAP React Integration](https://gsap.com/resources/React/)
- [Motion Documentation](https://motion.dev/docs)
- [Aceternity UI](https://ui.aceternity.com/components)
- [Tremor Documentation](https://www.tremor.so/docs/getting-started/installation)

---

© 2026 Syed Saif Gillani
