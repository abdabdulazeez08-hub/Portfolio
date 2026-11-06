# Portfolio continuation handoff

Read this file first, then AGENTS.md. This is the durable handoff requested by the owner so another assistant can continue without access to the chat. The source and test records take precedence over an old summary. Never invent completed tests, personal review, classroom demo, product links, metrics, or project results.

## Project and deployment

- Owner: Abdallah Abdulazeez, NJIT Mechanical Engineering Technology, expected May 2030.
- Public repository: https://github.com/abdabdulazeez08-hub/Portfolio
- Live site: https://abdabdulazeez08-hub.github.io/Portfolio/
- GitHub Pages: main branch, repository root. Preserve `Portfolio` URL casing. `.nojekyll` is intentional.
- Five static pages: index.html, about.html, projects.html, skills.html, contact.html.
- Plain HTML, one styles.css, vanilla script.js and early theme.js. No framework, npm requirement, build step, backend, account, API key, or external font dependency.
- All paths are relative. Double-clicking index.html must work, as must hosting under `/Portfolio/`.
- Workflow: one task at a time, test/inspect, clear commit, normal push to origin/main. Never force-push, reset history, or backdate. Existing work dates are genuine (October 29/30 and November 5, 2026).

## What was already complete

All five pages, real resume-grounded descriptions, four projects, local Archivo, responsive navigation, prominent LinkedIn, light/dark controls, sun/moon reveal, OS and persistent preferences, reduced-motion control, pausable skills ribbon, fine-pointer-only halo preserving the native cursor, two circular portraits, static contact validation/email drafting, and the six-chapter Protolight home story.

The October work added actual Protolight notebook photos/CAD and reliable reverse-scroll behavior. A November resume task created `output/pdf/abdallah-abdulazeez-resume.pdf` and linked it from About and Contact. Its private contact header was removed before rebuilding. The original resume is not published. Do not add phone numbers, postal/home details, or the original resume.

Before this media update, 124 live browser checks and fresh per-page Lighthouse accessibility 100 were recorded against commit a118bac. Commit 11b1b88 saved that evidence. These are historical results, not an automatic pass for later source.

## This media update

The owner supplied 22 images and asked to use as many as useful, make the remaining projects into scrollytelling like Protolight, improve the presentation, push everything, and document completed/remaining work for another AI.

18 selected, optimized WebP files were added. Source frames are preserved, EXIF orientation is normalized, and source metadata is not copied. Every file is below 500 KB. Four near-duplicate badge photographs were omitted. No generated project photo, fabricated screenshot, or retouching was used.

| Project | Chapters and media | Grounded scope |
| --- | --- | --- |
| Vehicle badge | 4: exterior, internal cavity, reverse/acrylic view, illuminated panel. Five actual photos including the Home preview. | Printed rear-body display, mating parts, hand-soldered internal harness, concealed LED/battery, engraved edge-lit acrylic, latching switch. Not a full-size car. |
| HafizAI | 7: tracker, practice, Quran reader, recitation feedback, captured session result, Sheik AI, community. Also supplied logo and waitlist-page capture. | Sole designer/developer using AI-assisted tools. Screenshots show interface features. They do not establish aggregate recognition accuracy, audience metrics, or current launch status. |
| Tiller | 4: overview, side/chain path, opposite angle, mechanism view. Four actual CAD screenshots. | Imported VEX component library arranged into a full CAD vehicle/drivetrain/digging assembly. Not a fabricated or field-tested machine. |

All placeholder project SVGs (badge.svg, hafizai.svg, tiller.svg) were replaced and removed. Protolight's explanatory assembly SVG remains correctly labeled as a reconstruction. The Home badge preview is now an actual photo. All new stories live on Projects; the existing six-chapter Protolight story stays on Home.

## Files and architecture

