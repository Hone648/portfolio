# Portfolio

Hunter Kam's professional portfolio repository.

Approved positioning:

> Computer Science student and full-stack developer building production web applications, operational business systems, and local automation infrastructure.

## Status

This repository is at Slice 6: the Home Security and Automation Lab case study. The homepage and `/projects` route present all three primary projects through reusable registry-backed cards, while `/projects/[slug]` statically publishes all three registered case studies.

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

Skills, About, resume, and contact remain planned for Slice 7; accessibility hardening, CI, automated browser validation, and deployment remain later work. MDX owns case-study narrative, while project cards and the reusable case-study layout consume structured facts from the typed registry. Home Security is an operational local systems-integration case study with no public source repository or live application link, and its privacy-sensitive infrastructure evidence remains sanitized. Unicos remains a local-development application in active development; this portfolio does not claim that it is production-deployed or production-ready.
