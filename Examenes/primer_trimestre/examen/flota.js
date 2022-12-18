export default class Flota {

    constructor(){
        this._autobuses= new Map();
    }

    get Autobuses(){
        return this._autobuses;
    }

    addAutobus(autobus){
        let matricula = autobus.Matricula;
        if(this._autobuses.has(matricula)){
            return false;
        }else{
            this._autobuses.set(matricula, autobus)

            return true;
        }
    }

    getAutobus(origen, destino){

        
        let resultado = null;
        const iterator1 = this._autobuses.values();

       for(let i = 0; i < this._autobuses.size; i++){
            let auto = iterator1.next().value;
            console.log(auto.Origen);
            console.log(origen);
           if(auto.Origen == origen && auto.Destino == destino){
            resultado  = auto;
           }
       }

       return resultado;

    }





}