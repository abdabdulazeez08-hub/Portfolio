# Website test plan and results

Live site: https://abdabdulazeez08-hub.github.io/Portfolio/

Executed October 29, 2026, America/New_York. The current interaction source is `e8f8813`. All tests below ran on live GitHub Pages unless explicitly labeled static/direct-file. Chrome viewport emulation covers laptop, phone, tablet, landscape, and 320px layouts. This is not a physical-device certification.

## Core regression tests

All 41 original browser cases were repeated after the redesign. Each navigation row checks all five destinations from the named source page. The test harness explicitly waits for image decoding and asynchronous theme/motion changes.

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

## New interaction tests

| ID | What is tested | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T42 | desktop: scroll down progresses sense → respond → build | At the stated viewport, scroll the center of Sense, Respond, and Build through the reading area. | Progress increases, stages advance, and the final photo reaches full visibility. | Pass |
| T43 | desktop: scroll up reverses build → respond → sense | Scroll backward from Build to Respond and Sense. | Progress decreases and the assembly returns to its initial state; the final photo disappears. | Pass |
| T44 | desktop: large scroll jumps retain the correct stage | Jump directly between Build, Sense, Build, Respond, and Sense. | Every jump immediately resolves to the correct stage and label. | Pass |
| T45 | desktop: visual stays below header without covering all copy | Center Respond and inspect the sticky figure/header geometry. | Figure remains below the header and takes less than 75% of viewport height. | Pass |
| T46 | mobile: scroll down progresses sense → respond → build | At the stated viewport, scroll the center of Sense, Respond, and Build through the reading area. | Progress increases, stages advance, and the final photo reaches full visibility. | Pass |
| T47 | mobile: scroll up reverses build → respond → sense | Scroll backward from Build to Respond and Sense. | Progress decreases and the assembly returns to its initial state; the final photo disappears. | Pass |
| T48 | mobile: large scroll jumps retain the correct stage | Jump directly between Build, Sense, Build, Respond, and Sense. | Every jump immediately resolves to the correct stage and label. | Pass |
| T49 | mobile: visual stays below header without covering all copy | Center Respond and inspect the sticky figure/header geometry. | Figure remains below the header and takes less than 75% of viewport height. | Pass |
| T50 | Scroll state recalculates when resizing desktop ↔ mobile | Resize from desktop at Build to phone at Sense, then return to desktop at Respond. | Cached geometry recalculates and active stage stays correct. | Pass |
| T51 | Dark mode toggles and persists across pages/reloads | Switch to dark, navigate to Skills, reload, then switch back. | Theme persists; button state, icon, color-scheme, and browser theme color agree. | Pass |
| T52 | Unsaved theme follows the system; a saved choice wins | Clear theme preference, emulate dark OS, reload, then save Light and change OS colors. | Unchosen theme follows OS; an explicit saved choice wins. | Pass |
| T53 | index.html: circular portraits flip both ways with keyboard | On the named page, focus the circular portrait; press Enter, then Space. | Photo loads on intent, flips both ways, retains equal circular dimensions, and updates ARIA/visible labels. | Pass |
| T54 | about.html: circular portraits flip both ways with keyboard | On the named page, focus the circular portrait; press Enter, then Space. | Photo loads on intent, flips both ways, retains equal circular dimensions, and updates ARIA/visible labels. | Pass |
| T55 | Skills ribbon contains CAD, fabrication, electronics, software, and languages | Inspect both accessible ribbon lists. | CAD, fabrication, electronics, software, and language skills are present, including laser engraving, Fusion, AutoCAD, sensors, and Arduino. | Pass |
| T56 | Skills ribbon pause/play control stops and resumes animation | Press Pause; inspect animation state; press Play and move outside the text ribbon. | Animation pauses and resumes; control state/text follows the action. | Pass |
| T57 | Fine mouse cursor halo follows and reacts without hiding native cursor | Move a fine mouse pointer, hover a control, press and release. | Companion ring follows, expands on controls, and reacts to click; native cursor stays visible. | Pass |
| T58 | Reduced motion disables ribbon/cursor/flip transitions and sticky story | Enable OS reduced motion and inspect ribbon, cursor, portrait transition, and sticky figure. | Ribbon becomes static, cursor halo hides, flip transition stops, and the story uses normal flow. | Pass |
| T59 | Touch devices do not get a cursor halo | Open a touch/mobile browser context. | No cursor halo is displayed. | Pass |
| T60 | Authentic final photo and CAD media are used and labeled correctly | Inspect the Protolight photo/CAD labels; expand build details and decode the images. | Real final photo, responsive sources, CAD exports, early build photos, and team credits are present. | Pass |
| T61 | LinkedIn is available from every header and both portrait pages | Open all five pages and inspect header links. | Every header uses the supplied LinkedIn profile URL. | Pass |
| T62 | All five pages fit 320px, phone, tablet, landscape, and laptop in both themes | Open all five pages at 320, 390, 768, 844 landscape, and 1440px in both themes. | No horizontal scrolling in any combination. | Pass |
| T63 | New interactions produce no JavaScript exceptions | Collect JavaScript exceptions through the new interaction suite. | No page exceptions. | Pass |

