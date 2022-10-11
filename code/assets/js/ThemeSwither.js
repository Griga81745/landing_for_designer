var sune = document.getElementById("themeSwithSune") //sune
var moon = document.getElementById("themeSwitchMoon") //moon
var swithcer = document.getElementById("switchTheme") //swith button
var body = document.getElementById("body")

var form = document.getElementsByClassName('form-contactMe');

var circle = document.getElementsByClassName("mySkill-container-skill-circle");

var imageNotion = document.getElementsByClassName("Notion")[0];

var contactUsDark = document.getElementById("resume_container-contacts_dark")
var contactUsWhite = document.getElementById("resume_container-contacts_white")


sune.onclick = function (){
    contactUsDark.classList.toggle("display-none")
    contactUsWhite.classList.toggle("display-none")

    sune.classList.toggle("WhiteThemeOn")
    body.classList.toggle("darkTheme")
    body.classList.toggle("whiteTheme")

    Array.from(form).forEach( form => {
        form.classList.toggle("darkThemeForm")
        form.classList.toggle("whiteThemeForm")
    });

    Array.from(circle).forEach(circle => {
        circle.classList.toggle("mySkill-container-skill-circle-color-dark")
        circle.classList.toggle("mySkill-container-skill-circle-white")
    })

    imageNotion.classList.toggle("notion-changeColor")
}
//----------------Dark Theme Switcher----------------//

