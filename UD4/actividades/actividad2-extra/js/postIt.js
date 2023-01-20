export default class PostIt {

    #id;
    #mensaje;
    #imagen;
    #localizacion;

    constructor(id, mensaje, imagen, localizacion) {
        this.#id = id;
        this.#mensaje = mensaje;
        this.#imagen = imagen;
        this.#localizacion = localizacion;
    }

    //Getters
    get id() {
        return this.#id;
    }
    
    get mensaje() {
        return this.#mensaje;
    }

    get imagen() {
        return this.#imagen;
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

    set imagen(imagen) {
        this.#imagen = imagen;
    }

    set localizacion(localizacion) {
        this.#localizacion = localizacion;
    }

    //Métodos
    moveTo(nuevasCoordenadas) {
        this.#localizacion = nuevasCoordenadas;
    }

    save(){
        localStorage.setItem(`${this.#id}`, JSON.stringify({id: this.#id, mensaje: this.#mensaje, imagen: this.#imagen, localizacion: this.#localizacion}));
    }

    recover(id){
        let postIt = JSON.parse(localStorage.getItem(`${id}`));
        this.#id = postIt.id;
        this.#mensaje = postIt.mensaje;
        this.#imagen = postIt.imagen;
        this.#localizacion = postIt.localizacion;
    }


}