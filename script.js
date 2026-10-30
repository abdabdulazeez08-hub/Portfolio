"use strict";

// All five HTML pages work on their own. JavaScript adds optional interactions.
document.body.classList.add("js-ready");

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionButton = document.querySelector(".motion-toggle");
let userReducedMotion = false;
try { userReducedMotion = localStorage.getItem("portfolio-reduced-motion") === "true"; } catch { /* Private browsing may block storage. */ }

function updateMotion() {
  const reduced = motionQuery.matches || userReducedMotion;
  document.documentElement.dataset.motion = reduced ? "reduced" : "full";
  motionButton.hidden = false;
  motionButton.setAttribute("aria-pressed", String(reduced));
  motionButton.textContent = motionQuery.matches ? "Motion reduced by system" : reduced ? "Enable motion" : "Reduce motion";
  motionButton.disabled = motionQuery.matches;
  motionButton.title = motionQuery.matches ? "Your device’s reduced-motion preference is respected." : "Change animation preference";
  document.dispatchEvent(new Event("portfolio:motion"));
}
motionButton.addEventListener("click", () => {
  userReducedMotion = !userReducedMotion;
  try { localStorage.setItem("portfolio-reduced-motion", String(userReducedMotion)); } catch { /* Preference still applies for this page. */ }
  updateMotion();
});
motionQuery.addEventListener("change", updateMotion);
updateMotion();

// A native button controls the mobile navigation. Escape returns focus to it.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const header = document.querySelector(".site-header");
const mobileQuery = window.matchMedia("(max-width: 760px)");
let menuOpen = false;
header.classList.add("menu-enhanced");

function updateMenu() {
  menuButton.hidden = !mobileQuery.matches;
  navigation.hidden = mobileQuery.matches && !menuOpen;
  menuButton.setAttribute("aria-expanded", String(mobileQuery.matches && menuOpen));
  menuButton.innerHTML = menuOpen ? 'Close <span aria-hidden="true">−</span>' : 'Menu <span aria-hidden="true">＋</span>';
}
menuButton.addEventListener("click", () => { menuOpen = !menuOpen; updateMenu(); });
mobileQuery.addEventListener("change", () => {
  const focusWasInNavigation = navigation.contains(document.activeElement);
  const focusWasOnMenu = document.activeElement === menuButton;
  menuOpen = false;
  updateMenu();
  if (mobileQuery.matches && focusWasInNavigation) menuButton.focus();
  if (!mobileQuery.matches && focusWasOnMenu) navigation.querySelector("a").focus();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuOpen) {
    menuOpen = false;
    updateMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", event => {
  if (menuOpen && !header.contains(event.target)) { menuOpen = false; updateMenu(); }
});
document.addEventListener("focusin", event => {
  if (menuOpen && !header.contains(event.target)) { menuOpen = false; updateMenu(); }
});
updateMenu();

// Native scrolling stays untouched. One animation frame batches progress updates.
const progressBar = document.querySelector(".reading-progress");
let progressPending = false;
function updateProgress() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const progress = available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0;
  progressBar.style.transform = `scaleX(${progress})`;
  progressPending = false;
}
function queueProgress() {
  if (!progressPending) { progressPending = true; window.requestAnimationFrame(updateProgress); }
}
// Modern browsers handle this entirely in CSS; older browsers use the fallback.
if (!CSS.supports("animation-timeline: scroll()")) {
  window.addEventListener("scroll", queueProgress, { passive: true });
  window.addEventListener("resize", queueProgress);
  window.addEventListener("load", queueProgress);
}

