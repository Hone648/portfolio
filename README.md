# Hunter Kam — Software & Systems Engineering

[![CI](https://github.com/Hone648/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Hone648/portfolio/actions/workflows/ci.yml)

This repository contains the source for my professional portfolio, highlighting production web application work, business workflow engineering, and local automation systems. The site focuses on practical engineering decisions, implementation evidence, and the operational lessons behind each project.

I am a Computer Science student combining modern software development with more than two decades of technical experience across avionics, automated test systems, semiconductor equipment, industrial telemetry, controls, and systems troubleshooting. The portfolio keeps current project-backed software and systems skills distinct from historical and transferable technical experience.

## Selected project evidence

| Project | Focus | Status |
| --- | --- | --- |
| newBudget | Personal budgeting, monthly planning, and debt tracking | Deployed production application |
| Forkfolio | Tenant-aware restaurant content and release-backed publication | Private-source application in active development |
| Home Security and Automation Lab | Local automation, event processing, and systems integration | Operational private systems-integration project |
| Unicos | Repair-order workflow and business-process modeling | Application in active development |

Each project has a case study covering its purpose, the engineering decisions behind it, and the constraints that shaped it.

The Home Security case study is supported by the public, sanitized [nvr-infrastructure](https://github.com/Hone648/nvr-infrastructure) configuration and operations repository. It represents selected reviewed source, not a complete inventory or verbatim copy of the private residential deployment.

Forkfolio is a private-source project. Its public case study presents only approved project facts, authentic demonstration screenshots, and public-safe architecture/workflow evidence; no public source repository or live-customer/production claim is implied.

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
