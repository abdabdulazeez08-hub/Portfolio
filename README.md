# Abdallah's portfolio

A responsive portfolio for **Abdallah Abdulazeez**, a Mechanical Engineering Technology student at NJIT. Built with plain HTML, one shared CSS stylesheet, and vanilla JavaScript for the Personal Portfolio Website Development and Deployment assignment.

- Repository: https://github.com/abdabdulazeez08-hub/Portfolio
- Live website: https://abdabdulazeez08-hub.github.io/Portfolio/

## View locally

Double-click `index.html`. No package manager, build step, API key, or server is required. Navigate using the links on each page.

## Pages and features

- **Home:** introduction, selected work, and a three-stage Protolight story. The technical assembly changes as you scroll on desktop; on mobile it becomes a readable vertical sequence.
- **About:** education, professional experience, community involvement, and interests from the supplied resume.
- **Projects:** Protolight, an illuminated vehicle badge, HafizAI, and a soil-tilling CAD assembly, with descriptions, roles, tools, and images.
- **Skills:** CAD, fabrication, electronics, software, and data skills connected to project evidence.
- **Contact:** email, LinkedIn, GitHub, and a validated email-draft form. The form does not send or store messages; it opens a draft in the visitor's configured email app after a separate click.

Shared features include a keyboard-accessible mobile menu, visible focus indicators, a skip link, current-page navigation, motion preference controls, and operating-system reduced-motion support. Reading progress uses native CSS scroll timelines where available. All page content and navigation remain usable without JavaScript.

## Deployment

GitHub Pages publishes the **main** branch from **/ (root)**. The repository is public. Relative paths support both the `/Portfolio/` deployment path and opening `index.html` directly from disk. `.nojekyll` preserves the buildless static site.

Use small, descriptive commits and normal pushes. Do not force-push or backdate commits. This implementation was completed in one work session; it does not claim to fulfill the rubric's requirement for work spread across multiple days.

## Documentation and review

- [AGENTS.md](AGENTS.md): scope, design, coding, Git, privacy, and review rules.
- [DESIGN.md](DESIGN.md): visual and motion decisions.
- [TESTING.md](TESTING.md): live test plan, results, failures, fixes, and retests.
- [Submission report](output/pdf/portfolio-report.pdf): two-page report with real screenshots of the live site at desktop and phone viewport sizes.
- [DEMO.md](DEMO.md): a three-minute demonstration outline and JavaScript explanations.
- [Test evidence](docs/testing-results.json): browser-check results and Lighthouse scores.

The owner must personally review AGENTS.md and the code, practice the keyboard demo on actual devices, and upload the report to the course assignment.

## Project media

At the owner's request, project visuals are **labeled illustrative placeholders**, not actual project photographs, CAD exports, or HafizAI screenshots. Actual media and a public HafizAI URL can be added later. Replace the relevant `assets/images/` files, update alt text and captions, and keep every image under 500 KB. No live product URL or third-party source repository is invented.

The original resume is intentionally excluded because it includes a phone number and precise location details. The portfolio contains the supplied professional email and profile links.

## Acknowledgments

Created with Codex assistance. The technical placeholder illustrations and site implementation are original to this repository. No third-party website template, framework, runtime CDN, API, or animation library is used.

- [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): design-system and accessibility guidance (MIT; reference only).
- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines): interface review reference.
- [Archivo / Omnibus-Type](https://github.com/Omnibus-Type/Archivo): locally hosted variable font, distributed under the SIL Open Font License; see [font license](assets/fonts/OFL-Archivo.txt). The Latin WOFF2 was obtained through Google Fonts.

Browser automation and Lighthouse were used as isolated development verification tools. They are not website dependencies; no npm installation or build step is needed to run this site.
