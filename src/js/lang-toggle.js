const toggleBtn = document.getElementById("lang-toggle");
const langMenu = document.getElementById("lang-menu");

toggleBtn.addEventListener("click", () => {
  langMenu.classList.toggle("active");
});

// Закрити меню, якщо клік поза меню
document.addEventListener("click", (e) => {
  if (!toggleBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.remove("active");
  }
});

const toggleBtnFooter = document.getElementById("lang-toggle-footer");
const langMenuFooter = document.getElementById("lang-menu-footer");

toggleBtnFooter.addEventListener("click", () => {
  langMenuFooter.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    !toggleBtnFooter.contains(e.target) &&
    !langMenuFooter.contains(e.target)
  ) {
    langMenuFooter.classList.remove("active");
  }
});
