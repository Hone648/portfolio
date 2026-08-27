# Portfolio Plan

## Objective

Build Hunter Kam's professional portfolio as a human-first, evidence-backed Next.js site that presents selected work, technical judgment, and delivery history accurately and confidently.

Governing principle:

> Show the work. Explain the thinking. Let the evidence support the story quietly.

Approved positioning:

> Computer Science student and full-stack developer building production web applications, operational business systems, and local automation infrastructure.

## Project Hierarchy

| Project | Classification | Evidence direction |
| --- | --- | --- |
| newBudget | Deployed production application | Next.js and TypeScript, MongoDB Atlas, Auth.js and Google OAuth, Vercel production deployment, financial domain modeling, user ownership boundaries, automated tests and CI, uptime and error monitoring, backup and restore validation, production incident response and hotfix recovery. |
| Unicos | Business application in active development | Django and Python, PostgreSQL, Docker Compose, repair-order workflows, role and object-level authorization, estimate, invoice, and payment workflows, transactional service boundaries, automated testing and CI, architecture and decision documentation. |
| Home Security and Automation Lab | Operational systems-integration project | Ubuntu 24.04.3 LTS, Docker Compose, Frigate NVR, VAAPI acceleration, Home Assistant, Mosquitto MQTT, sanitized RTSP detect and record configuration, event-oriented retention, representative object tracking and persistent-notification automation, implemented repository validation, and documented repository-to-live deployment, service recreation, verification, and rollback procedures. |
| Forkfolio | Business application in active development | Private-source restaurant website platform, Django, Wagtail, PostgreSQL, tenant ownership and role-aware management, structured restaurant content, controlled preview, immutable release-backed publication, and external ordering/reservation links. |

Unicos and Forkfolio must not be described as production-deployed or production-ready. Forkfolio must not be presented as operating for live customers, and its ordering and reservation capabilities are outbound links only. Home Security uses the public `nvr-infrastructure` repository as reviewed evidence for selected sanitized configuration and procedures; it must not be presented as a verbatim private-deployment copy or complete camera inventory.

## Milestones

| Milestone | Outcome |
| --- | --- |
| Structural MVP | Repository, architecture, site shell, content model, and basic project index exist. |
| Content MVP | Core case studies, skills, about, resume, and contact content are drafted with clear project-state and claim boundaries. |
| Professional release | Accessibility, SEO, performance, CI, browser validation, and production deployment are complete. |
| Post-launch growth | Evidence is strengthened with sanitized screenshots, diagrams, operational notes, and refreshed outcomes. |

## Slice Outline

