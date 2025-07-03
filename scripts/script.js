const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// On load, apply saved theme (if any)
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
}

toggleBtn.addEventListener("click", () => {
    const isDark = body.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
})