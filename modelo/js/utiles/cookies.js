
export function getCookie(nomCookie) {
    let cook=document.cookie.split(";"); // pares de valores
    
    for(let i=0; i<cook.length; i++) { // revisamos todos los pares
        let n = cook[i].split("="); // separamos nombre/valor
        let nombre=n[0];
        let valor =n[1];
        if(nombre.trim()==nomCookie.trim()) // si es el buscado
        return valor;// devolvemos su valor
    }return null; // si no se encuentra = nulo
}

export function setCookie(nombre, valor, caduca) {
    console.log("Nombre" + nombre)
    let hoy= new Date();
    hoy.setTime(hoy.getTime()+caduca);
    let expiracion= "expires="+hoy.toUTCString();
    document.cookie= nombre+"="+valor+";"+expiracion+";path=/";
}