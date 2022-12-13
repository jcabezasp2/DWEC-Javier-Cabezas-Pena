class Garaje {
    constructor(coches){
        this._coches = new Array();
        this._maximo = coches;
    }

    get NumeroCoches(){   
        return this._coches.length;
    }

    addCoche(marca, modelo, matricula, color){
        if(!this.existeCoche(matricula) && this._coches.length < this._maximo){
            console.log("exito")
            let nuevoCoche = new Coche(modelo, marca, matricula, color);
            this._coches.push(nuevoCoche);
            return true;
        }else{
            console.log("Existe Coche")

            return false;
        }

    }

    getCoche(matricula){
        for(let i = 0; i < this._coches.length; i++){
            if(this._coches[i].Matricula == matricula){
                return this._coches[i];
            }
        }
        return null;
    }

    eliminaCoche(matricula){
        let posicion = this._coches.indexOf(matricula);
        this._coches.splice(posicion, 1);
        console.log(this._coches.length)
    }

    existeCoche(matricula){
        for(let i = 0; i < this._coches.length; i++){
            if(this._coches[i].Matricula == matricula){
                return true;
            }
        }
        return false;
    }

    toString(){
        let resultado = '';

        this._coches.forEach(coche => {
            resultado += "<div class='coche' style= background-color:" + this.estilo(coche) +">";
            resultado += coche.toHTML();
            resultado += "</div>";
        })
        return resultado;
    }


    estilo(coche){
        console.log(coche.Color);
        switch(coche.Color){
            case "rosa": return "pink";
            case "amarillo": return "yellow";
            case "verde": return "green";
            case "blanco": return "white";
            case "gris": return "grey";
        }        
    }
}