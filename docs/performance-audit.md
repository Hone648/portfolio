# Performance Audit

## Audit Context

- Audit date: July 28, 2026
- Branch: `perf/slice-10c-performance-audit`
- Base commit: `576ac76c61cbfc09cf6325dcdbec533d357e2461` (`feat: add portfolio metadata and sharing surfaces (#21)`)
- Operating system: Microsoft Windows 11 Home 10.0.26200, build 26200, AMD64
- Machine: `HUNTERS-PUTER`, Intel Core i7-14700HX, 20 cores and 28 logical processors, 16,869,351,424 bytes installed memory
- Runtime: bundled Codex Node.js `v24.14.0`; npm `11.7.0`
- Framework: Next.js `16.2.11`; React `19.2.4`
- Audit tools: Lighthouse `12.8.2`; Chrome `150.0.7871.187`

The isolated executor did not inherit the user's normal PowerShell profile or fnm environment, so validation used the bundled Codex Node.js 24 runtime. The repository's `.nvmrc` and Node engine requirement remain unchanged.

## Methodology

The audit used a clean production build with `SITE_URL=http://127.0.0.1:3001`, followed by the Next.js production server at `127.0.0.1:3001`. The effective server command was:

```powershell
C:\Users\hone6\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe C:\dev\portfolio\node_modules\next\dist\bin\next start --hostname 127.0.0.1 --port 3001
```

All public HTML, indexing, generated-image, icon, and missing-route checks ran against that server. Lighthouse ran in mobile performance mode three times per representative route: `/`, `/projects`, `/projects/newbudget`, `/projects/unicos`, and `/about`. Each table value is the middle value after sorting the three results for that metric independently. Ranges show the observed minimum and maximum.

Raw reports and logs are temporary and uncommitted under `%TEMP%\portfolio-slice-10c`. They are not repository artifacts.

## Baseline Results

| Route | Score | FCP | LCP | Speed Index | TBT | CLS | Transfer | Requests | JS | CSS | Images |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 99 | 908 ms | 2,210 ms | 908 ms | 26 ms | 0 | 198,245 B | 31 | 153,461 B | 6,526 B | 0 B |
| `/projects` | 99 | 907 ms | 2,103 ms | 907 ms | 26 ms | 0 | 198,275 B | 31 | 153,461 B | 6,526 B | 0 B |
| `/projects/newbudget` | 98 | 1,056 ms | 2,353 ms | 1,056 ms | 47 ms | 0 | 213,211 B | 33 | 159,351 B | 6,526 B | 0 B |
| `/projects/unicos` | 98 | 1,056 ms | 2,355 ms | 1,056 ms | 50 ms | 0 | 218,949 B | 33 | 159,351 B | 6,526 B | 0 B |
| `/about` | 99 | 906 ms | 2,205 ms | 906 ms | 24 ms | 0 | 199,615 B | 31 | 153,461 B | 6,526 B | 0 B |

### Variation Across Three Runs

| Route | Score | FCP | LCP | Speed Index | TBT | CLS | Main-thread work |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 99 | 907-908 ms | 2,203-2,231 ms | 907-908 ms | 23-36 ms | 0 | 640-775 ms |
| `/projects` | 99-100 | 907 ms | 1,657-2,200 ms | 907 ms | 22-50 ms | 0 | 612-824 ms |
| `/projects/newbudget` | 97-98 | 1,056-1,057 ms | 2,351-2,419 ms | 1,056-1,057 ms | 45-112 ms | 0 | 653-909 ms |
| `/projects/unicos` | 98 | 1,055-1,056 ms | 2,351-2,357 ms | 1,055-1,056 ms | 45-51 ms | 0 | 798-966 ms |
| `/about` | 99-100 | 905-906 ms | 1,656-2,209 ms | 905-906 ms | 17-27 ms | 0 | 702-842 ms |

Transfer size, request count, JavaScript, CSS, and image transfer were identical across all three runs for each route.

### LCP Elements

All representative LCP elements were text, not images:

