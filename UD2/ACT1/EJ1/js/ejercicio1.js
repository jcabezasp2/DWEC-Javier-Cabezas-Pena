

do{

    let texto = prompt("Introducir texto");

    if(texto.toUpperCase() == 'ESC'){
        break;
    }

    let arrayTexto = separaPalabras(texto, ' ');

    let resultado =  arrayTexto.map(giraPalabras);

    console.log(resultado.join(' '));


}while(true)



function separaPalabras(entrada, separador){
    
    return entrada.split(separador);

}


function giraPalabras(entrada){
    return entrada.split('')
    .reverse()
    .join('')
    
}