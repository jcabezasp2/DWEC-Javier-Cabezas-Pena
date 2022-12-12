export default class Cronometro{
    constructor(){
        this._horaInicio = new Date();
        this._final;
        this._parado = false;
         
    }

    get horaInicio(){
        return this._horaInicio;
    }

    calcularTiempoPasado(){
        let horaActual= new Date();       
        let tiempoPasado = horaActual.getTime() - this._horaInicio.getTime();
        return tiempoPasado;
    }

    formatearTiempo(){
        let tiempoPasado = this.calcularTiempoPasado();
        tiempoPasado /= 1000;
        let minutos = Math.trunc(tiempoPasado / 60);
        let segundos = Math.trunc(tiempoPasado % 60);
    
        return (minutos <9? "0":"") + minutos + ":" + (segundos <9? "0":"") +  segundos;
    }

    getTiempoPasado(){
        if(!this._parado){
            return this.formatearTiempo();
        }else{
            return this._final;
        }
    }

    setFinal(){
        this._final = this.getTiempoPasado();
        this._parado = true;
    }

    comprobarRecord(tiempoLocalStorage){
        if(+tiempoLocalStorage.substring(0, 2) >= +this._final.substring(0, 2) && +tiempoLocalStorage.substring(3, 5) >= +this._final.substring(3, 5) ){
            return true;
        }else{
            return false;
        }
    }
}
