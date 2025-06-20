const modal = document.getElementById("feedback-modal");
const overlay = document.getElementById("mobile-overlay");

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("modal-close");
  const openBtns = document.querySelectorAll(".btn-call");

  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("open");
      document.body.classList.add("no-scroll");
      overlay?.classList.add("active");
    });
  });

  function closeModal() {
    modal.classList.remove("open");
    document.body.classList.remove("no-scroll");
    overlay?.classList.remove("active");
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  if (overlay) {
    overlay.addEventListener("click", closeModal);
  }
});
