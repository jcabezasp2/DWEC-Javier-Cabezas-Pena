export default class PostIt {

    #id;
    #mensaje;
    #cadena;
    #localizacion;

    constructor(id, mensaje, cadena, localizacion) {
        this.#id = id;
        this.#mensaje = mensaje;
        this.#cadena = cadena;
        this.#localizacion = localizacion;
    }

    //Getters
    get id() {
        return this.#id;
    }
    
    get mensaje() {
        return this.#mensaje;
    }

    get cadena() {
        return this.#cadena;
    }

    get localizacion() {
        return this.#localizacion;
    }
    //Setters
    set id(id) {
        this.#id = id;
    }

    set mensaje(mensaje) {
        this.#mensaje = mensaje;
    }

    set cadena(cadena) {
        this.#cadena = cadena;
    }

    set localizacion(localizacion) {
        this.#localizacion = localizacion;
    }

    //Métodos

    moveTo(nuevasCoordenadas) {
        this.#localizacion = nuevasCoordenadas;
    }


}