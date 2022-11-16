function init(){

    document.getElementById("formulario").addEventListener("click", mostrarEtiqueta, false );
    
}

function mostrarEtiqueta(event){

    let pulsado = event.target.tagName;
    alert(pulsado);
    event.target.style.background = "white";
    setTimeout(() =>{event.target.style.background = ""}, 2000);
}







init();

