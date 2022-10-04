var sune = document.getElementById("themeSwithSune") //sune
var moon = document.getElementById("themeSwitchMoon") //moon
var swithcer = document.getElementById("switchTheme") //swith button
var body = document.getElementById("body")
var form = document.getElementById("changeThemeForm")
var form2 = document.getElementById("changeThemeForm2")
var form3 = document.getElementById("changeThemeForm3")
var form4 = document.getElementById("changeThemeForm4")

sune.onclick = function (){
    sune.classList.toggle("WhiteThemeOn")
    body.classList.toggle("darkTheme")
    body.classList.toggle("whiteTheme")
    form.classList.toggle("darkThemeForm")
    form.classList.toggle("whiteThemeForm")

    form2.classList.toggle("darkThemeForm")
    form2.classList.toggle("whiteThemeForm")

    form3.classList.toggle("darkThemeForm")
    form3.classList.toggle("whiteThemeForm")

    form4.classList.toggle("darkThemeForm")
    form4.classList.toggle("whiteThemeForm")
}
//----------------Dark Theme Switcher----------------//

