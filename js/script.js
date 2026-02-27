
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

//Filtre skills
const filterButtons = document.querySelectorAll(".filters button");
const skills = document.querySelectorAll(".skill");

function applyFilter(filter) {
  skills.forEach(skill => {
    skill.style.display =
      filter === "all" || skill.classList.contains(filter)
        ? "inline-block"
        : "none";
  });
}

// Etat initial → afficher tout
applyFilter("all");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Mise à jour bouton actif
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    applyFilter(filter);
  });
});