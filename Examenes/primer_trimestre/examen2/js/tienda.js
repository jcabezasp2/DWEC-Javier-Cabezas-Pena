import Disco from "./disco.js";
export default class Tienda {

    constructor() {
        this._disco = [];
    } 

    getNumeroDiscosDisponible(){
        // funciona
        let disponibles = this._disco.filter(disco => disco.Prestado == false);

        return disponibles.length;
    }

    addDisco(titulo, cantante, tipo, fecha, estanteria, prestado){
        if(!this.existeDisco(titulo)){
            let disco = new Disco(titulo, cantante, tipo, fecha, estanteria, prestado);
            this._disco.push(disco);
        }else{
            this._disco.forEach(disco => {
                if(disco.Titulo.toUpperCase() === titulo.toUpperCase()){
                    disco.titulo = titulo;
                    disco.Cantante = cantante;
                    disco.Tipo = tipo;
                    disco.Fecha = fecha;
                    disco.Estanteria = estanteria;
                    disco.Prestado = prestado;
                }
            })
        }
    }

    deleteDisco(titulo){

        this._disco = this._disco.filter(disco => disco.Titulo.toUpperCase() !== titulo.toUpperCase());
        // funciona
    }

    existeDisco(titulo) {
        // funciona
        if(this.getDisco(titulo) != null){
            return true;
        }else{
            return false;
        }
    }

    getDisco(titulo){
        return this._disco.find(disco => disco.Titulo.toUpperCase() === titulo.toUpperCase());
    }

    toHTML(){
        let disponibles = this._disco.filter(disco => disco.Prestado == false);
        let resultado = 'Hay ' + disponibles.length + ' discos disponibles';
         resultado += '<ul>';

        disponibles.forEach(disco =>{
            resultado += "<li style= color:" + this._estilo(disco) +">";
            resultado += disco.toHTML();
            resultado += "</li>";
        })
        resultado += '</ul>';
        return resultado;
    }
    // TODO eliminar numeros magicos
    _estilo(disco){
        switch(disco.Tipo){
            case "1": return "black";
            case "2": return "darkblue";
            case "3": return "brown";
            case "4": return "green";
        }        
    }

}