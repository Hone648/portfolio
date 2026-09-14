# Case-study Modernization & Forkfolio Release Validation

## Scope

This document records the Slice 16H release validation for the completed case-study modernization and Forkfolio addition. It is an audit record, not marketing copy.

The validation covered repository validation, public route behavior, case-study hierarchy, Forkfolio privacy boundaries, visual-evidence behavior, project status language, responsive rendering, accessibility-critical interactions, metadata and indexing output, GitHub Actions CI, and the production origin.

It draws on two separate evidence sources that this document keeps distinct: the repository's local automated end-to-end suite, and an independent Chromium browser session driven against the deployed production origin.

This validation does not claim WCAG conformance, cross-browser certification, a security audit, production performance certification, availability, an SLA, or production readiness for active-development projects.

## Release baseline

Baseline SHA: `47d0700efff4a999dc1e8c8709c0da91bef1d365`

Baseline short log: `47d0700 feat: integrate Forkfolio across portfolio (#51)`

Validation branch: `chore/case-study-release-validation`

Production origin: `https://portfolio-swart-rho-44.vercel.app`

## Slice 16 merge chain

| Slice | Pull request | Squash SHA | Status |
| --- | --- | --- | --- |
| 16A - Visual case-study experience and newBudget reference implementation | #37 | `d6761428bb13c74f36eb30dfa57f9f853534c389` | Complete |
| 16B - Existing case-study migration | #38 | `9a71141ea0d560037b29a7344b2691334762e63a` | Complete |
| 16C - Forkfolio evidence and privacy contract | #39 | `4948929efd6126499780f1815877154bc9afdb9e` | Complete |
| 16D - Forkfolio project page | #40 | `d5311852bc0564d79ad7dbdb104fdf3abf95ac64` | Complete |
| 16E - Forkfolio authentic screenshots | #41 | `5a70989975c35293dd33dd26a41d95a0b0f96e39` | Complete |
| 16F - Forkfolio architecture and workflow diagrams | #50 | `c208b855f22f2f80ff512dccbb1f8f8e7dbf0383` | Complete |
| 16G - Portfolio-wide Forkfolio integration | #51 | `47d0700efff4a999dc1e8c8709c0da91bef1d365` | Complete |
| 16H - Validation and production release | This branch | Not merged | Current validation slice |

## Validation environment

| Tool | Version or result |
| --- | --- |
| Node.js | `v24.18.0` |
| npm | `11.16.0` |
| Next.js | `16.2.11` |
| Playwright | `1.62.0` |
| Chromium | `151.0.7922.34` |
| OS shell | Windows 11 Home 10.0.26200 / PowerShell 5.1.26100.9444 and Git Bash |
| Browser matrix | Focused Chromium validation only |
| Browser engine used for the production pass | Chromium `151.0.7922.34`, driven by Playwright `1.62.0` |
| Desktop viewport | 1440x900 |
| Mobile viewport | 390x844 |

## Automated validation

Repository validation at `47d0700efff4a999dc1e8c8709c0da91bef1d365`:

| Command | Result |
| --- | --- |
| `npm run lint` | Passed |
| `npm run typecheck` | Passed |
| `npm run build` | Passed |
| `npm run test:e2e` | Passed, 64 tests |
| `git diff --check` | Passed |

Main branch CI verification:

| Check | Result |
| --- | --- |
| GitHub Actions workflow | `CI` |
| GitHub Actions run | `34798882237` |
| Workflow run number | `56` |
| Head SHA | `47d0700efff4a999dc1e8c8709c0da91bef1d365` |
| Status | Completed |
| Conclusion | Success |
| URL | `https://github.com/Hone648/portfolio/actions/runs/34798882237` |

The automated suite above is the repository's own local end-to-end run. It builds the production bundle and serves it at the repository-configured origin `http://127.0.0.1:3001`, which is also the local metadata origin. It does not exercise the deployed production origin.

Deployed production behavior was therefore validated separately, in an independent Chromium browser session driven against `https://portfolio-swart-rho-44.vercel.app`. That pass is recorded under "Production browser validation" below. The two are distinct evidence sources and are not interchangeable: the local suite establishes repository behavior, and the production pass establishes deployed behavior.

## Public route inventory

All nine public HTML routes were validated in two independent ways.

