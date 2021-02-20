function openNav() {
    document.getElementById("mySidenav").style.width = "160px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function fadeOut(elementToFade)
{
    var element = document.getElementsByClassName(elementToFade);

    element.style.opacity -= 0.1;
    if(element.style.opacity < 0.0) {
        element.style.opacity = 0.0;
    } else {
        setTimeout("fadeOut(\"" + "pages" + "\")", 100);
    }
}

function fadeIn(elementToFade)
{
    var element = document.getElementById(elementToFade);

    element.style.opacity += 0.1;
    if(element.style.opacity > 1.0) {
        element.style.opacity = 1.0;
    } else {
        setTimeout("fadeIn(\"" + elementToFade + "\")", 100);
    }
}