## Lighthouse on every live page in both themes

Mobile preset, default simulated throttling. Dark audits launch Chrome with its dark-mode preference; the website follows that preference with no saved theme. These are point-in-time lab measurements. Accessibility target: at least 90.

| ID | Page / theme | Steps | Expected | Accessibility | Performance | Best practices | SEO | Actual result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T64 | index.html / light | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | 98 | 100 | 100 | Pass |
| T65 | about.html / light | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | 100 | 100 | 100 | Pass |
| T66 | projects.html / light | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | 99 | 100 | 100 | Pass |
| T67 | skills.html / light | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | 99 | 100 | 100 | Pass |
| T68 | contact.html / light | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | 100 | 100 | 100 | Pass |
| T69 | index.html / dark | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | Not measured | 100 | 100 | Pass |
| T70 | about.html / dark | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | Not measured | 100 | 100 | Pass |
| T71 | projects.html / dark | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | Not measured | 100 | 100 | Pass |
| T72 | skills.html / dark | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | Not measured | 100 | 100 | Pass |
| T73 | contact.html / dark | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | Not measured | 100 | 100 | Pass |

## Additional checks

| ID | What is tested | Steps | Expected | Actual result |
| --- | --- | --- | --- | --- |
| T74 | Direct-file opening | Open each HTML page via file://; flip the About portrait and collect errors. | Pages, themes, and portrait loading work without a server or console errors. | Pass |
| T75 | Local references and media | Parse relative links/fragments, image dimensions/alt, inline-style absence, and every image file size. | All references resolve; every image is under 500 KB. | Pass: 116 references, 17 image files. |
| T76 | Keyboard focus visibility | Tab through every page at 390px and 1440px. | Focus remains visible below the header; contact textarea stays fully in view. | Pass |
| T77 | Full-motion keyboard scrolling | Tab and Shift+Tab through Home on a phone viewport, waiting for native smooth focus scrolling to settle. | Header and sticky drawing do not obscure the focused controls. | Pass |

## Issues, fixes, and retests

| Observed issue | Fix | Retest |
| --- | --- | --- |
| Owner reported unreliable reverse scrollytelling. | Replaced section-entry callbacks with cached section-center geometry and scroll-position-based progress. Geometry updates after resizing, fonts, and motion changes. | **Pass:** forward, reverse, fast-jump, and resize tests on desktop and phone. |
| Redesign Lighthouse showed about 0.175 layout shift when the mobile menu initialized. | Reserve the enhanced header/menu/theme-control geometry before CSS paint; keep a separate no-JavaScript fallback. | **Pass:** repeat Lighthouse layout-shift metrics recorded in the evidence JSON. |
| LinkedIn visible-label/accessibility-name warning. | Give the mark/text appropriate responsive visibility and an accessible name containing both visible labels. | **Pass:** final accessibility audits contain no label/name warning. |
| Large unused graduation photo and oversized phone project image downloads. | Load graduation on pointer/focus/click intent; add a responsive 85 KB project-image edition. Keep original high-resolution photo for larger screens. | **Pass:** portrait flip and responsive-source checks; final Lighthouse rerun. |
| Earlier 320px hero animation overflow, direct-file font-preload CORS error, and partly hidden textarea. | Contain the hero entrance, remove file-incompatible preload, and center offscreen focused fields. | **Pass:** repeated core suite, direct-file, and focus checks. |

## Evidence and remaining personal steps

- [Machine summaries](docs/testing-results.json), [media sources](docs/MEDIA.md), and genuine [desktop](docs/screenshots/home-desktop.jpg), [phone light](docs/screenshots/home-mobile.jpg), and [phone dark](docs/screenshots/home-mobile-dark.jpg) captures.
- All five pages, both portrait crops, desktop/phone story states, and both themes were visually reviewed.
- No email was sent. The form validates locally and creates a draft URL for the visitor’s email app.
- Protolight now has actual photos/CAD. The other three project images remain labeled placeholders at the owner’s request.
- The owner must review the code and AGENTS.md, practice on a physical phone/laptop, perform the three-minute class demo, and submit the PDF. Commits retain honest dates; one session cannot fulfill a rubric requiring work over multiple days.
