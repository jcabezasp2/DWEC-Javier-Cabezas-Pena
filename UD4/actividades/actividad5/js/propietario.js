export default class Propietario{

    #nombre;
    #genero;
    #miembros;

    constructor(nombre, genero, miembros){
            this.#nombre = nombre;
            this.#genero = genero;
            this.#miembros = miembros;
    }

    //getters
    get nombre(){
        return this.#nombre;
    }

    get genero(){
        return this.#genero;
    }

    get miembros(){
        return this.#miembros;
    }

    //setters
    set nombre(nombre){
        this.#nombre = nombre;
    }

    set genero(genero){
        this.#genero = genero;
    }

    set miembros(miembros){
        this.#miembros = miembros;
    }

}