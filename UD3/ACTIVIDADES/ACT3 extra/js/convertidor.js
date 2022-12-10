
window.addEventListener("load", init);

let listado = new ListaColores();

function init() {
    let color;
    if(localStorage.getItem("listado") !== null){
        recuperarListado();
        color = new Color(listado.getColor(listado.getNumeroColores() - 1));
    }else{
        color = new Color();
    }
    cargarValores(color);
    //BOTONES
    document.querySelector("#hex-to-rgb").addEventListener("click", hexToRgb);
    document.querySelector("#rgb-to-hex").addEventListener("click", rgbToHex);


    // Cierre de la pagina
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
        let valores = [+rojo,+verde,+azul]
        let color = new Color(valores);
        listado.addColor(color.ValorHex);
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


function guardarListado(){
    localStorage.setItem("listado", JSON.stringify(listado));
}

function recuperarListado(){

        let lista = JSON.parse(localStorage.getItem("listado"))._colores; 
        for(let i=0; i<lista.length; i++) {
        listado.addColor(lista[i]);
        }
}

