var burgerMenuIco = document.getElementById("burgerMenuIco")
var burgerMenuNames = document.getElementById("burgerMenuNames")

burgerMenuIco.onclick = function (){
    burgerMenuIco.classList.toggle("header_container-burgerMenuICO_active")
    burgerMenuNames.classList.toggle("burgerMenuNamesActive")
};