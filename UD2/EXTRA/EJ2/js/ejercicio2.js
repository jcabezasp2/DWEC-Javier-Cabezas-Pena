const PAGINAS = [
    "https://devdocs.io",
    "https://www.elcomercio.es",
    "https://www.3djuegos.com",
    "https://www.xataka.com",
    "https://www.genbeta.com",
    "https://www.applesfera.com",
    "https://www.elchapuzasinformatico.com",
    "https://www.elmundotoday.es",
    "https://www.lavozdeasturias.es",
    "https://www.hardzone.es"
]

setTimeout(cambiarURL, 10000, PAGINAS)


function cambiarURL(url){
    let aleatorio = Math.floor(Math.random() * 10)
    location.assign(PAGINAS[aleatorio]);
}
