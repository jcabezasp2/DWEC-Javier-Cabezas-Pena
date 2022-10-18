const MIN = 0;
const MAX = 99999;
console.prompt("Introduce el numero decimos");





//console.table(generaNaleatorios(10, 1, 5));





function generaAleatorio(min, max){
    return Math.floor(Math.random() * ((max + 1)- min) + min);
    
}



function generaNaleatorios(cantidad, min, max){

    let resultado = new Array();
    
    for(let i = 0; i < cantidad; i++){
        resultado[i] = generaAleatorio(min, max);
    }
    
    return resultado;

}