// Button Nav Sidear

var deButton = document.querySelector("header > section:nth-of-type(2) > ul > li > button");

deButton.addEventListener("click", openMenu);

function openMenu() {
    var deNav = document.querySelector("header > section:nth-of-type(2)");
    deNav.classList.add("menuOpen");
    document.documentElement.classList.add("nietScrollen");
}


var sluitButton = document.querySelector("header > section:nth-of-type(2) nav:nth-of-type(1) button");

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
    var deNav = document.querySelector("header > section:nth-of-type(2)");
    deNav.classList.remove("menuOpen");
    document.documentElement.classList.remove("nietScrollen");
    // document.documentElement is het html element
}


// Dark mode

var img = document.querySelector("body > header > section:nth-of-type(2) > nav:nth-of-type(2) > img")

img.onclick = function () {
    document.body.classList.toggle("dark-mode")
    console.log("kittykatbitch")
    if (document.body.classList.contains("dark-mode")) {
        img.src = "img/sun.png"; // Source: https://www.iconsdb.com/white-icons/sun-icon.html
    } else {
        img.src = "img/moon.png"; // Source: https://www.iconsdb.com/white-icons/moon-4-icon.html
    }
}