import Grafica from "./Grafica.js";

const grafica = new Grafica();
window.addEventListener('load', init);

function init() {

document.querySelector('#nuevo-dato').addEventListener('click', insertar);   
document.querySelector('#quita-dato').addEventListener('click', borrar); 

}


function insertar() {
    if(grafica.insertar(recogerEtiqueta(), recogerValor())){
        manejarColeccion();
    }
    
}

function borrar() {
    if(!grafica.borrar(recogerEtiqueta(), recogerValor())){
        document.querySelector('#mensajes').classList.remove('oculto');
        document.querySelector('#mensajes').classList.add('visible');
        let parrafo = document.createElement('p');
        let texto = document.createTextNode('No se puede insertar');
        parrafo.appendChild(texto);
        document.querySelector('#mensajes').appendChild(parrafo);
    }else{
        manejarColeccion();
    }
    
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
    if(grafica.numerode() > 0){
        document.querySelector('#grafica').classList.remove('oculto');
        document.querySelector('#grafica').classList.add('visible');
        let coleccion = grafica.elementos();
        coleccion.forEach(elemento => {
            let divInterno = componerDiv(elemento);;
            
        });
    }
}

function componerDiv(elemento){ 

    let div = document.createElement('div');
    div.id = 'contenedor-articulo';
    div.classList.add('contenedor');
    

}