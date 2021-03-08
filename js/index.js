//animacion avatar
let avatar = document.getElementById("avatar1");
let avatar2 = document.getElementById("avatar2");

window.addEventListener("load", ()=>{
    avatar2.classList.add("ocultar");
})

avatar.addEventListener ("mouseover", ()=>{
    avatar.classList.add('ocultar');
    avatar2.classList.remove("ocultar");
});

avatar2.addEventListener("mouseout", ()=>{
    avatar.classList.remove('ocultar');
    avatar2.classList.add('ocultar');
});

//carrousel de imagenes con jS

let div0 = document.querySelector(".i1");


let items =[`<img id="item3" src="img/js.png" alt="">`,
            `<img id="item1" src="img/html.png" alt="">`,
            `<img id="item2" src="img/css.png" alt="">`,
            
            ];


let punto0 = document.querySelector(".punto");
let punto1 = document.querySelector(".punto2");
let punto2 = document.querySelector(".punto3");

window.addEventListener("load", ()=>{
    
    let intervalo;
    let posicionImagen = 0;
    const TiempoCambio = 2000;

    function pasarFoto() {
        if(posicionImagen >= items.length -1) {
            posicionImagen = 0;
        } else {
            posicionImagen++;
        }
        renderizarImagen();
    }

    function renderizarImagen () {
        div0.innerHTML = items[posicionImagen];
        if (items[posicionImagen] == items[1]) {
            punto0.style.opacity = "1";
        }else{
            punto0.style.opacity = "0.5";
        }if (items[posicionImagen] == items[2]) {
            punto1.style.opacity = "1";
        }else{
            punto1.style.opacity = "0.5";
        }if (items[posicionImagen] == items[0]) {
            punto2.style.opacity = "1";
        }else{
            punto2.style.opacity = "0.5";
        }
    }

    function cambiarAutomatico() {
        intervalo = setInterval(pasarFoto, TiempoCambio);
    }

    cambiarAutomatico();
    
});