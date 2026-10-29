# Website test plan and results

Live site: https://abdabdulazeez08-hub.github.io/Portfolio/

Executed October 29, 2026, America/New_York. Functional browser checks ran on live GitHub Pages, not only local preview. Chrome used isolated browser contexts, with desktop and phone viewport emulation. Screenshots were visually reviewed for layout. Automated checks do not substitute for the owner’s physical-phone and classroom demo.

## Functional tests

The 41-check live suite passed on `8a6bb3b` and was repeated successfully on final interaction source commit `2046243` after the direct-file fix, vector-icon polish, and textarea-focus improvement. Raw summaries are in [docs/testing-results.json](docs/testing-results.json). Each navigation row tests all five destinations from the named source page.

| ID | What is tested | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T1 | index.html: semantic structure and 1440px layout | Open the named page at the stated viewport; inspect landmarks, headings, viewport width, and decoded images. | One h1, five nav links, correct current link, sequential headings, loaded images with alt, and no sideways scroll. | Pass |
| T2 | index.html: all five main navigation links at 1440px | From the named page, open the mobile menu if needed; click each of Home, About, Projects, Skills, and Contact, returning before each click. | Every link loads its corresponding page and visible h1 (five links from this page). | Pass |
| T3 | index.html: Tab, Enter, skip link, focus visibility at 1440px | Use Tab and Enter for Skip to content; traverse the brand and all nav links, opening Menu with Enter on mobile; activate the brand with Enter. | Skip focuses main; all five nav links are reachable with visible focus; Enter opens Home. | Pass |
| T4 | about.html: semantic structure and 1440px layout | Open the named page at the stated viewport; inspect landmarks, headings, viewport width, and decoded images. | One h1, five nav links, correct current link, sequential headings, loaded images with alt, and no sideways scroll. | Pass |
| T5 | about.html: all five main navigation links at 1440px | From the named page, open the mobile menu if needed; click each of Home, About, Projects, Skills, and Contact, returning before each click. | Every link loads its corresponding page and visible h1 (five links from this page). | Pass |
| T6 | about.html: Tab, Enter, skip link, focus visibility at 1440px | Use Tab and Enter for Skip to content; traverse the brand and all nav links, opening Menu with Enter on mobile; activate the brand with Enter. | Skip focuses main; all five nav links are reachable with visible focus; Enter opens Home. | Pass |
| T7 | projects.html: semantic structure and 1440px layout | Open the named page at the stated viewport; inspect landmarks, headings, viewport width, and decoded images. | One h1, five nav links, correct current link, sequential headings, loaded images with alt, and no sideways scroll. | Pass |
| T8 | projects.html: all five main navigation links at 1440px | From the named page, open the mobile menu if needed; click each of Home, About, Projects, Skills, and Contact, returning before each click. | Every link loads its corresponding page and visible h1 (five links from this page). | Pass |
| T9 | projects.html: Tab, Enter, skip link, focus visibility at 1440px | Use Tab and Enter for Skip to content; traverse the brand and all nav links, opening Menu with Enter on mobile; activate the brand with Enter. | Skip focuses main; all five nav links are reachable with visible focus; Enter opens Home. | Pass |
| T10 | skills.html: semantic structure and 1440px layout | Open the named page at the stated viewport; inspect landmarks, headings, viewport width, and decoded images. | One h1, five nav links, correct current link, sequential headings, loaded images with alt, and no sideways scroll. | Pass |
| T11 | skills.html: all five main navigation links at 1440px | From the named page, open the mobile menu if needed; click each of Home, About, Projects, Skills, and Contact, returning before each click. | Every link loads its corresponding page and visible h1 (five links from this page). | Pass |
| T12 | skills.html: Tab, Enter, skip link, focus visibility at 1440px | Use Tab and Enter for Skip to content; traverse the brand and all nav links, opening Menu with Enter on mobile; activate the brand with Enter. | Skip focuses main; all five nav links are reachable with visible focus; Enter opens Home. | Pass |
| T13 | contact.html: semantic structure and 1440px layout | Open the named page at the stated viewport; inspect landmarks, headings, viewport width, and decoded images. | One h1, five nav links, correct current link, sequential headings, loaded images with alt, and no sideways scroll. | Pass |
| T14 | contact.html: all five main navigation links at 1440px | From the named page, open the mobile menu if needed; click each of Home, About, Projects, Skills, and Contact, returning before each click. | Every link loads its corresponding page and visible h1 (five links from this page). | Pass |
| T15 | contact.html: Tab, Enter, skip link, focus visibility at 1440px | Use Tab and Enter for Skip to content; traverse the brand and all nav links, opening Menu with Enter on mobile; activate the brand with Enter. | Skip focuses main; all five nav links are reachable with visible focus; Enter opens Home. | Pass |
| T16 | index.html: semantic structure and 390px layout | Open the named page at the stated viewport; inspect landmarks, headings, viewport width, and decoded images. | One h1, five nav links, correct current link, sequential headings, loaded images with alt, and no sideways scroll. | Pass |
| T17 | index.html: all five main navigation links at 390px | From the named page, open the mobile menu if needed; click each of Home, About, Projects, Skills, and Contact, returning before each click. | Every link loads its corresponding page and visible h1 (five links from this page). | Pass |
| T18 | index.html: Tab, Enter, skip link, focus visibility at 390px | Use Tab and Enter for Skip to content; traverse the brand and all nav links, opening Menu with Enter on mobile; activate the brand with Enter. | Skip focuses main; all five nav links are reachable with visible focus; Enter opens Home. | Pass |
| T19 | about.html: semantic structure and 390px layout | Open the named page at the stated viewport; inspect landmarks, headings, viewport width, and decoded images. | One h1, five nav links, correct current link, sequential headings, loaded images with alt, and no sideways scroll. | Pass |
| T20 | about.html: all five main navigation links at 390px | From the named page, open the mobile menu if needed; click each of Home, About, Projects, Skills, and Contact, returning before each click. | Every link loads its corresponding page and visible h1 (five links from this page). | Pass |
| T21 | about.html: Tab, Enter, skip link, focus visibility at 390px | Use Tab and Enter for Skip to content; traverse the brand and all nav links, opening Menu with Enter on mobile; activate the brand with Enter. | Skip focuses main; all five nav links are reachable with visible focus; Enter opens Home. | Pass |
| T22 | projects.html: semantic structure and 390px layout | Open the named page at the stated viewport; inspect landmarks, headings, viewport width, and decoded images. | One h1, five nav links, correct current link, sequential headings, loaded images with alt, and no sideways scroll. | Pass |
| T23 | projects.html: all five main navigation links at 390px | From the named page, open the mobile menu if needed; click each of Home, About, Projects, Skills, and Contact, returning before each click. | Every link loads its corresponding page and visible h1 (five links from this page). | Pass |
| T24 | projects.html: Tab, Enter, skip link, focus visibility at 390px | Use Tab and Enter for Skip to content; traverse the brand and all nav links, opening Menu with Enter on mobile; activate the brand with Enter. | Skip focuses main; all five nav links are reachable with visible focus; Enter opens Home. | Pass |
| T25 | skills.html: semantic structure and 390px layout | Open the named page at the stated viewport; inspect landmarks, headings, viewport width, and decoded images. | One h1, five nav links, correct current link, sequential headings, loaded images with alt, and no sideways scroll. | Pass |
| T26 | skills.html: all five main navigation links at 390px | From the named page, open the mobile menu if needed; click each of Home, About, Projects, Skills, and Contact, returning before each click. | Every link loads its corresponding page and visible h1 (five links from this page). | Pass |
| T27 | skills.html: Tab, Enter, skip link, focus visibility at 390px | Use Tab and Enter for Skip to content; traverse the brand and all nav links, opening Menu with Enter on mobile; activate the brand with Enter. | Skip focuses main; all five nav links are reachable with visible focus; Enter opens Home. | Pass |
| T28 | contact.html: semantic structure and 390px layout | Open the named page at the stated viewport; inspect landmarks, headings, viewport width, and decoded images. | One h1, five nav links, correct current link, sequential headings, loaded images with alt, and no sideways scroll. | Pass |
| T29 | contact.html: all five main navigation links at 390px | From the named page, open the mobile menu if needed; click each of Home, About, Projects, Skills, and Contact, returning before each click. | Every link loads its corresponding page and visible h1 (five links from this page). | Pass |
| T30 | contact.html: Tab, Enter, skip link, focus visibility at 390px | Use Tab and Enter for Skip to content; traverse the brand and all nav links, opening Menu with Enter on mobile; activate the brand with Enter. | Skip focuses main; all five nav links are reachable with visible focus; Enter opens Home. | Pass |
| T31 | Mobile menu opens with Enter and closes with Escape | At 390px, focus Menu; press Enter, then Escape. | Menu opens, then closes; aria-expanded reflects state and focus returns to Menu. | Pass |
| T32 | Navigation restores across mobile/desktop resize | Resize a closed mobile menu to 1440px and back to 390px. | Desktop links are visible; mobile navigation returns to a closed state. | Pass |
| T33 | Motion preference switches, persists, and respects operating system | Turn Reduce motion on and reload; re-enable motion; emulate an OS reduced-motion preference. | Preference persists, OS reduction wins, and OS-controlled button is disabled with an explanatory label. | Pass |
| T34 | All three story stages update during native scrolling | At 1440px with full motion, scroll Sense, Respond, and Build into the viewport center. | data-stage changes sense → respond → build with matching stage labels; physical SVG components assemble. | Pass |
| T35 | Empty, malformed email, and short message fail with inline errors | Submit an empty form; then provide a name/subject but use bad-email and a two-character message. | Four empty-field errors first, then email and message errors; no draft link and first invalid field focused. | Pass |
| T36 | Valid form creates correctly encoded email draft without sending | Use review@example.com and a valid message containing a line break and ampersand; prepare, then edit the message. | Correctly encoded mailto draft appears and receives focus; editing invalidates the stale draft. No message sends. | Pass |
| T37 | Whitespace-only values are invalid | Replace the name with spaces only and prepare the email. | Name is invalid and an inline corrective error appears. | Pass |
| T38 | Case-study contact link prefills the subject safely | Open the badge case study and follow its project contact link. | Contact page subject is prefilled with the correct project name. | Pass |
| T39 | All five pages fit 320px and landscape layouts | Open all five pages at 320 × 740, 844 × 390 landscape, and 768 × 1024. | Document width never exceeds viewport width. | Pass |
| T40 | All pages and navigation work with JavaScript disabled | Disable JavaScript and open all five pages at 390px. | All content, h1s, and five navigation links remain visible; enhanced menu control stays hidden. | Pass |
| T41 | No JavaScript errors or failed console resources during suite | Collect page errors and error-level console messages throughout the complete live browser suite. | No JavaScript exceptions or failed console resources. | Pass |

