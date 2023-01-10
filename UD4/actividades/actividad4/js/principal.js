import Tablero from './tablero.js';

var tablero = new Tablero();
window.addEventListener('load', init);

function init() {

    crearEstructura();
    let colores =  document.querySelectorAll('.color');
    colores.forEach(div => {
        div.addEventListener('click', seleccionar);
    });


    let cuadrados = document.querySelectorAll(`.celdadibujo`);
    cuadrados.forEach(cuadrado => {
        cuadrado.addEventListener('click', clickCuadrado);
        cuadrado.addEventListener('mouseover', pintar);
    })

}

function crearEstructura() {


    const body = document.querySelector('body');

    let contenedor = document.createElement('div');
    contenedor.setAttribute('id', 'contenedor');
    body.appendChild(contenedor);

    let titulo = document.createElement('h1');
    titulo.appendChild(document.createTextNode('TABLERO DE DIBUJO'));
    contenedor.appendChild(titulo);

    let subtitulo = document.createElement('p');
    subtitulo.appendChild(document.createTextNode('Haga CLICK en un color para comenzar a pintar'));
    contenedor.appendChild(subtitulo);

    let paleta = document.createElement('div');
    paleta.setAttribute('id', 'paleta');

    for(let i = 1; i <= tablero.numeroColores; i++) {
        let color = document.createElement('div');
        color.setAttribute('class', 'color');
        color.setAttribute('id', `color${i}`);
        paleta.appendChild(color);
    }
    contenedor.appendChild(paleta);

    let estado = document.createElement('div');
    let etiqueta = document.createElement('h5');
    etiqueta.appendChild(document.createTextNode('Estado del pincel:'));
    let estatus = document.createElement('span');
    estatus.setAttribute('id', 'status');
    estatus.appendChild(document.createTextNode(tablero.estado));
    estado.appendChild(etiqueta);
    etiqueta.appendChild(estatus);
    contenedor.appendChild(estado);

    let zonaDibujo = document.createElement('div');
    zonaDibujo.setAttribute('class', 'zonadibujo');
    for(let i = 0; i < tablero.filas; i++) {

        let fila = document.createElement('div');
        fila.setAttribute('class', 'filadibujo');
        fila.setAttribute('id', `fila${i}`);
        for(let j = 0; j < tablero.columnas; j++) {
            let cuadrado = document.createElement('div');
            cuadrado.setAttribute('class', 'celdadibujo');
            cuadrado.setAttribute('id', `cuadrado${i}-${j}`);
            fila.appendChild(cuadrado);
        }
        zonaDibujo.appendChild(fila);
    }

    contenedor.appendChild(zonaDibujo);

}

function seleccionar(event){
    
    let objetivo = document.querySelector(`#${this.id}`)
    try{
        document.querySelector(`.seleccionado`).classList.remove('seleccionado');
    }finally{
        objetivo.classList.add('seleccionado');
        tablero.colorSeleccionado = this.id.substring(5).trim();
    }

}


function clickCuadrado(event){
    if(tablero.estado == 'inactivo'){
        tablero.estado = true;
        let status = document.querySelector(`#status`);
        status.textContent = 'Activo';
        status.style.color = 'red';
    }else{
        tablero.estado = false;
        let status = document.querySelector(`#status`);
        status.textContent = 'Desactivo';
        status.style.color = 'black';
    }

}

function pintar(event){
    if(tablero.estado == 'activo'){
        let cuadrado = document.querySelector(`#${this.id}`);
        cuadrado.style.backgroundColor = tablero.colorSeleccionado;
    }  
}

function interruptor(status){

}