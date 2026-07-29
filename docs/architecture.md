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

Current navigation links include `/`, `/projects`, `/about`, `/resume`, `/contact`, and the GitHub profile. Internal navigation uses Next.js links, while GitHub remains an external anchor.

## Styling Boundary

`app/globals.css` is limited to design tokens, reset/base rules, document-level typography, accessibility defaults, and global focus behavior. CSS Modules own component-specific styling for the header, footer, page container, button links, homepage, project index, project presentation components, and shared profile surfaces.

The technical-editorial visual direction uses warm neutral paper and surface tones, near-black ink text, muted slate supporting text, a deep steel-blue primary accent, and restrained warm accents. Expanded global tokens cover muted and strong surfaces, subtle and strong borders, soft accent fields, shadows, project-accent defaults, page width, spacing, and restrained radii.

Typography uses system-only stacks: a serif display face for major headings, a sans-serif body face, and a monospace face for metadata and labels. Project-specific teal, rust, and indigo accents provide decorative identity without representing project status. CSS Modules remain the component styling boundary; no UI library, font dependency, new Client Component, or JavaScript-driven visual runtime was added.

## Accessibility Boundary

Public routes use native landmarks and document structure: the shared header and distinctly labelled navigation landmarks surround one route-owned `main`, while articles, sections, figures, headings, lists, links, and native `details` disclosures retain their built-in semantics and keyboard behaviour. The skip link targets a programmatically focusable `#main-content` landmark so keyboard users can bypass repeated navigation without client-side focus management.

Repeated project-card actions keep concise visible wording while their accessible names append destination context after the complete visible label using project metadata. Gallery links that open a full-size asset in a new tab communicate that behaviour in their accessible names. Global and dark-surface focus treatments remain visible, motion transitions respect `prefers-reduced-motion`, and responsive defects are fixed at their component boundary rather than hidden through document-level overflow suppression.

Accessibility review combines manual keyboard, zoom, reflow, text-spacing, forced-colour, target-size, landmark, heading, and alternative-text checks with transient automated audits. Automated scores are findings rather than conformance claims. The site adds no client-side accessibility framework, browser-test dependency, or JavaScript accessibility runtime in Slice 10A.

## Metadata and Indexing Boundary

`lib/site-url.ts` is the only source for canonical and absolute metadata URLs. It resolves an explicit server-side `SITE_URL`, then `VERCEL_PROJECT_PRODUCTION_URL`, then the ordinary local fallback `http://localhost:3000`. Configured hostnames without a protocol receive `https://`; values are validated as HTTP or HTTPS URLs and reduced to their stable origin. Canonicals are never inferred from request headers, cookies, `VERCEL_URL`, `VERCEL_BRANCH_URL`, or other preview-host values. Slice 12 must configure and verify the final production `SITE_URL`.

The root layout owns the `%s | Hunter Kam` title template, default site identity, viewport metadata, and complete root Open Graph and Twitter records. `lib/metadata.ts` composes route fragments, distinct descriptions, canonical URLs, and complete nested Open Graph and Twitter objects for static pages and generated case studies. Generated `opengraph-image`, `twitter-image`, `icon`, and `apple-icon` routes share local code-only renderers with no remote assets or font requests.

`app/sitemap.ts` emits only canonical public HTML routes and derives case-study paths from the published case-study slug helper. `app/robots.ts` allows public crawling and points to the canonical sitemap and host. Root JSON-LD is limited to one `WebSite` and one `Person`; About adds one `ProfilePage` connected to the same stable Person ID. The Server Component serializer accepts static JSON-compatible data and escapes `<` before rendering. No project schema, private contact data, analytics, Search Console verification, deployment configuration, or request-host canonical inference is included. Metadata, indexing routes, and structured data do not establish deployment completion; production verification remains Slice 12 work.

## Performance Boundary

Static generation and Server Components are the default performance baseline. The site has no application-owned Client Component, browser state, analytics, third-party script, web font, or service worker. Browser JavaScript is therefore limited to the shared Next.js and React runtime emitted by the framework unless a later approved feature demonstrates a need for more.

Project screenshots use `next/image` with registry-owned intrinsic dimensions, responsive `sizes`, and normal below-fold lazy loading. SVG diagrams and the reviewed `development-admin` PNG keep their existing optimisation bypasses. Performance work must preserve full-size evidence links, screenshot text, approved redactions, and diagram clarity; it must not rewrite original public assets merely to improve a synthetic score.

