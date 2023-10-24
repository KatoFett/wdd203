const menuButton = document.querySelector('#navMenu');
const nav = document.querySelector('nav');
const banner = document.querySelector('#banner');
const closeBanner = banner.querySelector('#close-banner');

menuButton.addEventListener('click', () => {
    let openClass = 'open';
    menuButton.classList.toggle(openClass);
    nav.classList.toggle(openClass);
});

closeBanner.addEventListener('click', () => {
    banner.style.display = "none"
    localStorage.setItem('banner-visible', 'false');
});

if (localStorage.getItem('banner-visible') !== 'false' && new Date().getDay() > 0 && new Date().getDay() < 4)
    banner.style.display = "grid";