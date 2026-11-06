# Website test plan and results

Live site: https://abdabdulazeez08-hub.github.io/Portfolio/

Historical run: October 30, 2026, America/New_York, interaction source `6d574d9`. See the November 5 section below for the latest deployed-source verification. All tests below ran on live GitHub Pages unless explicitly labeled static/direct-file. Chrome viewport emulation covers laptop, phone, tablet, landscape, and 320px layouts. This is not a physical-device certification.

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


## November 5, 2026 - public resume and rubric review

Earlier tables retain their original run dates. Fresh evidence is recorded separately in [resume and rubric results](docs/resume-rubric-results.json).

| ID | What is tested | Steps | Expected | Actual result |
| --- | --- | --- | --- | --- |
| T93 | Public resume privacy and layout | Extract the generated PDF text, compare with supplied resume, inspect a rendered page. | One readable page; original private header absent; no phone or postal code; source claims preserved. | Pass locally; visual review completed. |
| T94 | About resume download | At 390px and 1440px, focus the download link and press Enter; compare downloaded bytes with reviewed PDF. | Keyboard downloads the correct PDF; no horizontal overflow. | Pass locally and on live GitHub Pages at both widths. |
| T95 | Contact resume download | Repeat T94 on Contact. | Correct PDF and keyboard access at both widths. | Pass locally and on live GitHub Pages at both widths. |
| T96 | New resume button spacing | Inspect About at phone and laptop widths. | Button separated from introduction and portrait. | Initial visual review: Fail, cramped spacing. Added 24px top margin; visual and download retest: Pass. |
| T97 | Existing site regression | Run core, theme/layout, story/gesture, and expanded audit suites locally. | Navigation, keyboard, forms, layouts, motion, and recovery work. | Pass: 41 + 22 + 15 + 42 cases; zero JavaScript exceptions. |
| T98 | Local assets | Parse local references and check image sizes. | All references resolve and images are below 500 KB. | Pass: 124 references, 22 images. |
| T99 | Live deployment and downloads | Publish to main, repeat browser checks and compare live PDF bytes. | New links and reviewed PDF available on GitHub Pages. | Pass live: all 124 browser checks passed against deployed commit a118bac; four keyboard downloads match the reviewed PDF byte for byte. |
| T100 | Fresh live Lighthouse | Audit every page with installed Lighthouse. | Accessibility at least 90 on all five pages. | Initial summary script: Fail (unexpected details.items shape). Added an array guard. Post-push retest: Pass; all five pages scored 100 accessibility, best practices, and SEO. Performance: Home 99; others 100. |

Live browser access initially failed with ERR_NETWORK_ACCESS_DENIED in the sandbox. Retest using the network-enabled execution context: Pass. This was an environment failure, not a site failure.

The existing report remains a two-page report with genuine screenshots; it predates the new resume link. Three projects still have explicitly labeled illustrative media. These are content review gaps, not automatically awarded rubric points. Owner code review, physical-device demo, JavaScript explanation, and assignment submission remain required.

Fresh live Lighthouse (November 5, 2026, light/default theme): Home 100 accessibility, About 100, Projects 100, Skills 100, Contact 100. These are point-in-time lab measurements; earlier dark-theme scores retain their original dates.


## Actual project media and scrollytelling update

Local execution: November 5, 2026, America/New_York. The new source replaces three placeholders with 18 supplied-photo/screenshot assets and 15 chapters. Detailed results: [local](docs/project-story-local-results.json), [initial failures](docs/project-story-initial-results.json), [second attempt](docs/project-story-second-results.json). The 16 new-story cases were repeated on live GitHub Pages against source commit 0667bda. The raw evidence uses UTC timestamps (November 6 UTC is still November 5 in America/New_York).

