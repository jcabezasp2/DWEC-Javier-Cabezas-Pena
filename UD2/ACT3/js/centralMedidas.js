class CentralMedidas {

    constructor(medidas = new Array()){
        this._medidas = medidas;
    }
    get Medidas(){
        return this._medidas;
    }

    set Medidas(medidas){
        this._medidas=medidas;
    }

    insertaMedidas(ciudad, valores){

        if(!this.existeCiudad(ciudad) || valores.length != 30){
            return false
        }else{
            let nuevoElemento = new Array();
            nuevoElemento.push(ciudad);
            nuevoElemento.concat(valores);
            this._medidas.push(nuevoElemento);
        }
        return true;
    }

    existeCiudad(ciudad){
        let existe = true;
        this._medidas.forEach(element => {
            if(element[0] == ciudad){
                existe = false;
            }
        })

        return existe;
    }

    insertaAleatorio(ciudad){
        if(!this.existeCiudad(ciudad)){
            return false;
        }else{
            let nuevoElemento = new Array();
            nuevoElemento.push(ciudad);
            let max = 40;
            let min = -10;
            let aleatorio;
            for(let i = 1; i <= 31; i++){
                aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
                nuevoElemento.push(aleatorio);
            }
            this._medidas.push(nuevoElemento);
            return true
        }
    }

    mediaMedidas(ciudad){
        let suma = 0;
        this._medidas.forEach(c => {
            if(c[0] == ciudad){
                for(let i = 1; i <= 31; i++){
                    suma += c[i];
                }
            }
        });
        
        return (suma / 30);
    }

    mediaMedidasTotal(){

        let suma = 0;
        let totalCiudades = this._medidas.length;

        this._medidas.forEach(c => {
            suma += this.mediaMedidas(c[0]);
        });
        return (suma / totalCiudades);
    }

    eliminaCiudad(ciudad){

        for(let i = 0; i < this._medidas.length; i++){
            if(this._medidas[i][0] == ciudad){
                this._medidas.splice(i, 1);
            }
        }
  
    }

    toConsole(){
        console.table(this._medidas);
    }

}