
class Grupo {
    constructor(codigoGrupo , numeroAlumnos){    
        this._codigoGrupo=codigoGrupo;
        this._numeroAlumnos=numeroAlumnos;
    }
    get codigoGrupo(){
        return this._codigoGrupo;
    }

    set codigoGrupo(codigoGrupo){
        this._codigoGrupo=codigoGrupo;
    }

    get NumeroAlumnos(){
        return this._numeroAlumnos;
    }

    set NumeroAlumnos(numeroAlumnos){
        this._numeroAlumnos=numeroAlumnos;
    }

}