| Slice | Goal | Major boundary |
| --- | --- | --- |
| Slice 0: Repository and architecture baseline | Initialize the repository, runtime, documentation, and validation baseline. | Do not implement final design, content pages, MDX, CI, analytics, or deployment. |
| Slice 1: Site shell and design foundation | Establish layout primitives and visual direction. | Do not add case-study content or project registry depth. |
| Slice 2: Content model and project registry | Define project metadata and content boundaries. | Do not write full case studies. |
| Slice 3: Homepage and projects index | Add the first navigable portfolio surface. | Do not implement individual case-study pages beyond routing needs. |
| Slice 4: `newBudget` case study | Publish the deployed production application case study. | Do not generalize one deployment into broad enterprise claims. |
| Slice 5: `Unicos` case study | Publish the active-development business application case study. | Do not describe it as production-deployed or production-ready. |
| Slice 6: Home Security and Automation Lab case study | Publish the operational systems-integration case study. | Do not expose private topology, camera details, footage, or credentials. |
| Slice 7: Skills, About, resume, and contact | Add professional profile surfaces. | Do not use percentage skill ratings or unsupported claims. |
| Slice 8A: Unicos visual evidence | Add approved Unicos screenshots and sanitized diagrams. | Complete. Preserve active-development and privacy boundaries. |
| Slice 8B: newBudget visual evidence | Add approved newBudget screenshots and correct the Statement Review claim. | Complete. Preserve deployed-production status and financial-data privacy. |
| Slice 8C: Home Security visual evidence | Cancelled by owner decision. Home Security remains excluded from the portfolio-hosted visual gallery. | Private topology, camera details, footage, credentials, and other sensitive operational information remain prohibited. Reopening visual evidence requires a new, separately approved scope. |
| Slice 9A: Human-first public language reset | Complete. Public copy leads with Hunter, the work, and the engineering thinking. | Preserve claims, structure, status, and internal substantiation. |
| Slice 9B: Project-card storytelling | Complete. Improve how project cards introduce purpose and practical value. | Do not broaden claims or obscure project state. |
| Slice 9C: newBudget case-study narrative | Complete. Refine the newBudget story around product purpose, engineering decisions, and operations. | Preserve deployed-production facts and current financial-model limitations. |
| Slice 9D: Unicos case-study narrative | Complete. Refine the Unicos story around business workflows and implementation decisions. | Do not imply production deployment, production readiness, or real-shop use. |
| Slice 9E: Home Security case-study narrative | Complete. Refine the Home Security story around integration, automation, and troubleshooting. | Preserve residential privacy and non-commercial status. |
| Slice 9F: Visual personality and presentation | Complete. Improve the site's visual character and project presentation. | Do not alter factual claims, visual authenticity, or status distinctions. |
| Slice 9G: Cross-site consistency and content cleanup | Complete. Align terminology, rhythm, and presentation across the site. | Avoid narrative restructuring reserved for earlier Slice 9 work. |
| Slice 10A: Accessibility and semantic hardening | Complete. Audit and harden keyboard access, semantics, accessible names, focus, reflow, contrast, and resilient native behaviour. | Do not redesign the site, change project claims, or add a browser-test framework. |
| Slice 10B: Metadata, SEO, and shareability | Complete. Add reviewed metadata, canonical URLs, indexing routes, structured data, icons, and sharing surfaces. | Do not mix metadata work with deployment completion. |
| Slice 10C: Performance audit and targeted optimisation | Complete. Measure performance and address only demonstrated bottlenecks. | Do not make speculative optimisations without measured evidence. |
| Slice 10D: Case-study lightbox interaction | Complete. Add an accessible native-dialog lightbox through one isolated Client Component. | Keep the gallery server-rendered and preserve evidence, direct asset access, and measured performance. |
| Slice 11: CI and browser validation | Complete. Add automated validation workflows and focused Chromium browser smoke tests. | Preserve the Chromium-only matrix and do not treat passing automation as conformance or deployment. |
| Slice 12: Production deployment | Complete. Deploy the reviewed portfolio to Vercel, configure the stable production origin, and verify public production behavior. | Do not add analytics or custom-domain decisions unless approved. |
| Slice 13: Home Security public-repository alignment | Complete. The Home Security evidence model and case study were aligned to the sanitized public `nvr-infrastructure` repository. | Do not expose residential or private operational details, treat representative sanitized configuration as a complete camera or deployment inventory, or promote planned NVR roadmap work to implemented or operational status. |
| Slice 14: Case-study navigation and public source access | Complete. Long case studies now provide efficient return-to-top navigation, and all three case studies provide consistent access to their public source repositories. | Not a case-study redesign. Project claims, statuses, evidence, and limitations were not changed by the slice, and public repository visibility does not promote planned or incomplete work to implemented or operational status. |
| Slice 15: Featured-project action consistency and outbound-link behavior | Complete. Featured-project actions were normalized around a case-study-first hierarchy with consistent repository access across the featured cards, and conventional outbound HTTP(S) destinations now open in a supporting tab while internal navigation stays in the portfolio tab and email keeps native handling. | Not another project-card, case-study, or global-navigation redesign, and not a content or evidence revision. The slice altered no project claim, status, evidence statement, or limitation. |
| Slice 16A: Visual case-study experience and newBudget reference implementation | Complete. Established the recruiter-oriented visual walkthrough format using newBudget as the reference implementation. | Preserved evidence, status, limitations, privacy, and implementation-state distinctions; did not add Forkfolio, perform a whole-site redesign, invent visuals, or replace authentic screenshots. |
| Slice 16B: Existing case-study migration | Complete. Applied the accepted visual walkthrough format to Unicos and Home Security. | Preserved each project's status and evidence boundaries; did not broaden Unicos production claims or expose Home Security operational details. |
| Slice 16C: Forkfolio evidence and privacy contract | Complete. Reviewed the private Forkfolio source and defined the public facts, limitations, privacy boundaries, status language, and allowed architecture abstractions before public exposure. | Did not publish private repository URLs, private commit identifiers, secrets, customer data, private deployment details, production claims, or native ordering/payment/reservation-processing claims. |
| Slice 16D: Forkfolio project page | Complete. Added Forkfolio as a first-class project using the accepted visual case-study format. | Keep Forkfolio classified as active development unless later evidence supports promotion; do not add unsupported production claims, fake repository access, screenshots, diagrams, or broader portfolio integration. |
| Slice 16E: Forkfolio authentic screenshots | Current approved slice. Add privacy-reviewed authentic screenshots of implemented Forkfolio operator and public-site interfaces. | Use synthetic or explicitly approved public demonstration data; do not publish private restaurant/customer data, secrets, provider IDs, reconstructed screens, or AI-generated application screens. |
| Slice 16F: Forkfolio architecture and workflow diagrams | Blocked until Slice 16E is reviewed and merged. Add high-signal diagrams that explain Forkfolio engineering depth without exposing private source code or private infrastructure. | Do not expose private paths, identifiers, hostnames, credentials, secret infrastructure, unsupported services, or production infrastructure that does not yet exist. |
| Slice 16G: Portfolio-wide Forkfolio integration | Integrate Forkfolio consistently across skills, homepage/project hierarchy, featured wording, README documentation, and resume/project references where the current architecture requires it. | Keep one source of truth for project facts; do not broaden skill claims, create a public source link, duplicate facts, or silently promote status. |
| Slice 16H: Validation and production release | Validate and release the completed case-study modernization and Forkfolio addition. | Automated tests are not accessibility-conformance claims; do not add unrelated frameworks, dependencies, or redesign work during release validation. |

