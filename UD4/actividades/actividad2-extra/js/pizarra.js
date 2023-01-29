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
        msg != null? postit.mensaje = msg : postit.mensaje;
        img? postit.imagen = img : postit.imagen;
        coordenadas? postit.localizacion = coordenadas : postit.localizacion;
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
        
        let postits = [];
        this.#postIts.forEach(postit => {
            postits.push(postit.save());
        });
        console.log(postits);
        localStorage.setItem('postits', JSON.stringify(postits));
    }

    load(){
        let postits = localStorage.getItem('postits');
        if(postits != null){
            postits = JSON.parse(postits);

            postits.forEach(postit => {
                this.addPostIt(postit.id, postit.mensaje, postit.imagen, postit.localizacion);
            });
        }
    }

}
