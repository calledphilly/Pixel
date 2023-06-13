
// animation sur le texte au centre

window.addEventListener("scroll", () => {
    let paragraphs = document.querySelectorAll(".scrolling-paragraph");
    let viewportHeight = window.innerHeight/3; // window.innerHeight est la taille de la fenetre

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



// animation de la bar de progression

window.addEventListener('scroll', () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
});



//---------------------------------------------------



/* faire apparaitre les images au cours du scroll &
animation sur le bouton qui ramène en haut de la page */

let lastScrollYPercentage = 0; // variable qui stock l'ancienne valeur du scroll

window.addEventListener("scroll", () => {
    //constante qui donne la taille du body
    let heightBody = document.body.offsetHeight ;
    
    /* « window.scrollY » donne le niveau de la barre de scroll,
    mais par le « Top », raispn pour laquelle on ajoute « window.innerHeght » pour obtenir le Bottom de la scroll bar  */
    let bottomPointOfNavBar = window.scrollY + window.innerHeight ;
    
    /*variable qui donne le pourcentage de scroll (verticale) de la page.
    On multiplie par 100 pour obtenir une valeyr semblable à des pourcentage, puis on tilise l'opérateur de troncature  « | » (pipe) : En appliquant l'opérateur de troncature « | 0 » à un nombre, la partie décimale est supprimée.  */
    let scrollYPercentage = ( bottomPointOfNavBar / heightBody ) * 100;
    
    /* console.log(scrollYPercentage); */
    
    // animaion image de Fourier
    if (scrollYPercentage > /* 14.1 */13) {
        imgFourier.classList.add('active');
    } else {
        imgFourier.classList.remove('active');
    }
    
    // animaion image de Kotelnokov
    if (scrollYPercentage > /* 25.9 */24.2) {
        imgKotelnikov.classList.add('active');
    } else {
        imgKotelnikov.classList.remove('active');
    }
    
    // animaion image de Kirsch
    if (scrollYPercentage > 56.3) {
        imgKirsch.classList.add('active');
    } else {
        imgKirsch.classList.remove('active');
    }
    
    // animaion image de Rodnay
    if (scrollYPercentage > 88.3) {
        imgRodnay.classList.add('active');
    } else {
        imgRodnay.classList.remove('active');
    }
    
    // animaion image de Robert
    if (scrollYPercentage > 89) {
        imgRobert.classList.add('active');
    } else {
        imgRobert.classList.remove('active');
    }
    
    
    
    // ----------------------------------
    // ----------------------------------
    
    
    
    // animation de l'apparition et de la djsparition du bouton
    
    //appariton a partir de 5.2% de scroll
    if(scrollYPercentage > 5) {
        if (lastScrollYPercentage > scrollYPercentage) {
            // apparition du bouton si on scroll vers le haut
            btn.classList.add('btn')
        } else {
            // disparition sinon
            btn.classList.remove('btn')
        }
    }// disparition si le scroll est inferieur a 5.2%
    else {
        btn.classList.remove('btn')
    }
    
    // enregistrement de l'ancienne valeur du scroll
    lastScrollYPercentage = scrollYPercentage ;
});



//---------------------------------------------------



// animation scrollBar

scrollBar.addEventListener('click', () => {
    scrollBar.classList.toggle('active')
});