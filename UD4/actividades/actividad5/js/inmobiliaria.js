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
        let resultado = this.#edificios.find(edificio => edificio.calle == calle && edificio.numero == numero);
        return resultado == undefined?  null : resultado;
    }




}