Slice 8A and Slice 8B are complete, and Slice 8C is cancelled by owner decision, so Slice 8 is closed and accepted. Slice 9A through Slice 12 are complete, so the portfolio is deployed on Vercel with a configured production origin. Slice 13 completed through PR #30, squash-merged as `dadfd868b64603a61aa8512a04d2938828b78160`. The public `nvr-infrastructure` repository is sanitized representative technical evidence; it is not a verbatim copy of the private live environment. Home Security remains excluded from the portfolio-hosted visual gallery, while the public sanitized repository provides code and documentation evidence. Do not add placeholder, reconstructed, operationally sensitive, or privacy-risking visual evidence unless a later separately approved scope explicitly reopens that decision; reopening Home Security visual evidence requires a separately approved scope. Slice 14 completed through PR #32, squash-merged as `7156e1555e01e6cf895458335eb1d308901e17e3`, and is closed and accepted. It changed no project claim, status, evidence statement, or limitation: Unicos remains in active development and is not production-deployed merely because its repository is public, and Home Security remains an operational lab whose public `nvr-infrastructure` repository stays sanitized representative technical evidence. Slice 15 completed through PR #34, squash-merged as `3a129bee95b90628dda9588d2f828ca9a74f89e0`, and is closed and accepted. It normalized featured-project actions around a case-study-first hierarchy, made repository access consistent across the featured cards, and established supporting-tab behavior for conventional outbound HTTP(S) destinations while preserving same-tab internal navigation and native email handling; it changed no project claim, status, evidence statement, or limitation. Slice 16A completed through PR #37, squash-merged as `d676142`, and is closed and accepted. Slice 16B completed through PR #38, squash-merged as `9a71141`, and is closed and accepted. Slice 16C completed through PR #39, squash-merged as `4948929`, and is closed and accepted. Slice 16D completed through PR #40, squash-merged as `d531185`, and is closed and accepted. Slice 16E is the current approved slice and adds authentic Forkfolio screenshots only; it is not complete until reviewed and merged. Slice 16F remains blocked until Slice 16E is reviewed and merged. The Slice 16 roadmap is approved as the next planned sequence, but this documentation approval does not authorize implementation of later slices beyond the normal separately reviewed slice process.

## Approved Slice 16 Roadmap

