# Visual Evidence

## Purpose

Visual evidence makes implemented work reviewable while preserving each project's status, privacy boundaries, and documented limitations. Screenshots demonstrate visible interfaces, and diagrams explain selected architecture and workflow boundaries; neither replaces structured project evidence or proves production operation by itself.

## Current Scope

The implemented visual-evidence scope consists of newBudget and Unicos. newBudget contributes three authentic, owner-approved application captures using approved identity presentation and demonstration financial records; no email, provider identifier, application-user identifier, uploaded statement, or unapproved account data is published. Statement Review is excluded from visual evidence and public capability claims. The existing Unicos scope and provenance remain unchanged: eleven approved local-development screenshots and two sanitized explanatory SVGs represent an active-development application that is not production deployed. Home Security is intentionally excluded from the portfolio-hosted visual gallery: Slice 8C is cancelled by owner decision, and no later visual-evidence work is planned unless a new, separately approved scope explicitly reopens this decision. The public `nvr-infrastructure` repository supplies separate code and documentation evidence; it is not a visual asset or permission to reconstruct private topology. Do not add placeholder, reconstructed, operationally sensitive, or privacy-risking Home Security visuals. No visual independently proves security, correctness, audited financial accuracy, production readiness, or scale.

## Screenshot Inventory

### newBudget

| Public path | Title | Evidence purpose | Primary limitation or qualification |
| --- | --- | --- | --- |
| `/images/newbudget/newbudget-monthly-workspace.png` | Monthly budget workspace | Shows the month-first planning surface with income, carryover, obligations, payment state, quick expenses, and remaining balance. | Owner-approved demonstration account and financial records; no authentication identifiers are exposed. |
| `/images/newbudget/newbudget-expense-trends.png` | Expense trends | Shows category totals, month and time-range controls, and historical spending trends. | Demonstrates implemented behavior, not audited reporting or financial advice. |
| `/images/newbudget/newbudget-debt-payment-trends.png` | Debt and payment trends | Shows searchable obligations, filters, payee context, and historical payment trends. | Planning values are not lender statements, audited balances, or lender-exact accounting. |

### Unicos

| Public path | Title | Evidence purpose | Primary limitation or qualification |
| --- | --- | --- | --- |
| `/images/unicos/unicos-dashboard.png` | Workflow dashboard | Shows active-work counts, pickup readiness, unpaid invoices, closure blockers, and recent repair-order activity. | Privacy-reviewed demonstration records; not production-operation evidence. |
| `/images/unicos/unicos-repair-orders.png` | Repair-order queue | Shows search, workflow filters, repair-order context, assignments, and relevant dates. | Demonstrates an implemented local-development queue; some values remain obscured. |
| `/images/unicos/unicos-customers.png` | Customer workspace | Shows the searchable individual and business customer index. | Several supplied values remain intentionally obscured. |
| `/images/unicos/unicos-edit-repair-order.png` | Repair-order detail workspace | Shows customer and vehicle context, status controls, notes, estimates, attachments, and history. | Available actions depend on permissions and workflow state. |
| `/images/unicos/unicos-communication-entry.png` | Communication entry workflow | Shows the repair-order-scoped internal communication-history form. | Creates an internal record; it does not send email, SMS, or external messages. |
| `/images/unicos/unicos-add-attachment.png` | Attachment upload workflow | Shows file selection, category, and description within a repair order. | Uses local-development storage; production storage, scanning, backup, and private serving remain future work. |
| `/images/unicos/unicos-estimate.png` | Estimate creation workflow | Shows a repair-order draft with optional insurance context, deductible, total, and notes. | Does not demonstrate insurance-system integration or a production estimate process. |
| `/images/unicos/unicos-create-invoice.png` | Invoice creation workflow | Shows application-level draft-invoice creation for an eligible repair order. | Does not demonstrate payment processing or a full accounting ledger. |
| `/images/unicos/unicos-billing.png` | Invoice queue | Shows searchable invoice status, repair-order relationships, totals, recorded payments, balances, and dates. | Demonstration records; not production financial-operation evidence. |
| `/images/unicos/unicos-reports.png` | Operational reports | Shows read-only filters, operational counts, attention queues, and CSV exports. | Not mature business intelligence, revenue analytics, or receivables-ageing infrastructure. |
| `/images/unicos/unicos-admin.png` | Development administration console | Shows grouped models and recent actions in the separate Django admin interface. | Emergency/development use only; complete admin policy unification is not claimed. |

## Diagram Inventory

| Public path | Evidence purpose | Source boundary | Deliberate omissions |
| --- | --- | --- | --- |
| `/diagrams/unicos-domain-service-boundaries.svg` | Explains the local Docker Compose boundary, shop-facing request path, authorization checks, services, models, PostgreSQL, limited HTMX use, and separate admin lane. | Derived from reviewed private-repository documentation and implementation evidence. | Private source paths, credentials, environment names, hosts, ports, URLs, database names, production infrastructure, external integrations, and complete authorization claims. |
| `/diagrams/unicos-repair-order-workflow.svg` | Explains repair-order context, related records, estimate and invoice lifecycles, guarded conversion, payment recording, and closure restrictions. | Derived from reviewed active-development services, policies, workflow documentation, and tests. | Complete transition coverage, estimate versioning, supplement-to-invoice automation, payment processing, a full accounting ledger, and production-operation claims. |

## Unicos Approved Display Names

The following names visible in the approved captures may be displayed publicly:

- Daniel's Paint and Body
- Ivan
- Hunter

No private contact details are approved for publication. Existing redactions remain intact and must not be reversed or reconstructed.

## Provenance

- The newBudget screenshots were supplied under project-owner direction and specifically approved for public use without pixel edits.
- The newBudget captures use owner-approved visible identity presentation and demonstration financial records; no email, OAuth provider identifier, application-user identifier, uploaded statement, or unapproved account data is included.
- Statement-import and reconciliation screens are excluded, and the captures do not independently prove security, correctness, audited financial accuracy, or scale.
- All three newBudget PNGs contain a benign Adobe XMP `iTXt` packet limited to TIFF orientation metadata; no sensitive textual metadata was found.
- The Unicos screenshots were supplied and approved by the project owner and continue to show the local-development application using privacy-reviewed demonstration records.
- Existing Unicos redactions were retained; those PNG pixels were not cropped, annotated, recompressed, recoloured, or reconstructed.
- Five Unicos PNGs contain a benign Adobe XMP `iTXt` packet limited to orientation metadata; no sensitive textual metadata was found.
- The diagrams were derived from reviewed private-repository documentation and implementation evidence.
- Private repository URLs and commit identifiers are not published.
- The diagrams are explanatory views, not complete infrastructure specifications.

## Review Checklist

- [ ] Confirm the asset comes from an authentic, reviewed source.
- [ ] Preserve the project's approved public status.
- [ ] Complete a visible privacy review at native size.
- [ ] Confirm every visible name is approved.
- [ ] Confirm no secrets, credentials, or private customer details are visible.
- [ ] Confirm the asset does not imply production operation beyond evidence.
- [ ] Verify meaningful alternative text and an accurate caption.
- [ ] Add a visible evidence note with the primary qualification.
- [ ] Record and validate native dimensions.
- [ ] Inspect metadata and calculate a SHA-256 hash.
- [ ] Validate responsive rendering without cropping or distortion.
- [ ] Provide a descriptive full-size link.
- [ ] Confirm the registered local asset path exists.
