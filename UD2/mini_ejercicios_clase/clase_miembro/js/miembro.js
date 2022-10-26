
export default class Miembro {
    constructor(nombre = "sin nombre", apellidos = "sin apellidos"){
        this._nombre=nombre;
        this._apellidos=apellidos;
    }
    get Nombre(){
        return this._nombre;
    }

    set Nombre(nombre){
        this._nombre=nombre;
    }

    get Apellidos(){
        return this._apellidos;
    }

    set Apellidos(apellidos){
        this._apellidos=apellidos;
    }

    comer(){
        console.log("Estoy comiendo");
    }

    cenar(){
        console.log("Estoy cenando");
    }
}


