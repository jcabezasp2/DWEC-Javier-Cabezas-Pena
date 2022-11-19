function init(){
    window.addEventListener("resize", mostrar);
}


function mostrar(){
console.log("El tamaño de la ventana es" + window.innerWidth + "x" + window.innerHeight);
}



init();