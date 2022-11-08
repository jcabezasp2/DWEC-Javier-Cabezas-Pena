import Baraja from "./Baraja.js";

export default class Partida {
    constructor(filas = 2, columnas = 3){
        // TODO comprobar si son pares
        this._filas = filas;
        this._columnas = columnas;
        this._baraja = new Baraja();
        this._cartasSeleccionadas = this.selecciona()
        this.baraja();
        this._mazo = this.reparte();
        this._cartaVolteada;
        this._posicionCartaVolteada;
        this._aciertos = 0;
        this._numeroIntentos = 0;
    }

    get Baraja(){
        return this._baraja;
    }

    get CartasSeleccionadas(){
        return this._cartasSeleccionadas;
    }

    get Mazo(){
        return this._mazo;
    }

    get CartaVolteada(){
        return this._cartaVolteada;
    }

    set CartaVolteada(cartaVolteada){
        this._cartaVolteada = cartaVolteada;
    }

    get Aciertos(){
        return this._aciertos;
    }

    set Aciertos(aciertos){
        this._aciertos = aciertos;
    }

    selecciona(){

        let cantidadParejas = (this._filas * this._columnas) / 2;
        let cartasSeleccionadas = new Array();
        let cartaAleatoria;
        for(let i = 1; i <= cantidadParejas; i++){
            cartaAleatoria = this._baraja.generaCarta();
            cartasSeleccionadas.push(cartaAleatoria);
            cartasSeleccionadas.push(cartaAleatoria);
        }
        return cartasSeleccionadas;
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

    generaRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    baraja(){
        this._cartasSeleccionadas.sort((a,b) => {

            let aleatorio = this.generaRandom(0 , 10);
            if (aleatorio % 2 == 0){
                return 0;
                //return a.toString().localeCompare(b.Nombre);
            }else{
                return b.toString().localeCompare(a.Nombre);
            }
           
        })
    }

    voltea(fila, columna){
        
            this._cartaVolteada = this._mazo[fila][columna];
            this._numeroIntentos++;
            this._posicionCartaVolteada = fila + columna;
    }

    compruebaAcierto(fila, columna){
        if(this._mazo[fila][columna].compareTo(this._cartaVolteada)){
            this._aciertos++;
            this._mazo[fila][columna] = null;
            this._mazo[this._posicionCartaVolteada.sbstr(0, 1)][this._posicionCartaVolteada.sbstr(1, 1)] = null;

            return true;
        }else{
            return false;
        }
        
    }

    hafinalizado(){
        if(this._aciertos == (this._filas * this._columnas) / 2){
            return true;
        }else{
            return false;
        }
    }

    cartaExiste(fila, columna){
        if(this._filas.length < fila || this._columnas.length < columna){
            return true;
        }else{
            return false;
        }
    }

    mazoToConsole(){
        for(let i = 0; i < this._mazo.length; i++){
            console.log(this._mazo[i]);
        }

    }


}