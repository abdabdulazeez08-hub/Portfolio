# Website test plan and results

Live site: https://abdabdulazeez08-hub.github.io/Portfolio/

Executed October 30, 2026, America/New_York. The current interaction source is `6d574d9`. All tests below ran on live GitHub Pages unless explicitly labeled static/direct-file. Chrome viewport emulation covers laptop, phone, tablet, landscape, and 320px layouts. This is not a physical-device certification.

## Core regression tests

All 41 core browser cases were repeated after the six-chapter revision. Each navigation row checks all five destinations from the named source page. The test harness explicitly waits for image decoding and asynchronous theme/motion changes.

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
| T34 | All six story stages update during native scrolling | At 1440px with full motion, scroll Sense, Respond, Design, Wire, Refine, and Build into the viewport center. | All six chapter labels and media states follow native scrolling; physical SVG components assemble. | Pass |
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
| T42 | desktop: scroll down progresses sense → respond → design → wire → refine → build | At the stated viewport, scroll the center of Sense, Respond, Design, Wire, Refine, and Build through the reading area. | Progress increases, stages advance, and the final photo reaches full visibility. | Pass |
| T43 | desktop: scroll up reverses build → refine → wire → design → respond → sense | Scroll backward through all six chapters from Build back to Sense. | Progress decreases and the assembly returns to its initial state; the final photo disappears. | Pass |
| T44 | desktop: large scroll jumps retain the correct stage | Jump directly between Build, Sense, Build, Respond, and Sense. | Every jump immediately resolves to the correct stage and label. | Pass |
| T45 | desktop: visual stays below header without covering all copy | Center Respond and inspect the sticky figure/header geometry. | Figure remains below the header and takes less than 75% of viewport height. | Pass |
| T46 | mobile: scroll down progresses sense → respond → design → wire → refine → build | At the stated viewport, scroll the center of Sense, Respond, Design, Wire, Refine, and Build through the reading area. | Progress increases, stages advance, and the final photo reaches full visibility. | Pass |
| T47 | mobile: scroll up reverses build → refine → wire → design → respond → sense | Scroll backward through all six chapters from Build back to Sense. | Progress decreases and the assembly returns to its initial state; the final photo disappears. | Pass |
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

## Expanded story and gesture checks

| ID | What is tested | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T64 | All six chapters advance, reverse, and select the matching real media on desktop | At 1440px, scroll all six chapters forward and backward, then jump directly between distant chapters. Decode each scene image. | All six labels/counts and accessible scene states agree; matching media reaches full opacity. | Pass |
| T65 | Component labels sit below the image and remain readable on desktop | Compare legend and artwork bounds on the hero and story; inspect legend font size and SVG text. | Legends are below the artwork, at least 12px, with only numbered pins in the SVG. | Pass |
| T66 | All six chapters advance, reverse, and select the matching real media on phone | Repeat all six chapters and direct jumps at 390px using the mobile reading line. | The compact sticky visual follows the correct chapter in either direction. | Pass |
| T67 | Component labels sit below the image and remain readable on phone | Repeat legend bounds and font checks at 390px. | Every component label remains outside the image and readable. | Pass |
| T68 | Theme button animates sun/moon and reveals the selected palette | Toggle dark/light; inspect the active reveal animation and settled sun/moon opacity. | The palette reveals from the control, then settles on the matching icon and theme. | Pass |
| T69 | Rapid repeated theme toggles settle on the last choice | Trigger five toggles in quick succession. | The last selected theme persists and no transition remains active. | Pass |
| T70 | Theme controls animate and persist without the View Transition API | Disable the View Transition API in a fresh context and switch theme. | The fallback completes, controls remain usable, and the preference persists. | Pass |
| T71 | Hover previews the alternate portrait; leaving restores the original | Hover the portrait, then move outside it. | The alternate photograph previews and the original returns on exit. | Pass |
| T72 | Leaving before photo loading finishes cancels the pending hover flip | Delay the alternate photo response, hover, and leave before it decodes. | A late image response cannot flip the portrait after pointer exit. | Pass |
| T73 | Click pins the hover preview and keyboard still flips both ways | Preview with hover, click to retain it, leave, then use Space. | Click retains the preview; keyboard toggles still work. | Pass |
| T74 | Reduced motion disables hover flips and theme reveal, with static story copy | Enable reduced motion; hover, change theme, and open Home. | No automatic hover flip or theme reveal; six chapters and a labeled real photo use normal flow. | Pass |
| T75 | Real browser touch gestures flip portraits horizontally and preserve vertical page scrolling | Use Chrome touch input for two horizontal swipes and one vertical gesture. | Horizontal gestures flip both ways; vertical gestures scroll without changing the portrait. | Pass |
| T76 | Short landscape screens show the story in document flow | Open Home at 844 × 390. | The visual uses normal flow and the page has no horizontal overflow. | Pass |
| T77 | Without JavaScript, all six chapters and the actual final photo remain available | Open Home with JavaScript disabled at phone width. | All six chapters and the real final photo remain available in document flow. | Pass |
| T78 | New story, theme, and portrait interactions produce no page errors | Collect page errors during new interaction checks. | No JavaScript exceptions. | Pass |

## Lighthouse on every live page in both themes

Mobile preset, default simulated throttling. Dark audits launch Chrome with its dark-mode preference; the website follows that preference with no saved theme. These are point-in-time lab measurements. Accessibility target: at least 90.

