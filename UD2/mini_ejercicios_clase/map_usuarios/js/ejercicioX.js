
let usuarios = new Map();
let eleccion;
do{

   eleccion = elegirAccion()

    switch(eleccion){
        case "1": crearUsuario(usuarios);
        break;
        case "2": borrarusuario(usuarios);
        break;
        case "3": mostrarUsuarios(usuarios);
    }



}while(eleccion != 4);



function elegirAccion(){

    let resultado = prompt("OPCIONES\n 1: Crear usuario\n 2: Eliminar usuario\n 3: Consultar usuarios\n 4: Finalizar");
    return resultado;
}

function crearUsuario(usuarios){
    let nombre
    do{
        nombre = prompt("Escribe el nombre de usuario");
        if(usuarios.has(nombre)){
            alert("El nombre ya existe");
        }
    }while(usuarios.has(nombre))

    
    let password = prompt("Escribe la contraseña");

    usuarios.set(nombre, password);
}

function borrarusuario(usuarios){
    let nombre = prompt("Escribe el nombre de usuario a borrar");
    usuarios.delete(nombre);
}

function mostrarUsuarios(usuarios){
    usuarios.forEach((values, keys) => {
        console.log(values, keys);
    });
}