const hamburger = document.querySelector('.hamburger');
const Linkes = document.querySelector('.navLinkes');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    Linkes.classList.toggle('active');

    const isOpen = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
}
document.querySelectorAll('.navLinkes a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        Linkes.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});