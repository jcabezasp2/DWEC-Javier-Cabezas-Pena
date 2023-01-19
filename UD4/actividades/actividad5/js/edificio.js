import Propietario from "./propietario.js";

export default class Edificio{

    #calle;
    #numero;
    #codigoPostal;
    #plantas;

    constructor(calle, numero, codigoPostal, plantas){
        this.#calle = calle;
        this.#numero = numero;
        this.#codigoPostal = codigoPostal;
        this.#plantas = [];
        plantas.forEach(planta => {
            this.agregaPlantasYPuertas(planta);    
        });
        
    }
    //Getters
    get calle(){
        return this.#calle;
    }

    get numero(){
        return this.#numero;
    }

    get codigoPostal(){
        return this.#codigoPostal;
    }

    get plantas(){
        return this.#plantas;
    }

    //setters
    set calle(calle){
            this.#calle = calle;
        }

    set numero(numero){
            this.#numero = numero;
        }

    set codigoPostal(codigoPostal){
            this.#codigoPostal = codigoPostal;
        }

    set plantas(plantas){
            this.#plantas = plantas;
        }

     //metodos   
    agregaPlantasYPuertas(nPuertas, nPlantas = 1){
        for(let i = 0; i < nPlantas; i++){
            let planta = new Array(nPuertas)
            planta.fill(null);
            this.#plantas.push(planta);
        }
        
    }

    agregaPropietario(propietario, planta, puerta){
        let propietarioPuerta = new Propietario(propietario.nombre, propietario.genero, propietario.miembros);
        this.#plantas[planta-1][puerta-1] = propietarioPuerta; 
    }

    borraPropietario(planta, puerta){
        this.#plantas[planta-1][puerta-1] = null;
    }


    getNumeroPlantas(){
        return this.#plantas.length;
    }
        

    getNumeroPuertas(planta){
        return this.#plantas[planta].length;
    }

    getPropietario(planta, puerta){
        return this.#plantas[planta-1][puerta-1];
    }


}