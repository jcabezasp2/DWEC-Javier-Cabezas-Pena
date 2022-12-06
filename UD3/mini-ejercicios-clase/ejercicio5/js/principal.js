import Usuario from "./usuario.js";
import { MENSAJES } from "./mensajes.js";   
import GestorErrores from "./errores.js";
import { CODIGOS_ERROR } from "./errores.js"; 
let gestorErrores = new GestorErrores();

window.addEventListener("load", init);

function init(){

    // Comprobar si existe la cookie y crearla
    if(getCookie("contador") === undefined){
        setCookie("contador", 1, 365);
    }

    // comprobar datos localStorage
    comprobarDatosLocalStorage()

    // Pasar campos de texto a mayusculas
    let camposText = document.querySelectorAll("input[type=text]");
    for(let campo of camposText){
        campo.addEventListener("blur", aMayusculas);
    }   

    // Comprobar que el campo no este vacio
    let requeridos = document.querySelectorAll("[required]");
    for(let requerido of requeridos){
        requerido.addEventListener("blur", salRequerido);
    }

    // Comprobar que las contraseñas sean mayores a 8 y coincidan
    document.querySelector("#password").addEventListener("blur", salPassword);
    document.querySelector("#password2").addEventListener("blur", salPassword2);

    // Borrar errores
    let errores = document.querySelectorAll("input[type=text], input[type=password], input[type=date], input[type=email]");
    for(let error of errores){
      error.addEventListener("focus", borrarError);
    }

    //Comprobar DNI
    document.querySelector("#dni").addEventListener("blur", salDNI);
    
    // Comprobar el email
    document.querySelector("input[type=email]").addEventListener("blur", salEmail);
        

    // Enviar
    document.querySelector("#enviar").addEventListener("click", validaFormulario);
}

function aMayusculas(event){
    let campo = event.target;
    campo.value = campo.value.toUpperCase();
}

function salRequerido(event){
    if(event.target.value == ""){
        trataError(event.target.id, CODIGOS_ERROR.NOMBRE_VACIO)
    }

}

function borrarError(event){
        gestorErrores.eliminaError(event.target.id);   
        let campoError = document.querySelector("#error_" + event.target.id);
        campoError.style.display = "none";

}

function salPassword(event){
    let valor = event.target.value;
    if(valor.length < 8){
        trataError(event.target.id, CODIGOS_ERROR.PASSWORD_CORTO);
    }
}

function salPassword2(){
    let password1 = document.querySelector("#password");
    let password2 = document.querySelector("#password2");
    if(password1.value != password2.value){
        trataError(password2.id, CODIGOS_ERROR.PASSWORDS_DISTINTOS);
    }
}

function salDNI(){
    let dni = document.querySelector("#dni");
    console.log(dni.value);

    if(!DNIValido(dni.value)){
        trataError(dni.id, CODIGOS_ERROR.DNI_NO_VALIDO);   
    }

}

function salEmail(){
    let email = document.querySelector("#email");
    if(!email.checkValidity()){
        trataError(email.id, CODIGOS_ERROR.EMAIL_NO_VALIDO);
    }
    
}

function trataError(idCampo, codigoError){
    if(!gestorErrores.existeError(idCampo)){
        gestorErrores.addError(idCampo);
        let campoError = document.querySelector("#error_"+ idCampo);
        campoError.style.display = "block";
        switch(codigoError){
            case CODIGOS_ERROR.NOMBRE_VACIO:
                campoError.innerHTML = MENSAJES.noVacio;
                break;
            case CODIGOS_ERROR.PASSWORDS_DISTINTOS:
                campoError.innerHTML = MENSAJES.passwordsDistinto;
                break;
            case CODIGOS_ERROR.PASSWORD_CORTO:
                campoError.innerHTML = MENSAJES.passwordCorto;
                break;
            case CODIGOS_ERROR.DNI_NO_VALIDO:
                campoError.innerHTML = MENSAJES.dniNoValido;
                break;
            case CODIGOS_ERROR.EMAIL_NO_VALIDO:
                campoError.innerHTML = MENSAJES.emailNoValido;
                break;
        }
    }
}

