export default class Grafica{

    constructor(){
        this._coleccion = new Map();
    }

    insertar(etiqueta, valor){
        if(this._coleccion.set(etiqueta, valor)){
           return true;           
        }
        return false;
    }

    borrar(etiqueta){
        if(this._coleccion.has(etiqueta)){
            this._coleccion.delete(etiqueta);
            return true;
        }
        return false;
    }

    numerode(){
         return this._coleccion.size;
    }

    elementos(){
        return this._coleccion;
    }

    valorMaximo(){
        let valores = Array.from(this._coleccion.values());        
        return Math.max(...valores);
    }

    contiene(etiqueta){
    return this._coleccion.has(etiqueta)? true : false;    
    }

}