import CentralMedidas from "./centralMedidas.js";
let centralMedidas = new CentralMedidas();

window.addEventListener("load", init);


function init(){
    document.querySelector("#ciudad").addEventListener("keyup", toUpperCase);
    let radios = document.querySelectorAll("input[name=tipo]");

    radios.forEach(radio => {
        radio.addEventListener("change", tratarRadios);
    })

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
        document.querySelector("#medidas").innerHTML = aleatorios;
        document.querySelector("#medidas").readOnly = true;
    }else if(event.target.value == "manual"){
        document.querySelector("#medidas").innerHTML = "";
    }else{
        document.querySelector("#medidas").innerHTML = "";
    }

    
}

function guardar(){

    let ciudad = document.querySelector("#ciudad").value.trim();
    let medidas = document.querySelector("#medidas").value;

    if(ciudad == ""){
        document.querySelector("#errores").style.display = "block";
        document.querySelector("#errores").innerHTML = "Debes escribir un nombre de ciudad";
    }else if(medidas.split(",").length != 30){
        document.querySelector("#errores").style.display = "block";
        document.querySelector("#errores").innerHTML = "Debes escribir 30 temperaturas";
    }else if(!centralMedidas.existeCiudad(ciudad)){
        document.querySelector("#errores").style.display = "block";
        document.querySelector("#errores").innerHTML = "La ciudad ya existe";
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
        document.querySelector("#errores").innerHTML = "La ciudad no existe";
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