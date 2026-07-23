# Architecture

## Goals

This portfolio should be simple, durable, evidence-first, and easy to validate. It should present professional work clearly while keeping private project details, secrets, credentials, and sensitive operational information out of the repository and public site.

## Application Decisions

- Use Next.js with TypeScript, React, and the App Router.
- Prefer a static and content-first architecture.
- Use Server Components by default.
- Add Client Components only when browser interaction requires them.
- Plan dynamic project pages at `/projects/[slug]`.
- Use TypeScript metadata for structured project data and MDX later for long-form project case studies.
- Keep structured metadata, long-form content, and presentation concerns separate.
- Use a small global CSS system and/or CSS Modules.
- Do not use Tailwind.
- Plan Vercel for deployment in a later slice.

## Excluded Runtime Architecture

The mature portfolio should not include backend services, a database, authentication, a CMS, an admin dashboard, analytics, or runtime GitHub API calls unless a later approved slice changes scope.

## Target Mature Folder Tree

This is the intended mature structure, not a Slice 0 creation checklist.

```text
portfolio/
|-- app/
|   |-- layout.tsx
|   |-- page.tsx
|   |-- globals.css
|   |-- about/
|   |   `-- page.tsx
|   |-- contact/
|   |   `-- page.tsx
|   |-- projects/
|   |   |-- page.tsx
|   |   `-- [slug]/
|   |       `-- page.tsx
|   |-- resume/
|   |   `-- page.tsx
|   |-- sitemap.ts
|   |-- robots.ts
|   `-- not-found.tsx
|-- components/
|   |-- layout/
|   |-- projects/
|   |-- sections/
|   `-- ui/
|-- content/
|   |-- projects/
|   |-- project-metadata.ts
|   |-- skills.ts
|   `-- site-content.ts
|-- lib/
|   |-- projects.ts
|   |-- metadata.ts
|   `-- validation.ts
|-- public/
|   |-- images/
|   |   |-- newbudget/
|   |   |-- unicos/
|   |   `-- home-security-lab/
|   |-- diagrams/
|   `-- documents/
|-- tests/
|-- docs/
|-- .github/
|   `-- workflows/
|-- AGENTS.md
|-- next.config.ts
|-- playwright.config.ts
|-- tsconfig.json
|-- eslint.config.mjs
|-- package.json
`-- README.md
```

Create directories when an approved slice introduces real files that belong in them. Do not create empty directories merely to resemble the target architecture.

## Security and Privacy

Never expose secrets, financial records, OAuth details, private camera credentials, private RTSP URLs, home addresses, sensitive topology, or identifying camera footage. Private repositories require sanitized screenshots, diagrams, selected excerpts, and case-study evidence rather than unsupported source links.

## Evidence and Honesty Rules

1. Every skill claim should be supported by repository code, deployment evidence, operational evidence, documentation, or a clearly identified project artifact.
2. Do not list technologies merely because they appear in dependency files.
3. Distinguish implemented, deployed, operational, prototyped, designed, and planned work.
4. Do not describe planned work as completed.
5. Do not describe one production deployment as broad enterprise-scale expertise.
6. Do not use percentage-based skill ratings.
7. Do not claim that every line was independently written without AI assistance.
8. Describe AI use accurately: requirements definition, slice planning, implementation handoffs, code and diff review, validation, CI review, and final merge decisions.
9. Never expose secrets, financial records, OAuth details, private camera credentials, private RTSP URLs, home addresses, sensitive topology, or identifying camera footage.
10. Private repositories require sanitized screenshots, diagrams, selected excerpts, and case-study evidence rather than unsupported source links.

## Deferred Architecture

MDX, Playwright, project routes, project registry, screenshots, diagrams, sitemap, robots, accessibility hardening, SEO, performance work, CI, deployment configuration, analytics decisions, and contact workflows are deferred to later approved slices.
