
export function DNIValido(valor){

    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if( !(/^\d{8}[A-Z]$/.test(valor))){
        return false;
    }

    if(valor.charAt(8) != letras[(valor.substring(0, 8))%23]){
        return false;
    }

    return true;

}