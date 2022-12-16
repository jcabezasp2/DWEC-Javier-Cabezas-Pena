window.addEventListener('load' , init);


function init() {

alert("Iniciando cambios");


let nuevoElemento = document.createElement('p');
let texto = document.createTextNode("Contenido parrafo");
nuevoElemento.appendChild(texto);
document.querySelector("body").appendChild(nuevoElemento);
let enlace = document.querySelector("#borrar");
document.querySelector("div").removeChild(enlace);
let nuevoTexto = document.createTextNode("Javi");
let parrafo = document.querySelector("div > p");
document.querySelector("div").replaceChild(nuevoTexto ,parrafo);
let fecha = document.createTextNode(new Date().toLocaleDateString());
document.querySelector("body").insertBefore(fecha, document.querySelector("div"));
}