function validaFormulario(){
   
    comprobarFormulario();

    if(gestorErrores.getNumeroErrores() > 0){
        console.log(gestorErrores.getNumeroErrores());
        actualizarContador();
    }else{
        let nombre = document.querySelector("#nombre").value;
        let apellidos = document.querySelector("#apellidos").value;
        let fecha = document.querySelector("#fecha_nacimiento").value;
        let dni = document.querySelector("#dni").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let genero = validaGenero();
        let suscribirme = document.querySelector("#boletin").checked? true: false;
        let imformarme = document.querySelector("#ofertas").checked? true: false;
        let favorito = document.querySelector("#favorito").value;
        let comentario = document.querySelector("#comentario").value;
        let usuario = new Usuario(nombre, apellidos, fecha, dni, email, password, genero, suscribirme, imformarme, favorito, comentario); 
        console.log(usuario.toString());
        guardarEnLocalStorage(nombre, apellidos, fecha, dni, email, password, genero, suscribirme, imformarme, favorito, comentario);
    }
    


 
}

function validaGenero(){
    let resultado;
    document.querySelectorAll("input[name=genero]").forEach(a =>{
        if(a.checked){
            resultado = a.value;
        }
    });

    return resultado;
}

function DNIValido(valor){

    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if( !(/^\d{8}[A-Z]$/.test(valor))){
        return false;
    }

    if(valor.charAt(8) != letras[(valor.substring(0, 8))%23]){
        return false;
    }

    return true;

}

function comprobarFormulario(){
    document.querySelectorAll("[required]").forEach(a => {
        if(!a.checkValidity()){
            trataError(a.id, CODIGOS_ERROR.NOMBRE_VACIO);
        }
    });

}


function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function actualizarContador(){
        let intentos = getCookie("contador");

        if(intentos < 5){
            setCookie("contador", (+intentos + 1), 365);
            document.querySelector("#contador").innerHTML = "Este es el intento " + intentos;
        }else{
            document.querySelector("#enviar").disable = true;
            document.querySelector("#contador").innerHTML = "Agotado el numero de intentos";
        }
           
}

function guardarEnLocalStorage(nombre, apellidos, fecha, dni, email, password, genero, suscribirme, imformarme, favorito, comentario){

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellidos", apellidos);
    localStorage.setItem("fecha", fecha);
    localStorage.setItem("dni", dni);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("genero", genero);
    localStorage.setItem("suscribirme", suscribirme);
    localStorage.setItem("imformarme", imformarme);
    localStorage.setItem("favorito", favorito);
    localStorage.setItem("comentario", comentario);
}

function comprobarDatosLocalStorage(){
    if(localStorage.length != 0){
        let nombre = localStorage.getItem("nombre");
        document.querySelector("#nombre").value = nombre;
        let apellidos = localStorage.getItem("apellidos");
        document.querySelector("#apellidos").value = apellidos;
        let fecha = localStorage.getItem("fecha");
        document.querySelector("#fecha_nacimiento").value = fecha;
        let dni = localStorage.getItem("dni");
        document.querySelector("#dni").value = dni;
        let email = localStorage.getItem("email");
        document.querySelector("#email").value = email;
        let password = localStorage.getItem("password");
        document.querySelector("#password").value = password;
        document.querySelector("#password2").value = password;
        let genero = localStorage.getItem("genero").toLowerCase();
        document.querySelector("#genero_"+genero).checked = true;
        let suscribirme = localStorage.getItem("suscribirme");
        if(suscribirme == "true"){
            document.querySelector("#boletin").checked = true
        }
        let imformarme = localStorage.getItem("imformarme");
        if(imformarme == "true"){
            document.querySelector("#ofertas").checked = true;
        }
        let favorito = localStorage.getItem("favorito");
        document.querySelector("#favorito").value = favorito;
        let comentario = localStorage.getItem("comentario");
        document.querySelector("#comentario").value = comentario;
    }
}