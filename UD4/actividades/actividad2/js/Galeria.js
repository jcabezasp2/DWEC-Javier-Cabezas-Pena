export default class Galeria {

    constructor(numeroImagenes) {
    
            this._galeria = [];
            this._cursor = 0;
            this.inicializaGaleria(numeroImagenes);
    }

     ruta(){
        return this._galeria[this._cursor];
    }

    numeroImagenes(){ 
        return this._galeria.length;
    }

    inicializaGaleria(numeroImagenes) {

        for (let i = 1; i <= numeroImagenes; i++) {
            this._galeria.push('./images/foto' + i + '.jpg');
        }
        this.posicionAleateoria();

    }

    posicionAleateoria(){
        this._cursor = Math.floor(Math.random() * this._galeria.length);
        return this.ruta();
    }

    ultimaPosicion() {
        this._cursor = this._galeria.length - 1;
        return this.ruta();
    }

    primeraPosicion() {
        this._cursor = 0;
        return this.ruta();
    }

    anteriorPosicion() {
        if( this._cursor > 0){
            this._cursor--;
        }
        return this.ruta();
    }

   siguentePosicion() {
        if( this._cursor < this._galeria.length - 1){
                    this._cursor++;
                }
        return this.ruta();
    }


}