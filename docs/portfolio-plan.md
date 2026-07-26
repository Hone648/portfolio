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
| Home Security and Automation Lab | Operational systems-integration project | Ubuntu Server, Docker, Frigate NVR, Google Coral Edge TPU acceleration, Home Assistant, Mosquitto MQTT, three RTSP cameras, AI object detection across multiple object classes, person-class automation triggers, zone- and time-conditioned automations, mobile notifications, local networking, and service troubleshooting. |

Unicos must not be described as production-deployed or production-ready. The current NVR system is not yet adequately represented by the existing `home-automation` GitHub repository, so that repository must not be implied as complete proof of the present NVR architecture.

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
| Slice 8C: Home Security visual evidence | Add sanitized visuals for the operational local system. | Postponed, not cancelled. Do not expose private topology, camera details, footage, or credentials. |
| Slice 9A: Human-first public language reset | Lead public copy with Hunter, the work, and the engineering thinking. | Change terminology only; preserve claims, structure, status, and internal substantiation. |
| Slice 9B: Project-card storytelling | Improve how project cards introduce purpose and practical value. | Do not broaden claims or obscure project state. |
| Slice 9C: newBudget case-study narrative | Refine the newBudget story around product purpose, engineering decisions, and operations. | Preserve deployed-production facts and current financial-model limitations. |
| Slice 9D: Unicos case-study narrative | Refine the Unicos story around business workflows and implementation decisions. | Do not imply production deployment, production readiness, or real-shop use. |
| Slice 9E: Home Security case-study narrative | Refine the Home Security story around integration, automation, and troubleshooting. | Preserve residential privacy and non-commercial status. |
| Slice 9F: Visual personality and presentation | Improve the site's visual character and project presentation. | Do not alter factual claims, visual authenticity, or status distinctions. |
| Slice 9G: Cross-site consistency and content cleanup | Align terminology, rhythm, and presentation across the site. | Avoid narrative restructuring reserved for earlier Slice 9 work. |
| Slice 10: Accessibility, SEO, and performance | Harden public quality signals. | Do not treat this as deployment completion. |
| Slice 11: CI and browser validation | Add automated validation workflows and focused browser smoke tests. | Do not add broad test frameworks without scope justification. |
| Slice 12: Production deployment | Deploy the reviewed portfolio. | Do not add analytics or custom-domain decisions unless approved. |
| Slice 13: Post-launch hardening | Improve substantiation, monitoring, and maintenance after release. | Do not rewrite prior claims without matching implementation or documentation updates. |

Slice 9A is the active slice. Slice 8C remains deferred until an approved Home Security visual-evidence pass; it has not been cancelled.

## Branch and Review Workflow

Use guarded feature branches for each slice. Keep `main` reviewable and avoid substantive work directly on `main`. Open pull requests only when explicitly requested, and keep each PR scoped to the approved slice.

Slice 0 has a bootstrap exception: create the repository, initialize `main`, make one empty bootstrap commit, then create `chore/portfolio-architecture-baseline` for substantive baseline work.
