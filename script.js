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
    strings: ['Jeune Développeur Web à la recherche d\'une alternance Full-Stack \n Ancien étudiant en Anglais, je me suis reconverti dans le développement web avec l\'ENI Ecole Informatique. Actuellement en stage chez Accenture Nantes, je recherche une entrepise où effectuer la suite de ma formation en alternance. Je suis investi dans mon travail, rigoureux, très marrant (modeste? Non), j\'ai pour ambition de participer à la création de projets inclusifs et respectueux de l\'environnement.'],
    typeSpeed: 0,
    backSpeed: 0,
});

// COMPTEUR
let compteur = 0;
$(window).scroll(function(){
    const top = $('.counter').offset().top
     - window.innerHeight;
    if (compteur == 0 && $(window).scrollTop() > top){
        $('.counter-value').each(function(){
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
            {
                duration: 5000,
                easing: 'swing',
                step: function(){
                    $this.text(Math.floor(this.countNum));
                },
                complete: function(){
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
});

document.getElementById("mangaListLink").addEventListener('click', function() {
    this.alert("Ce site web sera bientôt disponible, mais il faut patienter encore un peu ! :)")
});