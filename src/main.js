// main.js
import "modern-normalize";

import { setLanguage, renderTranslations } from "/js/i18n.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTranslations();

  // Випадаюче меню
  const toggle = document.getElementById("lang-toggle");
  const menu = document.getElementById("lang-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  document.querySelectorAll(".lang-option").forEach((el) => {
    el.addEventListener("click", () => {
      const lang = el.dataset.lang;
      setLanguage(lang);
      menu.classList.remove("open");
    });
  });
});
