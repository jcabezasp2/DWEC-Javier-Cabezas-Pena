import CentralMedidas from "./centralMedidas.js";
let centralMedidas = new CentralMedidas();

window.addEventListener("load", init);


function init(){
    document.querySelector("#ciudad").addEventListener("keyup", toUpperCase);
    let radios = document.querySelectorAll("input[name=tipo]");

    radios.forEach(radio => {
        radio.addEventListener("click", tratarRadios);
    })

    document.querySelector("#guardar").addEventListener("click", guardar);
    document.querySelector("#borrar").addEventListener("click", borrar);

}


function toUpperCase(){

    let objetivo = document.querySelector("#ciudad");
    objetivo.value = objetivo.value.toUpperCase();
}

function tratarRadios(event){

    if(event.target.value == "aleatorio"){
        let aleatorios = centralMedidas.generaAleatorio();
        document.querySelector("#medidas").innerHTML = aleatorios;
        document.querySelector("#medidas").readOnly = true;
    }else if(event.target.value == "manual"){
        document.querySelector("#medidas").innerHTML = "";
    }

    
}

function guardar(){

    let ciudad = document.querySelector("#ciudad").value;
    let medidas = document.querySelector("#medidas").value;

    if(ciudad == undefined){
        console.log("Vacio"); // TODO implement
    }

    if(medidas == undefined){
        console.log("Vacio"); // TODO implement
    }

    console.log( centralMedidas.insertaMedidas(ciudad, medidas));
    insertarTabla();
}

function insertarTabla(){
    centralMedidas.toConsole();
    document.querySelector("#tabla-medidas").style.display = "block";
    document.querySelector("#tabla-medidas").innerHTML = centralMedidas.toHTML();
}

function borrar(){
    // TODO implement
}