## Lighthouse on every live page

Chrome Lighthouse 13.6.0, mobile preset, default simulated throttling. Each page was audited individually after font optimization, before the final icon/focus polish; the full browser suite was repeated after that polish. Accessibility target: at least 90. Performance scores are point-in-time lab measurements, not a guarantee of identical results on every device.

| ID | Page | Steps | Expected | Accessibility | Performance | Best practices | SEO | Actual result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T42 | index.html | Open the live page and run Lighthouse with mobile preset. | Accessibility ≥90; no failed automated accessibility audits. | 100 | 98 | 100 | 100 | Pass |
| T43 | about.html | Open the live page and run Lighthouse with mobile preset. | Accessibility ≥90; no failed automated accessibility audits. | 100 | 99 | 100 | 100 | Pass |
| T44 | projects.html | Open the live page and run Lighthouse with mobile preset. | Accessibility ≥90; no failed automated accessibility audits. | 100 | 99 | 100 | 100 | Pass |
| T45 | skills.html | Open the live page and run Lighthouse with mobile preset. | Accessibility ≥90; no failed automated accessibility audits. | 100 | 100 | 100 | 100 | Pass |
| T46 | contact.html | Open the live page and run Lighthouse with mobile preset. | Accessibility ≥90; no failed automated accessibility audits. | 100 | 100 | 100 | 100 | Pass |

