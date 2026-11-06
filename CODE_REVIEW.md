# Owner code review and JavaScript explanation

This is a guide for Abdallah's personal review. It does not assert that the review or classroom demo has happened.

## Review in this order

- [ ] Read AGENTS.md and verify the public content is accurate.
- [ ] Open index.html from disk, then visit all five pages. Check the name, NJIT degree/date, experience, project roles, and public contact links.
- [ ] Read one page's header, navigation, main, sections, and footer. Identify its single h1, h2 sections, h3 subsections, current-page link, and skip link.
- [ ] Read styles.css: explain the shared color variables, local Archivo font, max-width/container spacing, mobile media queries, focus outline, and reduced-motion rules.
- [ ] Read theme.js: explain the early saved-theme/device-theme choice and the fallback when script.js fails to load.
- [ ] Read script.js in the feature groups below. Explain each in your own words; do not memorize answers without understanding the code.
- [ ] Open TESTING.md. Repeat navigation, phone/laptop, keyboard, and both valid/invalid contact tests. Record the actual personal/device results and date if adding them.
- [ ] Practice DEMO.md on a physical phone and laptop. Upload the two-page report to the assignment.

## JavaScript feature map

| Feature | Where to find it | What to understand |
| --- | --- | --- |
| Motion preference | `motionQuery`, `updateMotion` | OS reduced motion supplies the initial default. An explicit stored visitor choice can select static or scroll behavior, and contextual recovery buttons expose that choice beside the stories. A custom event tells both story engines to recalculate. |
| Mobile menu | `menuOpen`, `updateMenu` | The viewport media query decides whether the menu button is needed. The button changes hidden/expanded states. Escape returns focus; outside clicks and leaving focus close the menu. |
| Reading progress | `updateProgress`, `queueProgress` | Scroll distance divided by available document distance gives a 0-1 value. CSS scroll timelines are preferred; one queued frame supplies a fallback. |
| Home Protolight story | `renderStory`, `queueStory` | Cached chapter centers plus a reading line select the active chapter and continuous progress. Progress drives the explanatory assembly and real-image crossfades. The state is derived from scroll position, so scrolling backward reverses it. |
| Theme | `readThemePreference`, `applyTheme`, `restorePreferences` | Only light/dark is accepted from storage. Device preference is the default. A view transition or fallback reveals the palette. Sequence handling prevents rapid clicks leaving an old theme active. Storage/pageshow events synchronize existing tabs and restored pages. |
| Portrait | `showPortrait`, `loadGraduation` | The alternate photo loads on intent. A request counter discards stale responses. Hover previews, click/keyboard pins or flips, and horizontal touch gestures flip without blocking vertical scroll. Failed loading allows retry. |
| Ribbon and cursor | Search `ribbon` and `cursor` | The ribbon has a pause control. The halo follows fine pointers while the native cursor remains. Reduced motion/touch omit unnecessary movement. |
| Contact form | `fieldError`, submit handler | Trim input and check required values, email validity, and message length. Invalid fields get an error and focus. Valid fields produce an encoded mailto draft. A separate click opens the email app; nothing is sent or stored by the site. |
| Three project stories | `mediaStories`, `renderMediaStories`, `queueMediaStories` | Original chapter figures/text stay in HTML. An aria-hidden duplicate stage provides sticky visuals. Cached centers choose the nearest chapter from current scroll position; scene changes use a short crossfade. Resize/fonts/motion/pageshow invalidate geometry. |

## Explain the new project stories in plain language

1. Each chapter already has its photograph or screenshot, caption, heading, explanation, and full-image link in projects.html. This works without JavaScript.
2. JavaScript copies only the images into a decorative sticky stage. Screen readers keep reading the originals in chapter order; the duplicate stage is hidden from the accessibility tree.
3. The code measures the center of each chapter in document coordinates, caching those measurements until layout changes.
4. During native scrolling, one requestAnimationFrame compares the reading position with the centers. The nearest chapter controls the image, caption, and count. It does not depend on which chapter was entered earlier.
5. The observer only wakes stories near the viewport. Resizing, font completion, page restoration, and motion changes request fresh measurements.
6. Reduced motion and screens at most 600px tall use static chapters. A visitor can explicitly opt back into motion even when the OS default is reduced; short screens remain static. On phones, a focus handler places a focused chapter link beneath the compact sticky image. The fixed caption allowance prevents a wrapped caption from changing that safe area.

Be ready to answer: Why cache geometry? Why requestAnimationFrame? Why use aria-hidden on duplicates? Why does reverse scrolling work? What happens without JavaScript? Why can't the form send email directly? What does encodeURIComponent prevent?

## Honest boundaries

The screenshots prove what was captured, not measured app accuracy, audience size, or a public launch. The tiller is a CAD assembly. Protolight is a team prototype; Abdallah is the physical manager, not the sole author of every part. No automated check can perform your own review or explain the code for you in class.
