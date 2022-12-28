import Grafica from "./Grafica.js";

const grafica = new Grafica();
window.addEventListener('load', init);

function init() {

document.querySelector('#nuevo-dato').addEventListener('click', insertar);   
document.querySelector('#quita-dato').addEventListener('click', borrar); 

}


function insertar() {
  
    if(comprobarErrores() == true){
        manejarMensajes('informacion');
        let parrafo = document.createElement('p');
        let texto;
        if(grafica.contiene(recogerEtiqueta())){
            texto = document.createTextNode( `Se ha modificado la etiqueta ${recogerEtiqueta()} ahora su valor es ${recogerValor()}`);
        }else{
            texto = document.createTextNode( `Se ha añadido la etiqueta ${recogerEtiqueta()} con un valor de ${recogerValor()}`);
        }
        grafica.insertar(recogerEtiqueta(), +recogerValor());
        parrafo.appendChild(texto);
        document.querySelector('#mensajes').appendChild(parrafo);
        document.querySelectorAll('#etiqueta, #valor').forEach(function (element) { element.value = '' });
        manejarColeccion();
    }
    
}

function borrar() {

    let parrafo = document.createElement('p');
    let texto;
    if(!/\w+/.test(recogerEtiqueta())){
        manejarMensajes('error');
        texto = document.createTextNode(`Error, El campo etiqueta no puede estar en blanco`);    
        document.querySelector('#etiqueta').focus();   
    }else if(!grafica.borrar(recogerEtiqueta(), recogerValor())){
        manejarMensajes('error');
        texto = document.createTextNode(`Error, No existe la etiqueta ${recogerEtiqueta()}`);
        document.querySelector('#etiqueta').focus();   
    }else{
        manejarMensajes('informacion');
        texto = document.createTextNode(`Se ha borrado la etiqueta ${recogerEtiqueta()}`);
        document.querySelector('#etiqueta').value = '';
        manejarColeccion();
    }
    parrafo.appendChild(texto);
    document.querySelector('#mensajes').appendChild(parrafo);
}

function recogerEtiqueta(){
    const etiqueta = document.querySelector('#etiqueta');
    return etiqueta.value;
}

function recogerValor(){
    const valor = document.querySelector('#valor');
    return valor.value;
}

function manejarColeccion(){
    document.querySelector('#grafica').parentNode.removeChild(document.querySelector('#grafica'));
    let divGrafica = document.createElement('div');
    divGrafica.setAttribute('id', 'grafica');
    document.querySelector('body').appendChild(divGrafica);

    if(grafica.numerode() > 0){
        document.querySelector('#grafica').classList.add('visible');
        let coleccion = grafica.elementos();
        coleccion.forEach((value, key) => {
           let divInterno = componerDiv(value, key);;
           document.querySelector('#grafica').appendChild(divInterno);
        });
    }else{
        document.querySelector('#grafica').classList.remove('visible');
        document.querySelector('#grafica').classList.add('oculto');
    }
}

function componerDiv(value, key) { 

    let contenedor = document.createElement('div');
    contenedor.id = `contenedor-${key}`;
    contenedor.classList.add('contenedor');
    
    let hijo = document.createElement('div');
    hijo.id = `progreso-${key}`;
    hijo.classList.add('progreso');
    hijo.appendChild(document.createTextNode(`${key}`));
    hijo.style.width = `${calcularPorcentaje(value)}%`;

    contenedor.appendChild(hijo);
    return contenedor;

}

function calcularPorcentaje(value) {

    let maximo = grafica.valorMaximo();  
    return (value / maximo * 100).toFixed(2);

    
}

function comprobarErrores(){
    let mensajes = document.querySelector('#mensajes');
    let valido = true;
    manejarMensajes('error');
    if(!/\w+/.test(recogerEtiqueta())){

        let error = document.createElement('p');
        error.appendChild(document.createTextNode(`Error, El campo etiqueta no puede estar en blanco`));    
        mensajes.appendChild( error ); 
        document.querySelector('#etiqueta').focus();
        valido = false;       
    }
    
    if(!/\d+/.test(recogerValor())){
        let error = document.createElement('p');
        error.appendChild(document.createTextNode(`Error, El campo valor no puede estar en blanco y debe contener un numero`));    
        mensajes.appendChild(error);
        document.querySelector('#valor').focus();
        valido = false;          
    }
    return valido;
}

function manejarMensajes(estado){
    mensajes.classList.replace('oculto', 'visible');
    document.querySelectorAll('#mensajes > p').forEach(p => p.parentNode.removeChild(p));
    switch (estado) {   
        case 'error':
            mensajes.classList.add('errores');
            mensajes.classList.remove('informacion');
            break;
        case 'informacion':
            mensajes.classList.remove('errores');
            mensajes.classList.add('informacion');
            break;
    }
}