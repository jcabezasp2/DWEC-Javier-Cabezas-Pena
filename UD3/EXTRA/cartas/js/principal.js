import Partida from "./partida.js";
let partida = new Partida(3, 4);
window.addEventListener("load", init);
let primera = true;

function init() {
    // Mostrar las cartas
    mostrarTabla();
    reversoCartas();

    // Reloj
    controladorReloj()

    // contador de pulsaciones
    document.querySelector("#contadorPulsaciones").innerHTML = partida.NumeroIntentos;


    // levantar carta
    let cartas = document.querySelectorAll(".carta");
    cartas.forEach(carta => {
        carta.addEventListener("click", levantarCarta);
    });

}

function mostrarTabla() {

    let tablero = document.querySelector("#juego");

    var codigoHTML="<table id='tabla'>"
    for(var i= 0; i< partida._mazo.length; i++) {
        codigoHTML+="<tr class='fila"+i+"'>"
        for(var j=0; j<partida._mazo[i].length; j++){
                codigoHTML+="<td class='columna"+j+"'>" + partida._mazo[i][j].toHTML(i+"-"+j)+"</td>";
        }
        codigoHTML+="</tr>"
    }
    codigoHTML+="</table>"
    tablero.innerHTML += codigoHTML;

}

function levantarCarta(event) {
    let fila = this.id.substring(5,6);
    let columna = this.id.substring(7,8);
    this.className += " gira";
    if(primera){
        console.log("A");
        partida.voltea(fila, columna);
        document.querySelector("#contadorPulsaciones").innerHTML = partida.NumeroIntentos 
        primera = false;
    }else{
        console.log(partida.compruebaAcierto(fila,columna));
        if(!partida.compruebaAcierto(fila,columna)){
            console.log("B");
            setTimeout(desvoltearCarta, 1000, this.id);
            setTimeout(desvoltearCarta, 1000, "carta"+ partida.getIdCartaVolteada());
        }else{
            if(partida.haFinalizado()){
                finDePartida();
            }
        }

        primera = true;
    }
    
}

function reversoCartas(){
    let cartas = document.querySelectorAll("div.carta");
    cartas.forEach(carta => {
      carta.firstElementChild.style.backgroundPositionY = calcularPosicionY(carta.className);
      carta.firstElementChild.style.backgroundPositionX = calcularPosicionX(carta.className);
    });
}

function calcularPosicionY(palo){
    const PALOS = ['PICAS', 'CORAZONES', 'TRÉBOLES', 'DIAMANTES'];
    palo = palo.substring(8)
    let posicion = PALOS.indexOf(palo);
    return "-" + posicion * 120 + 'px';    
}


function calcularPosicionX(valor){
    const NOMBRES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
    let nombre = valor.substring(6, 7);
    let posicion = NOMBRES.indexOf(nombre);
    return "-" + posicion * 80 + 'px';    
    
}

function controladorReloj(){
    let reloj = document.querySelector("#contador");

    reloj.innerHTML = partida.Cronometro.getTiempoPasado();
    setTimeout(controladorReloj, 1000);
}

function desvoltearCarta(carta){

    
    carta = document.querySelector("#" +carta);
    carta.classList.remove("gira");
}

function finDePartida(){

    // para cronometro
    partida.Cronometro.setFinal();

    // controlar Record
    controlarRecord();


    // mostrar mensaje
    document.querySelector("#tabla").style.display = "none";
    document.querySelector("#gana").style.display = "block";
    document.querySelector("#tiempoEmpleado").innerHTML = partida.Cronometro.getTiempoPasado();
    // Nueva partida
    document.addEventListener('keydown', nuevaPartida);
}

function controlarRecord(){

    if(localStorage.getItem("recordTiempo") === null){
        document.querySelector("#record").style.display = "none";
        localStorage.setItem("recordTiempo", partida.Cronometro.getTiempoPasado());
        localStorage.setItem("recordPulsaciones", partida.NumeroIntentos)
    }else if(partida.Cronometro.comprobarRecord(localStorage.getItem("recordTiempo")) ){
        document.querySelector("#record").style.display = "block";
        document.querySelector("#sinDatos").style.display = "none";
        document.querySelector("#record").innerHTML = "nuevo record";
        localStorage.setItem("recordTiempo", partida.Cronometro.getTiempoPasado());
    }else if(localStorage.getItem("recordPulsaciones") > partida.NumeroIntentos){
        document.querySelector("#record").style.display = "block";
        document.querySelector("#sinDatos").style.display = "none";
        document.querySelector("#record").innerHTML = "nuevo record";
        localStorage.setItem("recordPulsaciones", partida.NumeroIntentos);
    }else{
        document.querySelector("#record").style.display = "none";
        document.querySelector("#sinDatos").style.display = "none";
    }
}

function nuevaPartida(e){
    if(e.keyCode === 83){
        location.reload();
    }

}
