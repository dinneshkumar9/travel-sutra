document.addEventListener('DOMContentLoaded', () => {
    // Trip cost calculator functionality
    const form = document.getElementById('costForm');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const t = +document.getElementById('travelers').value;
        const d = +document.getElementById('days').value;
        const c = +document.getElementById('costPerPerson').value;
        const total = t * d * c;
        const calcButton = form.querySelector("button[type='submit']");
        if (calcButton) {
          calcButton.classList.add("glow-effect");
          setTimeout(() => {
            calcButton.classList.remove("glow-effect");
          }, 800);
        }
        document.getElementById('result').textContent =
          `Total Trip Cost: $${total.toFixed(2)}`;
      });
    }
  
    // Hamburger toggle for mobile
    const burger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (burger && navLinks) {
      burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
    }
  
    // Staggered scroll-reveal
    const reveals = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${i * 150}ms`;
      observer.observe(el);
    });
  });