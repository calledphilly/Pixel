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

new ScrollyVideo({
    scrollyVideoContainer: "scrolly-video",
    src: "video/Bionde Loi Fourier.mp4"
  });