- `index.html`: introduction, portraits, skills ribbon, two selected previews, six Protolight chapters.
- `about.html`: education, experience, interests, portraits, public-resume download.
- `projects.html`: static Protolight case study/gallery plus 15 new chapters under `#badge`, `#hafizai`, and `#tiller`. `data-media-story`, `data-media-step`, `.media-inline`, and `.media-full-link` are the new hooks.
- `skills.html`: source-grounded technical skills.
- `contact.html`: email, LinkedIn, GitHub, resume, validated static email-draft form.
- `styles.css`: original shared design followed by project-story styles near the end. Mint/navy/teal/burgundy/ochre; original app purple is retained only inside authentic app assets.
- `script.js`: existing feature groups followed by `mediaStories`, `renderMediaStories`, and `queueMediaStories`.
- `theme.js`: early OS/saved-theme initialization and enhancement-load fallback.
- `assets/images`: optimized source media. `docs/project-media.json` records each new asset's source filename, dimensions, bytes, and treatment.
- `docs/MEDIA.md`: provenance and representation limits. No original private source document is required to run the site.
- `README.md`: viewing/deployment/features/docs.
- `TESTING.md`: historical and latest case tables, failures, fixes, retests. Read dates and source versions carefully.
- `docs/testing-results.json`: October evidence. `docs/resume-rubric-results.json`: earlier November resume evidence. New project result files are separate.
- `CODE_REVIEW.md`: owner's checklist and JavaScript walkthrough. `DEMO.md`: three-minute demo guide. Neither claims the owner has completed those steps.
- `docs/RUBRIC.md`: assignment criteria and gaps.
- `output/pdf/portfolio-report.pdf`: two-page submission report. Refreshed with the new stories and live captures; review/verification is recorded below.
- `tools/serve.cjs`: optional localhost-only development server; no server is deployed.
- `tools/verify-project-stories.cjs`: reproducible optional Playwright checks; test libraries are development tools, not website dependencies.
- `.qa/`: ignored scratch work and earlier machine-specific browser/report scripts. Do not stage the whole directory or treat it as portable tooling.

## How the new story engine works

Original figures remain inside the chapters in HTML. JavaScript creates a decorative `aria-hidden` sticky stage containing duplicate images. Normal enhanced layouts visually clip original figures without removing their accessible text. Static modes show the originals and hide the stage.

The renderer caches document coordinates of chapter centers. A passive scroll event queues one animation frame for all new stories. The reading line is the viewport center on desktop and below the sticky panel on phone. The nearest center selects one image and the matching source caption/count. It works forward, backward, after a distant jump, and after resizing. IntersectionObserver only gates nearby work. ResizeObserver, viewport events, font readiness, motion changes, and pageshow invalidate geometry.

Reduced motion or a viewport height at most 600px changes `data-story-mode` to static. Without JS, no stage exists and all images/copy are readable. Print also restores originals. On phones, app/photo stage images are CSS-framed details; CAD fits the complete model. Every chapter links to its complete image. All originals remain unmodified apart from orientation/size/format optimization.

The mobile focus handler aligns links below `header.offsetHeight + stage.offsetHeight + 20`. Caption space is fixed at two lines to avoid the panel growing over a focused link. Stage duplicates have no links or focusable controls. The native cursor and native vertical scrolling remain intact.

## Run and test

To preview: double-click index.html, or from the repo root run `node tools/serve.cjs` and open http://127.0.0.1:8000/. If port 8000 is already in use, reuse the existing server or edit the optional server's port; do not kill unrelated processes.

For browser tests, use an existing Playwright installation and Chrome. Do not add npm/build tooling to the website. In PowerShell:

```powershell
$env:PORTFOLIO_PLAYWRIGHT = 'absolute/path/to/existing/node_modules/playwright'
$env:PORTFOLIO_CHROME = 'absolute/path/to/chrome.exe'
node tools/verify-project-stories.cjs http://127.0.0.1:8000/ docs/project-story-local-results.json
node tools/verify-project-stories.cjs https://abdabdulazeez08-hub.github.io/Portfolio/ docs/project-story-live-results.json
```

The test writes genuine screenshots into docs/screenshots, so later screenshot runs should be reviewed before committing. It checks all chapter directions/jumps, resize, captions, decoded images, full-image keyboard navigation, reduced motion, footer motion control, short landscape, both themes/layout widths, no-JS reading, assets, and console errors. Native smooth focus scrolling must settle before checking bounds. A raw-image document may request `/favicon.ico`; that browser-generated request is excluded from normal page-console assertions, and response logs retain the URL. HTML pages use the supplied SVG favicon.