// Scroll position is the source of truth in both directions, including fast jumps.
const storyVisual = document.querySelector(".story-visual");
if (storyVisual) {
  const steps = [...document.querySelectorAll(".story-step")];
  const stages = {
    sense: ["Sense the environment", "Explanatory reconstruction · based on the supplied engineering notebook."],
    respond: ["Connect readings to light", "Explanatory reconstruction · three LED channels, sensors, and Arduino control."],
    design: ["Design the enclosure", "Actual CAD export · enclosure revision from our engineering notebook."],
    wire: ["Connect the circuit", "Actual build photograph · early Arduino and breadboard assembly."],
    revise: ["Check, adjust, repeat", "Actual build photograph · an earlier printed cover and circuit."],
    build: ["The actual final prototype", "Actual final prototype · May 2026 · supplied engineering notebook."]
  };
  const scenes = [...storyVisual.querySelectorAll("[data-scene]")];
  const diagram = storyVisual.querySelector(".prototype-diagram");
  const key = storyVisual.querySelector(".diagram-key");
  const source = storyVisual.querySelector(".scene-source");
  const count = storyVisual.querySelector(".stage-count");
  const caption = storyVisual.querySelector(".stage-caption");
  const note = storyVisual.querySelector(".figure-note");
  const chapterLinks = [...document.querySelectorAll("[data-chapter]")];
  let centers = [];
  let focusOffset = 0;
  let geometryDirty = true;
  let storyFrame = 0;
  let currentStage = null;
  let currentNote = "";
  const clamp = (value, low = 0, high = 1) => Math.min(high, Math.max(low, value));

  function renderStory() {
    storyFrame = 0;
    if (geometryDirty) {
      // Read layout together only after geometry changes, never per scroll frame.
      centers = steps.map(step => {
        const bounds = step.getBoundingClientRect();
        return window.scrollY + bounds.top + bounds.height / 2;
      });
      const headerHeight = header.offsetHeight;
      const visualHeight = storyVisual.offsetHeight;
      const reduced = document.documentElement.dataset.motion === "reduced";
      focusOffset = mobileQuery.matches && !reduced
        ? headerHeight + visualHeight + Math.max(70, (window.innerHeight - headerHeight - visualHeight) / 2)
        : window.innerHeight / 2;
      geometryDirty = false;
    }
    const focus = window.scrollY + focusOffset;
    let active = 0;
    for (let index = 1; index < centers.length; index += 1) {
      if (Math.abs(centers[index] - focus) < Math.abs(centers[active] - focus)) active = index;
    }
    // Interpolate between adjacent chapter centers, even when their copy differs in height.
    let progress = 0;
    for (let index = 1; index < centers.length; index += 1) {
      if (focus >= centers[index]) progress = index;
      else if (focus > centers[index - 1]) {
        progress = index - 1 + (focus - centers[index - 1]) / Math.max(1, centers[index] - centers[index - 1]);
        break;
      } else break;
    }
    storyVisual.style.setProperty("--join", clamp(progress / 1.6).toFixed(3));
    storyVisual.style.setProperty("--light-level", (.12 + .68 * clamp(1 - Math.abs(progress - .9))).toFixed(3));
    storyVisual.style.setProperty("--photo-opacity", clamp(progress - (steps.length - 2)).toFixed(3));
    diagram.style.opacity = (1 - clamp(progress - 1)).toFixed(3);
    scenes.forEach(scene => {
      const index = steps.findIndex(step => step.dataset.step === scene.dataset.scene);
      scene.style.opacity = clamp(1 - Math.abs(progress - index)).toFixed(3);
    });
    steps.forEach((step, index) => step.style.setProperty("--chapter-focus", clamp(1 - Math.abs(progress - index)).toFixed(3)));
    storyVisual.style.setProperty("--story-progress", (progress / (steps.length - 1)).toFixed(3));
    storyVisual.dataset.progress = progress.toFixed(3);
    const stage = steps[active].dataset.step;
    if (currentStage !== stage) {
      currentStage = stage;
      storyVisual.dataset.stage = stage;
      count.textContent = `${String(active + 1).padStart(2, "0")} / ${String(steps.length).padStart(2, "0")}`;
      caption.textContent = stages[stage][0];
      const illustrated = active < 2;
      key.hidden = !illustrated;
      source.hidden = illustrated;
      source.textContent = stages[stage][1];
      diagram.setAttribute("aria-hidden", String(!illustrated));
      scenes.forEach(scene => scene.setAttribute("aria-hidden", String(scene.dataset.scene !== stage)));
      chapterLinks.forEach(link => {
        if (link.dataset.chapter === stage) link.setAttribute("aria-current", "step");
        else link.removeAttribute("aria-current");
      });
    }
    const nextNote = document.documentElement.dataset.motion === "reduced" ? stages.build[1] : stages[stage][1];
    if (currentNote !== nextNote) { note.textContent = nextNote; currentNote = nextNote; }
  }
  function queueStory(measure = false) {
    if (measure) geometryDirty = true;
    if (!storyFrame) storyFrame = window.requestAnimationFrame(renderStory);
  }
  window.addEventListener("scroll", () => queueStory(), { passive: true });
  window.addEventListener("resize", () => queueStory(true));
  window.addEventListener("pageshow", () => queueStory(true));
  document.addEventListener("portfolio:motion", () => queueStory(true));
  if ("ResizeObserver" in window) new ResizeObserver(() => queueStory(true)).observe(document.querySelector(".story-layout"));
  document.fonts.ready.then(() => queueStory(true));
  document.querySelector(".story-layout").addEventListener("focusin", event => {
    const control = event.target.closest(".story-step a, .story-step button");
    if (!control) return;
    window.requestAnimationFrame(() => {
      if (getComputedStyle(storyVisual).position !== "sticky" || !mobileQuery.matches) return;
      const bounds = control.getBoundingClientRect();
      const safeTop = header.offsetHeight + storyVisual.offsetHeight + 24;
      if (bounds.top < safeTop || bounds.bottom > innerHeight - 24) {
        // Native focus scrolling does not account for an overlapping sticky sibling.
        window.scrollTo({ top: scrollY + bounds.top - safeTop, behavior: "instant" });
      }
    });
  });
  queueStory(true);
}

