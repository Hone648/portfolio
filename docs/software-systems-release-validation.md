# Software & Systems Engineering Release Validation

## Scope

This document records the Slice 17F release validation for the completed Software & Systems Engineering repositioning. It is an audit record, not marketing copy.

The validation covered repository validation, public route behavior, positioning consistency, project status and privacy boundaries, current project-backed skills, selected career evidence boundaries, accessibility-critical behavior, metadata and indexing output, and the production origin.

This validation does not claim WCAG conformance, cross-browser certification, a security audit, production performance certification, availability, or an SLA.

## Release baseline

Baseline SHA: `3e4c0f2eb3ad7184f6d21382724c8931f8b7a0f9`

Baseline short log: `3e4c0f2 feat: align skills and cross-site terminology (#48)`

Validation branch: `chore/software-systems-release-validation`

Production origin: `https://portfolio-swart-rho-44.vercel.app`

## Slice 17 merge chain

| Slice | Pull request | Squash SHA | Status |
| --- | --- | --- | --- |
| 17A - Positioning contract & roadmap reset | #43 | `9963dd5c6caae7506f8585017841944bf41f29e1` | Complete |
| 17B - Homepage & global identity | #44 | `a25419ac25b731099a7b5382a6d00a0c43491b25` | Complete |
| 17C - About & contact repositioning | #45 | `594cbf918ce88a9f0309ca978bda616083218980` | Complete |
| 17B2 - Homepage evidence rebalance | #46 | `601827915291beed0463095c7c9d9024f5518e34` | Complete |
| 17D - Experience-forward Resume | #47 | `fc23c3a37621bb160b8a2e502d9362bcd6651342` | Complete |
| 17E - Skills and cross-site terminology | #48 | `3e4c0f2eb3ad7184f6d21382724c8931f8b7a0f9` | Complete |
| 17F - Validation & release | This branch | Not merged | Current validation slice |

## Validation environment

| Tool | Version or result |
| --- | --- |
| Node.js | `v24.18.0` |
| npm | `11.16.0` |
| Next.js | `16.2.11` |
| Playwright | `1.62.0` |
| Chromium | `151.0.7922.34` |
| OS shell | Windows PowerShell |
| Browser matrix | Focused Chromium validation only |

The direct Chromium executable `--version` command was blocked by local crashpad permissions, so the browser version was recorded through a Playwright-launched Chromium instance.

## Automated validation

Phase A baseline validation at `3e4c0f2eb3ad7184f6d21382724c8931f8b7a0f9`:

| Command | Result |
| --- | --- |
| `npm run lint` | Passed |
| `npm run typecheck` | Passed |
| `npm run build` | Passed |
| `npm run test:e2e` | Passed, 63 tests |
| `git diff --check` | Passed |

Main branch CI verification:

| Check | Result |
| --- | --- |
| GitHub Actions run | `34780560832` |
| Head SHA | `3e4c0f2eb3ad7184f6d21382724c8931f8b7a0f9` |
| Status | Completed |
| Conclusion | Success |
| URL | `https://github.com/Hone648/portfolio/actions/runs/34780560832` |

After documentation corrections, the same validation commands were run again and passed. The final E2E count remained 63 passed.

Node runtime correction: an initial local audit pass was accidentally recorded under Node.js `v22.14.0`, but the repository requires Node 24 through `.nvmrc` (`24`) and `package.json` (`>=24 <25`). The final local release gate was rerun under the repository-pinned Node 24 line using Node.js `v24.18.0` and npm `11.16.0`; lint, typecheck, build, E2E, and `git diff --check` all passed under that runtime.

## Public route inventory

All nine public HTML routes were validated locally through the existing Playwright suite and direct local production-server metadata checks. All nine were also validated against production.

| Route | Local result | Production result |
| --- | --- | --- |
| `/` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/projects` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/projects/newbudget` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/projects/unicos` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/projects/home-security-lab` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/projects/forkfolio` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/about` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/resume` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/contact` | 200, one H1, one main, no desktop or 390x844 overflow | 200, one H1, one main, no desktop or 390x844 overflow |
| `/__slice-17f-missing-route__` | 404 | 404 |

The shared navigation was present on all production routes, with Home, Projects, About, Resume, Contact, and GitHub links. Key internal navigation to Resume resolved to `/resume`.

## Positioning and content consistency

Confirmed primary portfolio identity:

`Software & Systems Engineering`

Confirmed supporting position:

`Computer Science student combining modern software development with more than two decades of technical experience across avionics, automated test systems, semiconductor equipment, industrial telemetry, controls, and systems troubleshooting.`

Content audit findings:

