function init(){
				
    let enlaces = document.querySelectorAll("a").length;
    let parrafos = document.querySelectorAll("p").length;
    let imagenes = document.querySelectorAll("img").length;
    let narancos = contarNarancos(document.querySelectorAll("a"));
    let imagenesTercerParrafo = document.querySelectorAll("#parrafo3 > img").length;;
    let imagenesAltVacio = contarAltVacio(document.querySelectorAll("img"));

    console.log("El numero de enlaces es "+enlaces);
    console.log("El numero de parrafos es "+parrafos);
    console.log("El numero de imagenes es "+imagenes);
    console.log("El numero de enlaces que contienen Naranco es "+narancos);
    console.log("El numero de imagenes en el tercer parrafo es  "+imagenesTercerParrafo);
    console.log("El numero de imagenes con el atributo alt vacio es  "+imagenesAltVacio);
}

function contarNarancos(enlaces){

    let resultado = 0;

    enlaces.forEach(element => {

        let url = element.getAttribute('href');
        if(url.includes("naranco")){
            resultado++;
        }

    });

    return resultado;

}

function contarAltVacio(imagenes){

    let resultado = 0;

    imagenes.forEach(element => {

        let alt = element.getAttribute('alt');
        if(alt == ""){
            resultado++;
        }

    });

    return resultado;
}

init();
