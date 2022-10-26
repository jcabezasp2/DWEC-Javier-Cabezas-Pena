import Miembro from "./miembro.js";

export default class Padre extends Miembro {

    constructor(nombre, apellidos, coche){
       super(nombre, apellidos);
        this._coche = coche;
    }

    get Coche(){
        return this._coche;
    }

    set Coche(coche){
        this._coche = coche;
    }

    comer(){
        console.log("Estoy comiendo huevos");
    }

    cenar(){
        console.log("Estoy cenando huevos");
    }


}