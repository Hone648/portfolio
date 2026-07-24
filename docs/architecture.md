# Architecture

## Goals

This portfolio should be simple, durable, evidence-first, and easy to validate. It should present professional work clearly while keeping private project details, secrets, credentials, and sensitive operational information out of the repository and public site.

## Application Decisions

- Use Next.js with TypeScript, React, and the App Router.
- Prefer a static and content-first architecture.
- Use Server Components by default.
- Add Client Components only when browser interaction requires them.
- Generate published project pages at `/projects/[slug]` from a static case-study registry.
- Use TypeScript metadata for structured project data and MDX for long-form project case-study narrative.
- Keep structured metadata, long-form content, and presentation concerns separate.
- Use a small global CSS system and/or CSS Modules.
- Do not use Tailwind.
- Plan Vercel for deployment in a later slice.

## Shell Composition

The shared shell is composed in the root layout:

- a skip link targeting `#main-content`
- `SiteHeader`
- semantic `main` landmark for route content
- `SiteFooter`

The root layout keeps the footer at the bottom on short pages. Header and footer appear on all routes. Layout behavior uses HTML and CSS only; there is no JavaScript-based navigation state.

`PageContainer` provides a centered maximum-width layout with responsive horizontal padding and no vertical padding. Individual routes opt into the container instead of forcing every future route into the same width.

Current navigation links are limited to existing destinations: `/`, `/projects`, and the GitHub profile. Future route links should be added only after their routes exist.

## Styling Boundary

`app/globals.css` is limited to design tokens, reset/base rules, document-level typography, accessibility defaults, and global focus behavior. CSS Modules own component-specific styling for the header, footer, page container, button links, homepage, project index, and project presentation components.

The current token set covers background, surface, primary text, muted text, border, accent, accent strong/hover state, focus color, page-container width, spacing, and border radii. The visual foundation uses a light warm neutral background, dark charcoal text, muted gray secondary text, a deep-blue accent family, subtle borders, moderate radii, and system font stacks.

No third-party UI or styling dependency is used.

## Project Registry

`content/project-metadata.ts` owns structured project facts, while `lib/projects.ts` provides synchronous, pure read helpers. Registry order controls default display order, and public status labels are centralized so presentation code does not duplicate them.

Evidence states distinguish deployed, operational, implemented, prototyped, designed, and planned work. Limitations are first-class project data, and private repository records cannot expose source URLs. Project components must read facts from the registry rather than restating them. MDX holds long-form case-study narrative; it does not replace the core metadata registry.

## Project Presentation

The homepage consumes `getFeaturedProjects()`, and `/projects` consumes `getProjects()`. The full project index preserves registry order and presents every registered limitation.

`ProjectCard`, `ProjectGrid`, and `StatusBadge` are presentation-only Server Components. Cards receive complete project records, grids choose the appropriate heading level and density, and status text comes from `projectStatusLabels`. The newBudget and Unicos cards link to their published case studies; Home Security remains unpublished. Cards link to case studies only when the corresponding route is present in the published registry.

## Case Study Content

`@next/mdx` extends the Next.js configuration, and the root `mdx-components.tsx` supplies the App Router MDX component boundary. Files in `content/projects/*.mdx` contain narrative only: the shared layout owns the page heading, and structured facts remain in `content/project-metadata.ts`.

`lib/project-case-studies.ts` maps the published `newbudget` and `unicos` slugs to statically imported MDX components in project order. The `/projects/[slug]` route uses that mapping for static parameters, metadata, content selection, and unknown-slug rejection; `dynamicParams = false` ensures only published slugs are generated. Project link records distinguish internal case studies from live and external destinations, and route availability must be updated with registry metadata. The Home Security case study remains deferred to its approved slice.

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
|   |-- project-case-studies.ts
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
|-- mdx-components.tsx
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

Additional project case studies, Playwright, screenshots, diagrams, sitemap, robots, accessibility hardening, SEO, performance work, CI, deployment configuration, analytics decisions, and contact workflows are deferred to later approved slices.
