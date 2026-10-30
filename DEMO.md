# Three-minute demo

Use the live site: https://abdabdulazeez08-hub.github.io/Portfolio/

## 0:00-0:40 - Introduce the site

Say your name and discipline. Explain that the site has five separate HTML pages, shared CSS, and vanilla JavaScript. Show the homepage on a laptop and an actual phone. Hover or swipe the circular portrait, then show its keyboard control. Switch light/dark mode to show the sun/moon reveal, and point out the skills ribbon's pause control. Protolight uses real project photos/CAD; the other projects still use labeled placeholders.

## 0:40-1:20 - Show the story

Scroll down through Protolight's six chapters: sense, respond, design, wire, refine, and build, then scroll back up to reverse them. Explain the actual L-shaped enclosure, three LED strips, environmental inputs, and Arduino output. The final stage reveals the real prototype photo. On mobile, a compact sticky visual remains above the story; reduced motion uses ordinary flow. Show the Reduce motion button in the footer.

## 1:20-2:00 - Navigate with the keyboard

Reload the page. Press Tab to reveal Skip to content and Enter to use it. Reload again and Tab through the brand and navigation. Use Enter to open Projects. On the phone-sized layout, focus Menu, press Enter, then Escape to close it. The focus returns to the menu button.

## 2:00-2:45 - Explain JavaScript

Open script.js. Pick one block and explain it in your own words:

- **Mobile menu:** matchMedia determines whether the viewport is narrow. The button flips menuOpen. updateMenu changes the navigation's hidden state and the button's aria-expanded state. Escape closes the menu and restores focus.
- **Scrollytelling:** layout geometry is cached when fonts, dimensions, or motion preferences change. On scroll, requestAnimationFrame compares the current reading position to the six step centers. That determines the chapter and continuous assembly/media progress, so going backward also reverses the visual. The page never intercepts scrolling, and the text is always present.
- **Contact validation:** fieldError trims input and checks required fields, email validity, and message length. Errors appear next to the inputs and focus goes to the first invalid field. Valid input becomes an encoded mailto URL. A separate click opens the email app; this site does not send messages.

## 2:45-3:00 - Evidence

Show TESTING.md and the Lighthouse accessibility scores. Mention the 320px overflow found in the first animation, the figure-level clipping fix, and the passing retest.

## Before class

- Review AGENTS.md and all source code yourself, as required by the assignment.
- Replace the remaining badge, HafizAI, and soil-tilling visual placeholders when media is available; keep each under 500 KB and update alt text. Protolight already includes its actual media.
- Open the site on a physical phone and your laptop, and practice Tab/Enter/Escape yourself.
- Upload output/pdf/portfolio-report.pdf to the assignment. Submission to the course is a personal step, not performed by this site.
- The existing commits are dated honestly. Review the actual commit history against your course's process requirements.
