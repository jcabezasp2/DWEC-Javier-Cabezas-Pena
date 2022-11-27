import CentralMedidas from "./centralMedidas.js";
import { MENSAJES } from "./mensajes.js";  
let centralMedidas = new CentralMedidas();

window.addEventListener("load", init);


function init(){
    document.querySelector("#ciudad").addEventListener("keyup", toUpperCase);
    let radios = document.querySelectorAll("input[name=tipo]");

    radios.forEach(radio => {
        radio.addEventListener("click", tratarRadios);
    })
    document.querySelector("#medidas").addEventListener("click", tratarTextArea);
    document.querySelector("#guardar").addEventListener("click", guardar);
    document.querySelector("#borrar").addEventListener("click", borrar);
    document.querySelector("#errores").style.display = "none";
    insertaMedia()
}


function toUpperCase(){

    let objetivo = document.querySelector("#ciudad");
    objetivo.value = objetivo.value.toUpperCase();
    document.querySelector("#errores").style.display = "none";

}

function tratarRadios(event){
    if(event.target.value == "aleatorio"){
        let aleatorios = centralMedidas.generaAleatorio();
        document.querySelector("#medidas").value = '';
        document.querySelector("#medidas").value = aleatorios;
        document.querySelector("#medidas").readOnly = true;
        document.querySelector("#errores").style.display = "none";    
    }else if(event.target.value == "manual"){
        document.querySelector("#medidas").readOnly = false;
        document.querySelector("#medidas").value = ""
    }else{
        document.querySelector("#medidas").value = "";
        document.querySelector("#medidas").readOnly = false;
    }

    
}

function tratarTextArea(event){
    if(document.querySelector("#medidas_manual").checked){
        document.querySelector("#errores").style.display = "none";      
    }
}

function guardar(){

    let ciudad = document.querySelector("#ciudad").value.trim();
    let medidas = document.querySelector("#medidas").value;
    if(ciudad == ""){
        document.querySelector("#errores").style.display = "block";
        document.querySelector("#errores").innerHTML = MENSAJES.vacio;
    }else if(!comprobar30Valores(medidas)){
        document.querySelector("#errores").style.display = "block";
        document.querySelector("#errores").innerHTML = MENSAJES.noHay30;
    }else if(!centralMedidas.existeCiudad(ciudad)){
        document.querySelector("#errores").style.display = "block";
        document.querySelector("#errores").innerHTML = MENSAJES.ciudadYaExiste;
    }else{
        console.log( centralMedidas.insertaMedidas(ciudad, medidas));
        insertarTabla();
        insertaMedia();
        resetear();
    }


}

function insertarTabla(){
    if(centralMedidas.Medidas.length > 0){
        document.querySelector("#tabla-medidas").style.display = "block";
        document.querySelector("#tabla-medidas").innerHTML = centralMedidas.toHTML();
    }else{
        document.querySelector("#tabla-medidas").style.display = "none";
    }

}

function borrar(){
    let ciudad = document.querySelector("#ciudad").value.trim();
    if(centralMedidas.existeCiudad(ciudad)){
        document.querySelector("#errores").style.display = "block";
        document.querySelector("#errores").innerHTML = MENSAJES.ciudadNoExiste;
    }else{
        centralMedidas.eliminaCiudad(ciudad);
        insertaMedia();
        insertarTabla();
        document.querySelector("#formulario").reset();
    }

}

function insertaMedia(){

    let media = centralMedidas.mediaMedidasTotal();
    if(!isNaN(media)){
        document.querySelector("#temperatura-media").innerHTML = "Temperatura media " + media;
    }else{
        document.querySelector("#temperatura-media").innerHTML = "Temperatura media " + 0
    }
    
}

function resetear(){
    document.querySelector("#formulario").reset();
    tratarRadios(event);
}

function comprobar30Valores(value){

    value = value.split(",");
    let correcto = true;

    if(value.length != 30){
        correcto = false;
    }

    value.forEach(elemento => {
        if(!Number.isInteger(Number.parseInt(elemento))){
            correcto = false;
        }
    })

    return correcto;
}