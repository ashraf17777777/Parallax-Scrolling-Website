let text = document.getElementById("text");
let bird1 = document.getElementById("b1");
let bird2 = document.getElementById("b2");
let forest = document.getElementById("forest");
let rocks = document.getElementById("rocks");
let water = document.getElementById("water");
let btn = document.getElementById("btn");
let header = document.getElementById("header");
window.addEventListener("scroll",function(){

    let value = window.scrollY;

    text.style.top = 50 + value * -0.5 + "%";
    bird1.style.top = value * -1.5 + "px";
    bird1.style.left = value * 1.5 + "px";
    bird2.style.top = value * -1.5 + "px";
    bird2.style.left = value * -2.5 + "px";
    btn.style.marginTop = value * 0.8 + "px";
    rocks.style.top = value * -0.12 + "px";
    forest.style.top = value * 0.25 + "px";
    header.style.top = value * 0.5 + "px"; 
})