| ID | What is tested | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T101 | All three projects use actual source images, descriptive alternatives, ordered headings, and 15 chapters | Inspect all project headings, source captions, original images, and chapter count. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T102 | Forward, reverse, distant jumps, decoded media, caption, and native scroll agree | At 1440 x 1000, scroll all four badge chapters forward/back, then jump between distant chapters. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T103 | Forward, reverse, distant jumps, decoded media, caption, and native scroll agree | Repeat all seven HafizAI chapters at 1440 x 1000. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T104 | Forward, reverse, distant jumps, decoded media, caption, and native scroll agree | Repeat all four tiller chapters at 1440 x 1000. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T105 | Forward, reverse, distant jumps, decoded media, caption, and native scroll agree | Repeat badge directions and jumps at 390 x 844. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T106 | Forward, reverse, distant jumps, decoded media, caption, and native scroll agree | Repeat HafizAI directions and jumps at 390 x 844. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T107 | Forward, reverse, distant jumps, decoded media, caption, and native scroll agree | Repeat tiller directions and jumps at 390 x 844. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T108 | Resize between phone and laptop at distant chapters and verify current state | Resize between 390, 1440, and 320px; select the last chapter of each story. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T109 | Every full-image link works with focus and Enter; focus clears the sticky panel | At phone/laptop widths, focus every full-image link, wait for native focus scrolling, press Enter, decode the opened image, and return. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T110 | OS reduced motion restores every image beside its chapter and removes sticky visuals | Emulate OS reduced motion, inspect all 15 original images and absence of sticky panels. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T111 | Footer motion control switches between static and sticky stories | Toggle the footer motion control both directions. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T112 | Short landscape uses normal chapter flow with every original image | Resize to 844 x 390 and inspect chapter images and page width. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T113 | Both themes fit phone, landscape, tablet, and laptop without overflow | Inspect both themes at 320, 390, 768, and 1440px. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T114 | JavaScript disabled retains all 15 complete chapter images, text, and links | Disable JavaScript and inspect/decode all chapter images at phone width. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T115 | All references resolve and every tracked image is below 500 KB | Request source files, parse local references, and compare all image sizes with the 500 KB limit. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |
| T116 | No JavaScript exceptions or console errors during normal interactions | Collect exceptions and normal-page console errors during interactions; raw-image favicon requests are logged separately. | Matching images/state; readable usable content; no overflow or errors as applicable. | Pass locally and live |

| T117 | Core/Home regression | Rerun all-page core suite and Home story/portrait/theme suite. | Existing navigation, keyboard, contact behavior, and Home interactions still work. | Pass locally and live: 41 core + 15 Home cases. |
| T118 | Direct-file opening | Open projects.html via file URL at phone width, focus chapter links, switch reduced motion, decode all originals. | All 15 images work without a server or JS exceptions. | Pass locally. |
| T119 | Live new-story retest | Deploy to Pages; rerun the 16-case project suite against its public URL. | All new-story checks pass on published source. | Pass live: 16/16 new-story cases; all five pages scored 100 accessibility. |
| T120 | Fresh live accessibility | Run Lighthouse on all five live pages after publishing shared CSS/JS. | Accessibility at least 90 on every page. | Pass: Home 100, About 100, Projects 100, Skills 100, Contact 100. |

### Failures and fixes in this update

- Initial mobile focus correction used a stage position outside the viewport, allowing a link to remain obscured. Use header height plus stage height as the safe offset. Reserve two caption lines so scene changes cannot grow the panel over the link. Retest: all full-image keyboard links passed locally.
- A distant tiller bounding-box query timed out once in the first run. Subsequent initialized-mode, forward/reverse/jump, and resize checks passed. No site exception was observed in that case.
- Native smooth focus scrolling was checked prematurely by the first harness; it now waits for the focused control to settle in the visible safe area, including after Back navigation and viewport changes.
- Opening a raw image caused Chrome to request /favicon.ico (404). The website HTML uses assets/images/favicon.svg. The raw-image-only browser request is excluded from the normal-page console assertion, with its URL retained in response logs. No JavaScript exception is excluded.
- Core regression initially failed because generated project contact subjects used internal IDs. Restored the existing descriptive project names; full core retest: 41/41 passed.
- Visual review found small full screenshots and poor illuminated-photo framing on phones. CSS-only detail framing now shows useful content, while full-image links and static modes retain complete frames. Final phone/laptop captures reviewed.

Static reference check: 153 references, 43 image files (including documentation screenshots), no broken references, every image below 500 KB. New image maximum: 327,122 bytes. The original source frames and product screenshot colors are preserved. No project media remains pending.

