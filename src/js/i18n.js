// i18n.js
import ua from "/data/ua.json";
import en from "/data/en.json";
import cz from "/data/cz.json";
import ru from "/data/ru.json";

const languages = { ua, en, cz, ru };

let currentLang = localStorage.getItem("lang") || "ua";

export function setLanguage(lang) {
  if (languages[lang]) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    renderTranslations();
    updateLangSwitcherUI(lang);
  }
}

export function t(key) {
  return languages[currentLang]?.[key] || key;
}

export function renderTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });
}

function updateLangSwitcherUI(lang) {
  const flag = `/img/flags/${lang}.svg`;
  const label = t(`lang.${lang}`);
  const toggle = document.querySelector("#lang-toggle");
  if (toggle) {
    toggle.querySelector("img").src = flag;
    toggle.querySelector(".lang-selected").textContent = label;
  }
}
