// Mobile nav toggle
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle) {
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Shrink nav on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
    } else {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.04)';
    }
});