Owner review, physical-device demonstration, JavaScript explanation, optional HafizAI link/release confirmation, and assignment submission remain personal steps. See CODE_REVIEW.md and HANDOFF.md.


### Final live evidence

- [New-story live results](docs/project-story-live-results.json): 16/16 passed.
- [Core/Home and Lighthouse summaries](docs/project-story-regression-results.json): 41 core + 15 Home cases passed live. All five live pages scored 100 accessibility, performance, best practices, and SEO in this light/default-theme sample. Historical dark-theme scores retain their earlier dates.
- Normal page interactions produced no JavaScript exceptions. All 15 full-image links were exercised with focus/Enter at phone and laptop widths.
- Genuine 1440 x 1000 and 390 x 844 captures of badge, HafizAI, and tiller were generated by the live suite, reviewed, and used in the refreshed two-page report. Mobile framing now shows the illuminated acrylic and review card clearly.
- The refreshed report was extracted and rendered as two pages; both page images were inspected for clipping, overlap, and readability. It contains links, features, challenges, a concrete Codex mistake/fix, genuine screenshots, and remaining personal steps.
- Source commit 0667bda is the tested website code. The subsequent evidence/report commit changes documentation and report tooling only.


## November 5, 2026 - restored scroll-story visibility and media cleanup

The owner reported that scrollytelling appeared to be gone and that the project hierarchy and supplied imagery felt unpolished. Fresh browser inspection reproduced the cause: Windows requested reduced motion, so the previous implementation silently forced every story into ordinary document flow and disabled its footer control. This update keeps the OS preference as the initial default but adds an explicit, persistent visitor override beside the stories and in the footer.

| ID | What is tested | Expected | Actual result |
| --- | --- | --- | --- |
| T121 | Reduced-motion default and recovery affordance | Projects begins in static mode when the OS requests reduced motion, explains why, and exposes an Enable scroll stories button. | Pass in a fresh isolated Chrome profile. All three stories reported static; the notice and button were visible. |
| T122 | Explicit scroll-story recovery at 1440 x 1000 and 390 x 844 | Activating the recovery control persists full motion, hides the notice, restores all three sticky stages, initializes progress, and causes no horizontal overflow. | Pass at both sizes through Chrome DevTools Protocol checks. All three modes changed to scroll, stage display was block, the first badge progress value was 25%, and `scrollWidth <= innerWidth` remained true. |
| T123 | Home Protolight recovery | The same control restores the six-chapter Home stage without breaking native scrolling. | Pass at 1440 x 1000. Motion changed from reduced to full, the notice hid, the visual computed as sticky, and the page had no horizontal overflow. |
| T124 | Clean badge presentation asset and evidence retention | The derived cutout has transparency, remains below 500 KB, is labeled as presentation media, and does not replace the original story photographs or full-image links. | Pass. `badge-cutout.png` is 500 x 442 and 396,389 bytes. The first decorative stage uses it; the original exterior image remains in document order and linked below. |
| T125 | Static source, JavaScript, references, HTTP, JSON, and image limits | Shared scripts parse; five pages have one h1; local href/src/srcset targets resolve; pages return HTTP 200; the media manifest parses; every published image remains below 500 KB. | Pass locally. |
| T126 | Existing Playwright story suite | Rerun the full 16-case suite when its development-only Playwright dependency is available. | Not run: this machine has no Playwright module and the repository intentionally has no npm dependency. The command failed before opening a browser with `Cannot find module 'playwright'`. The focused dependency-free Chrome checks above passed; no full-suite pass is claimed for this source. |

Visual review covered the reorganized Projects introduction, cleaned badge cutout, desktop sticky stage, phone sticky stage, active chapter rule, progress bar, Home story heading, and explicit reduced-motion recovery. The report PDF still contains genuine earlier screenshots and was not regenerated because the documented Python/report-rendering dependencies are unavailable in this environment.


## November 5, 2026 - all scrollytelling moved to Projects

The owner requested that Protolight no longer sit beside the name in the Home banner and that every project's story live on Projects. Home now uses a four-discipline practice map and an Observe / Model / Build / Test process. Projects contains Protolight (6 chapters), badge (4), HafizAI (7), and tiller (4), for 21 chapters total.

