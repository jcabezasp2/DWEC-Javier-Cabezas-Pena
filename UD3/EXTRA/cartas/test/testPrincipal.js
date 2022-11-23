import Carta from "../js/carta.js";
import Baraja from "../js/baraja.js";
import Partida from "../js/partida.js";

// PRUEBAS CARTA -- TODO FUNCIONA --

let carta1 = new Carta("PICAS", "A");
let carta2 = new Carta("TREBOLES", "5");

carta1.toString() //=
carta2.toString() //=


// PRUEBAS BARAJA -- TODO FUNCIONA --

let baraja = new Baraja();
baraja.Cartas; //=

    // pruebas generaCarta == funciona   **no borra la carta que devuelve**
for (let i = 0; i < 10; i++){
   baraja.generaCarta().toString() //=
}

// PRUEBAS PARTIDA 

    // pruebas valoresValidos == funciona
        let partidaValoresInvalidos = new Partida(7, 5);
            partidaValoresInvalidos._filas; //=
            partidaValoresInvalidos._columnas; //=
        let partidaValoresValidos = new Partida(5, 4);
            partidaValoresValidos._filas; //=
            partidaValoresValidos._columnas; //=
    // pruebas cartaEnMazo == funciona
        let pruebaCartasenMazo = new Partida();
        let cartaEsta = new Carta("TREBOLES", "A");
        let cartaNoEsta = new Carta("Lorem", "IPSUM");
            cartaEsta.toString() //=
            cartaNoEsta.toString() //=
        pruebaCartasenMazo._cartasSeleccionadas.push(cartaEsta);
        pruebaCartasenMazo._cartaEnMazo(cartaEsta); //=
        pruebaCartasenMazo._cartaEnMazo(cartaNoEsta); //=

    // pruebas selecciona == funciona

        let cartas = new Partida(4, 10);
        cartas._cartasSeleccionadas.length; //=
        cartas._cartasSeleccionadas.forEach(carta =>{
            contador = 1;
            for (let i = 0; i < cartas._cartasSeleccionadas.length; i++) {

                if(carta === cartas._cartasSeleccionadas[i]){
                    if(contador <= 2){
                        contador++;
                    }else{
                        "ERROR" //=
                    }
                }
            }
        });

    // prueba baraja

    let partida = new Partida(2, 3);
    partida.baraja();
    partida._cartasSeleccionadas //=

    // prueba reparte
    let partida4 = new Partida(6, 3);
    partida4._filas //=
    partida4.reparte();
    partida4._mazo //=