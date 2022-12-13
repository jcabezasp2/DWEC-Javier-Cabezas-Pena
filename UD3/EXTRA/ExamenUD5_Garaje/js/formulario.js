
    window.addEventListener('load', init);



    function init(){

        let garaje = new Garaje(6);
        document.querySelector('#guardar').addEventListener('click', guardar );
    }

    function guardar(){

        let marca = getMarca();
        let modelo = document.querySelector('#modelo').value;
        let matricula = document.querySelector('#matricula').value;
        let color = document.querySelector('#color').value;
        if(!/\w+/.test(modelo)){
            document.querySelector('#informacion').innerHTML = 'El campo Modelo es obligatorio';
            document.querySelector('#informacion').style.display = "block";
        }else if(!/\w+/.test(matricula)){
            document.querySelector('#informacion').innerHTML = 'El campo Matricula es obligatorio';
            document.querySelector('#informacion').style.display = "block";
        }

        console.log(marca);
        console.log(modelo);
        console.log(matricula);
        console.log(color);

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