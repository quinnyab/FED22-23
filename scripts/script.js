// Button Nav Sidear

var deButton = document.querySelector("header:nth-of-type(2) > ul > li > button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    var deNav = document.querySelector("header:nth-of-type(2)");
    deNav.classList.toggle("menuOpen");
}


// Carousel

function createCaroCarrousel(carrouselID) {
    let carrousel = document.querySelector("#" + carrouselID);
    let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
    let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
    let bolletjes = carrousel.querySelectorAll(":scope > nav a");
    let linkButtons = carrousel.querySelectorAll(":scope > a");


    /****************/
    /* DE BOLLETJES */
    /****************/

    // de bolletjes activeren
    function iniBolletjes() {
        for (bolletje of bolletjes) {
            // elk bolletje laten luisteren naar kliks
            bolletje.addEventListener("click", function (e) {
                // als er geklikt wordt

                // de default-actie (de link volgen) niet uitvoeren
                e.preventDefault();

                // het nieuwe element opzoeken
                let newElement = carrousel.querySelector(this.hash);

                // dan naar het element met ID scrollen
                scrollToElement(newElement);
            });
        }
    }


    /*****************************/
    /* LINKS/RECHTS LINK-BUTTONS */
    /*****************************/

    // de links/rechts link-buttons initialiseren en activeren
    function iniLinkButtons() {
        for (linkButton of linkButtons) {
            // beide link-buttins naar kliks laten luisteren
            linkButton.addEventListener("click", function (e) {
                // als er geklikt wordt
                // de default-actie (de link volgen) niet uitvoeren
                e.preventDefault();

                // bepalen of er op 'previous' of 'next' geklikt is
                let direction = this.getAttribute("href");
                // naar het element gaan
                goToElement(direction);
            });
        }
    }


    /*****************/
    /* START POSITIE */
    /*****************/

    // het eerste element en bolletje actief maaken
    function iniStartPosition() {
        // eerste element current maken
        carrouselElements[0].classList.add("current");
        // eerste bolletje current maken
        bolletjes[0].classList.add("current");
        // aan het begin van de container starten
        carrouselElementsContainer.scrollLeft = 0;
    }


    /*********************/
    /* ALGEMENE FUNCTIES */
    /*********************/

    //////////////////////////////////
    // naar volgende/vorige element //
    function goToElement(direction) {
        // het huidige current element opzoeken
        let currentElement = carrousel.querySelector(":scope > ul > .current");

        let newElement;
        if (direction == "previous") {
            // het nieuwe element is het vorige broertje/zusje
            newElement = currentElement.previousElementSibling;
            // checken of nieuwe element bestaat - anders naar laatste
            if (!newElement) {
                newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
            }
        } else {
            // het nieuwe element is het volgende broertje/zusje
            newElement = currentElement.nextElementSibling;
            // checken of nieuwe element bestaat - anders naar eerste
            if (!newElement) {
                newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
            }
        }

        // naar het nieuwe element scrollen
        scrollToElement(newElement);
    }


    ///////////////////////////
    // scroll to new element //
    function scrollToElement(newElement) {
        // carousel container opzoeken
        let carouselElementsContainer = newElement.closest("ul");

        // de linker offset van het nieuwe element bepalen 
        let newElementOffset = newElement.offsetLeft;

        // de carousel naar de berekende positie scrollen
        carouselElementsContainer.scrollTo({
            left: newElementOffset
        });

        // nieuwe element current element maken
        updateCurrentElement(newElement);

        // de bolletjes updaten
        updateBolletjes(newElement);
    }


    ////////////////////////////
    // update current element //
    function updateCurrentElement(newElement) {
        // het huidige current element opzoeken
        let currentElement = carrousel.querySelector(":scope > ul > .current");
        // de class current verwijderen
        currentElement.classList.remove("current");

        // aan nieuwe element de class current toevoegen
        newElement.classList.add("current");
    }


    //////////////////////
    // update bolletjes //
    function updateBolletjes(newElement) {
        // het huidige current bolletje opzoeken
        let currentBolletje = carrousel.querySelector(":scope > nav .current");
        // de class current verwijderen
        currentBolletje.classList.remove("current");

        // het nieuwe bolletje opzoeken
        let newBolletje = carrousel.querySelector("a[href='#" + newElement.id + "']");
        // de class current toevoegen
        newBolletje.classList.add("current");
    }



    // de bolletjes activeren
    iniBolletjes();
    // de linkbuttons activeren
    iniLinkButtons();
    // de carrousel bij het begin starten
    iniStartPosition();
}


/************************/
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function () {
    // hier de id gebruiken van de section in de html
    createCaroCarrousel("bolletjesAndLinkButtons");
    //je kunt hier ook meerdere carrousellen activeren
})();


// Dark mode

var img = document.querySelector("body > header:nth-of-type(2) > nav:nth-of-type(2) > img")

img.onclick = function () {
    document.body.classList.toggle("dark-mode")
    console.log("kittykatbitch")
    if (document.body.classList.contains("dark-mode")) {
        img.src = "img/sun.png"; // Source: https://www.iconsdb.com/white-icons/sun-icon.html
    } else {
        img.src = "img/moon.png"; // Source: https://www.iconsdb.com/white-icons/moon-4-icon.html
    }
}
