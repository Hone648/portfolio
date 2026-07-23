# Portfolio

Hunter Kam's professional portfolio repository.

Approved positioning:

> Computer Science student and full-stack developer building production web applications, operational business systems, and local automation infrastructure.

## Status

This repository is at Slice 1: site shell and design foundation. It now includes the shared root layout, page container, header, footer, responsive navigation, skip link, and restrained global visual baseline.

## Stack

- Next.js
- TypeScript
- React
- App Router
- Small global CSS system and/or CSS Modules
- MDX planned for project case studies
- Vercel planned for deployment
- ESLint
- TypeScript compiler validation
- Playwright planned for focused browser smoke testing
- No database, authentication, content-management system, admin dashboard, runtime GitHub API dependency, Tailwind, or general-purpose UI component framework

MDX, Playwright, and deployment are planned for later slices and are not installed or configured in Slice 1.

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

Project metadata, full homepage content, case studies, resume, accessibility hardening, CI, browser validation, and deployment remain future slices.
