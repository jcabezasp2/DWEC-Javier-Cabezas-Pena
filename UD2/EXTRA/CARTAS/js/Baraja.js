const PALOS = ['PICAS', 'CORAZONES', 'TRÉBOLES', 'DIAMANTES'];
const NOMBRES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
import Carta from "./carta.js";
export default class Baraja{

    constructor(){

        this._cartas = this._inicializarCartas();

    }

    get Cartas(){
        return this._cartas;
    }

    generaCarta(){
        
        let fila = this._getRandom(0, this._cartas.length - 1);
        let columna = this._getRandom(1, this.Cartas[fila].length - 1);
        let carta = new Carta(this._cartas[fila][0], this._cartas[fila][columna]);
        return carta;
    }

    _inicializarCartas(){

        let cartas = [];
        let fila;
        for (let i = 0; i < PALOS.length; i++) {
            
            fila = [];
            fila.push(PALOS[i]);
            for (let j = 0; j < NOMBRES.length; j++) {
                fila.push(NOMBRES[j]);
            }
            cartas.push(fila);
        }
        return cartas;
    }
    
    _getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }
}