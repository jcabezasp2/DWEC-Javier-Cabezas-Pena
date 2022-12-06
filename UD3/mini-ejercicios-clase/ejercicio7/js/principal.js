
window.addEventListener("load", init);

function init() {
    compruebaPrimeraVez();
    contador();

    document.querySelector("#incrementar").addEventListener("click", incrementar);
    document.querySelector("#decrementar").addEventListener("click", decrementar);
    document.querySelector("#logout").addEventListener("click", logout);
}


function compruebaPrimeraVez() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.length == 0) {
            let nombre = prompt("Nombre");
            localStorage.setItem("nombre", nombre)
            localStorage.setItem("visitas", 0);
            document.querySelector("#saludo").innerHTML = "¡Tu primera visita, " + nombre + "!";
        }else{
            let nombre = localStorage.getItem("nombre");
            document.querySelector("#saludo").innerHTML = "¡Bienvenido/a de nuevo, " + nombre + "!";
            incrementar();
        }
    }
}

function contador(){
    let visitas = localStorage.getItem("visitas");
    document.querySelector("#contador").innerHTML = "Contador: " + visitas;
}

function incrementar(){
    let visitas = localStorage.getItem("visitas");
    localStorage.setItem("visitas", +visitas + 1);
    contador()
}

function decrementar() {
    let visitas = localStorage.getItem("visitas");
    localStorage.setItem("visitas", +visitas - 1);
    contador()
}

function logout() {
    localStorage.clear();
    compruebaPrimeraVez();
    contador();
}