export default class Billete {

    constructor(nombreCompleto, dni, precio, localizador, ventanilla){
        this._nombreCompleto= nombreCompleto;
        this._dni= dni;
        this._precio= precio;
        this._localizador= localizador;
        this._ventanilla= ventanilla;
    }

    get Ventanilla(){
        return this._ventanilla;
    }

    get Localizador(){
        return this._localizador;
    }


}