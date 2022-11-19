import Partida from "./partida.js";
let partida = new Partida(4, 3);  
window.addEventListener("load",init );



function init(){
    mostrarTabla();
    pedirCartas();
    console.table(partida);
}

function mostrarTabla(){
    var codigoHTML="<table border=1>"
    for(var i= 0; i< partida._mazo.length; i++) {
        codigoHTML+="<tr>"
        for(var j=0; j<partida._mazo[i].length; j++){
            if(partida._mazo[i][j] == null)
                codigoHTML="<td></td>"
            else codigoHTML+="<td><br>" + partida._mazo[i][j]+"<br></td>";
        }
        codigoHTML+="</tr>"
    }
    codigoHTML+="</table>"
    document.getElementById("mazo").innerHTML=codigoHTML;
}

function pedirCartas(){
    let carta1 = prompt("Carta 1");
    partida.voltea(carta1.substring(0,1),carta1.substring(3 -1));
    let carta2 = prompt("Carta 2");
    partida.compruebaAcierto(carta2.substring(0,1),carta2.substring(3 -1));
    if(partida.haFinalizado()){
        console.log("PARTIDA FINALIZADA!!");
    }else
        setTimeout(pedirCartas(), 5000);
}


function elegirCartas(){
    // TODO: implement
}
