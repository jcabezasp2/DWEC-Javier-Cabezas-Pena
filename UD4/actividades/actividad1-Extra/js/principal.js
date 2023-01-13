

window.addEventListener('load', init);

let canvas = document.querySelector('#canvas');
let contexto = canvas.getContext('2d');
contexto.lineWidth = 10;
let menos = document.querySelector('#decrease');
let mas = document.querySelector('#increase');
let color = document.querySelector('#color');
let borrar = document.querySelector('#clear');
let posicion;
let pintar = false;
function init() {

    // Cambiar grosor
    menos.addEventListener('click', cambiarGrosor);
    mas.addEventListener('click', cambiarGrosor);

    // Cambiar color
    color.addEventListener('blur', cambiarColor);

    // Borrar
    borrar.addEventListener('click', borrarCanvas);

    // Dibujar
    canvas.addEventListener('mousemove', coordenadasRaton);
    canvas.addEventListener('mousedown', dibujar);
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
    //beginPath, moveTo, lineTo, stroke, clearRect
    pintar = true;
    contexto.beginPath();
    canvas.addEventListener('mousemove', (event)=>{
        console.log('movido');
        contexto.lineTo(posicion.x, posicion.y);
        if(pintar){
            contexto.stroke();
        }

    });
    canvas.addEventListener('mouseup', (event)=>{
        pintar = false;
    });  

}

function coordenadasRaton(evt) {
    let ClientRect = canvas.getBoundingClientRect();
      posicion = { //objeto
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
  }
}

function borrarCanvas() {
    contexto.clearRect(0, 0, canvas.width, canvas.height);
}