Earlier checks in ignored `.qa` cover all-page core navigation/keyboard/form behavior, the Home story, theme/portrait gestures, and broader recovery. Their dependency paths are machine-specific. The latest evidence files and TESTING.md state which were actually rerun. Do not infer checks from a script merely existing.

Lighthouse is an optional installed CLI used for live audits. No audit dependency is loaded by the public pages. Run accessibility on every page after meaningful shared CSS/JS changes and record actual values/dates. Keep all images, including documentation screenshots, below 500 KB. Verify the public PDF hash and relative image links after Pages deploys. A push does not itself prove deployment; compare actual live source/assets or deployment status.

## Verification and corrected mistakes

Initial new-story tests caught a mobile focus offset based on the offscreen stage position, and later a wrapping-caption height change. Fixed the offset and reserved caption height. An early distant-chapter geometry query timed out once; subsequent state checks wait for initialized scroll mode. An old core test caught shortened project-contact subjects; restored the descriptive project names. A browser raw-image favicon request and premature native-smooth-scroll assertion were harness issues, not hidden site passes; the harness now records/handles them explicitly. Initial/second result files are retained alongside final results.

Final verification: source commit **0667bda** was pushed to origin/main and its actual project-story markup was verified live before testing. All **72 live browser cases passed**: 16 new-story, 41 all-page core, and 15 Home/theme/portrait cases. All five pages scored **100 accessibility, performance, best practices, and SEO** in the fresh light/default Lighthouse sample. These are point-in-time measurements, not a guarantee of future performance or a grade. Historical dark-theme evidence remains dated separately.

- New local/live suite: docs/project-story-local-results.json and docs/project-story-live-results.json.
- Current core/Home/Lighthouse evidence and source version: docs/project-story-regression-results.json.
- Initial failures: docs/project-story-initial-results.json and docs/project-story-second-results.json.
- Direct-file check passed locally: all 15 originals decode; no JS exceptions. Static check passed: 153 HTML references, 43 image files including screenshots, every image under 500 KB. New source assets total about 2 MB; largest 327,122 bytes.
- All six new phone/laptop captures in docs/screenshots were refreshed from the live suite. The two-page portfolio-report.pdf was regenerated, extracted, rendered, and visually reviewed with those genuine captures. It includes the required overview, challenges, Codex mistake/fix, screenshot evidence, and repository/live links at the top.
- Report regeneration is optional development tooling: tools/make-report.py needs reportlab and pypdf, reads the recorded live evidence, and expects repository-root cwd. A renderer such as pypdfium2 or Poppler is needed for visual QA. Do not silently change the report without rendering and reviewing both pages.
- Final report/evidence changes do not alter the tested HTML/CSS/JS. The final documentation push is followed by a live report-byte comparison and public handoff check. No classroom demonstration, personal review, or course submission has been claimed.

## Remaining work and decisions

- Owner must personally review AGENTS.md, source, and TESTING.md; use CODE_REVIEW.md. No checkbox has been marked for the owner.
- Owner must practice and perform the three-minute physical phone/laptop and keyboard classroom demo, explaining whichever JavaScript the instructor chooses. Browser emulation is not a physical-device demonstration.
- Owner must upload the two-page report and provide the repository/live links in the course submission. No submission or email is sent by this task.
- Optional: provide a verified public HafizAI URL and current release status. Do not infer that a supplied screenshot means the app is publicly launched, or invent a URL.
- Actual project media is now complete. Do not keep asking the owner for the three replaced project images.
- Real mail-app configuration/sending is outside this static site. Tests verify draft construction only; no message was sent.
- Future changes must retain keyboard focus, meaningful image alternatives, reduced-motion/static fallbacks, relative paths, and truthful source labels. Genuine commit history must remain intact. A full grade cannot be guaranteed by automation.

## Suggested next assistant starting point

1. Read AGENTS.md and this handoff; run `git status --short` and `git log -5 --oneline` before editing.
2. Read the final verification section and TESTING.md's latest section; distinguish old evidence from current live checks.
3. Visit the live Projects stories and public resume. If a new request arrives, implement only that request while preserving these behaviors.
4. Make changes small and concrete, update affected docs/tests, inspect phone/laptop captures, commit and push normally, verify the resulting live deployment, and leave truthful remaining gaps.
