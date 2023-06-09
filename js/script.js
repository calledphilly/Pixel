// animation sur le texte au centre
window.addEventListener("scroll", () => {
    let paragraphs = document.querySelectorAll(".scrolling-paragraph");
    let viewportHeight = window.innerHeight/3;

    /* "querySelectorAll()" selectionne plusieurs choses en même temps, à l'inverse de "querySelector()"
    qui n'en selectionne qu'un seul.
    Il est donc nécéssaire avant d'utiliser un evenement de les décomposer en plusieurs
    avec "forEach()". de donner un a chaque element décomposer,
    puis ensuite d'ajouter l'evenement à ce nouveau nom de variable.
    */

    paragraphs.forEach((paragraph) => {
        let paragraphTop = paragraph.getBoundingClientRect().top;

        if (200 < paragraphTop && paragraphTop < viewportHeight) {
            paragraph.classList.add("highlight");
        } else {
            paragraph.classList.remove("highlight");
        }
    });
});
//---------------------------------------------------
// annimation de la bar de progression
window.addEventListener('scroll', () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
});
//---------------------------------------------------
// faire a apparaitre les images en cours du scroll
window.addEventListener("scroll", () => {
    //constante qui donne la taille du body
    let heightBody = document.body.offsetHeight ;
    
    /* « window.scrollY » donne le niveau de la barre de scroll,
    mais par le « Top », raispn pour laquelle on ajoute « window.innerHeght » pour obtenir le Bottom de la scroll bar  */
    let bottomPointOfNavBar = window.scrollY + window.innerHeight ;
    
    /*variable qui donne le pourcentage de scroll (verticale) de la page.
    On multiplie par 100 pour obtenir une valeyr semblable à des pourcentage, puis on tilise l'opérateur de troncature  « | » (pipe) : En appliquant l'opérateur de troncature « | 0 » à un nombre, la partie décimale est supprimée.  */
    let scrollYPercentage = ( bottomPointOfNavBar / heightBody ) * 100;
    
    /* ‚ */
    
    // animaion image de Fourier
    if (scrollYPercentage > 14.7) {
        imgFourier.classList.add('active');
    } else {
        imgFourier.classList.remove('active');
    }
    // animaion image de Kotelnokov
    if (scrollYPercentage > 27.5) {
        imgKotelnikov.classList.add('active');
    } else {
        imgKotelnikov.classList.remove('active');
    }
    
    // animaion image de Kirsch
    if (scrollYPercentage > 55.73) {
        imgKirsch.classList.add('active');
    } else {
        imgKirsch.classList.remove('active');
    }
});
//---------------------------------------------------
// animation sur le bouton qui ramene en haut de la page
let lastScrollY = 0; // variable qui va enregistrer la derniere position de scroll 

window.addEventListener('scroll', () => {

    lastScrollY = window.scrollY ;

    /* if(window.scrollY < lastScrollY) {
        btn.classList.add('btnActive');
    } else {
        btn.classList.remove('btnActive');
    }; */
});