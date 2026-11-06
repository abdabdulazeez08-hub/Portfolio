# Three-minute demo

Use the live site: https://abdabdulazeez08-hub.github.io/Portfolio/

## 0:00-0:40 - Introduce the site

Say your name and discipline. Explain that the site has five separate HTML pages, shared CSS, and vanilla JavaScript. Show the homepage on a laptop and an actual phone. Point out the Current chapter panel with NJIT, your degree, expected graduation, and HafizAI, then the personal section on discipline, ownership, and community. Hover or swipe the circular portrait, then show its keyboard control. Switch light/dark mode to show the sun/moon reveal, and point out the skills ribbon's pause control. All four projects use supplied photographs, screenshots, or CAD.

## 0:40-1:20 - Show the story

Open Projects and scroll through Protolight's six chapters: sense, respond, design, wire, refine, and build, then scroll back up to reverse them. Explain the actual L-shaped enclosure, three LED strips, environmental inputs, and Arduino output. Briefly show that the badge, HafizAI, and tiller continue as three more scroll stories on the same page. On mobile, compact sticky visuals remain above a separate safe copy area. Motion starts enabled; the footer Reduce motion control switches every story to ordinary flow, and its Enable motion state restores the scroll experience.

## 1:20-2:00 - Navigate with the keyboard

Reload the page. Press Tab to reveal Skip to content and Enter to use it. Reload again and Tab through the brand and navigation. Use Enter to open Projects. On the phone-sized layout, focus Menu, press Enter, then Escape to close it. The focus returns to the menu button.

## 2:00-2:45 - Explain JavaScript

Open script.js. Pick one block and explain it in your own words:

- **Mobile menu:** matchMedia determines whether the viewport is narrow. The button flips menuOpen. updateMenu changes the navigation's hidden state and the button's aria-expanded state. Escape closes the menu and restores focus.
- **Scrollytelling:** an intersection observer wakes the renderer near the story; scroll position selects the chapter. Layout geometry is cached when fonts, dimensions, or motion preferences change. On scroll, requestAnimationFrame compares the current reading position to the six step centers. That determines continuous assembly/media progress, so going backward also reverses the visual. The page never intercepts scrolling, and the text is always present.
- **Contact validation:** fieldError trims input and checks required fields, email validity, and message length. Errors appear next to the inputs and focus goes to the first invalid field. Valid input becomes an encoded mailto URL. A separate click opens the email app; this site does not send messages.
- **Portrait loading:** a request counter ignores an outdated image response after the pointer leaves. A failed download keeps the current portrait, announces a visible retry message, and lets the next selection retry once.
- **Preferences:** only light/dark and a boolean motion choice are stored. Invalid themes fall back to the device setting; storage events and restored-page events synchronize already-open pages. The controls still work when storage is unavailable.

## 2:45-3:00 - Evidence

Show TESTING.md and the Lighthouse accessibility scores. Mention the 320px overflow found in the first animation, the figure-level clipping fix, and the passing retest.

## Before class

- Review AGENTS.md and all source code yourself, as required by the assignment.
- Confirm the project descriptions and supplied media are accurate; all required project visuals are present and each published image remains under 500 KB.
- Open the site on a physical phone and your laptop, and practice Tab/Enter/Escape yourself.
- Upload output/pdf/portfolio-report.pdf to the assignment. Submission to the course is a personal step, not performed by this site.
- The existing commits are dated honestly. Review the actual commit history against your course's process requirements.


## New project stories

Open Projects and scroll through the badge (4 chapters), HafizAI (7), and tiller (4). Show forward and reverse scrolling. On a phone, the sticky image shows a detail; each full-image link opens the complete supplied photograph/screenshot. Reduce motion to put each image back beside its chapter.

Explain the `mediaStories` block in script.js: each original chapter keeps its image, caption, and text; a decorative duplicate provides the sticky display. Cached document coordinates locate chapter centers. Native scroll position selects the nearest center in one requestAnimationFrame callback. Resize, fonts, restored pages, and motion changes invalidate the cache. IntersectionObserver wakes nearby stories; it does not choose the chapter. The visual therefore reverses without depending on earlier scroll events. Short viewports and reduced motion use static flow.

Use CODE_REVIEW.md for personal review. Automated checks do not complete your own review or the classroom explanation.
