window.addEventListener("scroll", function() {
    var paragraphs = document.querySelectorAll(".scrolling-paragraph");
    var viewportHeight = window.innerHeight/3;
    /* "querySelectorAll()" selectionne plusieurs choses en même temps, à linverse de "querySelector()"
    qui n'en selectionne qu'un seul.
    Il est donc necessaire avant d'utiliser un evenement de les décomposer en plusieurs
    avec "forEach()". de donner un a chaque element decomposer,
    puis ensuite d'ajouter l'evenement a ce nouveau nom de variable.
    */

    paragraphs.forEach(function(paragraph) {
        var paragraphTop = paragraph.getBoundingClientRect().top;
        
        if (200 < paragraphTop && paragraphTop < viewportHeight) {
            paragraph.classList.add("highlight");
        } else {
             paragraph.classList.remove("highlight");
        }
    });
});