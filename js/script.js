
// Dark mode
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️ Mode clair";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 Mode sombre";
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Mode clair";
}