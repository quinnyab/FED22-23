// Button Nav Sidear

var deButton = document.querySelector("header:nth-of-type(2) > ul > li > button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    var deNav = document.querySelector("header:nth-of-type(2)");
    deNav.classList.toggle("menuOpen");
}


// Dark mode

var img = document.querySelector("header:nth-of-type(2) > nav:nth-of-type(2) > img")

img.onclick = function () {
    document.body.classList.toggle("dark-mode")
    console.log("kittykatbitch")
    if (document.body.classList.contains("dark-mode")) {
        img.src = "img/sun.png"; // Source: https://www.iconsdb.com/white-icons/sun-icon.html
    } else {
        img.src = "img/moon.png"; // Source: https://www.iconsdb.com/white-icons/moon-4-icon.html
    }
}
