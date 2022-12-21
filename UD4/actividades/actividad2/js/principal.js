import Galeria from "./Galeria.js";

let galeria = new Galeria(7);
window.addEventListener("load", init);



function init() {

    manejarImagen();
    let enlaces = document.querySelectorAll('a');

    enlaces.forEach(enlace => {enlace.addEventListener("click", manejadorRaton)});

    document.addEventListener('keydown', manejadorTeclado);

}

function manejarImagen() {
    let imagen = document.querySelector('#imagen');
    imagen.style.backgroundImage = `url("${galeria.ruta()}")`;
    manejarBotones(galeria.ruta().substring( 13, 14));
}

function manejadorRaton(event){
    let id = this.id;

    switch(id){

        case 'primera':
            galeria.primeraPosicion();
            break;
        case 'anterior':
            galeria.anteriorPosicion();
            break;
        case 'ultima':
            galeria.ultimaPosicion();
            break;
        case 'siguiente':
            galeria.siguentePosicion();
            break;
    }
    manejarImagen();
}


function manejadorTeclado(event){
    console.log(event.code);
    let tecla = event.keyCode;
    const derecha = 37;
    const izquierda = 39;
    
    if(tecla === derecha){
        galeria.anteriorPosicion();
    }else if(tecla === izquierda){
        galeria.siguentePosicion();
    }
    manejarImagen();
}


function manejarBotones(numero){
    let primera = document.querySelector('#primera');
    let anterior = document.querySelector('#anterior');
    let siguente = document.querySelector('#siguiente');
    let ultima = document.querySelector('#ultima');

    const ultimaPosicion = galeria.numeroImagenes() -1;
    switch(+numero){
        case 1:
            primera.classList.add('deshabilitado');
            anterior.classList.add('deshabilitado');
            siguente.classList.remove('deshabilitado');
            ultima.classList.remove('deshabilitado');
            break;

        case  ultimaPosicion:
            primera.classList.remove('deshabilitado');
            anterior.classList.remove('deshabilitado');
            siguente.classList.add('deshabilitado');
            ultima.classList.add('deshabilitado');
            break;

        default:
            primera.classList.remove('deshabilitado');
            anterior.classList.remove('deshabilitado');
            siguente.classList.remove('deshabilitado');
            ultima.classList.remove('deshabilitado');
            break;

    }

}