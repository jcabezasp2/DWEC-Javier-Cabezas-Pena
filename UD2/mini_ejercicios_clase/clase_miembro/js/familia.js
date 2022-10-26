export default class Familia {

    constructor(domicilio, renta = 0, miembros = new Array()){
        this._domicilio = domicilio
        this._renta = renta;
        this._miembros = miembros;
    }

    get Domicilio(){
        return this._coche;
    }

    set Domicilio(domicilio){
        this._domicilio = domicilio;
    }

    get Renta(){
        return this._renta;
    }

    set Renta(renta){
        this._renta = renta;
    }

    get Miembros(){
        return this._miembros;
    }

    set Miembros(miembros){
        this._miembros = miembros;
    }

    AnadirMiembro(miembro){
        this._miembros.push(miembro);
    }

}