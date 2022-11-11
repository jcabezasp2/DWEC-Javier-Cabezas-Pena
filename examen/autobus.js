import Billete from './billete.js'
export default class Autobus {
    constructor(matricula, origen, destino, fecha, numeroFilas, precioBase){
        this._matricula= matricula;
        this._origen= origen;
        this._destino= destino;
        this._fecha= fecha;
        this._numeroFilas= numeroFilas;
        this._precioBase= precioBase;
        this._plazas= new Array();
        this.inicializarPlazas();
    }

    get Matricula(){
        return this._matricula;
    }

    get Origen(){
        return this._origen;
    }

    get Destino(){
        return this._destino;
    }

    get Plazas(){
        return this._plazas;
    }


    generaLocalizador(){
        const LETRAS = "ABCDEFGHIJKLMNOPQRSTVWXYZ"
        let resultado = "";


        for(let i = 1; i <= 6; i++){
            if(i <= 4){
               let  min = 0
               let max = LETRAS.length
                let aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
                resultado+=  LETRAS.substring(aleatorio, aleatorio + 1); 
            }else{
                let  min = 0
                let max = 9
                let aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
                resultado+=  aleatorio; 
            }

        }
        return resultado;
    }

    generaPrecio(){
        let ocupadas = this.plazasOcupadas();


        return ocupadas * 0.5 + this._precioBase;

    }

    reservaPlaza(billete){

        const CODIGOS = {1: "Reserva Correcta", 2: "Reserva realizada pero no se respeta preferencia de ventanilla / pasillo", 3: "Autobus lleno (reserva no realizada)"};
        let preferencia = billete.Ventanilla;

        if(this.getPorcentajeOcupacion == 100){
            return CODIGOS[3];
        }else{
           let reservado = this.reservar(preferencia, billete);

           if(reservado == true){
            return CODIGOS[1];
           }else{
            this.reservar(!preferencia, billete);
                    return CODIGOS[2];
           }
        }


    }

    getPlaza(localizador){
        let fila;
        let asiento;

        for(let i = 1; i < this._plazas.length; i++){
            for(let x = 0; x < 4; x++){
                
                if(this._plazas[i][x].Localizador == localizador){
                    fila = i;
                    asiento = x;
                }
            }

        }
        let resultado = [fila, asiento];
        return resultado;
    }

    getPorcentajeOcupacion(){
        let plazasTotales = this._numeroFilas * 4;
        let ocupadas = this.plazasOcupadas();

        return Math.round((ocupadas / plazasTotales) * 100);
    }

    inicializarPlazas(){
        let linea;
        this._plazas.push(["A", "B", "C", "D"]);
        for(let i = 1; i <= this._numeroFilas; i++){
            linea = new Array();

            for(let x = 1; x<= 4; x++){
                linea.push(null)
            }
            this._plazas.push(linea)
        }
    }

    reservar(preferencia, billete){
        for(let i = 1; i < this._plazas.length; i++){

            if(preferencia == true){
                if(this._plazas[i][0] == null){
                    this._plazas[i][0] = billete;
                    return true;
                }
                if(this._plazas[i][3] == null){
                    this._plazas[i][3] = billete;
                    return true;
                }
            }else{
                if(this._plazas[i][1] == null){
                    this._plazas[i][1] = billete;
                    return true;
                }
                if(this._plazas[i][2] == null){
                    this._plazas[i][2] = billete;
                    return true;
                }
            }

        }

        return false;
    }


    plazasOcupadas(){

        let ocupadas = 0;

        for(let i = 1; i < this._plazas.length; i++){
            for(let x = 0; x < 4; x++){
                
                if(this._plazas[i][x] != null){
                    ocupadas++;
                }
            }

        }

        return 50;
    }

}