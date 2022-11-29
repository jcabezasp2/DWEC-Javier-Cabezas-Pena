 

export default class PalabraOculta{

     constructor() {
        this._listaPalabras = ["gato", "casa", "algo", "libro", "ordenador", "botella", "programa"];
        this._seleccionada = this.seleccionarPalabra();
        this._partidas = 1;
        this._aciertos = 0;
    }


    get Seleccionada(){
        return this._seleccionada;
    }

    get Partidas(){
        return this._partidas;
    }

    get Aciertos(){
        return this._aciertos;
    }

    nuevaPalabra(){
        this._seleccionada = this.seleccionarPalabra();
    }

    sumarAcierto(){
        this._aciertos++;
    }

    sumarPartida(){
        this._partidas++;
    }

    seleccionarPalabra() {
        let min = 0;
        let max = this._listaPalabras.length - 1;
        return this._listaPalabras[Math.floor(Math.random() * (max - min + 1) + min)];        
    }

    palabraDesordenada(){
        let letras = this._seleccionada.split("");
        letras.sort(this._desordenar);
         
        return letras.join("");

    }

    _desordenar(){
        return Math.random() - 0.5;
    }

    devolverPorcentaje(){
        return (this._aciertos / this._partidas) * 100;
    }

}