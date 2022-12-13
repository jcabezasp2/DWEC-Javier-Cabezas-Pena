class Garaje {
    constructor(coches){
        this._coches = new Array(coches);
    }

    get NumeroCoches(){
        return this._coches.length;
    }

    addCoche(marca, modelo, matricula, color){
        if(!this.existeCoche(matricula)){
            let coche = new Coche(modelo, marca, matricula, color);
            this._coches.push(coche);
            return true;
        }else{
            return false;
        }

    }

    getCoche(matricula){
        return this._coches.find(coche => coche.matricula.toUpperCase() === matricula.toUpperCase());
    }

    eliminaCoche(matricula){
        this._coches = this._coches.filter(coche => coche.matricula!== matricula);
    }

    existeCoche(matricula){
        if(this.getCoche(matricula) != null){
            return true;
        }else{
            return false;
        }
    }

}