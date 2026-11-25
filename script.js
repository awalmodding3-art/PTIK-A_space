document.addEventListener("DOMContentLoaded", () => {
  // 1. Menu Navigasi Mobile
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // 2. Filter Jadwal Kuliah Berdasarkan Hari
  const tabButtons = document.querySelectorAll(".tab-btn");
  const scheduleCards = document.querySelectorAll(".schedule-card");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedDay = button.getAttribute("data-day");

      scheduleCards.forEach((card) => {
        const cardDay = card.getAttribute("data-day");
        if (selectedDay === "semua" || cardDay === selectedDay) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // 3. Lightbox Preview Foto Kegiatan
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxDate = document.getElementById("lightboxDate");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const lightboxClose = document.getElementById("lightboxClose");

  document.querySelectorAll(".photo-card").forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxDate.textContent = card.getAttribute("data-date");
      lightboxTitle.textContent = card.getAttribute("data-title");
      lightboxDesc.textContent = card.getAttribute("data-desc");

      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  };

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
});