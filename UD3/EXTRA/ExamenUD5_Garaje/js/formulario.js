    
    window.addEventListener('load', init);

    let garaje = new Garaje(6);
    function init(){


        document.querySelector('#guardar').addEventListener('click', guardar );
        document.querySelector('#eliminar').addEventListener('click', eliminar );

        listarCoches();
        
    }

    function guardar(){

        let marca = getMarca();
        let modelo = document.querySelector('#modelo').value;
        let matricula = document.querySelector('#matricula').value;
        let color = document.querySelector('#color').value;
        console.log(color);
        if(!/\w+/.test(modelo)){
            document.querySelector('#informacion').innerHTML = 'El campo Modelo es obligatorio';
            document.querySelector('#informacion').style.display = "block";
        }else if(!/^\d{4}\s?[a-zA-Z]{3}$/.test(matricula)){
            document.querySelector('#informacion').innerHTML = 'La matricula '+ matricula + ' tiene un formato no valido';
            document.querySelector('#informacion').style.display = "block";
            document.querySelector('#matricula').focus();
        }else if(color == "none"){
            document.querySelector('#informacion').innerHTML = 'El campo color es obligatorio';
            document.querySelector('#informacion').style.display = "block";
        }else if(garaje.existeCoche(matricula)){
            document.querySelector('#informacion').innerHTML = 'La matricula '+ matricula + ' ya existe en el garaje';
            document.querySelector('#informacion').style.display = "block";
            document.querySelector('#matricula').focus();
        }else if(garaje.NumeroCoches == 6){
            document.querySelector('#informacion').innerHTML = 'No se pueden insertar mas coches se ha alcanzado la capacidad maxima';
            document.querySelector('#informacion').style.display = "block";
            document.querySelector('#matricula').focus();
        }else{
            garaje.addCoche(marca, modelo, matricula, color);
            document.querySelector('#informacion').style.display = "block";
            document.querySelector('#informacion').innerHTML = 'Coche creado';
            listarCoches();
        }    


    }

    function eliminar(){
    
        let matricula = document.querySelector('#matricula').value;

        if(!/^\d{4}\s?[a-zA-Z]{3}$/.test(matricula)){
            document.querySelector('#informacion').innerHTML = 'La matricula '+ matricula + ' tiene un formato no valido';
            document.querySelector('#informacion').style.display = "block";
            document.querySelector('#matricula').focus();
        }else if(!garaje.existeCoche(matricula)){
            document.querySelector('#informacion').innerHTML = 'La matricula '+ matricula +'no existe en el garaje';
            document.querySelector('#informacion').style.display = "block";
        }else{
            garaje.eliminaCoche(matricula);
            document.querySelector('#informacion').innerHTML = 'Coche borrado';
            document.querySelector('#informacion').style.display = "block";
            listarCoches();
        }
    }

    function getMarca(){
        let opciones = document.querySelectorAll('input[name="marca"]');
        let seleccionado;

        for(let i = 0; i < opciones.length; i++){
            if(opciones[i].checked){
                seleccionado = opciones[i].value;
                break;
            }
        }
        return seleccionado;
    }

    function listarCoches(){
        if(garaje.NumeroCoches > 0){
            document.querySelector('#listado').innerHTML = garaje.toString();
        }else{
            document.querySelector('#listado').innerHTML = '<p>No hay coches en el garaje </p>';
        }
    }