// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));

// Scroll animation for cards
const cards = document.querySelectorAll('.card');
const showCards = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom){ card.classList.add('show'); }
    });
};
window.addEventListener('scroll', showCards);
window.addEventListener('load', showCards);
