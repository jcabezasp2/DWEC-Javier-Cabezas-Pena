
export default class PalabraOculta{

     constructor() {
        this._listaPalabras = [["gato", "casa", "algo", "jugo", "juez", "java", "joya", "jazz", "kilo", "kiwi"], ["cambio", "fuerte", "dinero", "cuenta", "blanco", "objeto", "fuerza", "equipo", "tiempo", "lograr"], ["abstraer", "cachorro", "biografo", "aceituna", "publicar", "decorado", "blindaje", "acordeon", "edificio", "artritis"]];
        this._seleccionada = this.seleccionarPalabra(4);
        this._partidas = 1;
        this._aciertos = 0;
        this._dificultad = 4;
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

    set Dificultad(dificultad){
        this._dificultad = dificultad;
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

        let palabras
        if(this._dificultad == 6){
            palabras = this._listaPalabras[1];
        }else if(this._dificultad == 8){
            palabras = this._listaPalabras[2];
        }else{
            palabras = this._listaPalabras[0];
        }


        let min = 0;
        let max = palabras.length - 1;
        return palabras[Math.floor(Math.random() * (max - min + 1) + min)];        
    }

    palabraDesordenada(){
        let resultado
        do{
            let letras = this._seleccionada.split("");
            letras.sort(this._desordenar);
            resultado = letras.join("");
        }while(resultado == this._seleccionada);
        return resultado;
    }

    _desordenar(){
        return Math.random() - 0.5;
    }

    devolverPorcentaje(){
        return ((this._aciertos / this._partidas) * 100).toFixed(2);
    }

}