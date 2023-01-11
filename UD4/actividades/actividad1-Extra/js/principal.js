

window.addEventListener('load', init);

let canvas = document.querySelector('#canvas');
let contexto = canvas.getContext('2d');
contexto.lineWidth = 10;
let menos = document.querySelector('#decrease');
let mas = document.querySelector('#increase');
let color = document.querySelector('#color');
let borrar = document.querySelector('#clear');
let coordenadas = { // TODO cambiar valores por las coordenadas del raton
    x: 0,
    y: 0
};
console.log(coordenadas.x);
function init() {

    // Cambiar grosor
    menos.addEventListener('click', cambiarGrosor);
    mas.addEventListener('click', cambiarGrosor);

    // Cambiar color
    color.addEventListener('blur', cambiarColor);



    // Borrar


    // Dibujar
    canvas.addEventListener('mousedown', dibujar);
    canvas.addEventListener('mouseup', dibujar);

    console.log(contexto);
    
}

function cambiarGrosor(event) {

    if(this.id === 'increase'){
        
        contexto.lineWidth++;

    }else{
        
        contexto.lineWidth--;

    }

    let size = document.querySelector('#size');
    size.textContent = contexto.lineWidth;

}

function cambiarColor(event) {

    contexto.strokeStyle = this.value;

}

function dibujar(event) {

}