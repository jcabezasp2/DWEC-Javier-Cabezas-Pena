import Carta from "./carta.js";
import Baraja from "./baraja.js";
import Cronometro from "./cronometro.js";
export default class Partida{

    constructor(filas, columnas){
        this._filas = filas;
        this._columnas = columnas;
        this._valoresValidos();
        this._baraja = new Baraja();
        this._cartasSeleccionadas = [];
        this.selecciona();
        this.baraja(); 
        this._mazo = this.reparte();
        this._cartaVolteada = {
            fila: null,
            columna: null
        };
        this._aciertos = 0; 
        this._numeroIntentos = 0;
        this._cronometro = new Cronometro();
    }

    get NumeroIntentos(){
        return this._numeroIntentos;
    }

    get Cronometro(){
        return this._cronometro;
    }

    nuevaPartida(){
        this._aciertos = 0;
        this._numeroIntentos = 0;
        this._cronometro = new Cronometro();
        this.selecciona();
        this.baraja();
        this._mazo = this.reparte(); 
    }

    getIdCartaVolteada(){
        return this._cartaVolteada.fila+"-"+this._cartaVolteada.columna; 
    }

    selecciona(){
        let numerParejas = (this._filas * this._columnas) / 2;
        let carta;
        for(let i = 1; i <= numerParejas; i++){
            do{
                carta = this._baraja.generaCarta();
            }while(this._cartaEnMazo(carta))
           this._cartasSeleccionadas.push(carta);
           this._cartasSeleccionadas.push(carta);
        }
    }

    baraja(){
        this._cartasSeleccionadas.sort(this._desordenar)
    }

    reparte(){
        let mazo = new Array();
        let fila;
        for(let i = 1; i <= this._filas; i++){
            fila = new Array();
            for(let j = 1; j <= this._columnas; j++){ 
                fila.push(this._cartasSeleccionadas.pop());  
            }
            mazo.push(fila);
        }
        return mazo;
    }

    voltea(fila, columna){
        this._cartaVolteada.fila = fila;
        this._cartaVolteada.columna = columna;
        this._numeroIntentos++;
        // TODO voltea la carta?
    }

    compruebaAcierto(fila, columna){
        
        if(this._mazo[fila][columna] === this._mazo[this._cartaVolteada.fila][this._cartaVolteada.columna]){
            this._aciertos++;
            return true;
        }
        return false;
    }

    haFinalizado(){
        if(((this._filas * this._columnas) / 2 ) == this._aciertos){
            return true;
        }
        return false;
    }

    _cartaEnMazo(carta){

        for(let i = 0; i < this._cartasSeleccionadas.length; i++){
            if(this._cartasSeleccionadas[i].equal(carta)){
                return true;
            }
        }

        return false;    
    }

    _valoresValidos(){
        if(this._filas * this._columnas % 2 != 0){
            this._filas = 2;
            this._columnas = 3
        }
    }

    _getRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    _desordenar(){
        return Math.random() - 0.5;
    }

}