Local results come from the repository end-to-end suite against `http://127.0.0.1:3001`. Production results come from the independent Chromium browser pass against the deployed origin, run at 1440x900 desktop and 390x844 mobile.

In the production pass every route returned 200, exposed exactly one visible `main` landmark, exposed exactly one visible H1, produced no horizontal document overflow, and logged zero console errors and zero uncaught page errors attributable to the application, at both viewports.

| Route | Local result | Production result |
| --- | --- | --- |
| `/` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/projects` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/projects/newbudget` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/projects/forkfolio` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/projects/home-security-lab` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/projects/unicos` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/about` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/resume` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/contact` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/__slice-16h-missing-route__` | 404 | 404 |

## Recruiter hierarchy validation

Confirmed primary portfolio identity:

`Software & Systems Engineering`

Confirmed homepage evidence balance:

- Four primary evidence cards.
- Two current-project evidence cards.
- Two career-evidence cards.
- Forkfolio appears as supplemental current software evidence rather than as a primary homepage card.
- Unicos does not appear as a primary homepage card.

Confirmed project index order:

1. newBudget
2. Forkfolio
3. Home Security and Automation Lab
4. Unicos

Confirmed Resume project order:

1. newBudget
2. Forkfolio
3. Home Security and Automation Lab
4. Unicos

## Case-study modernization validation

| Project | Audit result |
| --- | --- |
| newBudget | Remains a deployed production application with four validated visual-evidence controls and full-size asset access. |
| Forkfolio | Remains a private-source business application in active development with exactly three engineering decisions, five authentic screenshots, two public-safe diagrams, seven validated visual-evidence controls, and seven full-size asset links. |
| Home Security and Automation Lab | Remains an operational systems-integration project with public `nvr-infrastructure` repository evidence and no portfolio-hosted visual gallery. |
| Unicos | Remains a business application in active development with 13 validated visual-evidence controls and payment/accounting boundary language. |

## Visual evidence and interaction validation

Validated visual-evidence counts:

| Project | Visual triggers | Full-size links |
| --- | ---: | ---: |
| newBudget | 4 | 4 |
| Forkfolio | 7 | 7 |
| Home Security and Automation Lab | 0 | 0 |
| Unicos | 13 | 13 |

Locally, lightbox behavior is asserted by the repository end-to-end suite for representative case-study visuals, covering keyboard operation, dialog role and accessible name and description, Escape close, focus handling, and full-size asset targets.

Deployed lightbox behavior was additionally exercised in the independent production browser session. Results are recorded under "Production browser validation" below.

Forkfolio visual evidence includes five authentic screenshot captures and two public-safe diagrams. The screenshots use fictional or approved demonstration data and do not represent production deployment or live-customer operation. The deployed screenshot lightbox was observed rendering the fictional "Ember & Vine" demonstration tenant.

## Navigation validation

Validated navigation and relationship behavior:

- The Forkfolio project card has exactly one internal case-study link to `/projects/forkfolio`.
- Forkfolio appears in project-backed skill relationships for Application development and Backend and data systems.
- Forkfolio does not appear in project-backed skill relationships for Software delivery and operations, Systems integration and automation, or Engineering workflow and validation.
- Forkfolio does not expose a public GitHub source link.
- Forkfolio does not expose a live-site or outbound public destination.
- Home Security links to the public `nvr-infrastructure` repository as sanitized representative evidence.
- Internal case-study, project index, About, Resume, and Contact routes resolve on both local and production origins.

Navigation policy was additionally verified in the deployed Chromium session across all nine public routes.

Shared site navigation:

- A single `Primary navigation` landmark is present on every one of the nine public routes, each exposing the same six links.
- The shared set is Home, Projects, About, Resume, Contact, and GitHub.

Internal links remain same-tab:

- No internal page-route or in-page anchor link on any public route carries a new-tab target.
- Activating Projects in the shared navigation was observed to resolve to `/projects` in the same browser tab, with no additional tab opened.

Conventional external HTTP(S) destinations follow the existing supporting-tab behavior:

- Five distinct external destinations are exposed across the site: the GitHub profile, the newBudget live application, and the newBudget, `nvr-infrastructure`, and Unicos repositories.
- All five open in a supporting tab and carry `rel="noopener noreferrer"`.

Same-origin full-size visual assets follow the same supporting-tab behavior:

- All 24 full-size asset links across newBudget, Forkfolio, and Unicos open in a supporting tab with `rel="noopener noreferrer"`.
- Each of the 24 announces the behavior in its accessible name, which ends with "in a new tab".

Email retains native handling:

- The public email action is a single `mailto:` destination labelled "Email Hunter".
- It carries no new-tab target and is not converted into a web-form or new-tab workflow.

No navigation-policy defect was found, and no navigation code was changed.

## Metadata and indexing

Validated metadata and indexing items:

- Route titles for all nine public HTML routes.
- Meta descriptions for all nine public HTML routes.
- Canonical URLs for all nine public HTML routes.
- Open Graph titles.
- Twitter titles.
- Root WebSite JSON-LD.
- Root Person JSON-LD.
- About ProfilePage JSON-LD.
- `robots.txt`.
- `sitemap.xml`.

The sitemap includes exactly the nine intended public HTML routes:

- `/`
- `/projects`
- `/projects/newbudget`
- `/projects/forkfolio`
- `/projects/home-security-lab`
- `/projects/unicos`
- `/about`
- `/resume`
- `/contact`

Production `robots.txt` allows public crawling, points to `https://portfolio-swart-rho-44.vercel.app/sitemap.xml`, and uses `https://portfolio-swart-rho-44.vercel.app` as the host.