| ID | What is tested | Expected | Actual result |
| --- | --- | --- | --- |
| T127 | Home replacement and Projects story counts | Home has no story section and includes the practice map/process; Projects has four project narratives with 6 Protolight and 15 other chapters. | Pass by source check: Home story count 0; Projects stories 4; chapter counts 6 + 15. |
| T128 | Protolight forward and reverse selection at 1440 x 1000 | Center Sense, Respond, Design, Wire, Refine, and Build in order and in reverse. | Pass in isolated Chrome. Requested chapter, active stage, and `aria-current` agreed for all 12 checks; progress moved 0.000 to 4.847 and back. |
| T129 | Protolight forward and reverse selection at 390 x 844 | Repeat all six chapters in both directions with the compact sticky stage. | Pass in isolated Chrome. All 12 requested stages agreed; progress moved 0.000 to 4.916 and back; no horizontal overflow. |
| T130 | Reduced-motion recovery for all four stories | Start from an OS reduced-motion profile, then activate Enable scroll stories. | Pass at desktop and phone sizes. Protolight changed from static to sticky; the other three story modes changed from static to scroll; the notice hid; no horizontal overflow. |
| T131 | Short-screen safety fallback | At 900 x 500, opt into motion and inspect every story. | Pass. Protolight remained `position: static`; all three other stories remained static and their sticky stages stayed hidden; no horizontal overflow. |
| T132 | Direct-file and JavaScript-off reading | Open `projects.html` from disk at 390 x 844 with script execution disabled. | Pass. One h1, all four project sections, 6 Protolight steps, and 15 other steps remained in the DOM; the enhancement menu stayed hidden, no duplicate media stages existed, and no horizontal overflow occurred. |
| T133 | Static rubric checks | Parse all five pages, references, headings, stylesheet use, image alternatives, and image sizes; syntax-check JavaScript and parse media JSON. | Pass. One h1 per page, no skipped heading levels, one shared stylesheet, no authored inline CSS, every img has alt, 61 references resolve, and all 32 published assets/images are below 500 KB (largest 412,362 bytes). Both scripts parse and project-media.json loads. |
| T134 | Local HTTP and visual review | Request all five pages; review Home desktop/phone, Projects introduction, and Protolight desktop/phone sticky states. | Pass. All pages returned HTTP 200. The reviewed captures show clean layouts, actual CAD/photo evidence, readable labels, and no Protolight artwork beside the Home name. |
| T135 | GitHub Pages deployment markers | After pushing `a4c8fcd`, request live Home and Projects and compare the new structural markers. | Pass live. Both pages returned 200; Home contains `hero-practice-map` and no story section; Projects contains the four-story heading and `protolight-story`. |
| T136 | Live Protolight and recovery at 1440 x 1000 and 390 x 844 | In fresh live reduced-motion profiles, enable stories and repeat all six Protolight chapters forward and backward. | Pass live at both sizes. The other three stories changed from static to scroll, Protolight became sticky, all 24 requested chapter states agreed, and neither viewport overflowed horizontally. |
| T137 | Fresh Lighthouse accessibility on all five live pages | Run Lighthouse 13.0.1 accessibility audits against the deployed Home, About, Projects, Skills, and Contact pages. | Pass live: 100 accessibility on every page. JSON outputs are retained in ignored `.qa/lighthouse-final`; Lighthouse remains a temporary audit tool, not a site dependency. |

The first direct-file attempt used Chrome `--dump-dom` in a way that returned an empty process stream, so it did not produce evidence. The retest used an isolated remote-debugging profile with `scriptEnabled=false` and directly inspected the loaded file DOM; T132 records that passing retest. The first Pages source-check command also reused PowerShell's read-only `$HOME` variable and failed before checking Home; it was corrected to task-scoped variable names, then both live pages passed T135. These were harness failures, not hidden site passes. The dependency-based Playwright suite was not run because this machine has no Playwright module. Lighthouse was unavailable as a preinstalled CLI, so version 13.0.1 was run temporarily through `npx` without adding a repository dependency; T137 records the fresh results.

