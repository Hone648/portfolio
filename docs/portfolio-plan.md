# Portfolio Plan

## Objective

Build Hunter Kam's professional portfolio as an evidence-first Next.js site that presents selected work, technical judgment, and delivery history without overstating proof.

Approved positioning:

> Computer Science student and full-stack developer building production web applications, operational business systems, and local automation infrastructure.

## Project Hierarchy

| Project | Classification | Evidence direction |
| --- | --- | --- |
| newBudget | Deployed production application | Next.js and TypeScript, MongoDB Atlas, Auth.js and Google OAuth, Vercel production deployment, financial domain modeling, user ownership boundaries, automated tests and CI, uptime and error monitoring, backup and restore validation, production incident response and hotfix recovery. |
| Unicos | Business application in active development | Django and Python, PostgreSQL, Docker Compose, repair-order workflows, role and object-level authorization, estimate, invoice, and payment workflows, transactional service boundaries, automated testing and CI, architecture and decision documentation. |
| Home Security and Automation Lab | Operational systems-integration project | Ubuntu Server, Docker, Frigate NVR, Home Assistant, Mosquitto MQTT, RTSP cameras, local networking, camera and service troubleshooting, ESP32 sensor direction, C++ automation tooling. |

Unicos must not be described as production-deployed or production-ready. The current NVR system is not yet adequately represented by the existing `home-automation` GitHub repository, so that repository must not be implied as complete proof of the present NVR architecture.

## Milestones

| Milestone | Outcome |
| --- | --- |
| Structural MVP | Repository, architecture, site shell, content model, and basic project index exist. |
| Content MVP | Core case studies, skills, about, resume, and contact content are drafted with evidence boundaries. |
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
| Slice 8: Screenshots and architecture diagrams | Add sanitized visual evidence. | Do not reveal sensitive records, secrets, private URLs, addresses, or identifying footage. |
| Slice 9: Accessibility, SEO, and performance | Harden public quality signals. | Do not treat this as deployment completion. |
| Slice 10: CI and browser validation | Add automated validation workflows and focused browser smoke tests. | Do not add broad test frameworks without scope justification. |
| Slice 11: Production deployment | Deploy the reviewed portfolio. | Do not add analytics or custom-domain decisions unless approved. |
| Slice 12: Post-launch hardening | Improve evidence, monitoring, and maintenance after release. | Do not rewrite prior claims without matching evidence updates. |

## Branch and Review Workflow

Use guarded feature branches for each slice. Keep `main` reviewable and avoid substantive work directly on `main`. Open pull requests only when explicitly requested, and keep each PR scoped to the approved slice.

Slice 0 has a bootstrap exception: create the repository, initialize `main`, make one empty bootstrap commit, then create `chore/portfolio-architecture-baseline` for substantive baseline work.
