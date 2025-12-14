const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const toggleIcon = navToggle.querySelector('.nav-toggle-icon');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open');
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !isExpanded);
    
    navToggle.classList.toggle('is-active');
});