const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const reveals = document.querySelectorAll('.reveal');

function revealElements() {
    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
});

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
