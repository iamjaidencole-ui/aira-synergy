// Fade-up animation
const faders = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

// Scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact form email redirect
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("New Contact Message - Aira Synergy");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href =
    `mailto:airasynergy@gmail.com?subject=${subject}&body=${body}`;
});
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
}

menuToggle.addEventListener("click", openMenu);

// Close when clicking outside menu
menuOverlay.addEventListener("click", closeMenu);

// Close when clicking a menu link
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});
