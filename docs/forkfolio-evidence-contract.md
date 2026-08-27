# Forkfolio Evidence Contract

This document defines what the public portfolio may say about Forkfolio before any public project page, screenshots, diagrams, or cross-site references are added. It is intentionally public-safe: it records claim boundaries without exposing private source links, private commit identifiers, private customer data, private deployment details, or private source structure.

Forkfolio is a private-source commercial restaurant website platform in active development. It is not currently classified in the portfolio as production deployed, production ready, or operating for live customers.

## Evidence States

| State | Meaning for public copy |
| --- | --- |
| Implemented | Reviewed in current private project code, tests, or project documentation and safe to describe at a product/architecture level. |
| Development/demo | Available for local development or synthetic demonstration, but not evidence of production operation or live customer use. |
| Designed/future | Accepted architecture, runbook, or operational direction, but not implemented or operated as production infrastructure. |
| Prohibited as a public claim | Must not be stated or implied without a later evidence review and explicit approval. |

## Claim Matrix

| Public-safe fact | Evidence state | Required boundary |
| --- | --- | --- |
| Forkfolio is a private-source commercial restaurant website platform. | Implemented | Keep source access private; do not publish source links or private identifiers. |
| The application is built with Django, Wagtail, and PostgreSQL in a modular monolith shape. | Implemented | Do not imply microservices, Kubernetes, managed cloud infrastructure, or production hardening from this fact. |
| Tenant ownership is a core domain boundary. | Implemented | Distinguish tenant-owned business state from Wagtail site routing and public serving. |
| Management access is role-aware. | Implemented | Describe reviewed role boundaries without claiming a complete external security audit. |
| A tenant can manage a restaurant profile. | Implemented | Do not publish real restaurant private data. |
| A tenant can manage locations, weekly operating hours, special hours, and temporary closures. | Implemented | This supports restaurant website content, not delivery logistics or reservation inventory. |
| Menus are modeled with structured menus, sections, items, prices, availability, and ordering controls. | Implemented | This is menu presentation and editorial control, not native order processing or payment processing. |
| External ordering and reservation destinations can be represented as outbound links. | Implemented | Always describe them as external links only; do not claim native ordering, payment, delivery, or reservation processing. |
| Announcements, specials, and events support visibility and scheduling concepts. | Implemented | Do not present them as a marketing automation platform or customer messaging system. |
| Media and branding controls support controlled public-site presentation. | Implemented | Do not expose private assets, provider IDs, storage details, or unapproved restaurant identity material. |
| Authorized users can preview current restaurant website content before publication. | Implemented | Preview reflects editable/current state and must not be confused with the public release. |
| Public serving is backed by immutable release records. | Implemented | Public copy may describe release-backed publication, but not production deployment. |
| Publication includes submission, review, approval, scheduling, publishing, history, restoration, and historical reactivation concepts. | Implemented | A scheduled publication command exists at the application level; production scheduler infrastructure remains future work. |
| Release records preserve public-site content snapshots. | Implemented | Do not overstate this as a complete audit, compliance, backup, or disaster-recovery system. |
| The management and public surfaces are server-rendered application views. | Implemented | Do not claim a separate API product, headless CMS service, or native mobile application. |
| A demo showroom supports local development walkthroughs using synthetic restaurant examples. | Development/demo | Demo content is not live customer evidence, production evidence, or permission to publish screenshots without separate review. |
| Production runtime, deployment, custom domain, TLS, data durability, backup/restore, monitoring, and support runbooks have accepted direction. | Designed/future | Accepted ADRs and runbooks are not operational proof. Keep production claims deferred. |
| Native ordering, payment, delivery, or reservation inventory processing. | Prohibited as a public claim | Forkfolio may link outward to external services; it must not be described as processing these workflows itself. |
| Production readiness, live customer operation, hardened deployment, production database backups, object storage, monitoring, rollback, custom domains, or TLS automation. | Prohibited as a public claim | Requires later implementation evidence, operational verification, and explicit approval. |