- Current degree status remains Computer Science student.
- No completed B.S. claim was found.
- The "more than two decades" claim remains tied to broader technical experience, not software engineering tenure.
- Current project-backed skills remain distinct from transferable and historical experience.
- No remote-first headline or identity was found.
- No compensation, relocation, or travel promises were found.
- No unverified seniority or title inflation was found.
- No LinkedIn integration was added or found.

Terminology scans found stale or prohibited phrases only in legitimate contexts before the documentation corrections: governance rows being corrected in `docs/content-evidence-matrix.md`, claim-boundary language in `docs/software-systems-positioning-contract.md`, and negative assertions in tests. The corrected evidence matrix no longer uses remote-first suggested public wording or the old `Full-stack TypeScript development` capability label.

## Project status and privacy boundaries

| Project | Audit result |
| --- | --- |
| newBudget | Remains a deployed production application. No audited financial-accuracy claim or broad enterprise/SRE claim was introduced. |
| Unicos | Remains an active-development application. It is not described as production-deployed or production-ready. |
| Home Security and Automation Lab | Remains an operational private systems-integration project. The public `nvr-infrastructure` repository remains sanitized representative evidence. No private topology, camera inventory, credentials, footage, occupancy/schedule detail, or portfolio-hosted visual evidence was introduced. |
| Forkfolio | Remains active development with private source. No public source URL, live-customer claim, production claim, native ordering/payment/reservation-processing claim, or Slice 16F diagram claim was introduced. Authentic screenshots remain demonstration evidence using fictional/synthetic demo data. |

## Skills and career evidence boundaries

Confirmed current project-backed skill groups:

- Application development
- Backend and data systems
- Software delivery and operations
- Systems integration and automation
- Engineering workflow and validation

The skill groups remain sourced from `content/skills.ts` and remain tied to project evidence. Historical avionics, RF/radar, automated test, semiconductor, telemetry, controls, and equipment-support experience remains represented as historical or transferable experience, not current project-backed software proficiency.

Verified career titles remain:

- Equipment Technician
- Electronics Technician
- Field Engineer
- Avionics Technician
- Avionics Electronics Technician

No invented employment dates were found.

## Accessibility-critical review

Automated checks covered:

- Public route landmarks and one visible H1 per route.
- Responsive overflow checks at 390x844 for representative public routes.
- Skip link focus movement to the main landmark.
- Shared navigation reachability.
- External link accessible names for supporting-tab behavior.
- Email action behavior.
- Lightbox keyboard close and focus behavior for representative case-study visuals.
- Back-to-top keyboard operation.
- Missing-route noindex behavior.

Manual/browser-level checks covered:

- Production desktop and 390x844 route rendering for all nine public routes.
- One `main` landmark and one H1 per production route.
- Shared navigation labels on all production routes.
- Resume section order on production.
- Contact language on production, including absence of remote-first wording.

No focus trap outside the native dialog was found in the automated lightbox coverage. Image alternative text remains covered by the existing visual-evidence and lightbox tests for representative visuals.

This is not a WCAG conformance claim or accessibility certification.

## Metadata and indexing

Local production-build output was validated from `http://127.0.0.1:3001`.

Production output was validated from `https://portfolio-swart-rho-44.vercel.app`.

Validated metadata/indexing items:

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
- `/projects/unicos`
- `/projects/home-security-lab`
- `/projects/forkfolio`
- `/about`
- `/resume`
- `/contact`

`robots.txt` allows public crawling, points to `sitemap.xml`, and uses the configured origin in both local and production checks.

## Production-origin validation

Direct production-origin validation was completed for:

`https://portfolio-swart-rho-44.vercel.app`

Production results:

- HTTPS origin resolved.
- All nine public HTML routes returned 200.
- Known missing route returned 404.
- Production titles and descriptions matched current positioning.
- Canonical URLs used the production origin.
- `robots.txt` used the production origin.
- `sitemap.xml` used the production origin and contained exactly nine public routes.
- About ProfilePage structured data reflected the current positioning.
- Resume reflected the experience-forward hierarchy.
- Contact did not use remote-first language.
- Desktop and 390x844 production browser checks found no horizontal overflow.
- Key internal navigation worked.

## Known limitations

- Browser automation is Chromium-only.
- This validation is not a cross-browser certification.
- This validation is not a formal accessibility conformance audit.
- This validation is not a security audit.
- This validation is not a production performance certification.
- This validation does not establish availability, uptime, or an SLA.
- Source scans include governance documents and tests; some prohibited or stale phrases remain there only as claim boundaries, historical governance text, or negative test assertions.

## Release decision

Slice 17 release validation passed.

No application defect, broken public route, accessibility-critical release blocker, metadata/indexing blocker, privacy leak, unsupported claim expansion, or reachable production-origin failure was found during Slice 17F validation.

## Next roadmap action

Reassess deferred Slices 16F, 16G, and 16H.
