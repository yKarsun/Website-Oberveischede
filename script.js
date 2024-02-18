window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('fixed-nav', window.scrollY > 100);
})