window.addEventListener('load', init);


function init() {
    let continente = document.querySelector('div');

    continente.appendChild(document.createElement('table'));
    crearTabla();


}


function crearTabla() {

    let resultado = document.querySelector('table');

    for(let i = 0; i < 5; i++) {
        resultado.insertRow(i);
        for(let j = 0; j < 3; j++) {
            let celda = document.createElement('td');
            celda.appendChild( document.createTextNode('Celda' + i + j));
            document.querySelector('tr:last-of-type').appendChild( celda);
        }
    }

}