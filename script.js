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
window.addEventListener("scroll", queueProgress, { passive: true });
window.addEventListener("resize", queueProgress);
updateProgress();

// Each story section updates a single sticky illustration. Text is always visible.
const storyVisual = document.querySelector(".story-visual");
if (storyVisual && "IntersectionObserver" in window) {
  const stages = {
    sense: ["01 / 03", "Sense the environment"],
    respond: ["02 / 03", "Connect inputs to output"],
    build: ["03 / 03", "Build and fit test"]
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const stage = entry.target.dataset.step;
      storyVisual.dataset.stage = stage;
      storyVisual.querySelector(".stage-count").textContent = stages[stage][0];
      storyVisual.querySelector(".stage-caption").textContent = stages[stage][1];
    }
  }, { rootMargin: "-25% 0px -45% 0px", threshold: 0 });
  document.querySelectorAll(".story-step").forEach(step => observer.observe(step));
}

// Validate locally, then offer an explicit mailto link. No message is sent here.
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  const fields = ["name", "email", "subject", "message"].map(id => document.getElementById(id));
  const draftLink = document.getElementById("email-draft");
  const formStatus = document.getElementById("form-status");
  const subjectFromUrl = new URLSearchParams(window.location.search).get("subject");
  if (subjectFromUrl) document.getElementById("subject").value = subjectFromUrl.slice(0, 150);

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