The existing two-page report contains genuine earlier project-story screenshots but predates this final Home/Projects relocation. No Python runtime is installed on this machine, so the report generator and renderer could not be rerun here. The report remains usable for the assignment, but refreshing its Home/Projects screenshots is recommended if a current-state report is required.


## November 5, 2026 - Home content made personal

The owner rejected the generic engineering-practice map and Observe / Model / Build / Test section because they did not say enough about him. Home now uses only supplied resume/project facts: the hero's Current chapter panel covers NJIT, Mechanical Engineering Technology, expected May 2030, and HafizAI; the lower personal feature covers ten years of Taekwondo and a black belt, an online resale business since 2023, and ICPC youth-program community work.

| ID | What is tested | Expected | Actual result |
| --- | --- | --- | --- |
| T138 | Personal Home content and source grounding | Inspect the new hero and lower feature against About/resume facts; search for the rejected map/process copy. | Pass locally. Every claim already appears in supplied content; the generic practice map, process sequence, and duplicate About teaser are removed. |
| T139 | Responsive Home rendering in both themes | Review the hero and personal feature at 1440 x 1000 and 390 x 844 in light and dark modes. | Pass locally. Both sections remain readable, retain the established palette, and have no horizontal overflow. |
| T140 | Static rubric regression | Repeat page headings, stylesheet, inline-style, alt, reference, image-size, story-count, JavaScript syntax, and HTTP checks. | Pass locally. All five pages retain one h1 and ordered headings; 61 references resolve; all 32 published assets/images remain below 500 KB; Projects still contains all four stories and 21 chapters. |

Live deployment markers and a fresh Home accessibility audit are pending the source commit and Pages publication; no live pass is claimed in this subsection yet.


## November 6, 2026 - final interaction and layout pass

The owner requested a final phone/laptop sweep, motion enabled by default, a footer-only opt-out, no mobile text over project images, and no portrait changes when switching theme.

| ID | What is tested | Expected | Actual result |
| --- | --- | --- | --- |
| T141 | Motion default and footer opt-out | In fresh phone and laptop profiles that request reduced motion, open the site, use the footer control twice, and reload. | Pass locally. The site began with `data-motion="full"` and “Reduce motion”; the footer changed it to reduced/“Enable motion,” then restored and persisted full motion. |
| T142 | Theme changes preserve portrait state | On Home and About at phone width, toggle theme once and rapidly, select the graduation portrait, then toggle theme again. | Pass locally on both pages. Professional remained professional through theme changes; graduation remained selected after the later change; no theme transition state remained stuck. |
| T143 | Mobile story image/copy separation | Measure the sticky visual bottom and active-copy top for all 21 chapters at 390 x 844. | Initial measurement: Fail for the 15 badge/HafizAI/tiller chapters; copy began 93px inside the stage. Added an isolated opaque stage and a sticky copy safe area. Retest: Pass; those chapters retain a 27px gap, and Protolight's minimum gap is 12px. Reviewed badge, recitation, and tiller captures show complete headings and no overlay. |
| T144 | Complete five-page phone/laptop scroll sweep | Scroll every page from top to bottom at 390 x 844 and 1440 x 1000; inspect top/middle/bottom captures and check viewport overflow, decoded images, clipped text, visible text/image intersections, h1 count, and console errors. | Pass locally: 10 page/viewport combinations, one h1 each, motion full, zero horizontal overflow, zero broken images, zero clipped text, zero visible text/image intersections, and zero console/runtime errors. |
| T145 | Final static and HTTP regression | Syntax-check both scripts; parse every local reference, heading, image alternative, stylesheet, story count, and image size; request all five local pages. | Pass locally. All pages returned 200; 61 references resolve; four stories/21 chapters remain; all 32 published assets/images are below 500 KB (largest 412,362 bytes). |

The first fresh-browser interaction attempt failed because the earlier localhost preview process had ended and Chrome loaded an error page. The preview was restarted, the isolated profiles were reloaded, and T141-T144 then passed. This was a harness failure and is not counted as a site pass. Live deployment, final live interaction checks, and fresh Lighthouse results are added after publication; no live result for this final source is claimed yet.
