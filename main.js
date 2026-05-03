// Tabib — main.js

// Sticky navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('open');
    }
  });
}

// Animate elements on scroll (Intersection Observer)
const observerOpts = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.style.opacity = '1';
      el.target.style.transform = 'translateY(0)';
      observer.unobserve(el.target);
    }
  });
}, observerOpts);

// Apply fade-in to cards and sections
document.querySelectorAll('.info-card, .dept-card, .doctor-card, .stat-item, .hours-row').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  observer.observe(el);
});

// Set min date on date inputs to today
document.querySelectorAll('input[type="date"]').forEach(input => {
  input.min = new Date().toISOString().split('T')[0];
});
