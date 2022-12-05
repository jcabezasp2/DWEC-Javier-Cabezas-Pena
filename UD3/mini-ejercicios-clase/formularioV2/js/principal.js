import Usuario from "./usuario.js";
import { MENSAJES } from "./mensajes.js";   
import GestorErrores from "./errores.js";
import { CODIGOS_ERROR } from "./errores.js"; 
let gestorErrores = new GestorErrores();

window.addEventListener("load", init);
function init(){
    
    // Pasar campos de texto a mayusculas
    let camposText = document.querySelectorAll("input[type=text]");
    for(let campo of camposText){
        campo.addEventListener("blur", aMayusculas);
        campo.addEventListener("blur", salRequerido); 
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
    let errores = document.querySelectorAll("input[type=text], input[type=password], input[type=date]");
    for(let error of errores){
      error.addEventListener("click", borrarError);
    }

    // Validar DNI
    document.querySelector("#dni").addEventListener("blur", salDNI);

    // Validar email
    document.querySelector("#email").addEventListener("blur", salEmail);

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
            case CODIGOS_ERROR.DNI_INVALIDO:
                campoError.innerHTML = MENSAJES.dniInvalido;
                break;
            case CODIGOS_ERROR.EMAIL_TIPO:
                campoError.innerHTML = MENSAJES.emailInvalido;
                break;
        }
    }
}

function validaFormulario(){

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
    if(gestorErrores.getNumeroErrores() > 0){
        console.log(gestorErrores.getNumeroErrores());
    }else{
        let usuario = new Usuario(nombre, apellidos, fecha, dni, email, password, genero, suscribirme, imformarme, favorito, comentario); 
        console.log(usuario.toString());
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

function salDNI(){
    let valor = document.querySelector("#dni");

    if(!validaDNI(valor.value)){
        trataError(valor.id, CODIGOS_ERROR.DNI_INVALIDO);
    }

}

function salEmail(){
    let valor = document.querySelector("#email");

    if(!valor.checkValidity()){
        trataError(valor.id, CODIGOS_ERROR.EMAIL_TIPO);
    }
}


function validaDNI(valor){

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    if( !(/^\d{8}[A-Z]$/.test(valor)))
    return false;
    if(valor.charAt(8) != letras[(valor.substring(0, 8))%23])
    return false;

    return true;
}