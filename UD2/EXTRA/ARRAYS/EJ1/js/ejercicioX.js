
let numerico = new Array();

for(let i = 0; i < 25; i++){
    numerico.push(i);
}

 numerico.sort((a, b) => {
    let max = 2;
    let parametro = Math.floor(Math.random() * max);

    if(parametro == 0){
        return a - b;
    }else{
        return b - a;
    }
})

console.log(numerico);



let personas = ['Jose Lopez', 'Agustin Gonzalez', 'Javier Bardem', 'Luis Tosar', 'Manuel Alexandre'];

personas.sort((a,b) => {

   return a.substring(a.indexOf(' ')).localeCompare(b.substring(b.indexOf(' '))) ;
 
})


console.log(personas);