const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');


hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
});


const reveals = document.querySelectorAll('.reveal');


function revealOnScroll() {
reveals.forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight - 100) {
el.classList.add('active');
}
});
}


window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
