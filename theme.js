// Runs before CSS so saved/OS theme selection appears without a light-theme flash.
(function () {
  let saved = null;
  try { saved = localStorage.getItem("portfolio-theme"); } catch { /* Storage is optional. */ }
  const dark = saved === "dark" || (saved !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  const color = document.querySelector('meta[name="theme-color"]');
  if (color) color.content = dark ? "#14252d" : "#edf4f2";
}());
