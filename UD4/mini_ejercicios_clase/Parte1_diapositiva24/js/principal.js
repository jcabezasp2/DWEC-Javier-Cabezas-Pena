window.addEventListener('load' , init);
let primera = true
let lista = []
let listado
function init() {

    document.querySelector("#add").addEventListener('click', anadir);
    document.querySelector("#rem").addEventListener('click', borrar);


}

function anadir(e) {

    let texto = document.querySelector('input[type=text').value;
    lista.push(texto)
   
    listar();
}

function borrar(e) {
    let texto = document.querySelector('input[type=text').value;
    lista = lista.filter(x => x!== texto);
    listar();
}

function listar(){
    if(!primera){
        listado = document.querySelector("ul");
        document.querySelector("body").removeChild(listado);
    }
        listado = document.createElement('ul');
        document.querySelector("body").appendChild(listado);
        if(primera){
            primera = false;
        }



    if(lista.length > 0){
        for (let i = 0; i < lista.length; i++) {
            let insertado = document.querySelectorAll("li");
            let item = lista[i];
            let li = document.createElement('li');
            let texto = document.createTextNode(item);
            li.appendChild(texto);
            listado.appendChild(li);

        }

    }
}