// =========================
// 🌙 DARK MODE
// =========================

function toggleTheme() {

  document.body.classList.toggle("dark");

  const toggle =
    document.getElementById("themeToggle");

  localStorage.setItem(
    "theme",
    toggle.checked ? "dark" : "light"
  );

}

// =========================
// 🚀 PAGE LOAD
// =========================

window.addEventListener("load", () => {

  const saved =
    localStorage.getItem("theme");

  const toggle =
    document.getElementById("themeToggle");

  if (saved === "dark") {

    document.body.classList.add("dark");

    if (toggle) {
      toggle.checked = true;
    }

  }

});

// =========================
// ✨ SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver(
(entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

},
{
  threshold: 0.15
});

document.querySelectorAll(
  ".card, .project-card"
).forEach(el => {
  observer.observe(el);
});