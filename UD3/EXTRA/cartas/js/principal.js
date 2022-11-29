import Partida from "./partida.js";
let partida = new Partida(3, 4);
window.addEventListener("load", init);

function init() {
    // Mostrar las cartas
    // TODO reverso de las cartas
    // TODO cambiar puntero raton cuando esta sobre una carta
    mostrarTabla();

    // TODO reloj



    // TODO levantar carta
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
        codigoHTML+="<tr>"
        for(var j=0; j<partida._mazo[i].length; j++){
                codigoHTML+="<td>" + partida._mazo[i][j].toHTML(contador)+"</td>";
                contador++;
        }
        codigoHTML+="</tr>"
    }
    codigoHTML+="</table>"
    tablero.innerHTML=codigoHTML;

}

function levantarCarta(event) {
    let estado = event.target.className;
    if(estado == "posterior") {
        console.log("Algo");
    }else if(estado == "frontal"){
        console.log("Otra cosa");
    }

    // TODO implement
}