## Public Copy Rules

Public copy may explain the product as a restaurant website platform that helps restaurant teams manage profile content, locations and hours, menus, announcements, branding, preview, and release-backed publication.

Public copy must keep these distinctions visible:

- Active development versus production operation.
- Tenant-owned business state versus Wagtail site routing.
- Editable preview versus immutable public release.
- External ordering/reservation links versus native transaction processing.
- Accepted production architecture/runbooks versus deployed production infrastructure.
- Synthetic demo data versus live customer data.

Do not publish private source links, private commit identifiers, private branch names, private pull request numbers, source excerpts, secrets, provider identifiers, private hostnames, deployment targets, environment names, logs, internal IDs, or real customer/restaurant private data.

## Public-Safe Architecture Abstractions

Later public diagrams may use the following conceptual abstractions. These are application and workflow abstractions only; they are not production deployment topology and must not imply production infrastructure.

### Product / Publication Flow

A public-safe product flow may be represented as:

Restaurant staff -> tenant management UI -> tenant authorization boundary -> restaurant operational domains -> preview/review -> publication boundary -> immutable release -> public restaurant website.

Restaurant operational domains may be grouped at a high level as profile, locations, hours, menus, promotions, external links, and branding. Keep the flow conceptual and avoid private source structure, private identifiers, provider details, or deployment details.

### Editable State Vs Released State

A public-safe publication-state flow may be represented as:

Editable tenant-owned operational state -> preview/submission/approval -> immutable Release N -> public serving.

Further edits proceed separately toward a future release. Historical released state is not mutated by later editing, and preview/current state must not be described or diagrammed as already public.

### Wagtail / Custom Django / PostgreSQL Boundary

Wagtail may be described at a high level as responsible for pages, revisions, media, and editorial workflow where implemented.

Custom Django domains may be described at a high level as responsible for Tenant ownership/authorization, restaurant profiles, locations/hours, menus, external links, announcements/specials/events, branding, and publication-domain logic.

PostgreSQL may be described as the shared relational system of record.

Keep this abstraction conceptual. Do not publish private module paths, private source structure, internal class or function names, or private identifiers.

### Production-Infrastructure Exclusion

Later public diagrams must not include the following as current implemented or operational architecture unless separately evidenced and approved: production reverse proxy, TLS topology, custom-domain authority, DNS provider, hosting/cloud provider, object-storage vendor, CDN, monitoring vendor, production database service, backup infrastructure, container registry/deployment pipeline, or production scheduler infrastructure.

Accepted production ADRs and runbooks remain designed/future evidence only.

## Screenshot Rules

Forkfolio screenshots require a later dedicated review. Approved screenshots must be authentic captures of implemented software using synthetic or explicitly approved public demonstration data. Do not use real customer/private restaurant data, secrets, provider IDs, internal identifiers, private operational details, reconstructed screens, AI-generated application screens, or digital redaction as a substitute for safe recapture.

Screenshots demonstrate visible application interfaces only. They do not independently prove production deployment, security, correctness, scale, backup coverage, monitoring, or customer operation.

## Diagram Rules

Forkfolio diagrams may use high-level abstractions such as:

- Tenant, user, membership, role-aware management surface, and tenant-owned content.
- Restaurant profile, locations, hours, menus, external links, promotions, media, and branding as product content domains.
- Editable operational state, authorized preview, submission/review/approval, immutable release, and public serving.
- Future production concerns as a clearly separated planned/deferred boundary.

Forkfolio diagrams must not expose private source paths, private module layout, hostnames, credentials, provider IDs, deployment topology, infrastructure identifiers, customer/tenant identifiers, secrets, unsupported services, or production infrastructure that does not yet exist.

## Promotion Gate

Forkfolio must remain in active development until a later approved slice reviews production/deployment evidence. A status promotion requires evidence of the actual deployed runtime, domain and HTTPS behavior, database and media durability, backup and restore posture, monitoring, rollback/deployment workflow, support model, and any live-customer/public-destination claims the portfolio intends to make.
