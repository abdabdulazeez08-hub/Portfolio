# Abdallah's portfolio

A responsive portfolio for **Abdallah Abdulazeez**, a Mechanical Engineering Technology student at NJIT. Built with plain HTML, one shared CSS stylesheet, and vanilla JavaScript for the Personal Portfolio Website Development and Deployment assignment.

- Repository: https://github.com/abdabdulazeez08-hub/Portfolio
- Live website: https://abdabdulazeez08-hub.github.io/Portfolio/

## View locally

Double-click `index.html`. No package manager, build step, API key, or server is required. Navigate using the links on each page.

## Pages and features

- **Home:** switchable circular portraits, an introduction, a four-discipline engineering-practice map, a pausable skills ribbon, selected work, and a concise Observe / Model / Build / Test process. The page introduces Abdallah without placing one project beside his name.
- **About:** education, professional experience, community involvement, and interests from the supplied resume.
- **Projects:** all four projects are reversible scroll stories: Protolight (6 chapters), illuminated vehicle badge (4), HafizAI (7), and soil-tilling CAD assembly (4). Descriptions, roles, tools, limitations, actual media, full-image links, reduced-motion and short-screen layouts, and JavaScript-off reading are supported.
- **Skills:** CAD, fabrication, electronics, software, and data skills connected to project evidence.
- **Contact:** email, LinkedIn, GitHub, and a validated email-draft form. The form does not send or store messages; it opens a draft in the visitor's configured email app after a separate click.

Shared features include a keyboard-accessible mobile menu, prominent LinkedIn link, persistent light/dark mode with an operating-system default and a sun/moon circular reveal, visible focus indicators, a skip link, current-page navigation, and motion preference controls. A small animated ring accompanies fine mouse pointers while preserving the native cursor; it is disabled for touch and reduced motion. Reading progress uses native CSS scroll timelines where available. All page content and navigation remain usable without JavaScript.

## Deployment

GitHub Pages publishes the **main** branch from **/ (root)**. The repository is public. Relative paths support both the `/Portfolio/` deployment path and opening `index.html` directly from disk. `.nojekyll` preserves the buildless static site.

Use small, descriptive commits and normal pushes. Do not force-push or backdate commits. Implementation and revisions retain their actual commit dates; the owner remains responsible for the course's process and demo requirements.

## Documentation and review

- [HANDOFF.md](HANDOFF.md): complete continuation guide, architecture, verification history, and remaining work.
- [CODE_REVIEW.md](CODE_REVIEW.md): owner review checklist and JavaScript walkthrough.
- [AGENTS.md](AGENTS.md): scope, design, coding, Git, privacy, and review rules.
- [DESIGN.md](DESIGN.md): visual and motion decisions.
- [TESTING.md](TESTING.md): live test plan, results, failures, fixes, and retests.
- [Submission report](output/pdf/portfolio-report.pdf): two-page report with real screenshots of the live site at desktop and phone viewport sizes.
- [DEMO.md](DEMO.md): a three-minute demonstration outline and JavaScript explanations.
- [Current story evidence](docs/project-story-regression-results.json) and [live story checks](docs/project-story-live-results.json): the new update, source version, and fresh Lighthouse scores.
- [Earlier test evidence](docs/testing-results.json): historical browser-check results and Lighthouse scores.
- [Rubric checklist](docs/RUBRIC.md): every grading criterion, its evidence, and the remaining owner media/demo/submission steps.

The owner must personally review AGENTS.md and the code, practice the keyboard demo on actual devices, and upload the report to the course assignment.

## Project media

**Protolight now uses actual photos and CAD exports** extracted from the supplied capstone notebook, plus an explanatory SVG reconstruction of the real L-shaped prototype. The professional portrait also comes from the notebook, and the graduation photo was supplied separately. Portraits preview the alternate image on mouse hover, restore it on exit, and support horizontal touch swipes, click, and keyboard controls. Headshot crops are CSS framing; the faces are not retouched or AI altered. The alternate graduation image loads on intent, and responsive project images reduce phone downloads. See [media sources](docs/MEDIA.md).

**All four projects now use actual supplied media.** Projects includes 21 scroll-driven chapters: 6 Protolight chapters plus 15 chapters across the badge, HafizAI, and tiller. The stories include visible progress, active-chapter treatment, and a recovery control when the operating system initially requests reduced motion. Complete frames remain in the files; mobile sticky panels show CSS-framed details. A labeled background-removed badge cutout is used for presentation, while the untouched source photographs and full-image links remain available as evidence. Screenshots demonstrate the captured interface, not independently verified product accuracy, launch status, or user metrics. A HafizAI public URL remains optional and has not been supplied.

A [public resume PDF](output/pdf/abdallah-abdulazeez-resume.pdf) is available from About and Contact. It preserves the supplied resume content with the private contact header removed; only the professional email and LinkedIn remain in that header. The original resume is excluded because it includes a phone number and precise location details.

## Acknowledgments

Created with Codex assistance. The explanatory Protolight reconstruction and site implementation are original to this repository. No third-party website template, framework, runtime CDN, API, or animation library is used.

- [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): design-system and accessibility guidance (MIT; reference only).
- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines): interface review reference.
- [Archivo / Omnibus-Type](https://github.com/Omnibus-Type/Archivo): locally hosted variable font, distributed under the SIL Open Font License; see [font license](assets/fonts/OFL-Archivo.txt). The Latin WOFF2 was obtained through Google Fonts.

Browser automation and Lighthouse were used as isolated development verification tools. They are not website dependencies; no npm installation or build step is needed to run this site.

Theme transitions progressively enhance the [native View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/same-document), with a color-transition fallback and an immediate reduced-motion alternative.

For optional development preview, run `node tools/serve.cjs` from the repository root and open `http://127.0.0.1:8000/`. The server binds only to localhost; it is not part of the published site. Browser-check setup is documented in HANDOFF.md.