## Project privacy and status audit

| Project | Audit result |
| --- | --- |
| newBudget | Remains a deployed production application. No audited financial-accuracy, enterprise, or broad SRE claim was introduced. |
| Forkfolio | Remains private-source and active-development. No public repository URL, private commit identifier, production deployment claim, live-customer claim, native ordering/payment/reservation-processing claim, or public live-site action was found. |
| Home Security and Automation Lab | Remains an operational private systems-integration project with sanitized public repository evidence. No private topology, camera inventory, footage, credentials, or portfolio-hosted visual evidence was introduced. |
| Unicos | Remains active development. It is not described as production-deployed or production-ready. |

## Production-origin validation

Direct production-origin validation was completed for:

`https://portfolio-swart-rho-44.vercel.app`

Production results:

- HTTPS origin resolved.
- All nine public HTML routes returned 200.
- Known missing route returned 404.
- Canonical URLs used the production origin.
- `robots.txt` used the production origin.
- `sitemap.xml` used the production origin and contained exactly nine public routes.
- Root structured data included WebSite and Person.
- About structured data included ProfilePage.
- Desktop and 390x844 production browser checks found no horizontal overflow.
- Case-study visual counts, project hierarchy, and Forkfolio privacy boundaries matched the approved Slice 16 state.

## Production browser validation

An independent Chromium session was driven against the deployed origin, separate from the local end-to-end suite. Browser: Chromium `151.0.7922.34` via Playwright `1.62.0`. Viewports: 1440x900 desktop and 390x844 mobile.

Route rendering (all nine public routes, both viewports):

| Check | Result |
| --- | --- |
| HTTP status | 200 on all nine routes |
| Visible `main` landmark | Exactly one per route |
| Visible H1 | Exactly one per route |
| Horizontal document overflow | None at 1440x900 or 390x844 |
| Console errors | Zero on every route |
| Uncaught page errors | Zero on every route |
| Missing route | 404 at both viewports |

Recruiter-facing hierarchy, observed in the rendered page:

- The Software & Systems Engineering identity is visible on the homepage.
- The selected-engineering-evidence section contains exactly four primary `article` blocks: newBudget, Home Security and Automation Lab, SPEA, and avionics systems experience.
- Two blocks carry current-project evidence labels and two carry career-evidence labels.
- The Forkfolio supplemental line is visible, reads as additional current software evidence, and links to `/projects/forkfolio`.
- The Forkfolio supplemental link is not contained in any primary evidence `article`, so it does not form a fifth primary card.
- Unicos does not appear anywhere on the homepage.
- Project index order is newBudget, Forkfolio, Home Security and Automation Lab, Unicos.
- Resume selected-project order matches the same registry order.
- On both About and Resume, Forkfolio case-study links appear under Application development and Backend and data systems, and under no other skill group.

Forkfolio case study, both viewports:

