import Usuario from "./usuario.js";
import { MENSAJES } from "./mensajes.js";   

window.addEventListener("load",cargaPagina);

function cargaPagina(){
    let inputs = document.querySelectorAll("input[type=text]");
    inputs.forEach(a => {
        a.addEventListener("blur",salCampoTexto);
    })

    document.querySelector("#password2").addEventListener("blur", salPassword2);

    document.querySelector("#enviar").addEventListener("click", validaFormulario);

}


function salCampoTexto(event){
    event.target.value = event.target.value.toUpperCase();
}

function salPassword2(event){
    let valor = event.target.value;
    let valor2 = document.querySelector("#password").value;
    let campoError = document.querySelector("#error_password2");
    if(valor.length < 8){
        campoError.style.display = "block";
        campoError.innerHTML =  MENSAJES.corto;
    }else if(valor != valor2){
        campoError.style.display = "block";
        campoError.innerHTML = MENSAJES.NoCoincidencia;
    }else{
        campoError.style.display = "none";
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

