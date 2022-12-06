const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre','Noviembre', 'Diciembre'];
let fecha = new Date();
let anio = fecha.getFullYear();
let mes =meses[fecha.getMonth()];
let dia = fecha.getDate();


document.getElementById('calendario').innerHTML = "<div id='anio'>"+ anio+"</div><div id='mes'>"+mes+"</div><div id='dia'>"+dia+"</div>";
