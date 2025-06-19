const toggleBtn = document.getElementById("lang-toggle");
const langMenu = document.getElementById("lang-menu");

if (toggleBtn && langMenu) {
  toggleBtn.addEventListener("click", () => {
    langMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.remove("active");
    }
  });
}

/************ footer ************/
const toggleBtnFooter = document.getElementById("lang-toggle-footer");
const langMenuFooter = document.getElementById("lang-menu-footer");

if (toggleBtnFooter && langMenuFooter) {
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
}

/************ Burger ************/
const toggleBtnBurger = document.getElementById("lang-toggle-burger");
const langMenuBurger = document.getElementById("lang-menu-burger");

if (toggleBtnBurger && langMenuBurger) {
  toggleBtnBurger.addEventListener("click", (ev) => {
    langMenuBurger.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (
      !toggleBtnBurger.contains(e.target) &&
      !langMenuBurger.contains(e.target)
    ) {
      langMenuBurger.classList.remove("active");
    }
  });
}
