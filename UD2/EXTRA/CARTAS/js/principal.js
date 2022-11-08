import Partida from "./Partida.js";
import Baraja from "./Baraja.js";
import Carta from "./Carta.js";




//let baraja = new Baraja();
//let carta1 = baraja.generaCarta();
//console.log(carta1.toString());
let partida = new Partida(4, 4);
//partida.Baraja.toTable();
//console.table(partida.Mazo);
mostrarTabla();
pedirCartas();



function mostrarTabla(){
    let codigoHTML="<table border=1>"
    for(let i = 0; i< partida._mazo.length; i++) {
        codigoHTML+= "<tr>"
        for(let j = 0; j < partida._mazo[i].length; j++){
            if(partida._mazo[i][j]==null)
                codigoHTML="<td></td>"
            else 
                codigoHTML += "<td><br>"+partida._mazo[i][j]+"<br></td>";
            }
            codigoHTML+="</tr>"
            }
            codigoHTML+="</table>"
        document.getElementById("mazo").innerHTML=codigoHTML;
    }

    function pedirCartas(){
        let carta1 = pedirUnaCarta();
        partida.voltea(carta1.substr(0, 1), carta1.substr(1, 1));
        let carta2 = pedirUnaCarta();
        partida.compruebaAcierto(carta2.substr(0, 1), carta2.substr(1, 1));
        partida.Baraja.toTable();
        if(partida.hafinalizado()){
            console.log("PARTIDA FINALIZADA!!");
        }else
        setTimeout(pedirCartas(), 5000);
    }


    function pedirUnaCarta(){
        while(true){
            let cartaElegida = prompt("¿Que carta quieres levantar?");
            let fila = cartaElegida.substr(0, 1);
            let columna = cartaElegida.substr(1, 1);
            //console.table(partida.Mazo);
            partida.mazoToConsole();
            if(partida.cartaExiste(fila, columna)){
                return cartaElegida;
            }
        }


    }