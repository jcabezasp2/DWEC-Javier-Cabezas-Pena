export default class Propietario{

    constructor(nombre, genero, miembros){
            this.nombre = nombre;
            this.genero = genero;
            this.miembros = miembros;
    }

    //getters
    get Nombre(){
        return this.nombre.split(" ")[0];
    }

    get Apellido(){
        return this.nombre.split(" ").splice(1).join(" ");
    }

    get Genero(){
        return this.genero;
    }

    get Miembros(){
        return this.miembros;
    }

    //setters
    set Nombre(nombre){
        this.nombre = nombre;
    }

    set Genero(genero){
        this.genero = genero;
    }

    set Miembros(miembros){
        this.miembros = miembros;
    }

}