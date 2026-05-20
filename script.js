const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade-up");

function reveal() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// CLOSE MENU ON LINK CLICK
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
