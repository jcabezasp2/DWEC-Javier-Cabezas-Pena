
export default class Carta{

    constructor(palo, nombre){
        this._palo = palo;
        this._nombre = nombre;
    }

    get Palo(){
        return this._palo;
    }

    set Palo(palo){
        this._palo = palo;
    }

    get Nombre(){
        return this._nombre;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }

    toString(){
        return this._nombre + "-" + this._palo;
      }


    toHTML(id){
        let resultado = "<div class='carta " + this.toString() + "' id='carta" + id + "'>";
            resultado += "<div class='frontal'></div>";
            resultado += "<div class='posterior'></div>";
            resultado += "</div>";

        return resultado;
    }
      
    equal(carta){
        if(this._palo === carta.Palo && this._nombre === carta.Nombre){
            return true;
        }else{
            return false;
        }

    }
}