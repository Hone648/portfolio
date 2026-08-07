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

Unicos must not be described as production-deployed or production-ready. Home Security uses the public `nvr-infrastructure` repository as reviewed evidence for selected sanitized configuration and procedures; it must not be presented as a verbatim private-deployment copy or complete camera inventory.

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

Slice 8A and Slice 8B are complete, and Slice 8C is cancelled by owner decision, so Slice 8 is closed and accepted. Slice 9A through Slice 12 are complete, so the portfolio is deployed on Vercel with a configured production origin. Slice 13 completed through PR #30, squash-merged as `dadfd868b64603a61aa8512a04d2938828b78160`. The public `nvr-infrastructure` repository is sanitized representative technical evidence; it is not a verbatim copy of the private live environment. Home Security remains excluded from the portfolio-hosted visual gallery, while the public sanitized repository provides code and documentation evidence. Do not add placeholder, reconstructed, operationally sensitive, or privacy-risking visual evidence unless a later separately approved scope explicitly reopens that decision; reopening Home Security visual evidence requires a separately approved scope. Slice 14 completed through PR #32, squash-merged as `7156e1555e01e6cf895458335eb1d308901e17e3`, and is closed and accepted. It changed no project claim, status, evidence statement, or limitation: Unicos remains in active development and is not production-deployed merely because its repository is public, and Home Security remains an operational lab whose public `nvr-infrastructure` repository stays sanitized representative technical evidence. Slice 15 completed through PR #34, squash-merged as `3a129bee95b90628dda9588d2f828ca9a74f89e0`, and is closed and accepted. It normalized featured-project actions around a case-study-first hierarchy, made repository access consistent across the featured cards, and established supporting-tab behavior for conventional outbound HTTP(S) destinations while preserving same-tab internal navigation and native email handling; it changed no project claim, status, evidence statement, or limitation. No later slice is approved.

## Branch and Review Workflow

Use guarded feature branches for each slice. Keep `main` reviewable and avoid substantive work directly on `main`. Open pull requests only when explicitly requested, and keep each PR scoped to the approved slice.

Slice 0 has a bootstrap exception: create the repository, initialize `main`, make one empty bootstrap commit, then create `chore/portfolio-architecture-baseline` for substantive baseline work.
