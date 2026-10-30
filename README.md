# Abdallah's portfolio

A responsive portfolio for **Abdallah Abdulazeez**, a Mechanical Engineering Technology student at NJIT. Built with plain HTML, one shared CSS stylesheet, and vanilla JavaScript for the Personal Portfolio Website Development and Deployment assignment.

- Repository: https://github.com/abdabdulazeez08-hub/Portfolio
- Live website: https://abdabdulazeez08-hub.github.io/Portfolio/

## View locally

Double-click `index.html`. No package manager, build step, API key, or server is required. Navigate using the links on each page.

## Pages and features

- **Home:** switchable circular portraits, an introduction, a pausable skills ribbon, selected work, and a six-chapter Protolight story. Native scrolling moves through sensing, response, CAD, wiring, revisions, and the real final build; scrolling up reverses the visuals. Component labels stay below the artwork. A compact sticky visual works on phones, while reduced motion uses normal document flow.
- **About:** education, professional experience, community involvement, and interests from the supplied resume.
- **Projects:** Protolight, an illuminated vehicle badge, HafizAI, and a soil-tilling CAD assembly, with descriptions, roles, tools, and images.
- **Skills:** CAD, fabrication, electronics, software, and data skills connected to project evidence.
- **Contact:** email, LinkedIn, GitHub, and a validated email-draft form. The form does not send or store messages; it opens a draft in the visitor's configured email app after a separate click.

Shared features include a keyboard-accessible mobile menu, prominent LinkedIn link, persistent light/dark mode with an operating-system default and a sun/moon circular reveal, visible focus indicators, a skip link, current-page navigation, and motion preference controls. A small animated ring accompanies fine mouse pointers while preserving the native cursor; it is disabled for touch and reduced motion. Reading progress uses native CSS scroll timelines where available. All page content and navigation remain usable without JavaScript.

## Deployment

GitHub Pages publishes the **main** branch from **/ (root)**. The repository is public. Relative paths support both the `/Portfolio/` deployment path and opening `index.html` directly from disk. `.nojekyll` preserves the buildless static site.

Use small, descriptive commits and normal pushes. Do not force-push or backdate commits. Implementation and revisions retain their actual commit dates; the owner remains responsible for the course's process and demo requirements.

## Documentation and review

- [AGENTS.md](AGENTS.md): scope, design, coding, Git, privacy, and review rules.
- [DESIGN.md](DESIGN.md): visual and motion decisions.
- [TESTING.md](TESTING.md): live test plan, results, failures, fixes, and retests.
- [Submission report](output/pdf/portfolio-report.pdf): two-page report with real screenshots of the live site at desktop and phone viewport sizes.
- [DEMO.md](DEMO.md): a three-minute demonstration outline and JavaScript explanations.
- [Test evidence](docs/testing-results.json): browser-check results and Lighthouse scores.

The owner must personally review AGENTS.md and the code, practice the keyboard demo on actual devices, and upload the report to the course assignment.

## Project media

**Protolight now uses actual photos and CAD exports** extracted from the supplied capstone notebook, plus an explanatory SVG reconstruction of the real L-shaped prototype. The professional portrait also comes from the notebook, and the graduation photo was supplied separately. Portraits preview the alternate image on mouse hover, restore it on exit, and support horizontal touch swipes, click, and keyboard controls. Headshot crops are CSS framing; the faces are not retouched or AI altered. The alternate graduation image loads on intent, and responsive project images reduce phone downloads. See [media sources](docs/MEDIA.md).

The badge, HafizAI, and soil-tilling images remain **labeled illustrative placeholders** until their actual media is provided. A public HafizAI URL can also be added later. Keep every replacement image under 500 KB and update alt text/captions. No live product URL or third-party source repository is invented.

The original resume is intentionally excluded because it includes a phone number and precise location details. The portfolio contains the supplied professional email and profile links.

## Acknowledgments

Created with Codex assistance. The technical placeholder illustrations and site implementation are original to this repository. No third-party website template, framework, runtime CDN, API, or animation library is used.

- [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): design-system and accessibility guidance (MIT; reference only).
- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines): interface review reference.
- [Archivo / Omnibus-Type](https://github.com/Omnibus-Type/Archivo): locally hosted variable font, distributed under the SIL Open Font License; see [font license](assets/fonts/OFL-Archivo.txt). The Latin WOFF2 was obtained through Google Fonts.

Browser automation and Lighthouse were used as isolated development verification tools. They are not website dependencies; no npm installation or build step is needed to run this site.

Theme transitions progressively enhance the [native View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/same-document), with a color-transition fallback and an immediate reduced-motion alternative.
