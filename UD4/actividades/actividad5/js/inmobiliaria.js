export default class Inmobiliaria{

    #edificios;

    constructor(){
        this.#edificios =[];
    }

    //getters  
    get edificios(){
        return this.#edificios;
    }

    //setters
    set edificios(edificios){
        this.#edificios = edificios;
    }


    //metodos

    addEdificio(edificio){
        this.#edificios.push(edificio);
    }

    getEdificio(calle, numero){
        return this.#edificios.find(edificio => edificio.calle == calle && edificio.numero == numero);
    }




}