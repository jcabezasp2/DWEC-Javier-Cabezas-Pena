export default class Tablero{

    #numeroColores;
    #filas;
    #columnas;
    #estado;
    #colorSeleccionado;


    constructor(numeroColores = 6, filas = 40, columnas = 40){
        this.#numeroColores = numeroColores;
        this.#filas = filas;
        this.#columnas = columnas;
        this.#estado = false;
        this.#colorSeleccionado;
    }

    get numeroColores(){
        return this.#numeroColores;
    }

    get filas(){
            return this.#filas;
        }

    get columnas(){
        return this.#columnas;
    }

    get estado(){
        return this.#estado;
    }

    set estado(val){
        this.#estado = val;
    }

    get colorSeleccionado(){
            return  this.color(this.#colorSeleccionado);
    }

    set colorSeleccionado(val){
        this.#colorSeleccionado = val;
    }

    color(val){
        let color;
        switch(+val){
            case 1: 
            color = '#F00';
            break;
            case 2: 
            color = '#0F0';
            break;
            case 3: 
            color = '#00F';
            break;
            case 4: 
            color = '#FF0';
            break;
            case 5: 
            color = '#0FF';
            break;
            case 6: 
            color = '#FFF';
            break;
        }

        return color;
    }

}