| ID | Page / theme | Steps | Expected | Accessibility | Performance | Best practices | SEO | Actual result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T79 | index.html / light | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | 92 | 100 | 100 | Pass |
| T80 | about.html / light | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | 99 | 100 | 100 | Pass |
| T81 | projects.html / light | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | 99 | 100 | 100 | Pass |
| T82 | skills.html / light | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | 100 | 100 | 100 | Pass |
| T83 | contact.html / light | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | 100 | 100 | 100 | Pass |
| T84 | index.html / dark | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | Not measured | 100 | 100 | Pass |
| T85 | about.html / dark | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | Not measured | 100 | 100 | Pass |
| T86 | projects.html / dark | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | Not measured | 100 | 100 | Pass |
| T87 | skills.html / dark | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | Not measured | 100 | 100 | Pass |
| T88 | contact.html / dark | Open live page with the stated theme and run Lighthouse 13.6.0. | Accessibility ≥90; readable controls, names, and contrast. | 100 | Not measured | 100 | 100 | Pass |

## Additional checks

| ID | What is tested | Steps | Expected | Actual result |
| --- | --- | --- | --- | --- |
| T89 | Direct-file opening | Open each HTML page via file://; flip the About portrait and collect errors. | Pages, themes, and portrait loading work without a server or console errors. | Pass |
| T90 | Local references and media | Parse relative links/fragments, image dimensions/alt, inline-style absence, and every image file size. | All references resolve; every image is under 500 KB. | Pass: 122 references, 22 image files. |
| T91 | Keyboard focus visibility | Tab through every page at 390px and 1440px. | Focus remains visible below the header; contact textarea stays fully in view. | Pass |
| T92 | Full-motion keyboard scrolling | Tab and Shift+Tab through Home on a phone viewport, waiting for native smooth focus scrolling to settle. | Header and sticky drawing do not obscure the focused controls. | Pass |

## Issues, fixes, and retests

| Observed issue | Fix | Retest |
| --- | --- | --- |
| Taller mobile story figure obscured focused links during Tab and Shift+Tab. | Bring a focused story control below the sticky visual in the next frame, without intercepting native page scrolling. | **Pass:** repeated full-motion focus checks locally and live. |
| Mobile/desktop resize assertion initially ran before its media-query change handler. | Make the harness wait for the navigation state after resizing. No menu behavior change was needed. | **Pass:** full 41-case rerun locally and live. |
| Owner reported labels overlapping the image and a short story. | Move labels to HTML legends and expand to six chapters with genuine CAD/build media. | **Pass:** legend bounds, typography, all six media states, forward/reverse/jump, and responsive checks. |
| Initial public-site verification was blocked by sandbox network access. | Repeat read-only checks with the authorized network-enabled tool context. | **Pass:** live suites completed; this was an environment restriction, not a website assertion. |
| Initial expanded-home Lighthouse performance was 84, with oversized circuit/revision photo delivery. | Add responsive 31.7 KB circuit and 26.5 KB revision photos, retaining larger originals. | **Pass:** live chapter tests decode the smaller sources on phones; a new homepage Lighthouse sample is recorded above. |
| Responsive photos alone left homepage performance at 85. Profiling found an initial offscreen geometry read forced expensive layout. | Wake the renderer within 600px of the viewport; keep stage selection derived from native scroll position. | **Pass:** repeated all live story interactions and an isolated final mobile Lighthouse sample. |
| A new story test read an empty inline opacity before the deferred renderer had awakened; the default CSS image was already visible. | Wait for initialized scroll progress as well as the chapter label before checking interpolated inline values. | **Pass:** repeat of all 15 live story/gesture cases. |
| Owner reported unreliable reverse scrollytelling. | Replaced section-entry callbacks with cached section-center geometry and scroll-position-based progress. Geometry updates after resizing, fonts, and motion changes. | **Pass:** forward, reverse, fast-jump, and resize tests on desktop and phone. |
| Redesign Lighthouse showed about 0.175 layout shift when the mobile menu initialized. | Reserve the enhanced header/menu/theme-control geometry before CSS paint; keep a separate no-JavaScript fallback. | **Pass:** repeat Lighthouse layout-shift metrics recorded in the evidence JSON. |
| LinkedIn visible-label/accessibility-name warning. | Give the mark/text appropriate responsive visibility and an accessible name containing both visible labels. | **Pass:** final accessibility audits contain no label/name warning. |
| Large unused graduation photo and oversized phone project image downloads. | Load graduation on pointer/focus/click intent; add a responsive 85 KB project-image edition. Keep original high-resolution photo for larger screens. | **Pass:** portrait flip and responsive-source checks; final Lighthouse rerun. |
| Earlier 320px hero animation overflow, direct-file font-preload CORS error, and partly hidden textarea. | Contain the hero entrance, remove file-incompatible preload, and center offscreen focused fields. | **Pass:** repeated core suite, direct-file, and focus checks. |

## Evidence and remaining personal steps

- [Machine summaries](docs/testing-results.json), [media sources](docs/MEDIA.md), and genuine [desktop](docs/screenshots/home-desktop.jpg), [phone light](docs/screenshots/home-mobile.jpg), [phone dark](docs/screenshots/home-mobile-dark.jpg), [desktop story](docs/screenshots/protolight-story-desktop.jpg), and [phone story](docs/screenshots/protolight-story-mobile.jpg) captures.
- All five pages, portrait crops, six desktop story scenes, phone story scenes, and both themes were visually reviewed. The longer story includes actual CAD, circuit, earlier prototype, and final-build photographs.
- No email was sent. The form validates locally and creates a draft URL for the visitor’s email app.
- Protolight now has actual photos/CAD. The other three project images remain labeled placeholders at the owner’s request.
- The owner must review the code and AGENTS.md, practice on a physical phone/laptop, perform the three-minute class demo, and submit the PDF. Commits retain their actual dates; review the history against your course process requirements.
