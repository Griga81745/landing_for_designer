//CountUp

import { CountUp } from './countUp.min.js';


function start1 () {
    var countUp = new CountUp('interest_1', 70, {scrollSpyOnce:true});
    countUp.start();
}

function start2 () {
    var countUp = new CountUp('interest_2', 40, {scrollSpyOnce:true});
    countUp.start();
}

function start3 () {
    var countUp = new CountUp('interest_3', 45, {scrollSpyOnce:true});
    countUp.start();
}

function start4 () {
    var countUp = new CountUp('interest_4', 40, {scrollSpyOnce:true});
    countUp.start();
}

function start5 () {
    var countUp = new CountUp('interest_5', 50, {scrollSpyOnce:true});
    countUp.start();
}

function start6 () {
    var countUp = new CountUp('interest_6', 30, {scrollSpyOnce:true});
    countUp.start();
}




//Записываем, сколько проскроллено по вертикали
let scrollpos = window.scrollY
const strip_1 = document.getElementById("strip-background-1")
const strip_2 = document.getElementById("strip-background-2")
const strip_3 = document.getElementById("strip-background-3")
const strip_4 = document.getElementById("strip-background-4")
const strip_5 = document.getElementById("strip-background-5")
const strip_6 = document.getElementById("strip-background-6")


//Сколько пикселей нужно проскролить, чтобы добавить класс. Можете изменить значение
var scrollChange = 1000

//Функция, которая будет добавлять класс
const add_class_on_scroll = () => {
    strip_1.setAttribute('id', 'strip-background-1-active')
    strip_2.setAttribute('id', 'strip-background-2-active')
    strip_3.setAttribute('id', 'strip-background-3-active')
    strip_4.setAttribute('id', 'strip-background-4-active')
    strip_5.setAttribute('id', 'strip-background-5-active')
    strip_6.setAttribute('id', 'strip-background-6-active')
    start1()
    start2()
    start3()
    start4()
    start5()
    start6()
    // Прекращает применение
    scrollChange = 999999;
}

//Отслеживаем событие "скролл"
window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
    if (scrollpos >= scrollChange) { add_class_on_scroll()}
})