Performance review uses a clean production build, a local production server, an explicit site origin, a documented browser and Lighthouse version, and three comparable mobile runs per representative route. Medians and ranges are recorded in `docs/performance-audit.md`. A runtime change requires a repeated, project-owned defect that crosses the documented optimisation gate and shows a repeatable benefit under the same conditions. One-off score movement, framework baseline cost, and zero-saving audits do not justify implementation work.

These measurements are local synthetic lab data, not production Core Web Vitals or real-user monitoring. CDN behaviour, deployment headers, production caching, final-origin verification, field data, and post-launch monitoring remain Slice 12 or post-launch responsibilities.

## Project Registry

`content/project-metadata.ts` owns structured project facts, while `lib/projects.ts` provides synchronous, pure read helpers. Registry order controls default display order, and public status labels are centralized so presentation code does not duplicate them.

Evidence states distinguish deployed, operational, implemented, prototyped, designed, and planned work. Limitations are first-class project data, and private repository records cannot expose source URLs. Project components must read facts from the registry rather than restating them. MDX holds long-form case-study narrative; it does not replace the core metadata registry.

## Project Presentation

The homepage consumes `getFeaturedProjects()`, and `/projects` consumes `getProjects()`. The full project index preserves registry order and keeps every registered limitation available through native disclosure.

`ProjectCard`, `ProjectGrid`, and `StatusBadge` are presentation-only Server Components. Cards receive complete project records, grids choose the appropriate heading level and density, and full and compact status labels remain centralised in the project registry. Project-aware `data-project` attributes drive decorative accents only. Featured cards use an equal-height responsive grid, while index cards use a wider editorial layout that collapses in DOM order on smaller screens. All three cards retain their registry-owned copy, status, links, and published case-study routes.

## Case Study Content

`@next/mdx` extends the Next.js configuration, and the root `mdx-components.tsx` supplies the App Router MDX component boundary. Files in `content/projects/*.mdx` contain narrative only: the shared layout owns the page heading, and structured facts remain in `content/project-metadata.ts`.

`lib/project-case-studies.ts` maps the published `newbudget`, `unicos`, and `home-security-lab` slugs to statically imported MDX components in project order. The `/projects/[slug]` route uses that mapping for static parameters, metadata, content selection, and unknown-slug rejection; `dynamicParams = false` ensures only published slugs are generated. Project link records distinguish internal case studies from live and external destinations, and route availability must be updated with registry metadata. Home Security uses repository visibility `none`, so its case study renders neither a repository URL nor a live-application link.

## Visual Evidence

`content/project-visuals.ts` owns visual paths, kinds, native dimensions, titles, alternative text, captions, and evidence notes. The registry remains partial during Slice 8B: newBudget and Unicos have approved visual groups, Home Security remains unregistered, and projects without registered visuals return an empty readonly collection.

`ProjectEvidenceGallery` is a presentation-only Server Component. The shared case-study layout renders it after structured project evidence and before the MDX narrative, while projects without visual records render no empty heading or section. newBudget screenshots are served locally from `public/images/newbudget`, Unicos screenshots remain under `public/images/unicos`, and code-authored Unicos SVGs remain under `public/diagrams`. Framing, spacing, shadows, and caption presentation may change in CSS, but the visual files, dimensions, alternative text, captions, evidence notes, and registry metadata remain unchanged. There is no runtime image API, external image dependency, client interaction, lightbox, or carousel.

The newBudget screenshots are authentic owner-approved application captures using approved demonstration records. The Unicos screenshots remain approved local-development captures. The SVGs are explanatory representations derived from reviewed evidence and omit private source details and unsupported production infrastructure. Visuals supplement rather than replace structured evidence, narrative, status labels, or limitations.

## Profile Content and Presentation

`content/career-history.ts` owns the selected career entries and transferable-strength mappings. It keeps one consolidated SPEA entry that represents two separate periods of employment without publishing either period's dates. `content/site-content.ts` owns the career-transition narrative and other approved public profile copy, including identity, positioning, education direction, certification, and contact language. `content/skills.ts` remains reserved for typed, current project-evidence-backed skill groups and their related project slugs.

