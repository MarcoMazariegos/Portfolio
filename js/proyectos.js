const main = document.querySelector(".main");
const imgPaginas = document.querySelector("#paginas");
const imgJava = document.querySelector("#java");
const imgApps = document.querySelector("#apps");
const contenedorE = document.querySelector(".contenedorEleccion");

let imgsPages1 = document.querySelector("#pages1");
let imgsPages2 = document.querySelector("#pages2");
let imgsPages3 = document.querySelector("#pages3");

const atras = document.querySelector(".atras");
const atras2 = document.querySelector(".atras2");
const atras3 = document.querySelector(".atras3");

let contenedor2 = document.querySelector(".contenedor2");
let contenedor3 = document.querySelector(".contenedor3");
let contenedor4 = document.querySelector(".contenedor4");

var trueOrFalse1 = 0;
//var fragmento = createDocumentFragment();

window.addEventListener("load", ()=>{
    main.removeChild(atras);
    main.removeChild(atras2);
    main.removeChild(atras3);
    main.removeChild(contenedor2);
    main.removeChild(contenedor3);
    main.removeChild(contenedor4);
});

function despleguePaginasWeb(){
    main.removeChild(contenedorE);
    main.appendChild(atras);
    main.appendChild(contenedor2);
};   
imgPaginas.addEventListener("click", despleguePaginasWeb);

function desplegueJava() {
    main.removeChild(contenedorE);
    main.appendChild(atras2);
    main.appendChild(contenedor3);
}
imgJava.addEventListener("click", desplegueJava);

function desplegueApps() {
    main.removeChild(contenedorE);
    main.appendChild(atras3);
    main.appendChild(contenedor4);
}
imgApps.addEventListener("click", desplegueApps);

function regresarDesplegues1() {
    main.removeChild(atras);
    main.removeChild(contenedor2);
    main.appendChild(contenedorE);   
};
function regresarDesplegues2() {
    main.removeChild(atras2);
    main.removeChild(contenedor3);
    main.appendChild(contenedorE);   
};
function regresarDesplegues3() {
    main.removeChild(atras3);
    main.removeChild(contenedor4);
    main.appendChild(contenedorE);   
};
atras.addEventListener("click", regresarDesplegues1);
atras2.addEventListener("click", regresarDesplegues2);
atras3.addEventListener("click", regresarDesplegues3);