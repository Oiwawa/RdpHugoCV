// NAVBAR
let lastScrollTop = 0;
let navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;
    
    if ( scrollTop > lastScrollTop ) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});
// AOS
AOS.init();

// TYPED
var typed = new Typed('.typed', {
    strings: ['Jeune Développeur Web à la recherche d\'une alternance Full-Stack'],
    typeSpeed: 10,
    backSpeed: 0,
});

