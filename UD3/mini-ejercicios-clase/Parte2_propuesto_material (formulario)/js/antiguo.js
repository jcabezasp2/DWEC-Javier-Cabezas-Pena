import Usuario from "./usuario.js";
import { MENSAJES } from "./mensajes.js";   
import GestorErrores from "./errores.js";
import { CODIGOS_ERROR } from "./errores.js"; 
let gestorErrores = new GestorErrores();
window.addEventListener("load",cargaPagina);

function cargaPagina(){
    let inputs = document.querySelectorAll("input[type=text]");
    inputs.forEach(a => {
        a.addEventListener("blur",salCampoTexto);
        a.addEventListener("click",borrarError);
    })
    document.querySelector("#email").addEventListener("blur", salEmail);
    document.querySelector("#nombre").addEventListener("blur", salNombre);
    document.querySelector("#password2").addEventListener("blur", salPassword2);

    document.querySelector("#enviar").addEventListener("click", validaFormulario);

}

function borrarError(event){
  let objetivo =document.querySelector("#error_" + event.target.id);
  objetivo.style.display = "none"
}

function salCampoTexto(event){
    event.target.value = event.target.value.toUpperCase();

}

function salPassword2(event){
    let valor = event.target.value;
    let valor2 = document.querySelector("#password").value;
    let campoError = document.querySelector("#error_password2");
    if(valor.length < 8){
       // campoError.style.display = "block";
       // campoError.innerHTML =  MENSAJES.corto;
       trataError(this.id, CODIGOS_ERROR.PASSWORD_CORTO);
    }else if(valor != valor2){
       // campoError.style.display = "block";
       // campoError.innerHTML = MENSAJES.NoCoincidencia;
       trataError(this.id, CODIGOS_ERROR.PASSWORD_DISTINTOS);
    }else{
        campoError.style.display = "none";
    }

}

function salNombre(){
    if(document.querySelector("#nombre").value == ""){
        trataError(this.id, CODIGOS_ERROR.NOMBRE_VACIO);
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

    let usuario = new Usuario(nombre, apellidos, fecha, dni, email, password, genero, suscribirme, imformarme, favorito, comentario) 

    console.log(usuario.toString());
 
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

function limpiaError(id){
    if(gestorErrores.existeError(id)){
        let campoError = document.querySelector("error_"+ id);
        gestorErrores.eliminaError(id);
        campoError.style.display = "none";
        campoError.innerHTML = "";
    }
}

function salEmail(){
    limpiaError(this.id);
    if(!this.checkValidity()){
        if(this.validity.typeMismatch){
            trataError(this.id, CODIGOS_ERROR.EMAIL_TIPO)
        }
    }
}

function trataError(idCampo, codigoError){
        if(!gestorErrores.existeError(idCampo)){
            gestorErrores.addError(idCampo);
            console.log(idCampo);
            let campoError = document.querySelector("#error_"+ idCampo);
            campoError.style.display = "block";
            switch(codigoError){
                case CODIGOS_ERROR.NOMBRE_VACIO:
                    campoError.innerHTML = MENSAJES.NombreNoVacio;
                    break;
                case CODIGOS_ERROR.PASSWORD_DISTINTOS:
                    campoError.innerHTML = MENSAJES.PasswordsDistinto;
                    break;
                case CODIGOS_ERROR.PASSWORD_CORTO:
                    campoError.innerHTML = MENSAJES.PasswordCorto;
            }
        }
}

