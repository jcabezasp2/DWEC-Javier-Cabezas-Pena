import PostIt from "./postit.js";

export default class Pizarra {

    #postIts

    constructor(postIts = []) {
        this.#postIts = postIts;
    }

    //Getters
    get postIts() {
        return this.#postIts;
    }

    //Setters
    set postIts(postIts) {
        this.#postIts = postIts;
    }

    //Métodos
    addPostIt(id, msg, img, coordenadas) {
        let postit = new PostIt(id, msg, img, coordenadas);
        this.#postIts.push(postit);
    }

    updatePostIt(id, msg, img, coordenadas) {
        let postit = this.#postIts.find(postit => postit.id == id);
        postit.mensaje = msg;
        postit.imagen = img;
        postit.localizacion = coordenadas;
    }

    delPostIt(id) {

        if(id == 'all'){
            this.#postIts = [];
        }else{
            this.#postIts = this.#postIts.filter(postit => postit.id != id);
        }
    }

    getPostIt(id) {
        return this.#postIts.find(postit => postit.id == id);
    }

    save(){
        localStorage.setItem('postits', JSON.stringify(this.#postIts));
    }

    load(){
        let postits = localStorage.getItem('postits');
        if(postits != null){
            this.#postIts = JSON.parse(postits);
        }
    }

}
