import Familia from "./familia.js";
import Padre from "./padre.js";
import Hijo from "./hijo.js";
import Miembro from "./miembro.js";

let miembro1 = new Miembro('Pepe', 'Gonzalez')
console.log(miembro1.Nombre + " " + miembro1.Apellidos)
miembro1.cenar();
let miembro2 = new Padre('Paco', 'Perez', 'Seat')
console.log(miembro2.Nombre + " " + miembro2.Apellidos + " " + miembro2.Coche)
miembro2.comer();

let miembro3 = new Hijo('Paco', 'Perez', 'Suzuki')
console.log(miembro3.Nombre + " " + miembro3.Apellidos + " " + miembro3.Moto)
miembro3.comer();


let familia = new Familia("Su casa", 1000);

familia.AnadirMiembro(miembro1);
familia.AnadirMiembro(miembro2);
familia.AnadirMiembro(miembro3);

familia.Miembros.forEach(element => {
    element.comer();
});
