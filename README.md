# Portfolio

Hunter Kam's professional portfolio repository.

Approved positioning:

> Computer Science student and full-stack developer building production web applications, operational business systems, and local automation infrastructure.

## Status

This repository is at Slice 7: professional profile surfaces. The site now includes `/about`, `/resume`, and `/contact` alongside the homepage, project index, and three statically published case studies.

## Stack

- Next.js
- TypeScript
- React
- App Router
- Small global CSS system and/or CSS Modules
- MDX for project case-study narrative
- Structured TypeScript content for profile facts and evidence-backed skills
- Vercel planned for deployment
- ESLint
- TypeScript compiler validation
- Playwright planned for focused browser smoke testing
- No database, authentication, content-management system, admin dashboard, runtime GitHub API dependency, Tailwind, or general-purpose UI component framework

MDX is installed and configured for project case-study narrative. Skills are structured, evidence-backed content shared by About and Resume without percentage ratings or proficiency meters. The resume is HTML-only, and Contact is a static email and GitHub surface with no form or backend. Playwright and deployment remain planned for later slices.

## Local Prerequisites

- Node.js 24 LTS
- npm
- Git

The repository records the Node major line in `.nvmrc` and constrains Node with `>=24 <25`.

## Installation

```powershell
npm install
```

## Development

```powershell
npm run dev
```

## Validation

```powershell
npm run lint
npm run typecheck
npm run build
```

Or run the combined validation command:

```powershell
npm run validate
```

## Project Classifications

| Project | Classification |
| --- | --- |
| newBudget | Deployed production application |
| Unicos | Business application in active development |
| Home Security and Automation Lab | Operational systems-integration project |

## Evidence-First Rule

The portfolio is evidence-first. Skill claims should be supported by repository code, deployment evidence, operational evidence, documentation, or clearly identified project artifacts. Planned work must not be described as completed, and private or sensitive project data must remain protected.

About, Resume, Contact, and shared evidence-backed skills are implemented in Slice 7. No contact form, contact backend, downloadable resume, analytics, or deployment was added. Slice 8 remains screenshots and sanitized architecture diagrams; accessibility hardening, CI, automated browser validation, and deployment remain later work. MDX owns case-study narrative, while project cards and the reusable case-study layout consume structured facts from the typed registry. Home Security is an operational local systems-integration case study with no public source repository or live application link, and its privacy-sensitive infrastructure evidence remains sanitized. Unicos remains a local-development application in active development; this portfolio does not claim that it is production-deployed or production-ready.
