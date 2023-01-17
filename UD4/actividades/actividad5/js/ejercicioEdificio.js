import Edificio from "./edificio.js";
import {edificiosImportar, inquilinosImportar, TIPO_FAMILIA} from "./importar.js";


var edificio = new Edificio(edificiosImportar[0].calle, edificiosImportar[0].numero, edificiosImportar[0].cp, edificiosImportar[0].plantas);

edificiosImportar[0].plantas //=
let propietario ={
    nombre: "Juan",
    genero: TIPO_FAMILIA.HOMBRE,
    miembros: 2,
}
edificio.agregaPropietario(propietario, 1, 1);
edificio.getNumeroPuertas(2) //=
window.addEventListener('load', init);


function init(){
    console.table(edificio.plantas);
    mostrarEdificio(edificio);
}



function mostrarEdificio(edificio){

    let contenedor = document.createElement('div');

    //H1
    let datos = document.createElement('h1');
    datos.appendChild(document.createTextNode(edificio.calle))
    contenedor.appendChild(datos);

    //Pisos
    let pisos = document.createElement('div');

    contenedor.appendChild(pisos)


    document.querySelector('body').appendChild()
}