| Route | LCP element |
| --- | --- |
| `/` | Introductory positioning paragraph below `Hunter Kam` |
| `/projects` | Projects-index introductory paragraph |
| `/projects/newbudget` | Case-study summary paragraph |
| `/projects/unicos` | Case-study summary paragraph |
| `/about` | About-page positioning paragraph |

## Static and Build Audit

The application has no Client Components, `next/script` use, third-party browser scripts, analytics, telemetry, tag manager, service worker, or web font. Direct runtime dependencies are `@mdx-js/loader`, `@mdx-js/react`, `@next/mdx`, Next.js, React, and React DOM.

The clean build generated 16 routes. Public content is static, with the three case-study routes generated through SSG. `.next/static` contained 13 JavaScript files totalling 651,369 uncompressed bytes and two CSS files totalling 36,482 uncompressed bytes. The largest emitted browser assets were 227,315 B, 150,470 B, and 112,594 B JavaScript chunks, followed by a 54,646 B JavaScript chunk, a 50,702 B JavaScript chunk, and a 34,032 B stylesheet. The build manifest showed no unexpected route-specific client bundle.

Initial Lighthouse transfer was 153,461 B of JavaScript and 6,526 B of CSS on `/`, `/projects`, and `/about`; case studies transferred 159,351 B of JavaScript and the same CSS. The extra case-study transfer is framework output for the generated route, not an application-owned interactive bundle.

## Asset and Image Audit

`public` contains 16 evidence assets totalling 1,241,626 B: 14 PNG screenshots and two SVG diagrams. PNGs range from 40,954 B to 217,756 B at approximately 1,913-1,919 by 909-917 pixels. The diagrams are 8,232 B at a `1600x1000` viewBox and 8,664 B at a `1600x1100` viewBox.

The only image component is the Server Component gallery. It uses registry-owned intrinsic width and height, `sizes="(max-width: 832px) 100vw, 528px"` for screenshots, and `sizes="(max-width: 1088px) 100vw, 1088px"` for diagrams. Screenshots are responsive with `height: auto`; all gallery images use normal lazy loading. SVGs and the `development-admin` PNG bypass optimisation. Initial representative-route loads transferred zero image bytes because every gallery is below the fold, and the LCP element is text.

Lighthouse reported zero savings for offscreen images, responsive images, modern image formats, image delivery, and image optimisation. Manual gallery review confirmed that visible screenshots use appropriate responsive derivatives, later screenshots remain unloaded until useful, original full-size links remain available, and intrinsic sizing prevents layout shift. The `development-admin` bypass has no measurable initial-load impact, and its 46,226 B original remains readable; no evidence justified changing the exception or risking text and privacy fidelity.

## CSS and Rendering Audit

Source CSS comprises 12 files totalling 34,308 B. It uses system fonts, responsive grids, intrinsic image sizing, restrained shadows, and short transitions. There are no filters, backdrop filters, fixed rendering effects, `content-visibility`, containment, or animation-heavy surfaces. Reduced-motion media queries disable the site header and button-link transitions.

Lighthouse found no unused-CSS savings and recorded CLS of zero on every run. The repeated render-blocking finding identified only the two first-party stylesheets, transferred as 5,077 B and 1,449 B. Their estimated saving ranged from 172-302 ms, but the CSS is small, route-critical, and not duplicated by an application-owned loading path. No CSS extraction, preload, or deferred-rendering change was accepted.

## Lighthouse Findings and Gate Decisions

