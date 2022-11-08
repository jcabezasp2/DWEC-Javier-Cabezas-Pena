export default class Carta {

    constructor(palo, nombre){
        this._palo = palo;
        this._nombre = nombre;
    }

    get Palo(){
        return this._palo;
    }

    set Palo(palo){
        this._palo=palo;
    }

    get nombre(){
        return this._nombre;
    }

    set Nombre(nombre){
        this._nombre=nombre;
    }

    toString(){
        return this._nombre + "-" + this._palo;
    }

    compareto(carta){
        if(this._nombre == carta.Nombre && this._palo == carta.Palo){
            return true;
        }else{
            return false;
        }
    }
}