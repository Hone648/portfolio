# Portfolio

Hunter Kam's professional portfolio repository.

Approved positioning:

> Computer Science student and full-stack developer building production web applications, operational business systems, and local automation infrastructure.

## Status

This repository is at Slice 4: the `newBudget` case study. The homepage and `/projects` route present all three primary projects through reusable registry-backed cards, and `/projects/newbudget` publishes the first long-form case study through the reusable project route.

## Stack

- Next.js
- TypeScript
- React
- App Router
- Small global CSS system and/or CSS Modules
- MDX for project case-study narrative
- Vercel planned for deployment
- ESLint
- TypeScript compiler validation
- Playwright planned for focused browser smoke testing
- No database, authentication, content-management system, admin dashboard, runtime GitHub API dependency, Tailwind, or general-purpose UI component framework

MDX is installed and configured for project case-study narrative. Playwright and deployment remain planned for later slices.

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

The Unicos and Home Security and Automation Lab case studies, resume, accessibility hardening, CI, automated browser validation, and deployment remain future slices. Project cards and the reusable case-study layout consume typed metadata rather than duplicating project facts in presentation code.