| Finding | Repeated estimate | Gate result | Decision |
| --- | ---: | --- | --- |
| Render-blocking first-party CSS | 172-302 ms; 6,526 B total | Crossed the 100 ms estimate threshold | Rejected. Both small stylesheets are required for initial rendering; no duplicated request or safe project-owned loading defect was identified. |
| Unused JavaScript | about 29,570-29,679 B; usually 300 ms | Crossed the 100 ms estimate threshold, but not the 50 KiB transfer threshold | Rejected. The finding is one shared Next.js/React framework chunk on routes with no Client Components; there is no application browser import or boundary to remove. |
| Legacy JavaScript | 13,684 B; usually 150 ms | Crossed the 100 ms estimate threshold, but not the 50 KiB transfer threshold | Rejected. It is reported within the same shared framework chunk and cannot be removed through a narrow project-owned change in this slice. |
| Unused CSS | 0 B | Did not cross | No change. |
| Image format, sizing, delivery, optimisation, and offscreen loading | 0 B / 0 ms | Did not cross | No change. |
| Font display | No finding | Did not cross | No change; the site uses local system stacks. |
| Main-thread work | Median 742-843 ms on the heavier representative pages | Did not cross a named actionable opportunity | No change; no application-owned client execution hotspot was identified. |

The three audits with non-zero estimated savings repeated as follows:

| Route | Render-blocking CSS | Unused JavaScript | Legacy JavaScript |
| --- | --- | --- | --- |
| `/` | 172-205 ms; 6,526 B transferred | 29,679 B; 300 ms | 13,684 B; 150 ms |
| `/projects` | 189-212 ms; 6,526 B transferred | 29,644 B; 0-300 ms | 13,684 B; 0-150 ms |
| `/projects/newbudget` | 176-301 ms; 6,526 B transferred | 29,570 B; 300 ms | 13,684 B; 150 ms |
| `/projects/unicos` | 178-302 ms; 6,526 B transferred | 29,570 B; 300 ms | 13,684 B; 150 ms |
| `/about` | 201-301 ms; 6,526 B transferred | 29,679 B; 0-300 ms | 13,684 B; 0-150 ms |

The critical-request-chain audit passed and found two chains. The longest sampled chain was one stylesheet request after the HTML, 43.7 ms and 5,077 B. The network dependency tree contained only the document and two local stylesheets in its critical path; it found no preconnected origins and no origin worth preconnecting.

No representative route had a median score below 95, LCP above 2.5 seconds, TBT above 200 ms, CLS above 0.1, a repeated 50 KiB transfer opportunity, an unnecessary application request, an incorrectly loaded image, or an application-owned client bundle. The estimated CSS and framework-JavaScript opportunities were investigated because they crossed the 100 ms diagnostic threshold, but neither exposed a narrow, defensible runtime correction.

## Final Results

No runtime optimisation was accepted, so the final measurement is the validated baseline and no second synthetic matrix was manufactured.

| Route | Baseline score | Final score | Baseline LCP | Final LCP | Baseline TBT | Final TBT | Baseline CLS | Final CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 99 | 99 | 2,210 ms | 2,210 ms | 26 ms | 26 ms | 0 | 0 |
| `/projects` | 99 | 99 | 2,103 ms | 2,103 ms | 26 ms | 26 ms | 0 | 0 |
| `/projects/newbudget` | 98 | 98 | 2,353 ms | 2,353 ms | 47 ms | 47 ms | 0 | 0 |
| `/projects/unicos` | 98 | 98 | 2,355 ms | 2,355 ms | 50 ms | 50 ms | 0 | 0 |
| `/about` | 99 | 99 | 2,205 ms | 2,205 ms | 24 ms | 24 ms | 0 | 0 |

There are no route-specific improvements or regressions and no reverted runtime optimisation. The evidence-supported result of Slice 10C is an audit with no runtime optimisation.

## Manual Regression Review

Desktop and narrow-mobile review covered every public HTML route. No horizontal overflow appeared at the narrow viewport, and the homepage and project gallery reflowed without overlap. A 640 CSS-pixel reflow review represented a 1280-pixel desktop at 200% zoom; the in-app browser did not expose a persistent browser-zoom override, so this width-equivalent check is recorded as a tooling limitation rather than an exact zoom claim.

Keyboard review confirmed visible 3 px focus outlines on interactive links and preserved native link behaviour. Static reduced-motion review confirmed that the only transitions are disabled under `prefers-reduced-motion: reduce`. Gallery review confirmed the desktop two-column and mobile one-column layouts, lazy loading, readable screenshot and diagram detail, and intact approved redactions. All 16 full-size asset destinations returned HTTP 200. Generated Open Graph and Twitter images, the favicon, and the Apple icon rendered correctly. The route titles and metadata implementation remained unchanged. Browser review produced no console warnings or errors, and route, asset, image, icon, robots, and sitemap requests completed without failure.

