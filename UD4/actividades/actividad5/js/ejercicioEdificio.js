import Edificio from "./edificio.js";
import {edificiosImportar, inquilinosImportar, TIPO_FAMILIA} from "./importar.js";
import Inmobiliaria from "./inmobiliaria.js";


const FORMULARIO = document.querySelector('#formulario');
let inmobiliaria = new Inmobiliaria();

window.addEventListener('load', init);


function init(){
    let contenedorInmobiliaria = document.createElement('div');
    document.querySelector('body').appendChild(contenedorInmobiliaria);
    contenedorInmobiliaria.setAttribute('id', 'inmobiliaria');


    
    importarEdificios();
    importarPropietarios();
    inmobiliaria.edificios.forEach(edificio => {
        mostrarEdificio(edificio);
    });
    
}



function mostrarEdificio(edificio){

    let contenedor = document.createElement('div');
    contenedor.setAttribute('class', 'edificio');
    
    //H1
    let datos = document.createElement('h1');
    let datosEdificio = `C/ ${edificio.calle} nº ${edificio.numero} - ${edificio.codigoPostal}`;
    datos.appendChild(document.createTextNode(datosEdificio))
    contenedor.appendChild(datos);

    //Pisos
    let pisos = document.createElement('div');
    pisos.setAttribute('class', 'pisos');
    contenedor.appendChild(pisos)
    
        //Planta
        let contador = edificio.getNumeroPlantas() - 1;
        edificio.plantas.reverse().forEach((planta, i)=>{
            let divPlanta = document.createElement('div');
            divPlanta.setAttribute('class', 'planta');
            //Propietario
            let cuantoOcupa = edificio.getNumeroPuertas(i) == 1? "col-4" : (edificio.getNumeroPuertas(i) == 2? "col-2" : "col-1");
            planta.forEach((propietario, j)=>{
                let divPropietario = mostrarPropietario(propietario, cuantoOcupa, edificio, contador+1, j+1);
                divPlanta.appendChild(divPropietario);
            })

            contador--;
            pisos.appendChild(divPlanta)
        })

    document.querySelector('#inmobiliaria').appendChild(contenedor)
}


function mostrarPropietario(propietario, cuantoOcupa, edificio, planta, puerta){


    let resultado = document.createElement('div');
    resultado.setAttribute('class', `propietario ${cuantoOcupa}`);
    resultado.setAttribute('data-planta', `${planta}`);
    resultado.setAttribute('data-puerta', `${puerta}`);
    resultado.setAttribute('data-cuantoOcupa', `${cuantoOcupa}`);
    resultado.setAttribute('data-calle', `${edificio.calle}`);
    resultado.setAttribute('data-numero', `${edificio.numero}`);


    //Nombre
    let nombre = document.createElement('p');
    let textoNombre = document.createTextNode(propietario !=null? propietario.nombre : "Vacio");
    nombre.appendChild(textoNombre);
    resultado.appendChild(nombre);

    //Imagen
    let imagen = document.createElement('img');
    imagen.setAttribute('src', `img/${propietario !=null? mostrarImagen(propietario): "vacio"}.jpg`);
    resultado.appendChild(imagen);

    //Botones
    let botones = document.createElement('div');
    botones.setAttribute('class', 'botones');

    if(propietario == null){
        let botonAnadir = document.createElement('button');
        botonAnadir.appendChild(document.createTextNode("Añadir"));
        botonAnadir.setAttribute('class', 'aniadir');
        botonAnadir.addEventListener('click', agregarPropietario);
        botones.appendChild(botonAnadir);
    }else{  //Boton modificar
        let botonModificar = document.createElement('button');
        botonModificar.appendChild(document.createTextNode("Modificar"));
        botonModificar.setAttribute('class', 'modificar');
        botonModificar.addEventListener('click', modificarPropietario);
        botones.appendChild(botonModificar);

        //Boton borrar
        let botonBorrar = document.createElement('button');
        botonBorrar.appendChild(document.createTextNode("Borrar"));
        botonBorrar.setAttribute('class', 'borrar');
        botonBorrar.addEventListener('click', borrarPropietario);
        botones.appendChild(botonBorrar);
    }

    resultado.appendChild(botones);
    return resultado;
}




// funciones manejadoras edificio
function borrarPropietario(event){
    let objetivo = this.parentNode.parentNode;
    let planta = objetivo.getAttribute('data-planta');
    let puerta = objetivo.getAttribute('data-puerta');
    let cuantoOcupa = objetivo.getAttribute('data-cuantoOcupa');
    let edificio = recuperarEdificio(objetivo);
    edificio.borraPropietario(planta, puerta);
    objetivo.parentNode.replaceChild(mostrarPropietario(null, cuantoOcupa, edificio, planta, puerta), objetivo);
}