`/about`, `/resume`, and `/contact` are static Server Component routes. Shared profile components provide the route-owned page heading, detailed or compact project-backed skill presentations, selected career entries, and transferable-strength mappings without introducing a generic page-builder or timeline abstraction. About presents transferable strengths linked to Resume experience anchors. Resume presents current project evidence before selected prior technical experience. Career evidence and project evidence remain distinct structured sources. Contact is a static `mailto:` and GitHub surface; there is no form workflow, downloadable document, Client Component, or new runtime architecture.

## Editorial Consistency

Visitor-facing action wording follows one system. `View` introduces portfolio content on this site, including the projects index, individual case studies, the resume, the about page, and the GitHub profile. `Open` is reserved for leaving the portfolio for a running application or a full-size asset. `Email` names a direct email action. Case-study link wording stays identical between project cards and the resume.

Interface copy uses sentence case for navigation, buttons, links, section headings, and small labels, except for proper nouns, project names, organisation names, technology names, and approved status labels.

Internal status keys such as `production`, `active-development`, and `operational-lab` remain unchanged and stay separate from public prose, which uses natural phrasing such as `in active development`. Static interface labels stay local to the components and route files that render them; centralising a handful of strings into a copy registry adds indirection without domain value, so it is deliberately avoided. Editorial consistency work introduces no runtime architecture, dependency, or Client Component.

## Excluded Runtime Architecture

The mature portfolio should not include backend services, a database, authentication, a CMS, an admin dashboard, analytics, or runtime GitHub API calls unless a later approved slice changes scope.

## Current and Target Folder Tree

The profile, career, project, visual-evidence, metadata, and performance-audit paths shown below exist through Slice 10C. Home Security visual evidence, tests, CI, and deployment support remain target structure for later approved slices.

```text
portfolio/
|-- app/
|   |-- layout.tsx
|   |-- page.tsx
|   |-- globals.css
|   |-- apple-icon.tsx
|   |-- icon.tsx
|   |-- opengraph-image.tsx
|   |-- robots.ts
|   |-- sitemap.ts
|   |-- twitter-image.tsx
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
|-- components/
|   |-- layout/
|   |-- metadata/
|   |   `-- json-ld.tsx
|   |-- profile/
|   |   |-- career-entry-list.tsx
|   |   |-- profile-page-header.tsx
|   |   |-- profile-page.module.css
|   |   |-- skill-groups.tsx
|   |   `-- transferable-strengths.tsx
|   |-- projects/
|   |   `-- project-evidence-gallery.tsx
|   `-- ui/
|-- content/
|   |-- career-history.ts
|   |-- projects/
|   |-- project-metadata.ts
|   |-- project-visuals.ts
|   |-- skills.ts
|   `-- site-content.ts
|-- lib/
|   |-- brand-icon.tsx
|   |-- metadata.ts
|   |-- project-case-studies.ts
|   |-- projects.ts
|   |-- site-url.ts
|   `-- social-image.tsx
|-- public/
|   |-- images/
|   |   |-- newbudget/
|   |   |   |-- newbudget-monthly-workspace.png
|   |   |   |-- newbudget-expense-trends.png
|   |   |   `-- newbudget-debt-payment-trends.png
|   |   `-- unicos/
|   |       |-- unicos-dashboard.png
|   |       |-- unicos-repair-orders.png
|   |       |-- unicos-customers.png
|   |       |-- unicos-edit-repair-order.png
|   |       |-- unicos-communication-entry.png
|   |       |-- unicos-add-attachment.png
|   |       |-- unicos-estimate.png
|   |       |-- unicos-create-invoice.png
|   |       |-- unicos-billing.png
|   |       |-- unicos-reports.png
|   |       `-- unicos-admin.png
|   |-- diagrams/
|   |   |-- unicos-domain-service-boundaries.svg
|   |   `-- unicos-repair-order-workflow.svg
|   `-- documents/
|-- tests/
|-- docs/
|   |-- architecture.md
|   |-- content-evidence-matrix.md
|   |-- performance-audit.md
|   |-- portfolio-plan.md
|   `-- visual-evidence.md
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

Home Security visual evidence remains future work and its visual directory must not be created empty.

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

Employment-date and complete-chronology verification, Playwright automation, Home Security sanitized visual evidence, CI, production-origin and deployment verification, production field-performance data, analytics decisions, contact-form workflows, and downloadable resume artifacts are deferred to later approved slices.