// Saved theme takes precedence; without a saved choice, follow the device theme.
const themeButton = document.querySelector(".theme-toggle");
const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
let themePreference = null;
try { themePreference = localStorage.getItem("portfolio-theme"); } catch { /* Storage is optional. */ }
function applyTheme(theme) {
  const dark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  themeButton.hidden = false;
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  themeButton.title = dark ? "Switch to light mode" : "Switch to dark mode";
  document.querySelector('meta[name="theme-color"]').content = dark ? "#14252d" : "#edf4f2";
}
applyTheme(themePreference === "light" || themePreference === "dark" ? themePreference : themeQuery.matches ? "dark" : "light");
let themeTransition = null;
let themeSequence = 0;
let themeFallbackTimer = 0;
function animateTheme(theme) {
  const sequence = ++themeSequence;
  themeTransition?.skipTransition();
  clearTimeout(themeFallbackTimer);
  document.documentElement.classList.remove("theme-fallback");
  if (document.documentElement.dataset.motion === "reduced") {
    applyTheme(theme);
    delete document.documentElement.dataset.themeAnimating;
    return;
  }
  document.documentElement.dataset.themeAnimating = theme;
  themeButton.animate([{ transform: "rotate(-25deg) scale(.85)" }, { transform: "rotate(0) scale(1)" }], { duration: 600, easing: "cubic-bezier(.22,.68,.2,1)" });
  const finish = () => {
    if (sequence === themeSequence) {
      delete document.documentElement.dataset.themeAnimating;
      document.documentElement.classList.remove("theme-fallback");
      themeTransition = null;
    }
  };
  if (!document.startViewTransition) {
    document.documentElement.classList.add("theme-fallback");
    applyTheme(theme);
    themeFallbackTimer = setTimeout(finish, 650);
    return;
  }
  const bounds = themeButton.getBoundingClientRect();
  const x = bounds.left + bounds.width / 2;
  const y = bounds.top + bounds.height / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const transition = document.startViewTransition(() => {
    if (sequence === themeSequence) applyTheme(theme);
  });
  themeTransition = transition;
  transition.ready.then(() => {
    if (sequence !== themeSequence) return;
    document.documentElement.animate({
      clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`]
    }, { duration: 650, easing: "cubic-bezier(.22,.68,.2,1)", pseudoElement: "::view-transition-new(root)" });
  }).catch(() => { /* A newer click or navigation may skip an in-progress transition. */ });
  transition.finished.then(finish, finish);
}
themeButton.addEventListener("click", () => {
  themePreference = (themePreference || document.documentElement.dataset.theme) === "dark" ? "light" : "dark";
  try { localStorage.setItem("portfolio-theme", themePreference); } catch { /* Current page still changes theme. */ }
  animateTheme(themePreference);
});
themeQuery.addEventListener("change", () => { if (!themePreference) applyTheme(themeQuery.matches ? "dark" : "light"); });
document.addEventListener("portfolio:motion", () => {
  if (document.documentElement.dataset.motion === "reduced") {
    themeSequence += 1;
    themeButton.getAnimations().forEach(animation => animation.cancel());
    themeTransition?.skipTransition();
    themeTransition = null;
    clearTimeout(themeFallbackTimer);
    document.documentElement.classList.remove("theme-fallback");
    delete document.documentElement.dataset.themeAnimating;
    applyTheme(themePreference || (themeQuery.matches ? "dark" : "light"));
  }
});

// Both unretouched photographs share the same circular CSS headshot frame.
document.querySelectorAll(".portrait-switcher").forEach(portrait => {
  const button = portrait.querySelector(".portrait-flip");
  const graduationImage = portrait.querySelector(".portrait-graduation");
  let graduationReady = null;
  let request = 0;
  let desiredGraduation = false;
  let restingGraduation = false;
  let hoverPreview = false;
  let swipeStart = null;
  let suppressClickUntil = 0;
  const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  function loadGraduation() {
    if (!graduationReady) {
      graduationImage.src = graduationImage.dataset.src;
      graduationReady = graduationImage.decode().catch(() => { graduationReady = null; });
    }
    return graduationReady;
  }
  button.disabled = false;
  button.addEventListener("focus", loadGraduation, { once: true });
  async function showPortrait(graduation) {
    desiredGraduation = graduation;
    const ticket = ++request;
    if (graduation) {
      button.setAttribute("aria-busy", "true");
      await loadGraduation();
      if (ticket !== request) return;
      button.removeAttribute("aria-busy");
      if (!graduationImage.complete || graduationImage.naturalWidth === 0) {
        portrait.querySelector("[data-portrait-label]").textContent = "The graduation photo could not load. Try again.";
        return;
      }
    }
    button.removeAttribute("aria-busy");
    portrait.dataset.portrait = graduation ? "graduation" : "professional";
    button.setAttribute("aria-pressed", String(graduation));
    button.setAttribute("aria-label", graduation ? "Show professional portrait of Abdallah Abdulazeez" : "Show graduation portrait of Abdallah Abdulazeez");
    portrait.querySelector(".portrait-front").setAttribute("aria-hidden", String(graduation));
    portrait.querySelector(".portrait-back").setAttribute("aria-hidden", String(!graduation));
    portrait.querySelector("[data-portrait-label]").textContent = graduation ? "Graduation portrait" : "Professional portrait";
  }
  button.addEventListener("pointerenter", event => {
    loadGraduation();
    if (event.pointerType === "mouse" && hoverQuery.matches && document.documentElement.dataset.motion !== "reduced") {
      hoverPreview = true;
      showPortrait(!restingGraduation);
    }
  });
  button.addEventListener("pointerleave", event => {
    if (event.pointerType === "mouse") { hoverPreview = false; showPortrait(restingGraduation); }
  });
  button.addEventListener("click", event => {
    if (event.detail > 0 && performance.now() < suppressClickUntil) return;
    restingGraduation = hoverPreview && event.detail > 0 ? desiredGraduation : !desiredGraduation;
    hoverPreview = false;
    showPortrait(restingGraduation);
  });
  // Horizontal swipes flip; vertical gestures remain native page scrolling.
  button.addEventListener("pointerdown", event => {
    if (event.pointerType === "touch" || event.pointerType === "pen") swipeStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
  }, { passive: true });
  button.addEventListener("pointerup", event => {
    if (!swipeStart || swipeStart.id !== event.pointerId) return;
    const dx = event.clientX - swipeStart.x;
    const dy = event.clientY - swipeStart.y;
    swipeStart = null;
    if (Math.abs(dx) >= 30 && Math.abs(dx) > Math.abs(dy) * 1.35) {
      suppressClickUntil = performance.now() + 500;
      restingGraduation = !desiredGraduation;
      showPortrait(restingGraduation);
    }
  }, { passive: true });
  button.addEventListener("pointercancel", () => { swipeStart = null; });
  document.addEventListener("portfolio:motion", () => {
    if (document.documentElement.dataset.motion === "reduced") showPortrait(restingGraduation);
  });
});

const ribbon = document.querySelector(".skills-banner");
if (ribbon) {
  const button = ribbon.querySelector(".ribbon-toggle");
  let paused = false;
  function updateRibbon() {
    const reduced = document.documentElement.dataset.motion === "reduced";
    ribbon.classList.toggle("is-paused", paused || reduced);
    button.hidden = false;
    button.disabled = reduced;
    button.setAttribute("aria-pressed", String(paused || reduced));
    button.textContent = reduced ? "Skills shown without motion" : paused ? "Play skills ribbon" : "Pause skills ribbon";
  }
  button.addEventListener("click", () => { paused = !paused; updateRibbon(); });
  document.addEventListener("portfolio:motion", updateRibbon);
  updateRibbon();
}

// A small companion ring follows only a fine mouse pointer; the native cursor stays.
const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
const cursorHalo = document.createElement("div");
cursorHalo.className = "cursor-halo";
cursorHalo.setAttribute("aria-hidden", "true");
cursorHalo.innerHTML = "<span></span>";
document.body.append(cursorHalo);
let cursorEnabled = false;
let cursorFrame = 0;
let cursorX = 0, cursorY = 0, targetX = 0, targetY = 0;
function updateCursorAvailability() {
  cursorEnabled = finePointerQuery.matches && !mobileQuery.matches && document.documentElement.dataset.motion !== "reduced";
  cursorHalo.hidden = !cursorEnabled;
  if (!cursorEnabled) {
    cursorHalo.classList.remove("is-visible");
    window.cancelAnimationFrame(cursorFrame);
    cursorFrame = 0;
  }
}
function renderCursor() {
  cursorX += (targetX - cursorX) * .24;
  cursorY += (targetY - cursorY) * .24;
  cursorHalo.style.transform = `translate3d(${cursorX - 14}px, ${cursorY - 14}px, 0)`;
  cursorFrame = Math.abs(targetX - cursorX) + Math.abs(targetY - cursorY) > .15 ? window.requestAnimationFrame(renderCursor) : 0;
}
document.addEventListener("pointermove", event => {
  if (!cursorEnabled || event.pointerType !== "mouse") return;
  targetX = event.clientX; targetY = event.clientY;
  if (!cursorHalo.classList.contains("is-visible")) { cursorX = targetX; cursorY = targetY; }
  cursorHalo.classList.add("is-visible");
  cursorHalo.classList.toggle("is-hovering", Boolean(event.target.closest("a, button, summary, input, textarea")));
  if (!cursorFrame) cursorFrame = window.requestAnimationFrame(renderCursor);
}, { passive: true });
document.addEventListener("pointerdown", () => { if (cursorEnabled) cursorHalo.classList.add("is-pressed"); });
document.addEventListener("pointerup", () => cursorHalo.classList.remove("is-pressed"));
document.documentElement.addEventListener("pointerleave", () => cursorHalo.classList.remove("is-visible"));
document.addEventListener("portfolio:motion", updateCursorAvailability);
finePointerQuery.addEventListener("change", updateCursorAvailability);
mobileQuery.addEventListener("change", updateCursorAvailability);
updateCursorAvailability();

// Validate locally, then offer an explicit mailto link. No message is sent here.
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  const fields = ["name", "email", "subject", "message"].map(id => document.getElementById(id));
  const draftLink = document.getElementById("email-draft");
  const formStatus = document.getElementById("form-status");
  const subjectFromUrl = new URLSearchParams(window.location.search).get("subject");
  if (subjectFromUrl) document.getElementById("subject").value = subjectFromUrl.slice(0, 150);

  // Chrome may scroll only the textarea caret into view. Keep the whole field visible.
  contactForm.addEventListener("focusin", event => {
    if (!event.target.matches("input, textarea")) return;
    const field = event.target;
    window.requestAnimationFrame(() => {
      const bounds = field.getBoundingClientRect();
      if (bounds.top < 110 || bounds.bottom > window.innerHeight - 24) {
        field.scrollIntoView({ block: "center", behavior: "instant" });
      }
    });
  });

  function fieldError(field) {
    const value = field.value.trim();
    if (!value) return `Enter ${field.id === "message" ? "a message" : field.id === "subject" ? "a subject" : "your " + field.id}.`;
    if (field.id === "email" && !field.validity.valid) return "Enter a valid email address, such as name@example.com.";
    if (field.id === "message" && value.length < 10) return "Write at least 10 characters so I know how I can help.";
    return "";
  }

  function validateField(field) {
    const error = fieldError(field);
    document.getElementById(`${field.id}-error`).textContent = error;
    field.setAttribute("aria-invalid", String(Boolean(error)));
    return !error;
  }

  contactForm.addEventListener("input", event => {
    draftLink.hidden = true;
    draftLink.removeAttribute("href");
    formStatus.textContent = "";
    if (fields.includes(event.target) && event.target.hasAttribute("aria-invalid")) validateField(event.target);
  });

  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    draftLink.hidden = true;
    const results = fields.map(validateField);
    if (results.includes(false)) {
      formStatus.textContent = "Check the highlighted fields, then prepare your email again.";
      fields[results.indexOf(false)].focus();
      return;
    }
    const values = Object.fromEntries(fields.map(field => [field.id, field.value.trim()]));
    // encodeURIComponent keeps ampersands, line breaks, and other text inside the draft.
    const body = `From: ${values.name}\nReply to: ${values.email}\n\n${values.message}`;
    draftLink.href = `mailto:abdabdulazeez08@gmail.com?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    draftLink.hidden = false;
    formStatus.textContent = "Your draft is ready. Open your email app, review it, and send when you’re ready. If no email app is configured, use the address on this page.";
    draftLink.focus();
  });
}
