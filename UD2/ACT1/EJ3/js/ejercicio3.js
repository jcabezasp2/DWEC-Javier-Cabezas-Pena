
const EQUIPOS = ['Alaves', 'Atl.Madrid', 'Villareal', 'Barcelona', 'Real Madrid', 'Getafe', 'Espanyol', 'Malaga', 'Sevilla', 'Levante', 'Valencia', 'Betis', 'Celta', 'Atl.Bilbao', 'Real Sociedad', 'Rayo Vallecano', 'Osasuna', 'Mallorca', 'Cadiz', 'Granada'];


quinielas(EQUIPOS);


function generaSimbolo(){
    const SIMBOLO = {"0": "1", "1": "X", "2": "2"};
    let min = 0;
    let max = 2
    
    return SIMBOLO[Math.floor(Math.random() * ((max + 1) - min) + min)];
}


function muestraEquipos(equipos){
    document.write("<table style='border: 1px solid black'>");
    for(let i = 0; i < equipos.length; i++){
        document.write("<tr style='border: 1px solid black'><td>Equipo "+ (i+1) +":</td><td>"+  equipos[i] +"</td></tr>");
    }
    document.write("</table>");
}



function generaResultados(quinielas){

    for(let i = 0; i < quinielas.length; i++){
        for(let x = 0; x < quinielas[i].length; x++){
            if(i == x){
                quinielas[i][x] = '-'
            }else{
                quinielas[i][x] = generaSimbolo();
            }
            
        }
    }
}


function quinielas(equipos){
    let quinielas = new Array(equipos.length);

    for(let i = 0; i < equipos.length; i++){
        quinielas[i] = new Array(equipos.length);
    }

    generaResultados(quinielas);   
    muestraEquipos(equipos);
    console.table(quinielas);
}