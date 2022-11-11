import Autobus from './autobus.js'
import Billete from './billete.js'
import Flota from './flota.js'

var flota=new Flota();

if (flota.addAutobus(new Autobus("5534-GRF","Oviedo","Gijón",new Date("12-11-2017"),20,6)))
    console.log("Se ha insertado el autobús 5534-GRF");
else
    console.log("No se ha podido insertar el autobús 5534-GRF");

if (flota.addAutobus(new Autobus("4423-GRF","Candás","Luanco",new Date("12-10-2017"),10,6)))
    console.log("Se ha insertado el autobús 4423-GRF");
else
    console.log("No se ha podido insertar el autobús 4423-GRF");

if (flota.addAutobus(new Autobus("4423-GRF","Candás","Luanco",new Date("12-10-2017"),10,6)))
    console.log("No ha insertado el autobús 4423-GRF (repetido)");
else
    console.log("No se ha podido insertar el autobús 4423-GRF (repetido)");

if (flota.addAutobus(new Autobus("1111-GRF","Avilés","Oviedo",new Date("12-11-2017"),15,8)))
    console.log("Se ha insertado el autobús 1111-GRF");
else
    console.log("No se ha podido insertar el autobús 1111-GRF");
    flota.getAutobus("Candás","Luanco");
    
console.log("RECUENTO TOTAL FLOTA: --------------------");
    for (let [matricula, autobus] of flota.Autobuses) {
        console.log("  "+matricula+". De "+autobus.Origen+" a "+autobus.Destino);
        
    }

function pedirBillete(){
    do{
        var origen=prompt ("¿Origen del viaje? [ESC] para salir");
        if (origen=="ESC"||origen=="esc") return;
        var destino=prompt ("¿Destino?");
        
        let autobus=flota.getAutobus(origen, destino);
        console.table(autobus.Plazas);
        if (autobus!=null){
            console.log ("Autobús "+origen+"-"+destino+":"+autobus.Matricula);
            let precio=autobus.generaPrecio()
            let localizador=autobus.generaLocalizador()
            console.log("Precio "+precio+"Localizador"+localizador);
            let billete=new Billete("Manolito Fernández", "123456789P", precio , localizador, true);
            autobus.reservaPlaza(billete);
            //console.log("Se ha asignado la plaza "+autobus.getPlaza(localizador).toString());
            console.table(autobus.Plazas);
        }
        else{
            console.log("No existe autobús "+origen+"-"+destino);
        }
        }while (origen!="ESC"&& origen!="esc");
        
}

pedirBillete();


