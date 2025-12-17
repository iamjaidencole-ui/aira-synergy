// Smooth reveal animation on scroll
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
},{ threshold: 0.15 });


document.querySelectorAll('.card, .company-card').forEach(el => observer.observe(el));
