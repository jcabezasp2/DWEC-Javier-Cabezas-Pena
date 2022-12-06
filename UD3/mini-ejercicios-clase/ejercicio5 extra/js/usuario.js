export default class Usuario{

    constructor(nombre, apellidos, fecha, dni, email, contrasena, genero, suscribirme, imformarme, favorito, comentario){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._fecha = fecha;
        this._dni = dni;
        this._email = email;
        this._contrasena  = contrasena;
        this._genero = genero;
        this._suscribirme = suscribirme;
        this._imformarme = imformarme;
        this._favorito = favorito;
        this._comentario = comentario;
    }

    get Nombre(){
        return this._nombre;
    }

    get Apellidos(){
        return this._apellidos;
    }

    get Fecha(){
        return this._fecha;
    }

    get Dni(){
        return this._dni;
    }

    get Email(){
            return this._email;
    }

    get Contrasena(){
            return this._contrasena;
    }

    get Genero(){
            return this._genero;
    }

    get Suscribirme(){
            return this._suscribirme;
    }

    get Imformarme(){
                return this._imformarme;
    }

    get Favorito(){
        return this._favorito;
    }

    get Comentario(){
            return this._comentario;
        }
    
    toString(){
        return "nombre: " + this._nombre + "\napellidos: " + this._apellidos + "\nfecha: " + this._fecha + "\ndni: " + this._dni + "\nemail: " + this._email + "\ncontraseña: " + this._contrasena + "\ngenero: " + this._genero + "\nsuscribirme: " + this._suscribirme + "\ninformarme: " + this._imformarme + "\nfavorito: " + this._favorito + "\ncomentario: " + this._comentario;
    }
    
}