Slice 16 modernizes the case-study experience and then adds Forkfolio through a staged evidence-first process. The sequence must remain ordered: 16A establishes the accepted case-study format, 16B migrates the existing case studies, 16C defines Forkfolio's evidence and privacy contract, 16D adds the Forkfolio page, 16E adds authentic screenshots, 16F adds diagrams, 16G integrates Forkfolio across the portfolio, and 16H validates and releases the completed work.

LinkedIn work is explicitly out of scope for Slice 16. Forkfolio production-status promotion is also out of scope for Slices 16A through 16H and is deferred until private Forkfolio production/deployment work is completed and separately reviewed.

### Slice 16A: Visual case-study experience and newBudget reference implementation

Purpose: Transform the existing long-form technical case-study experience into a recruiter-oriented visual walkthrough while preserving engineering substance, evidence provenance, factual accuracy, status distinctions, and limitations.

Approved direction: establish a consistent recruiter-first reading hierarchy, make each project's purpose and central engineering problem understandable quickly, reduce narrative density, make architecture/workflow diagrams first-class storytelling elements, use authentic screenshots within the narrative, surface a small number of high-signal engineering decisions instead of exhaustive feature inventories, and preserve structured project metadata, evidence, status, technologies, capabilities, limitations, and privacy boundaries. Progressive disclosure may preserve secondary detail, but the page must remain understandable without expanding hidden content. Diagrams require meaningful alternative text and accessible explanations. newBudget is the reference implementation.

Major boundaries: no project-status changes, unsupported architecture or claims, fake/reconstructed/AI-generated application screenshots, weakening of the evidence model, whole-site redesign, Forkfolio integration, blog conversion, or LinkedIn work.

### Slice 16B: Existing case-study migration

Purpose: Apply the accepted visual case-study experience to Unicos and Home Security after the newBudget reference implementation is accepted.

Approved direction: migrate Unicos and Home Security to the visual walkthrough format, preserve each project's existing public status and evidence boundaries, and use diagrams where they communicate system structure or event/workflow relationships more effectively than prose. Preserve Home Security privacy restrictions and the existing decision not to add portfolio-hosted Home Security visual evidence unless a later separately approved scope explicitly reopens that decision. Preserve existing authentic screenshots and diagrams for projects that already have approved visual evidence without altering their factual meaning or provenance.

Major boundaries: do not broaden Unicos into production claims, expose Home Security topology, camera details, footage, identifiers, schedules, or restricted operational information, invent visuals merely to make layouts symmetrical, or remove evidence and limitations required for accuracy.

### Slice 16C: Forkfolio evidence and privacy contract

Purpose: Review the private Forkfolio source and establish exactly what the public portfolio may claim before adding Forkfolio.

Approved direction: treat Forkfolio as a private-source commercial project, review implemented capabilities and supporting private evidence, define public facts, limitations, privacy boundaries, status language, and allowed architecture abstractions, record Forkfolio-specific governance in `AGENTS.md` before implementation work exposes the project publicly, keep private repository URLs and private commit identifiers out of the public portfolio, and preserve the distinction between current implemented application behavior and future production/deployment work. Forkfolio remains an active-development application until later evidence supports a different classification.

Known evidence areas for fresh review include Tenant ownership/authorization boundaries, restaurant profile and Location management, structured operating hours, structured menu management, role-aware tenant management UI, external ordering and reservation links, announcements/specials/events, controlled media and branding, immutable release-backed public publication, and release restoration, approval, and publishing workflow.

Major boundaries: no public source-repository link, secrets, customer data, private restaurant data, internal provider identifiers, private deployment details, unsupported production custom-domain operation, production backup/restore operation, production object storage, production monitoring, production deployment pipeline, production readiness, or implication that Forkfolio processes orders, payments, delivery, or reservation inventory itself.

### Slice 16D: Forkfolio project page

Purpose: Add Forkfolio as a first-class portfolio project using the accepted visual case-study format after Slices 16A, 16B, and 16C are accepted.

Approved direction: use the portfolio's existing private-repository representation, present Forkfolio as a concise recruiter-oriented project brief/visual walkthrough, lead with product problem, engineering contribution, and a small number of high-signal technical decisions, and preserve active-development status until separately promoted by evidence.

