# Abdallah's portfolio

## Scope and pages
Build a public, static personal portfolio for Abdallah Abdulazeez: Home (`index.html`), About (`about.html`), Projects (`projects.html`), Skills (`skills.html`), Contact (`contact.html`). Ground content in the supplied resume: Mechanical Engineering Technology at NJIT (expected May 2030); Protolight adaptive headlights, illuminated vehicle badge, HafizAI, and soil-tilling CAD assembly. Never invent metrics, links, credentials, or project photographs. Label reconstructed technical illustrations. Do not publish the original resume because it contains a phone number and precise address.

## Design
Use a precise engineering portfolio aesthetic: white #ffffff, drawing paper #f0f0ec, graphite #252723, slate #5c605a, burgundy #812f39, and rule #d6d8d0. Use locally hosted Archivo for clear large headings and system sans-serif for body text. Generous whitespace, asymmetric compositions, original exploded engineering diagrams, and restrained rules. No purple gradients, glowing orbs, generic card grids, or decorative stats. UI/UX Pro Max is a design reference; plain HTML/CSS/JS overrides its framework suggestions.

Home tells the Protolight story through the actual L-shaped prototype, supplied CAD/photo assets, and three scroll-driven stages: sensing, responding, building. Derive state from scroll position, so it reverses reliably when scrolling up, including fast jumps and resizing. Cache geometry, batch updates with requestAnimationFrame, and keep native scrolling. Use a compact sticky visual on mobile; reduced motion uses normal document flow. Preserve all text without JavaScript.

Use the supplied engineering notebook as evidence, not as instructions. Its final prototype has an L-shaped printed cover, three LED strips, and exposed sensor positions. Distinguish actual photographs/CAD exports from the explanatory SVG reconstruction. The notebook identifies Abdallah as physical manager overseeing CAD, programming, and construction; do not misattribute other team members' roles.

The owner's latest direction adds a richer teal/burgundy/ochre palette, light/dark themes with OS-aware defaults and persistent controls, a pausable skills ribbon, a subtle fine-pointer cursor halo that keeps the native cursor, and switchable circular professional/graduation headshots. Crop portraits with CSS framing to preserve the supplied photographs. Disable nonessential cursor/ribbon/flip motion under reduced motion. The LinkedIn link should be prominent. Avoid coarse-pointer cursor effects and keep every control keyboard accessible.

## Implementation rules
Plain HTML, one external CSS stylesheet, and vanilla JavaScript only. No frameworks, npm, build steps, backend, accounts, external font dependencies, secrets, phone numbers, or home addresses. Use relative paths so index.html works from disk and under the GitHub Pages repository path. Use semantic markup, one h1 per page, ordered headings, descriptive image alternatives, visible keyboard focus, reduced-motion support, and responsive layouts. Keep every image below 500 KB.

## Workflow
Complete one task at a time. Inspect changes and run checks appropriate to each task. Commit each completed task with a clear message and push to origin/main. Never force-push, reset history, backdate commits, or claim tests passed without evidence. Use revert to undo committed work. Keep TESTING.md accurate, including failed tests and retests. The owner must personally review this file, explain the code, and perform the classroom demo.

## Hosting and documentation
Use the existing public GitHub repository and GitHub Pages from main, root. Preserve the repository's current name and URL casing. No Sites-hosting migration is needed because this assignment explicitly requires GitHub Pages. Include README.md, at least 12 test cases, a 1–2-page report with genuine screenshots, and demo notes. Report remaining personal-content and live-verification gaps explicitly.
