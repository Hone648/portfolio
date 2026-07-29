# Portfolio

Hunter Kam's professional portfolio repository.

Approved positioning:

> Computer Science student and full-stack developer building production web applications, operational business systems, and local automation infrastructure.

## Status

Slices 10A, 10B, and 10C are complete, and Slice 10D: Case-study lightbox interaction is active. The server-rendered project gallery now uses one isolated Client Component to open a selected visual in a native modal dialog while retaining the card caption, evidence note, and direct original-asset link. The interaction adds no dependency, carousel, gallery navigation, zoom, or URL state, and its browser payload is measured against the Slice 10C production baseline. Slice 11 is next. The final production `SITE_URL` remains a Slice 12 deployment responsibility, and Slice 8C, Home Security visual evidence, remains postponed rather than cancelled.

## Stack

- Next.js
- TypeScript
- React
- App Router
- Small global CSS system and/or CSS Modules
- MDX for project case-study narrative
- Structured TypeScript content for profile facts, selected career history, transferable strengths, and project-backed technical skills
- Vercel planned for deployment
- ESLint
- TypeScript compiler validation
- Playwright planned for focused browser smoke testing
- No database, authentication, content-management system, admin dashboard, runtime GitHub API dependency, Tailwind, or general-purpose UI component framework

MDX is installed and configured for project case-study narrative. Project-backed skills remain separate from transferable career strengths, and neither uses percentage ratings or proficiency meters. The HTML-only resume presents current software projects before selected prior technical experience. Contact remains a static email and GitHub surface with no form or backend. Employment dates, a downloadable resume, Playwright automation, and deployment remain planned for later slices.

The newBudget screenshots use owner-approved identity presentation and demonstration financial records; they publish no email, provider identifier, application-user identifier, uploaded statement, or other unapproved account detail. Statement Review is not presented as a portfolio capability, and no replacement statement workflow is claimed. newBudget remains a deployed production application, Unicos remains an active-development application, and Home Security remains an operational local systems-integration project. The approved gallery assets and registry facts remain unchanged. The shared gallery adds one project-scoped lightbox interaction but no runtime service, dependency, carousel, or image API.

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

## Content Accuracy and Substantiation

Public claims must remain supported by implementation, deployment, operational experience, documentation, or reviewed project artifacts. The public interface should lead with the work and engineering thinking rather than the process used to substantiate each statement. Planned work must not be described as completed, and private or sensitive project data must remain protected.

About, Resume, and Contact connect a technical career spanning more than two decades to current software work without recasting that history as software-engineering tenure. Selected career entries omit employment dates and complete chronology, project-backed skills remain separate from transferable strengths, and remote or freelance language describes current interest rather than prior software-employment outcomes or an existing client base. No contact form, contact backend, downloadable resume, analytics, or deployment was added. MDX owns case-study narrative, while project cards, the reusable case-study layout, and the partial visual registry consume structured facts without changing project status. Home Security remains an operational local systems-integration case study with privacy-sensitive evidence kept sanitized. Unicos remains a local-development application in active development and gains no production-readiness claim from its visual evidence.
