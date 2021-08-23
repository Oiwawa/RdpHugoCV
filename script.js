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
    strings: ['Jeune Développeur Web à la recherche d\'une alternance, ce site sert à vous montrer que je suis bien plus que ça. Die-hard fan de mangas, volleyball, d\'anglais. Je passe le plus clair de mon temps à découvrir ce qu\'Internet à de plus beau à m\'offrir. Les jeux vidéos? De pinball 3-D à 4 ans, à World of Warcraft toute mon adolescence, en passant par Minecraft et Rocket League. L\'esport ? Evidémment! A défaut d\'être un sportif je soutiens mes équipes League of Legends préférées à chaque match (#FNCWIN) ! Et le petit nouveau, le développement. Arrivé de nulle part et pourtant sous mes yeux depuis toujours, je ne me vois pas évoluer dans un monde différent que celui là. La douleur des échecs, la joie de la résolution d\'un bug, les heures de recherches sur des forums tous plus sombre les uns que les autres. Tout cela me passionne et me fait aimer ce métier de plus en plus à chaque fois. '],
    typeSpeed: 20,
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