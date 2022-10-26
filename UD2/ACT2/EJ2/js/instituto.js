
class Instituto {
    constructor(codigoInstituto , nombre, grupos = new Array() ){    
        this._codigoInstituto=codigoInstituto;
        this._nombre=nombre;
        this._grupos=grupos; 
    }
    get codigoInstituto(){
        return this._codigoInstituto;
    }

    set codigoInstituto(codigoInstituto){
        this._codigoInstituto=codigoInstituto;
    }

    get Nombre(){
        return this._nombre;
    }

    set Nombre(nombre){
        this._nombre=nombre;
    }

    get Grupos(){
        return this._grupos;
    }

    set Grupos(nombre){
        this._grupos=grupos;
    }

    NumeroAlumnos(){
        let resultado = 0;
       this._grupos.forEach(grupo => {
        resultado += grupo.NumeroAlumnos;
       });

       console.log("El numero de alumnos es " + resultado);
    }

    AnadirGrupo(grupo){
        this._grupos.push(grupo);
    }

}
