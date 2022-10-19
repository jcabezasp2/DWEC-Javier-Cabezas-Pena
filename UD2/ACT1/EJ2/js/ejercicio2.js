const MIN = 0;
const MAX = 99999;
let cantidadAleatorios = pedirNumero();

let arrayAleatorios = generaNaleatorios(cantidadAleatorios, MIN, MAX);
let resultado = loteria(arrayAleatorios, MIN, MAX);

if(isNaN(resultado) ){
    console.log(resultado);
}else{
    console.log("Han sido necesarios " + resultado + " numeros aleatorios");
}


function generaAleatorio(min, max){
    //Max es excluyente por lo que es necesario sumarle 1 para que pueda salir el numero maximo
    return Math.floor(Math.random() * ((max + 1) - min) + min);
    
}



function generaNaleatorios(cantidad, min, max){

    let resultado = new Array();
    
    for(let i = 0; i < cantidad; i++){
        resultado[i] = generaAleatorio(min, max);
    }
    
    return resultado;

}

function loteria(arrayAleatorios, min, max){
    for(let i = 1; i<= max; i++){
        if(arrayAleatorios.includes(generaAleatorio(min, max))){
            return i;
        }
    }

    return "Se generaron " + max + " numeros y no coincidio ninguno";
}

function pedirNumero() {

    let resultado;

    do {

        resultado = prompt("Introduce el numero de decimos");

        if(resultado != parseInt(resultado)) {

            alert("Debe introducir un numero entero");

        }
        
        if(resultado <= 0){
            alert("Debe introducir un numero positivo");
        }

    } while (resultado != parseInt(resultado) || resultado <= 0)

    return resultado

}