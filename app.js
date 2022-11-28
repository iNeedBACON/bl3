const header = document.querySelector("header");

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    prevScrollPos > currentScrollPos
        ? header.classList.remove("scroll")
        : header.classList.add("scroll");

    prevScrollPos = currentScrollPos;
};

var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
};