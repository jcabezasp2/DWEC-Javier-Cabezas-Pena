import Partida from "./partida.js";
let partida = new Partida(3, 4);
window.addEventListener("load", init);
let horaInicio= new Date();

function init() {
    // Mostrar las cartas
    mostrarTabla();
    reversoCartas();


    // reloj
    cronometro();
    

    // levantar carta
    // TODO actualizar pulsaciones
    // TODO comprobar acierto
    let cartas = document.querySelectorAll(".carta");
    cartas.forEach(carta => {
        carta.addEventListener("click", levantarCarta);
    });


}

function mostrarTabla() {

    let tablero = document.querySelector("#juego");
    let contador = 0;
    var codigoHTML="<table>"
    for(var i= 0; i< partida._mazo.length; i++) {
        codigoHTML+="<tr class='fila"+i+"'>"
        for(var j=0; j<partida._mazo[i].length; j++){
                codigoHTML+="<td class='columna"+j+"'>" + partida._mazo[i][j].toHTML(i+"-"+j)+"</td>";
                
                contador++;
        }
        codigoHTML+="</tr>"
    }
    codigoHTML+="</table>"
    tablero.innerHTML=codigoHTML;

}

function levantarCarta(event) {
    this.className += " gira";
    let fila = this.id.substring(5,6);
    let columna = this.id.substring(7,8);
    partida.voltea(fila, columna);
    document.querySelector("#contadorPulsaciones").innerHTML = partida.numeroIntentos 
    // TODO implement
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

function controladorReloj(tiempoPasado){
    let reloj = document.querySelector("#contador");
    tiempoPasado /= 1000;
    let minutos = Math.trunc(tiempoPasado / 60);
    let segundos = Math.trunc(tiempoPasado % 60);
    reloj.innerHTML = (minutos <9? "0":"") + minutos + ":" + (segundos <9? "0":"") +  segundos;
}

function cronometro(){
    let horaActual = new Date();
    let tiempoPasado = horaActual.getTime() - horaInicio.getTime();
    
    controladorReloj(tiempoPasado);
    setTimeout(cronometro, 1000);
}
