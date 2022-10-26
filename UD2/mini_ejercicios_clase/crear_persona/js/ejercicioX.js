
crearPersona("Jordi", "Hurtado");

crearPersona("Jordi", "Hurtado", 123)

crearPersona("Jordi", "Hurtado", undefined, 222222, "jordi@tv.es")


function crearPersona(nombre, apellidos, edad = 0, ...contacto){

    console.log("El nombre es " + nombre);
    console.log("El apellido es " + apellidos);
    console.log("La edad es " + edad);
    if(contacto.length > 0) console.log("Las formas de contacto son ");

    contacto.forEach(a => 
        console.log(a)
    )


}