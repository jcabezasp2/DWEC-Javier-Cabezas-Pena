
let central = new CentralMedidas();
console.log(central.insertaAleatorio("Santander")) ;
central.insertaAleatorio("Oviedo");
central.insertaAleatorio("Madrid");
central.insertaAleatorio("Madrid");
central.toConsole();
console.log(central.mediaMedidas("Oviedo"));
console.log(central.mediaMedidasTotal());
central.eliminaCiudad("Oviedo");
central.toConsole();
