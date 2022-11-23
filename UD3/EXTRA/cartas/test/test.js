import Carta from "../js/carta.js";
import Baraja from "../js/baraja.js";
import Partida from "../js/partida.js";


let partida = new Partida(4, 2);
partida._mazo //=
    // pruebas voltea funciona
partida.voltea(2, 3);
partida._cartaVolteada //=
partida._numeroIntentos //=
partida.voltea(1, 1);
partida._cartaVolteada //=
partida._numeroIntentos //=

    // compruebaAcierto funciona
partida._mazo[2][0] //=
partida._mazo[1][1] //=
partida.compruebaAcierto(2, 0) //=

    // ha finalizado
    partida.haFinalizado() //=