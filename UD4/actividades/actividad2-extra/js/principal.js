import Pizarra from "./pizarra.js";

const FORMULARIO = document.querySelector('#formulario');
const BOTON_NUEVA_NOTA = document.querySelector('#nueva-nota');
const BOTON_MODIFICAR_NOTA = document.querySelector('#modifica-nota');
const CONTENEDOR = document.createElement('div');
const PIZARRA = new Pizarra();
let posicion;
let contador = 0;
window.addEventListener('load', init);

function init() {

    
    CONTENEDOR.setAttribute('id', 'pizarra');
    let titulo = document.createElement('h2');
    titulo.appendChild(document.createTextNode('Mi pizarra'));
    CONTENEDOR.appendChild(titulo);
    document.querySelector('body').appendChild(CONTENEDOR);

    CONTENEDOR.addEventListener('dblclick', CrearOModificarNota);

    BOTON_NUEVA_NOTA.addEventListener('click', crearNota);
    BOTON_MODIFICAR_NOTA.addEventListener('click', modificarNota);

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
    //TODO adaptar para que modifique la nota
    event.preventDefault();
    let datos = recogerFormulario();
    FORMULARIO.classList.replace('visible', 'oculto');
    PIZARRA.updatePostIt(event.target.parentNode.getAttribute('data-id'), datos.mensaje, datos.imagen, posicion);
    event.target.parentNode.remove();
    mostrarNota(PIZARRA.getPostIt(contador));
}


function CrearOModificarNota(event){

    mostrarFormulario(event);
    if(event.target.id == 'pizarra'){

            BOTON_NUEVA_NOTA.style.display = 'block';
            BOTON_MODIFICAR_NOTA.style.display = 'none';


    }else{
        BOTON_NUEVA_NOTA.style.display = 'none';
        BOTON_MODIFICAR_NOTA.style.display = 'block';

            let nota = PIZARRA.getPostIt(event.target.parentNode.getAttribute('data-id'));
            document.querySelector('#mensaje').value = nota.mensaje;
            document.querySelector('#imagen').value = nota.imagen;

    }

}


function mostrarNota(nota){
    // Nota
    let div = document.createElement('div');
    div.setAttribute('id', `postit-${nota.id}`);
    div.setAttribute('data-id', nota.id);
    div.setAttribute('class', 'postit');
    div.setAttribute('draggable', 'true');
    div.style.left = posicion.x + 'px';
    div.style.top = posicion.y + 'px';

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
    imagen.style.backgroundImage = `url(./img/${nota.imagen})`;
    div.appendChild(imagen);

    div.addEventListener('dblclick',CrearOModificarNota);

    CONTENEDOR.appendChild(div);
}