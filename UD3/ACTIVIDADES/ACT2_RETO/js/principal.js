import PalabraOculta from "./adivinaPalabra.js";
window.addEventListener("load", init);
let juego = new PalabraOculta();
juego.Seleccionada //=
juego.palabraDesordenada() //=
function init() {

    document.querySelector("#letras").value = juego.palabraDesordenada().toUpperCase();

    document.querySelector("#palabra").addEventListener("keyup", tratarPalabra);

    document.querySelector("#solucion").addEventListener("click", verSolucion);

    document.querySelector("#nueva").addEventListener("click", nuevaPalabra);

    let dificultades = document.querySelectorAll("input[name=Dificultad]");

    dificultades.forEach(radio => {
        radio.addEventListener("click", clickRadio);
    });

    document.querySelector("#finalizar").addEventListener("click", finPartida);

}



function tratarPalabra(event) {

    let valor = document.querySelector("#palabra").value;
    document.querySelector("#palabra").value = valor.toUpperCase();
    if(valor.toUpperCase() == juego.Seleccionada.toUpperCase() && document.querySelector("#solucion").disabled == false){
        document.querySelector("#resultado").innerHTML = "Has acertado la palabra " + juego.Seleccionada.toUpperCase();
        document.querySelector("#solucion").disabled = true;
        document.querySelector("#nueva").disabled = false;
        juego.sumarAcierto();
    }
}

function verSolucion(event) {
    let linea = document.querySelector("#resultado");

    linea.innerHTML = "La palabra correcta es " + juego.Seleccionada.toUpperCase();

    document.querySelector("#solucion").disabled = true;
    document.querySelector("#nueva").disabled = false;
}

function clickRadio(event){
    let pulsado = event.target.id;
    let dificultad = pulsado.substr(-1, 1);
    juego.Dificultad = dificultad;
    nuevaPalabra();
}

function nuevaPalabra() {
    console.log(juego._aciertos);
    console.log(juego._partidas);
    juego.nuevaPalabra();
    document.querySelector("#letras").value = juego.palabraDesordenada().toUpperCase();
    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#palabra").value = "";
    document.querySelector("#solucion").disabled = false;
    juego.sumarPartida();
}

function finPartida(event) {
    let mayorPuntuacion = getCookie("mayorPuntuacion");
    let actual = juego.devolverPorcentaje();
    document.querySelector("#solucion").disabled = true;
    document.querySelector("#nueva").disabled = true;
    document.querySelector("#finalizar").disabled = true;
    document.querySelectorAll("input[name=Dificultad]").forEach(a =>{
        a.disabled = true;
    })
    document.querySelector("#porcentaje").style.visibility = "visible";
    document.querySelector("#porcentaje").innerHTML = "Porcentaje de aciertos:" + juego.devolverPorcentaje() + "%";
    if(mayorPuntuacion === null || actual > mayorPuntuacion || actual == 100){
        setCookie("mayorPuntuacion", juego.devolverPorcentaje());
        document.querySelector("#record").innerHTML = "Nuevo record";
    }
}

function getCookie(nomCookie) {
    let cook=document.cookie.split(";"); // pares de valores
    
    for(let i=0; i<cook.length; i++) { // revisamos todos los pares
        let n = cook[i].split("="); // separamos nombre/valor
        let nombre=n[0];
        let valor =n[1];
        if(nombre.trim()==nomCookie.trim()) // si es el buscado
        return valor;// devolvemos su valor
    }
    
    return null; // si no se encuentra = nulo
}

function setCookie(nombre, valor) {
    document.cookie = nombre+"="+valor;
}