Major boundaries: no implementation before the evidence/privacy contract is accepted, fake repository access, production claims unless separately verified, or screenshot/diagram work that belongs to later dedicated slices unless a minimal placeholder-free page can exist without it.

### Slice 16E: Forkfolio authentic screenshots

Purpose: Add privacy-reviewed authentic screenshots that demonstrate the implemented restaurant operator and public-site experience.

Preferred evidence targets, subject to 16C review, include the tenant management dashboard, menu management, operating-hours management and effective-date behavior, media and branding controls, release/publishing workflow, and branded public restaurant page.

Approved direction: use a deliberately created demonstration Tenant/Restaurant with synthetic or explicitly approved public data, prefer safe recapture over digital redaction/editing, register every visual through the existing typed visual-evidence system, preserve native dimensions, provenance, alt text, captions, evidence notes, and full-size access, and treat screenshots as demonstrations of visible implemented interfaces only.

Major boundaries: no real customer or restaurant private information, secrets, emails, phone numbers, addresses, credentials, provider IDs, private operational identifiers, reconstructed or AI-generated application screens, or misleading production claims.

### Slice 16F: Forkfolio architecture and workflow diagrams

Purpose: Explain the private project's engineering depth visually without publishing private source code.

Approved direction: make diagrams a first-class part of the Forkfolio story, prefer a small number of high-signal diagrams over exhaustive architecture maps, use meaningful boxes, explicit boundaries, intentional arrows, and concise annotations, and include implementation detail only where it materially improves understanding. Preferred diagrams, subject to 16C review, are a tenant isolation/authorization path and an editing-versus-immutable-publication flow.

Major boundaries: no private source paths, internal hostnames, credentials, private identifiers, secret infrastructure, unnecessary deployment topology, production infrastructure diagram before production infrastructure exists, unsupported services, integrations, or outcomes. Diagrams require meaningful alternative text and accessible prose explanation.

### Slice 16G: Portfolio-wide Forkfolio integration

Purpose: Integrate Forkfolio consistently across the rest of the portfolio after its project page and evidence are accepted.

Approved direction: update skills relationships where Forkfolio materially strengthens supported claims, update homepage/project hierarchy and featured-project wording, update README featured-project documentation where appropriate, update resume/project references only if the existing portfolio architecture requires it and facts remain registry-owned, keep one source of truth for project facts, and consider featured ordering with newBudget first and Forkfolio prominently placed while leaving final ordering to the implementation slice.

Major boundaries: do not broaden skill claims beyond project evidence, duplicate project facts into multiple public registries, create a public GitHub action or source link for Forkfolio, or silently promote status.

### Slice 16H: Validation and production release

Purpose: Validate and release the completed case-study modernization and Forkfolio addition.

Approved direction: extend existing browser tests for new or changed project routes and interactions, validate private-repository behavior, case-study navigation, visual interactions, responsive behavior, and accessibility for changed public surfaces, run repository-standard lint, typecheck, production build, browser tests, and git diff checks, and verify production behavior after deployment through the existing portfolio deployment process.

Major boundaries: passing automated tests is not an accessibility-conformance claim, unrelated frameworks or dependencies must not be added merely for validation, and unrelated portfolio redesign work must not be mixed into release validation.

### Deferred Forkfolio production-status promotion

Forkfolio production-status promotion is not part of Slices 16A through 16H. Only after the private Forkfolio production/deployment slice is completed and separately reviewed may the portfolio re-inspect implementation and operational evidence, verify live deployment behavior, verify which backup/restore, monitoring, rollback, domain, HTTPS, database, media-storage, and deployment claims are actually demonstrated, consider changing Forkfolio from active-development status to a production/deployed classification, and add a live-site action when a public destination is appropriate and approved. Keeping the source repository private remains compatible with a later production status.

## Branch and Review Workflow

Use guarded feature branches for each slice. Keep `main` reviewable and avoid substantive work directly on `main`. Open pull requests only when explicitly requested, and keep each PR scoped to the approved slice.

Slice 0 has a bootstrap exception: create the repository, initialize `main`, make one empty bootstrap commit, then create `chore/portfolio-architecture-baseline` for substantive baseline work.
