const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileOverlay = document.getElementById("mobile-overlay");
const closeBtn = document.getElementById("close-mobile-menu");

function closeMenu() {
  mobileMenu.classList.remove("open");
  mobileOverlay.classList.remove("open");

  // Додаємо клас "closing" і видаляємо його через 300 мс (тривалість анімації)
  mobileMenu.classList.add("closing");
  setTimeout(() => {
    mobileMenu.classList.remove("closing");
  }, 400);
}

burgerBtn.addEventListener("click", () => {
  console.log("click");

  mobileMenu.classList.add("open");
  mobileOverlay.classList.add("open");
});

if (closeBtn) {
  closeBtn.addEventListener("click", closeMenu);
}
if (mobileOverlay) {
  mobileOverlay.addEventListener("click", closeMenu);
}
// Закриває при кліку на пункт меню
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