## Additional verification

| ID | What is tested | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T47 | Double-click / direct-file use, all five pages | Open each page via file:// in Chrome; wait for fonts; collect console and page errors. | Content and menu work; no errors. | Pass |
| T48 | Relative links, anchors, image metadata, and image sizes | Parse all HTML references; resolve files and fragments; check every image's alt/dimensions and file size. | All local references resolve; no inline styles; every image under 500 KB. | Pass: 98 references; 7 images. |
| T49 | Focus is not obscured | Tab through every page at 390px and 1440px; compare focused controls to sticky header and viewport. | Focused controls remain visible below the header. | Pass |

## Failed checks, fixes, and retests

| Initial result | Cause / fix | Retest |
| --- | --- | --- |
| **Fail, live 320px homepage:** document width 327px. | The hero entrance translated its image 25px outside the figure during the animation. Codex added `overflow: hidden` to `.hero-figure`, containing the animated image without hiding page overflow globally. | **Pass:** live T39 small-screen test; 320px document fits 320px viewport. |
| **Fail, direct-file font resource:** Chrome reported a CORS error. | The font preload used crossorigin on file://. Removed the preload from all five pages; the CSS @font-face still loads the same local WOFF2. | **Pass:** all five direct-file pages, no console errors. |
| **Fail, live mobile focus visibility:** part of the contact textarea remained below the viewport after Tab. | Chrome scrolled only the caret into view. Added a focus handler that centers fields when they fall outside the usable viewport. | **Pass:** final live focus visibility check and repeated 41-check suite on `2046243`. |
| Test-harness failures during local QA. | A lazy image was inspected before loading; an OS motion change was checked before its event fired; Enter-to-Home needed an explicit navigation wait. Fixed test timing rather than changing correct site behavior. | **Pass:** 41/41 local checks and 41/41 live checks. |

The first live Lighthouse homepage run scored 90 performance and 100 accessibility/best practices/SEO. The font reduction and native CSS progress timeline improved the final homepage performance score to 98. A visible-label/accessibility-name warning on the brand link was also corrected by including its visible initials in the accessible name.

## Manual review and remaining personal steps

- Genuine live captures: [desktop](docs/screenshots/home-desktop.jpg) and [phone viewport](docs/screenshots/home-mobile.jpg). Full-page desktop/mobile captures of all five pages and the three scroll stages were reviewed locally.
- No message was sent. Form tests verify validation, focus, and the mailto handoff URL; delivery depends on the visitor’s email application.
- External email and professional-profile destinations come from the supplied resume or verified repository; no actual project product URL was invented.
- Owner requested labeled placeholder project illustrations until real media is supplied. This is an intentional exception to the original no-placeholder content requirement.
- Owner must review AGENTS.md and the code, test on an actual phone/laptop, perform the three-minute demo, and submit the report. Physical hardware testing and the classroom presentation are not marked complete.
- Commits use their real dates. This one-session implementation does not fulfill a requirement to work across multiple days.
