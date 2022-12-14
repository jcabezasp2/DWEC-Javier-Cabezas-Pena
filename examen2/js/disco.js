const TIPO_MUSICA={ROCK:1,POP:2,PUNK:3,INDIE:4};

export default class Disco{
    constructor(titulo, cantante, tipo, fecha, estanteria, prestado){
        this._titulo=titulo;
        this._cantante=cantante;
        this._tipo=tipo;
        this._fecha=fecha;
        this._estanteria=estanteria;
        this._prestado=prestado;
    }   

    set Titulo(titulo){
        this._titulo=titulo
    }
    get Titulo(){
        return this._titulo;
    }

    set Cantante(cantante){
        this._cantante=cantante
    }
    get Cantante(){
        return this._cantante;
    }

    set Tipo(tipo){
        this._tipo=tipo
    }
    get Tipo(){
        return this._tipo;
    }

    set Fecha(fecha){
        this._fecha=fecha
    }
    get Fecha(){
        return this._fecha;
    }
  

    set Estanteria(estanteria){
        this._estanteria=estanteria
    }

    get Estanteria(){
        return this._estanteria;
    }
  
    set Prestado(prestado){
        this._prestado=prestado
    }
    get Prestado(){
        return this._prestado;
    }

    toHTML(){
        var cadena="";
        cadena+=this.Titulo;           
        cadena+="-"+this.Cantante;                       
        cadena+=" ("+this.Fecha.substring(0, 4)+")";
        cadena+="";
        return cadena;
      }
}