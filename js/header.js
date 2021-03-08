let logo = document.querySelector(".logo");
let menu = document.querySelector(".hamburguesa");
let nav = document.getElementById("nav");
let cerrar = document.querySelector(".cerrar");
let avatar1 = document.getElementById("avatar1");
let anim1 = document.querySelector(".signos");
let anim2 = document.querySelector(".signos2");

menu.addEventListener("click", ()=>{
    
    menu.style.display = "none";
    logo.style.display = "none";
    nav.style.display = "block";
    avatar1.style.display = "none";
    anim1.style.display = "none";
    anim2.style.display = "none";
});

cerrar.addEventListener("click", ()=>{
    nav.style.display = "none";
    logo.style.display = "block";
    menu.style.display = "block";
    avatar1.style.display = "block";
    anim1.style.display = "block";
    anim2.style.display = "block";
});