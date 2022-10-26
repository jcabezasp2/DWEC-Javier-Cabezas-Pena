function formateaHora(fecha){

let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

return  (horas <10?"0":'')+ horas+":"+(minutos <10?"0":'')+minutos+":"+(segundos <10?"0":'')+segundos;

}


function actualizarReloj(){

    let fechaActual = new Date();

    document.getElementById("divReloj").innerHTML= formateaHora(fechaActual);

}


function principal(){
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
}


