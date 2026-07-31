# Hunter Kam — Developer Portfolio

[![CI](https://github.com/Hone648/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Hone648/portfolio/actions/workflows/ci.yml)

This repository contains the source for my professional portfolio, highlighting production web application work, business workflow engineering, and local automation systems. The site focuses on practical engineering decisions, implementation evidence, and the operational lessons behind each project.

I am a Computer Science student and full-stack developer. The portfolio presents current software projects alongside selected prior technical experience, and it keeps those two kinds of work clearly distinct.

## Featured projects

| Project | Focus | Status |
| --- | --- | --- |
| newBudget | Personal budgeting, monthly planning, and debt tracking | Deployed production application |
| Unicos | Repair-order workflow and business-process modeling | Application in active development |
| Home Security and Automation Lab | Local automation, event processing, and systems integration | Operational private systems-integration project |

Each project has a case study covering its purpose, the engineering decisions behind it, and the constraints that shaped it.

## Built with

- Next.js
- React
- TypeScript
- App Router
- MDX for case-study narrative
- CSS Modules and a small global CSS system
- Playwright
- GitHub Actions
- ESLint

## Local development

### Requirements

- Node.js 24
- npm
- Git

The Node major line is recorded in `.nvmrc`.

### Install

```powershell
npm install
npx playwright install chromium
```

### Start the development server

```powershell
npm run dev
```

## Validation

```powershell
npm run validate
npm run test:e2e
```

`npm run validate` runs ESLint, TypeScript validation, and a production build. `npm run test:e2e` builds the application, starts the production Next.js server, and runs the focused Chromium smoke suite. GitHub Actions runs both validation paths for pull requests and pushes to `main`.

This automation covers the core public routes and interactions; it is not a cross-browser certification, an accessibility-conformance claim, or an audited security review.

## Deployment

The portfolio is deployed on Vercel at [portfolio-swart-rho-44.vercel.app](https://portfolio-swart-rho-44.vercel.app). Production builds come from `main`, and canonical URLs, `sitemap.xml`, `robots.txt`, and social metadata are generated from the configured production origin.

## Contact

- Email: [hone648@gmail.com](mailto:hone648@gmail.com)
- GitHub: [Hone648](https://github.com/Hone648)
