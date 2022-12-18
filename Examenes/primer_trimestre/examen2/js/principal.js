import Tienda from "./tienda.js";

let tienda = new Tienda();
tienda.addDisco("Lorem", "ipsum", "1", "2020/10/08", "1", false);
tienda.addDisco("Ipsum", "ipsum", "2", "2020/10/08", "2", false);
tienda.addDisco("Dolor", "ipsum", "3", "2020/10/08", "3", false);
tienda.addDisco("Sit", "ipsum", "4", "2020/10/08", "1", true);
tienda.addDisco("Amet", "ipsum", "1", "2020/10/08", "2", false);
tienda.addDisco("Algo", "ipsum", "2", "2020/10/08", "3", false);

window.addEventListener("load", init)
function init() {

    document.querySelector("#guardar").addEventListener("click", guardarDisco);
    listarDiscos();

    document.querySelector('#eliminar').addEventListener('click', eliminarDisco);

    document.querySelector('#ver').addEventListener('click', ver);

    window.addEventListener("unload", borrarStorage);
}

function guardarDisco(event) {

   let titulo = document.querySelector("#titulo");
   let cantante = document.querySelector("#cantante");
   let tipo = document.querySelector("#tipo");
   let fecha = document.querySelector("#fecha");
   let estanteria = document.querySelector("#estanteria");
   let prestado = getPrestado();
    console.log(fecha.value.substring(0, 4));
   if(!titulo.checkValidity()){
    document.querySelector('#informacion').innerHTML = 'El campo Titulo es obligatorio';
    document.querySelector('#informacion').style.display = "block";
   }else if(!cantante.checkValidity()){
    document.querySelector('#informacion').innerHTML = 'El campo Cantante es obligatorio';
    document.querySelector('#informacion').style.display = "block";
   }else if(!fecha.checkValidity()){
    document.querySelector('#informacion').innerHTML = 'El campo Fecha es obligatorio';
    document.querySelector('#informacion').style.display = "block";
   }else if(!estanteria.checkValidity()){
    if(estanteria.validity.patternMismatch){
        document.querySelector('#informacion').innerHTML = 'El campo Estanteria Debe contener un numero del 1 al 10';
        document.querySelector('#informacion').style.display = "block";
    }else{
        document.querySelector('#informacion').innerHTML = 'El campo Estanteria es obligatorio';
        document.querySelector('#informacion').style.display = "block";
    }

   }else if(tipo.value == "none"){
    document.querySelector('#informacion').innerHTML = 'Debes elegir un tipo de musica';
    document.querySelector('#informacion').style.display = "block";
   }else{
    if(!tienda.existeDisco(titulo.value)){
        document.querySelector('#informacion').innerHTML = 'El disco ' + titulo.value + ' se ha insertado correctamente';
    }else{
        document.querySelector('#informacion').innerHTML = 'El disco ' + titulo.value + ' se ha modificado correctamente';
    }
    let nombre = titulo.value;
    tienda.addDisco(nombre, cantante.value, tipo.value, fecha.value, estanteria.value, prestado);
    document.querySelector('#informacion').style.display = "block";
    vaciarCampos();
    listarDiscos();
    localStorage.setItem("ultimo", nombre);
   }

}

function eliminarDisco(){

    let titulo =document.querySelector("#titulo");

    if(!titulo.checkValidity()){
        document.querySelector('#informacion').innerHTML = 'El campo Titulo es obligatorio';
        document.querySelector('#informacion').style.display = "block";
    }else if(!tienda.existeDisco(titulo.value)){
        document.querySelector('#informacion').innerHTML = 'No existe ningun disco en la tienda con el titulo '+ titulo.value;
        document.querySelector('#informacion').style.display = "block";
    }else{
        tienda.deleteDisco(titulo.value);
        document.querySelector('#informacion').innerHTML = 'Disco borrado';
        document.querySelector('#informacion').style.display = "block";
        listarDiscos();
    }
}

function ver(){

    let titulo =document.querySelector("#titulo");

    if(!titulo.checkValidity()){
        console.log(localStorage.getItem("ultimo"))
       if(localStorage.getItem("ultimo") === "null"){
        document.querySelector('#informacion').innerHTML = 'El campo Titulo es obligatorio';
        document.querySelector('#informacion').style.display = "block";
       }else{
        cargarDatos(tienda.getDisco(localStorage.getItem("ultimo")));
       }
    }else if(!tienda.existeDisco(titulo.value)){
        document.querySelector('#informacion').innerHTML = 'No existe ningun disco en la tienda con el titulo '+ titulo.value;
        document.querySelector('#informacion').style.display = "block";
    }else{
        document.querySelector('#informacion').style.display = "none";
        cargarDatos(tienda.getDisco(titulo.value));
    }

}


function getPrestado(){
    let opciones = document.querySelectorAll('input[name="prestado"]');
    let seleccionado;

    for(let i = 0; i < opciones.length; i++){
        if(opciones[i].checked){
            seleccionado = opciones[i].value;
            break;
        }
    }

     return seleccionado == "si"? true : false;
    
}

function vaciarCampos(){
    document.querySelector("#titulo").value = "";
    document.querySelector("#cantante").value = "";
    document.querySelector("#tipo").value = "none";
    document.querySelector("#fecha").value = "";
    document.querySelector("#estanteria").value = "";
    document.querySelector("#prestado_no").checked = true;
}

function cargarDatos(disco){ 
    const dt = new Date(disco.Fecha);  
    const day = ("0" + dt.getDate()).slice(-2);  
    const month = ("0" + (dt.getMonth() + 1)).slice(-2);  
    const date = dt.getFullYear() + "-" + month + "-" + day;  
    document.querySelector("#titulo").value = disco.Titulo;
    document.querySelector("#cantante").value = disco.Cantante;
    document.querySelector("#tipo").value = disco.Tipo;
    document.querySelector("#fecha").value = date;
    document.querySelector("#estanteria").value = disco.Estanteria;
    if(disco.Prestado){
        document.querySelector("#prestado_si").checked = true;
    }else{
        document.querySelector("#prestado_no").checked = true;
    }
}

function listarDiscos(){
    if(tienda.getNumeroDiscosDisponible() > 0){
        document.querySelector('#listado').innerHTML = tienda.toHTML();
    }else{
        document.querySelector('#listado').innerHTML = '<p>No hay discos disponibles en la tienda</p>';
    }
}

function borrarStorage(){
    localStorage.removeItem("ultimo");
}