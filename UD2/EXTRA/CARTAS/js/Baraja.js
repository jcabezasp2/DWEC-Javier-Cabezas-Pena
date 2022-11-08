import Carta from "./Carta.js";
const PALOS = ['PICAS', 'CORAZONES', 'TRÉBOLES', 'DIAMANTES'];
const NOMBRES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];

export default class Baraja {
    constructor(){
        this._cartas = this.incializarCartas();
    }

    generaCarta(){

        let palo = this.generaRandom(0, PALOS.length - 1);
        let nombre = this.generaRandom(1, this._cartas[palo].length - 1 );
        let carta = new Carta(PALOS[palo], NOMBRES[nombre]);
        this._cartas[palo].splice(nombre, 1);
        return carta;
    }

    generaRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      incializarCartas(){
        let baraja = new Array();
        let linea;
        PALOS.forEach(palo => {
            linea = new Array();
            linea.push(palo);
            NOMBRES.forEach(nombre => {
                linea.push(nombre);
            });
            baraja.push(linea);
        });
        return baraja;
      }

      toTable(){
        console.table(this._cartas);
      }
}