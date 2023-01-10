export default class Tablero{

    constructor(numeroColores = 6, filas = 40, columnas = 40){
        this._numeroColores = numeroColores;
        this._filas = filas;
        this._columnas = columnas;
        this._estado = false;
        this._colorSeleccionado;
    }

    get numeroColores(){
        return this._numeroColores;
    }

    get filas(){
            return this._filas;
        }

    get columnas(){
        return this._columnas;
    }

    get estado(){
        return this._estado? 'activo' : 'inactivo';
    }

    set estado(val){
        this._estado = val;
    }

    get colorSeleccionado(){
            return  color(this._colorSeleccionado);
    }

    set colorSeleccionado(val){
        this._colorSeleccionado = val;
    }

    color(val){
        let color;
        switch(val){
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