function formateaHora(fecha){

let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();


return  (horas <10?"0":'')+ horas+":"+(minutos <10?"0":'')+minutos+":"+(segundos <10?"0":'')+segundos;

}


function actualizarRelojes(){

    let fechaActual = new Date();
    const FECHA_VACACIONES = new Date("2023-06-27");
    document.getElementById("divReloj").innerHTML= formateaHora(fechaActual);
    document.getElementById("divVacaciones").innerHTML= tiempoVacaciones(FECHA_VACACIONES);
}

function tiempoVacaciones(fechaFin){
    const MILISEGUNDOS_EN_UN_SEGUNDO = 1000;
    const SEGUNDOS_EN_UN_DIA = 86400;
    const SEGUNDOS_EN_UNA_HORA = 3600;
    const SEGUNDOS_EN_UN_MINUTO = 60;

    let fechaActual = new Date();
    let diferencia = fechaFin.getTime() - fechaActual.getTime();
    let segundosRestantes = Math.round(diferencia / MILISEGUNDOS_EN_UN_SEGUNDO);

    let dias = Math.trunc(segundosRestantes / SEGUNDOS_EN_UN_DIA); 
    segundosRestantes %= SEGUNDOS_EN_UN_DIA;

    let horas = Math.trunc(segundosRestantes / SEGUNDOS_EN_UNA_HORA);
    segundosRestantes %= SEGUNDOS_EN_UNA_HORA;

    let minutos = Math.trunc(segundosRestantes / SEGUNDOS_EN_UN_MINUTO);
    segundosRestantes %= SEGUNDOS_EN_UN_MINUTO;

    return dias + " dias, " + horas + " horas, " + minutos + " minutos y " + segundosRestantes + " segundos";
}


function principal(){
    actualizarRelojes();
    setInterval(actualizarRelojes, 1000);  
}


