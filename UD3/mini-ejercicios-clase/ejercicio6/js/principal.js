
window.addEventListener("load", init);

function init() {

    document.querySelector("#verTodas").addEventListener("click", verCookies);
    document.querySelector("#crearCookie").addEventListener("click", crearModifCookie);
    document.querySelector("#modificarCookie").addEventListener("click", crearModifCookie);
    document.querySelector("#leerCookie").addEventListener("click", leerCookie);
    document.querySelector("#borrarCookie").addEventListener("click", borrarCookie);


}

function verCookies() {
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for(let cookie of cookies){
        console.log(cookie);
    }
    
}

function crearModifCookie() {
    let nombre = prompt("Nombre de la cookie");
    let valor = prompt("Valor de la cookie");
    let dias = prompt("Dias de la cookie");
    setCookie(nombre, valor, dias);
    verCookies();
}


function leerCookie() {
    let nombre = prompt("Nombre de la cookie");
    let cookie = getCookie(nombre) || "Cookie no encontrada"; 
    console.log(cookie);
}

function borrarCookie() {
    let nombre = prompt("Nombre de la cookie");
    deleteCookie(nombre);
    verCookies();
}

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function deleteCookie(nombre){
    let date = new Date();
    const expires = "expires="+ date.toUTCString();
    document.cookie = nombre + "=" + "" + "; " + expires + "; path=/";
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}