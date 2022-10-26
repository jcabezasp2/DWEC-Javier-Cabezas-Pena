

function separaNumeros(...parametros){
    let enteros = new Array();
    parametros.forEach((a) => {
        if(Number.isInteger(a)){
            enteros.push(a);
        }
    })

    let recibio = "He recibido un total de  " + parametros.length + " parametros. ";
    let eranEnteros = "De ellos " + enteros.length + " fueron enteros<br>";
    document.write(recibio);
    document.write(eranEnteros);

    return enteros;
    
}



console.log(separaNumeros("Hola"));
console.log(separaNumeros("Hola", "Adios"));
console.log(separaNumeros("Hola", "Adios", 123));
console.log(separaNumeros("Hola", "Adios", undefined, 222222, new Date()));
