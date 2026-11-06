# Assignment rubric checklist

Checked against the supplied 100-point Personal Portfolio Website Development and Deployment rubric. [TESTING.md](../TESTING.md) records browser checks, failures, fixes, live retests, and Lighthouse results. The source uses plain HTML, one external stylesheet, and vanilla JavaScript.

| Rubric requirement | Points | Evidence / status |
| --- | ---: | --- |
| Five pages, linked from every navigation | 6 | Home, About, Projects, Skills, and Contact; all five destinations checked from each page on phone and laptop. |
| At least three projects, descriptions, images, applicable links | 7 | Four described projects, descriptive image alternatives, and working project/contact links. All four projects are grouped on Projects as 21 scroll chapters using genuine supplied photos, CAD, or screenshots; a public HafizAI product URL has not been supplied. |
| No placeholder text or empty sections | 4 | Personal and project descriptions are written from the supplied sources; no empty sections or lorem ipsum. All four project sections now contain actual media with source captions; no placeholder project figures remain. |
| Contact details or functional static form | 3 | Public email/profile links; validated form creates an encoded email draft. It never sends or stores messages. |
| Semantic HTML5 | 5 | Landmarks and meaningful elements on every page; corrected figure/caption structure and named signal group. All five pages checked with the W3C HTML checker. |
| One h1, ordered headings | 2 | Structure checks on every page. |
| One external stylesheet, no authored inline styles | 3 | One styles.css; no style elements or style attributes in the HTML. JavaScript updates animation values at runtime. |
| Consistent colors and typography | 4 | Shared light/dark tokens, locally hosted Archivo headings, system body font, and shared header/footer. |
| Phone and laptop, no sideways scrolling | 6 | Both themes at 320px, phone, tablet, landscape, and laptop sizes; extra short-screen and text-scaling checks. |
| Responsive navigation opens and closes | 6 | On every page: menu button, Escape, outside click, and focus leaving the header. Navigation stays available if the enhancement script cannot download. |
| Another working JavaScript feature | 6 | Scroll story, theme reveal, portrait controls, ribbon pause, motion preference, and contact validation. |
| No browser console errors | 3 | Normal navigation/interaction suites collect errors. Separate failure tests deliberately abort image/script downloads to verify recovery. |
| Every image has alt text | 3 | Descriptive alternatives for meaningful images; empty alternatives only for redundant linked preview images. |
| Keyboard access | 3 | Tab/Enter on every page, visible focus, skip link, Escape, Space on disclosure/portrait controls, and unobscured focus below sticky content. |
| Lighthouse accessibility at least 90 on every page | 4 | Per-page light/dark audit scores recorded in TESTING.md and the evidence JSON. |
| At least 12 complete test cases | 4 | Test IDs, steps, expected outcomes, actual results, and failure/retest records in TESTING.md. |
| Required test coverage | 3 | Every page, main navigation destination, JavaScript feature, keyboard flow, and Lighthouse accessibility audit. Added real chapter-link clicks and failure recovery. |
| Tests run live; failures corrected and rerun | 3 | Live GitHub Pages results and source commits recorded. |
| Public GitHub Pages deployment; working links/images | 3 | Existing Portfolio repository; main branch, root folder. Repository name/casing preserved as directed by the owner. |
| README | 2 | Description, live/repository links, local opening instructions, notes, and acknowledgments. |
| AGENTS.md | 2 | Scope, design, static implementation, privacy, Git, testing, and owner review rules. **Owner must personally review this file.** |
| Small clear commits across multiple days | 3 | Genuine dated commit history includes October 29 and October 30, 2026. No backdating or history rewriting. Review it against the instructor's process expectations. |
| Phone/laptop and keyboard class demo | 4 | **Owner action pending.** Use DEMO.md and practice on physical devices. Emulation does not replace the classroom demonstration. |
| Explain JavaScript | 6 | **Owner action pending.** DEMO.md explains the main blocks; read the source and explain it in your own words. |
| Report includes overview, challenges, Codex mistake/fix, screenshots | 5 | Two-page PDF with repository/live links at the top and genuine laptop/phone screenshots. **Owner must upload it to the assignment.** |

## Remaining owner items

- Optionally supply a verified public HafizAI link and current launch status if they should appear. All required project media has been supplied.
- Personally review AGENTS.md and the source, practice the keyboard and JavaScript explanations, and demonstrate on a physical phone and laptop.
- Upload the report to the course assignment. No classroom demo or course submission is claimed by automated checks.

The external email-app handoff is checked as a correctly encoded mailto link. Sending a message and configuring a visitor's email application are outside this static website.


## November 5 recheck

Added the privacy-safe resume PDF to About and Contact. The original private resume was not published. Fresh checks against deployed commit a118bac passed all 124 browser cases (41 core, 22 theme/layout, 15 story/gesture, 42 expanded, and four resume downloads). See [new evidence](resume-rubric-results.json) and the November 5 section in TESTING.md. These automated passes do not guarantee the instructor's score for illustrative media, personal review, commit-process expectations, or the classroom demo.


## Project media continuation

The owner supplied the remaining media on November 5. Badge (4 chapters), HafizAI (7 chapters), and tiller (4 chapters) use actual photos/screenshots. Earlier references to pending illustrative media are historical. See HANDOFF.md for the latest verification status and remaining owner steps.


The current update keeps Protolight and all 21 chapters on Projects while replacing generic Home content with resume-grounded material about Abdallah: NJIT, the degree and expected graduation, HafizAI, ten years of Taekwondo and a black belt, business ownership, and community work. Focused Chrome tests passed locally at desktop and phone sizes without horizontal overflow; the existing project-story, short-screen, JavaScript-off, and accessibility evidence remains recorded in TESTING.md. The two-page report contains genuine project-story captures but predates the final Home content revision. Code review, the physical-device demo/JavaScript explanation, report upload, and course submission remain owner actions. Optional HafizAI URL/release confirmation is the only remaining product-content decision; required project images are complete.

The November 6 final local pass also verifies full-motion default behavior with a footer opt-out, portrait stability during phone theme changes, safe spacing between every mobile sticky image and its chapter copy, and complete phone/laptop top-to-bottom sweeps. The optimized transparent badge cutout reduced that asset from 396,389 to 39,006 bytes; the Projects throttled-mobile Lighthouse sample improved to 94 performance and 100 accessibility/best practices/SEO. Live verification for the final commit is recorded only after GitHub Pages publishes that exact source.