This review does not claim accessibility conformance from Lighthouse or synthetic checks alone.

## Limitations and Deferred Checks

Local Lighthouse is synthetic lab evidence. It does not measure production users, network geography, CDN cache state, cold deployments, browser diversity, device diversity, long-term interaction behavior, or field Core Web Vitals. Short local runs also contain normal scheduling variation, visible in the LCP and main-thread ranges.

Slice 12 must configure and verify the final production `SITE_URL`, production deployment, headers, CDN and cache behaviour, generated metadata routes, and production-origin request behavior. Post-launch work may add privacy-reviewed real-user or field data only through a separately approved analytics decision. Production performance claims require that evidence; this audit does not make them.

## Slice 10D Lightbox Comparison

This dated July 28, 2026 comparison preserves the historical Slice 10C audit above. It measures the first approved application-owned Client Component: the case-study visual lightbox on branch `feat/slice-10d-case-study-lightbox`, based on `7e494674c3d4ecf299e157a453a1849740ded4e8`.

The before and after builds used bundled Codex Node.js `v24.14.0`, npm `11.7.0`, `SITE_URL=http://127.0.0.1:3001`, the Next.js production server on port 3001, Lighthouse `12.8.2`, and Chrome `150.0.7871.187`. Each route received three mobile performance runs, and each metric uses its independently sorted median. Raw reports remain temporary and uncommitted under `%TEMP%\portfolio-slice-10d`.

| Route | Phase | Score | FCP | LCP | TBT | CLS | Transfer | Requests | JS | CSS | Images |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/projects/newbudget` | Before | 98 | 1,057 ms | 2,375 ms | 68 ms | 0 | 213,245 B | 33 | 159,351 B | 6,526 B | 0 B |
| `/projects/newbudget` | After | 98 | 1,057 ms | 2,352 ms | 45 ms | 0 | 215,221 B | 33 | 160,398 B | 7,290 B | 0 B |
| `/projects/unicos` | Before | 98 | 1,056 ms | 2,358 ms | 52 ms | 0 | 218,981 B | 33 | 159,351 B | 6,526 B | 0 B |
| `/projects/unicos` | After | 98 | 1,057 ms | 2,355 ms | 48 ms | 0 | 222,646 B | 33 | 160,398 B | 7,290 B | 0 B |

The isolated interaction adds 1,047 B of transferred JavaScript and 764 B of CSS per measured case-study route. Request count, score, and CLS are unchanged. Median LCP moved by -23 ms on newBudget and -3 ms on Unicos; median TBT moved by -23 ms and -4 ms respectively. Those small favourable movements are normal synthetic variation and are not claimed as an optimisation benefit. The total route transfer increase also includes the serialised selected-visual data: 1,976 B on newBudget and 3,665 B on Unicos.

The closed route still transfers zero gallery-image bytes. On desktop, opening the lightbox requested exactly one larger derivative for the selected image; no hidden enlarged images were rendered or requested. On the narrow viewport, the modal reused the already-loaded selected 640-pixel derivative and added no image request. The direct original-asset links remain separate from modal image delivery.

Manual production review covered wide desktop, narrow mobile, landscape mobile, a 320-pixel short viewport, and a 640-CSS-pixel width-equivalent 200% reflow check. The native dialog retained reachable Close and original-asset controls, internal caption scrolling for constrained height, no horizontal overflow, stable background layout during scroll locking, and exact focus restoration after Close and backdrop dismissal. Screenshot text, diagram detail, existing optimisation bypasses, and approved redactions remained intact. Reduced-motion and forced-colour rules are explicit in the lightbox CSS; the available in-app browser did not expose media emulation or persistent browser zoom, so those checks combine source review with the documented width-equivalent reflow limitation rather than claiming full cross-browser assistive-technology coverage.