function agregarPropietario(event){

    //Visualizacion del formulario
    FORMULARIO.style.display = "block";

    let objetivo = this.parentNode.parentNode;
    let planta = objetivo.getAttribute('data-planta');
    let puerta = objetivo.getAttribute('data-puerta');
    
    document.querySelector('#planta').value = planta;
    document.querySelector('#puerta').value = puerta;

    //Manejadores de botones
    let anadirBoton = document.querySelector('#formulario-aniadir');
    anadirBoton.disabled = false;
    anadirBoton.addEventListener('click', (event) =>{
        event.preventDefault();
        insercionOModificacion(objetivo);
    });
    
    let modificarBoton = document.querySelector('#formulario-modificar');
    modificarBoton.disabled = true;

    let cerrarBoton = document.querySelector('#formulario-cerrar');
    cerrarBoton.addEventListener('click', (event) =>{
        event.preventDefault();
        borrarFormulario();
        FORMULARIO.style.display = "none";
    });
}

function modificarPropietario(event){

    //Visualizacion del formulario
    FORMULARIO.style.display = "block";

    let objetivo = this.parentNode.parentNode;
    let planta = objetivo.getAttribute('data-planta');
    let puerta = objetivo.getAttribute('data-puerta');
    document.querySelector('#planta').value = planta;
    document.querySelector('#puerta').value = puerta;
    let edificio = recuperarEdificio(objetivo);
    let propietario = edificio.getPropietario(planta, puerta);

    //Rellenar el formulario
    document.querySelector('#nombre').value = propietario.Nombre;
    document.querySelector('#apellidos').value = propietario.Apellido;
    document.querySelector('#unidad-familiar').value = selectValue(propietario);
    document.querySelector('#genero-hombre').checked = propietario.genero == "hombre";
    document.querySelector('#genero-mujer').checked = propietario.genero == "mujer";

    //Manejadores de botones
    let anadirBoton = document.querySelector('#formulario-aniadir');
    anadirBoton.disabled = true;
    
    let modificarBoton = document.querySelector('#formulario-modificar');
    modificarBoton.disabled = false;
    modificarBoton.addEventListener('click', (event) =>{
        event.preventDefault();
        insercionOModificacion(objetivo);
    });

    let cerrarBoton = document.querySelector('#formulario-cerrar');
    cerrarBoton.addEventListener('click', (event) =>{
        event.preventDefault();
        borrarFormulario();
        FORMULARIO.style.display = "none";
    });
}

function insercionOModificacion(objetivo){
    //Datos del formulario
    let nombre = document.querySelector('#nombre').value;
    let apellidos = document.querySelector('#apellidos').value;
    let unidadFamilar = cuantosMiembros();
    let genero = document.querySelector('#genero-hombre').checked? "hombre" : "mujer";
    let planta = document.querySelector('#planta').value;
    let puerta = document.querySelector('#puerta').value;
 
    let propietario ={
        nombre: `${nombre } ${apellidos}`,
        genero: genero,
        miembros: unidadFamilar,
    }

    let edificio = recuperarEdificio(objetivo);
    edificio.agregaPropietario(propietario, planta, puerta);
    borrarFormulario();

    let cuantoOcupa = objetivo.getAttribute('data-cuantoOcupa');
    FORMULARIO.style.display = "none";

    objetivo.parentNode.replaceChild(mostrarPropietario(edificio.getPropietario(planta, puerta), cuantoOcupa, edificio, planta, puerta), objetivo);

}

function mostrarImagen(propietario){
    let resultado;

    switch (propietario.miembros){

        case 1:
            resultado = `${propietario.genero}`
            break;
        case 2:
            resultado = "pareja"
            break;
        case 3:
            resultado = "familia-1"
            break;
       default:
            resultado = "familia-2"
            break;
    }


    return resultado;
}

function selectValue(propietario){
    let resultado;

    switch (propietario.miembros){

        case 1:
            resultado = `soltero`
            break;
        case 2:
            resultado = "pareja"
            break;
        case 3:
            resultado = "familia-1"
            break;
       case 4:
            resultado = "familia-2"
            break;
        default:
            resultado = "familia-mas"
            break;
    }


    return resultado;
}

function cuantosMiembros(){
    let input = document.querySelector('#unidad-familiar').value;
    let resultado;
    switch(input){

        case "soltero":
            resultado = 1;
            break;
        case "pareja":
            resultado = 2;
            break;
        case "familia-1":
            resultado = 3;
            break;
        case "familia-2":
            resultado = 4;
            break;
        case "familia-mas":
            resultado = 5;
            break;
    }
    return resultado;

}
 
function borrarFormulario(){
   document.querySelector('#nombre').value = "";
   document.querySelector('#apellidos').value = "";
   document.querySelector('#unidad-familiar').value = "none";
   document.querySelector('#genero-hombre').checked = true;
}

function importarEdificios(){

    //calle, numero, codigoPostal, plantas
    edificiosImportar.forEach((edificio) => {
        let importar = new Edificio(edificio.calle, edificio.numero, edificio.cp, edificio.plantas);
        inmobiliaria.addEdificio(importar);
    })
}

function importarPropietarios(){

    inquilinosImportar.forEach((inquilino) => {
        let familia = {
            nombre: inquilino.nombre,
            genero: inquilino.genero,
            miembros: inquilino.miembros,
        }
        inmobiliaria.getEdificio(inquilino.calle, inquilino.numero).agregaPropietario(familia, inquilino.piso, inquilino.puerta);

    })
}

function recuperarEdificio(objetivo){
    return inmobiliaria.getEdificio(objetivo.getAttribute('data-calle'), objetivo.getAttribute('data-numero'));
}

