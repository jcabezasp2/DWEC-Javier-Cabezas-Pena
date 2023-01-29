import Pizarra from "./pizarra.js";

const FORMULARIO = document.querySelector('#formulario');
const BOTON_NUEVA_NOTA = document.querySelector('#nueva-nota');
const BOTON_MODIFICAR_NOTA = document.querySelector('#modifica-nota');
const CONTENEDOR = document.createElement('div');
const PIZARRA = new Pizarra();
let posicion;
let contador = 0;
let objetivo;
let modificar = false;

window.addEventListener('load', init);
window.addEventListener('unload',() => {
    PIZARRA.save();
});

function init() {
    CONTENEDOR.setAttribute('id', 'pizarra');

    let titulo = document.createElement('h2');
    titulo.appendChild(document.createTextNode('Mi pizarra'));
    CONTENEDOR.appendChild(titulo);
    document.querySelector('body').appendChild(CONTENEDOR);

    CONTENEDOR.addEventListener('dblclick', CrearNotaEnLaPizarra);
    CONTENEDOR.addEventListener('drop', (event) => {
        event.preventDefault();
        let id = event.dataTransfer.getData('Data');
        console.log(id);
    });

    BOTON_NUEVA_NOTA.addEventListener('click', crearNota);
    BOTON_MODIFICAR_NOTA.addEventListener('click', modificarNota);
    recuperarNotas();

    document.addEventListener('keydown', (event) => {
        if(event.key == 'a' && event.ctrlKey){
            stack(PIZARRA.postIts[0].localizacion);
        }
        
    });
}

function mostrarFormulario(e) {

    try{
        FORMULARIO.classList.replace('oculto', 'visible');
    }finally{
        coordenadasRaton(e);
        FORMULARIO.style.left = posicion.x + 'px';
        FORMULARIO.style.top = posicion.y + 'px';
        document.querySelector('#mensaje').value = '';
    }
}


function coordenadasRaton(evt) {
    //let ClientRect = canvas.getBoundingClientRect();
      posicion = { //objeto
      x: Math.round(evt.clientX ),
      y: Math.round(evt.clientY)
  }
}

function recogerFormulario(){
    let mensaje = document.querySelector('#mensaje').value;
    let imagen = document.querySelector('#imagen').value;

    return {
        mensaje: mensaje,
        imagen: imagen,
    };
}

function crearNota(event){
    event.preventDefault();
    let datos = recogerFormulario();
    FORMULARIO.classList.replace('visible', 'oculto');
    PIZARRA.addPostIt(contador, datos.mensaje, datos.imagen, posicion);
    mostrarNota(PIZARRA.getPostIt(contador));
    contador++;

}

function modificarNota(event){
    event.preventDefault();
    let datos = recogerFormulario();
    FORMULARIO.classList.replace('visible', 'oculto');
    PIZARRA.updatePostIt(objetivo, datos.mensaje, datos.imagen);
    document.querySelector(`#postit-${objetivo}`).remove();
    mostrarNota(PIZARRA.getPostIt(objetivo));
}


function CrearNotaEnLaPizarra(event){
    if(!modificar){
        mostrarFormulario(event);
        console.log('crear');
            BOTON_NUEVA_NOTA.style.display = 'block';
            BOTON_MODIFICAR_NOTA.style.display = 'none';
    }
}

function modificarNotaDeLaPizarra(event){
    mostrarFormulario(event);
    modificar = true;
    setTimeout(() => {
        modificar = false;
    }, 10); 
    BOTON_NUEVA_NOTA.style.display = 'none';
    BOTON_MODIFICAR_NOTA.style.display = 'block';
    console.log('modificar');
    let nota = PIZARRA.getPostIt(this.getAttribute('data-id'));
    objetivo = this.getAttribute('data-id');
    document.querySelector('#mensaje').value = nota.mensaje;
    document.querySelector('#imagen').value = nota.imagen;
}

function mostrarNota(nota){
    // Nota
    let div = document.createElement('div');
    div.setAttribute('id', `postit-${nota.id}`);
    div.setAttribute('data-id', nota.id);
    div.setAttribute('class', 'postit');
    div.setAttribute('draggable', 'true');
    div.style.left = nota.localizacion.x + 'px';
    div.style.top =  nota.localizacion.y + 'px';

    //Boton de cerrar
    let boton = document.createElement('div');
    boton.appendChild(document.createTextNode('X'));
    boton.setAttribute('class', 'cierre');
    boton.setAttribute('id', `nota-${nota.id}`);
    boton.addEventListener('click',(event) => {
        let objetivo = event.target.parentNode;
        let id = objetivo.getAttribute('data-id');
        PIZARRA.delPostIt(id);
        objetivo.remove();
        
    });
    div.appendChild(boton);

    //Mensaje
    let mensaje = document.createElement('div');
    mensaje.setAttribute('class', 'mensaje');
    mensaje.appendChild(document.createTextNode(nota.mensaje));
    div.appendChild(mensaje);

    //Imagen
    let imagen = document.createElement('div');
    imagen.setAttribute('class', "imagen");
    if(/foto[1-5].png/.test(nota.imagen) == false){ 
        imagen.style.backgroundImage = `url(./img/noImage.png)`;
    }else{
        imagen.style.backgroundImage = `url(./img/${nota.imagen})`;
    }
    
    div.appendChild(imagen);

    div.addEventListener('dblclick', modificarNotaDeLaPizarra);
    div.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('Data', event.target.id);
        console.log('dragstart');
    })
    div.addEventListener('drag', (event) => {
        console.log('drag');
    })
    div.addEventListener('dragend', (event) => {
        console.log('dragend');
        let id = event.target.getAttribute('data-id');
        PIZARRA.updatePostIt(id, null, null, coordenadasNota(event));
        event.target.remove();
        mostrarNota(PIZARRA.getPostIt(id));
    })
    CONTENEDOR.appendChild(div);
}

function recuperarNotas(){
    PIZARRA.load();
    let notas = PIZARRA.postIts;
    if(notas.length > 0){
        contador = notas[notas.length - 1].id + 1;
        notas.forEach(nota => {
            mostrarNota(nota);
        });
    }
}

function coordenadasNota(evt) {
    let ClientRect = CONTENEDOR.getBoundingClientRect();
      let posicion = { //objeto
        x: Math.round(evt.clientX - 51),
        y: Math.round(evt.clientY - 53)
  }
    return posicion;
}

function stack(coordenadas){
    let notas = document.querySelectorAll('.postit');
    notas.forEach((nota, index) => {
        let id = nota.getAttribute('data-id');
        let notaCoordenadas = PIZARRA.getPostIt(id).localizacion;
        if(notaCoordenadas.x != coordenadas.x && notaCoordenadas.y != coordenadas.y){
            PIZARRA.updatePostIt(id, null, null, {x: coordenadas.x + 20 * index, y: coordenadas.y + 20 * index});
            nota.remove();
            mostrarNota(PIZARRA.getPostIt(id));
        }
    });
}