| Check | Result |
| --- | --- |
| Active-development status | Visible: "Business application in active development" |
| Private-source explanation | Visible |
| Engineering decisions | Exactly 3 list items under "Three engineering decisions" |
| Visual trigger buttons | 7 |
| Full-size asset links | 7 |
| Screenshots / diagrams | 5 `.png` and 2 `.svg` |
| External links inside the case study | None |
| Horizontal overflow | None at either viewport |
| Visual controls fit viewport | Yes at both viewports |
| Transaction boundary | Visible, including "Ordering and reservation capabilities are outbound links only; Forkfolio does not natively process orders, payments, delivery, or reservation inventory." |

Deployed interaction results:

| Interaction | Desktop 1440x900 | Mobile 390x844 |
| --- | --- | --- |
| Screenshot visual trigger keyboard-focusable | Pass | Pass |
| Screenshot lightbox opens as a modal dialog | Pass | Pass |
| Screenshot image renders at a non-zero size | Pass (1080x608) | Pass (354x199) |
| Screenshot original-asset link matches expected asset | Pass | Pass |
| Escape closes the screenshot lightbox | Pass | Pass |
| Focus returns to the originating screenshot trigger | Pass | Pass |
| Diagram visual trigger keyboard-focusable | Pass | Pass |
| Diagram lightbox opens as a modal dialog | Pass | Pass |
| Diagram renders at a non-zero size | Pass | Pass (354x221) |
| Diagram original-asset link matches expected asset | Pass | Pass |
| Escape closes the diagram lightbox | Pass | Pass |
| Focus returns to the originating diagram trigger | Pass | Pass |
| Dialog fits the viewport without horizontal overflow | Pass | Pass |

Full-size assets were requested directly over HTTP from the deployed origin and returned 200 with the expected content types: `image/png` for screenshots and `image/svg+xml` for diagrams.

Back-to-top, validated on all four deployed case studies (`/projects/forkfolio`, `/projects/newbudget`, `/projects/unicos`, `/projects/home-security-lab`):

- The control is absent from the accessibility tree near the top of the page.
- It becomes visible after scrolling deep into the case study.
- It is an anchor targeting `#case-study-top`.
- Activating it by keyboard returns the document to `scrollY` 0, settling within roughly 1.2 to 1.6 seconds of smooth scrolling.
- Focus moves to the `#case-study-top` case-study header.
- The control leaves the accessibility tree again once the reader is back at the top.
- From the restored focus position, Shift+Tab reaches "Back to projects" and then the primary-navigation "GitHub in a new tab" link, so navigation remains keyboard reachable.
- At 390x844 the control measures 121x44 and stays within the viewport width.

## Known limitations

- Browser automation is Chromium-only.
- This validation is not a cross-browser certification.
- This validation is not a formal accessibility conformance audit.
- This validation is not a security audit.
- This validation is not a production performance certification.
- This validation does not establish availability, uptime, or an SLA.
- Local validation used the repository-configured metadata origin `http://127.0.0.1:3001`, so locally rendered canonical and indexing output reflects that test origin rather than the production origin.
- The independent production browser pass covers Chromium at 1440x900 and 390x844 only. It is not a device-matrix, cross-browser, or assistive-technology certification.
- Deployed lightbox interaction was exercised on representative Forkfolio visuals, one screenshot and one diagram, rather than on every visual control in the portfolio.
- Production browser results describe the deployed origin at the time of validation and are not a continuous guarantee.
- Validation of active-development projects such as Forkfolio and Unicos does not establish production readiness for those projects.
- Visual evidence demonstrates reviewed interfaces and architecture only within the documented evidence boundaries; it is not proof of production operation.

## Release decision

Slice 16 release validation passed.

No application defect, broken public route, accessibility-critical release blocker, metadata/indexing blocker, privacy leak, unsupported claim expansion, visual-evidence blocker, CI blocker, or reachable production-origin failure was found during Slice 16H validation.

This decision rests on two distinct evidence sources: the repository's local end-to-end suite, and an independent Chromium browser pass against the deployed production origin covering all nine routes, the recruiter-facing hierarchy, Forkfolio evidence counts and boundaries, deployed screenshot and diagram lightbox interaction, Escape close, focus restoration, full-size asset delivery, and Back-to-top behavior at desktop and 390x844.

## Next roadmap action

Review and merge Slice 16H. After 16H is accepted, Slice 16 can be closed as the completed case-study modernization and Forkfolio integration sequence.
