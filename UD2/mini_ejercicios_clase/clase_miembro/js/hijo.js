import Miembro from "./miembro.js";

export default class Hijo extends Miembro {

    constructor(nombre, apellidos, moto = "Sin moto"){
       super(nombre, apellidos);
        this._moto= moto;
    }

    get Moto(){
        return this._moto;
    }

    set Moto(moto){
        this._moto=moto;
    }
}