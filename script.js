// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');


hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
});


// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');


function revealOnScroll(){
reveals.forEach(el => {
const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;
const revealPoint = 100;


if(elementTop < windowHeight - revealPoint){
el.classList.add('active');
}
});
}


window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
