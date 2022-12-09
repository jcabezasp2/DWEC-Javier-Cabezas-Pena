
window.addEventListener("load", init);

let listado = recuperarListado();
console.log(listado._colores);
let ultimoValido;
function init() {
    let color;
    if(getCookie("color") === null || getCookie("color") === "undefined"){
        color = new Color();
    }else{
        color = new Color(getCookie("color"));
        setCookie("color", "", -1);
    }


    cargarValores(color);
    //BOTONES
    document.querySelector("#hex-to-rgb").addEventListener("click", hexToRgb);
    document.querySelector("#rgb-to-hex").addEventListener("click", rgbToHex);


    // Cierre de la pagina
    window.addEventListener("unload", guardarUltimoValido);
    window.addEventListener("unload", guardarListado);
}

function hexToRgb() {
    let nuevoColor = "#" + document.querySelector("#hexadecimal").value;
    if(!Color.esHexadecimal(nuevoColor)){
        mostrarError("ERROR, No existe el valor hexadecimal: " + nuevoColor.substring(1));
        document.querySelector("#hexadecimal").focus();
    }else{
        let color = new Color(nuevoColor);
        listado.addColor(color.ValorHex);
        ultimoValido = color.ValorHex;
        cargarValores(color);
        borrarError();
    }

}

function rgbToHex() {
   
    let rojo = document.querySelector("#red").value;
    let verde = document.querySelector("#green").value;
    let azul = document.querySelector("#blue").value;

    if(!Color.esNumeroValido(rojo)){
        mostrarError("El campo R tiene un valor no valido (" + rojo + ")");
        document.querySelector("#red").focus();
    }else if(!Color.esNumeroValido(verde)){
        mostrarError("El campo G tien un valor no valido (" + verde + ")");
        document.querySelector("#green").focus();
    }else if(!Color.esNumeroValido(azul)){
        mostrarError("El campo B tiene un valor no valido (" + azul + ")");
        document.querySelector("#blue").focus();
    }else{
        let valores = [rojo,verde,azul]
        let color = new Color(valores);
        listado.addColor(color.ValorHex);
        ultimoValido = color.ValorHex;
        cargarValores(color);
        borrarError();
    }

}

function cargarValores(color){
    // HEXADECIMAL
    document.querySelector("#hexadecimal").value = color.ValorHex.substring(1);
    document.querySelector("#hexadecimal").focus();
    // COLORES
    document.querySelector("#red").value = color.getRojo();
    document.querySelector("#green").value = color.getVerde();
    document.querySelector("#blue").value = color.getAzul();

    // MUESTRA
    document.querySelector("#muestra").style.background = color.ValorHex;

    // LISTADO
    if(listado.getNumeroColores() > 0){
        document.querySelector("#listado").className = "visible";
        document.querySelector("#listado").innerHTML = listado.toHTML();
    }
    
}

function mostrarError(mensaje){

    document.querySelector("#errores").className = "visible";
    document.querySelector("#errores").innerHTML = mensaje;

}

function borrarError(){

    document.querySelector("#errores").className = "oculto";
}

function setCookie(nombre, valor, caduca) {
    let hoy= new Date();
    hoy.setTime(hoy.getTime()+caduca);
    let expiracion= "expires="+hoy.toUTCString();
    document.cookie= nombre+"="+valor+";"+expiracion+";path=/";
}

function getCookie(nomCookie) {
    let cook=document.cookie.split(";"); // pares de valores
    
    for(let i=0; i<cook.length; i++) { // revisamos todos los pares
        let n = cook[i].split("="); // separamos nombre/valor
        let nombre=n[0];
        let valor =n[1];
        if(nombre.trim()==nomCookie.trim()) // si es el buscado
        return valor;// devolvemos su valor
    }return null; // si no se encuentra = nulo
}

function guardarUltimoValido(){
    let color = ultimoValido;
    setCookie("color", color, 604800000);
}

function guardarListado(){
    localStorage.setItem("listado", JSON.stringify(listado));
}

function recuperarListado(){
    let lista = JSON.parse(localStorage.getItem("listado"));
    console.log(lista.length);
    if(lista.length > 0){
        console.log("A");
        return JSON.parse(localStorage.getItem("listado"));
    }else{
        console.log("B");
        return new ListaColores();
    }
}