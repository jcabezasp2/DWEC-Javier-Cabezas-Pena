
let array = [100, 23, 23, 23, 23, 67, 45];


//let outputArray = [...new Set(array)];

// console.log(outputArray);

let outputArray =[];

 for(let elemento of array){

    if(!outputArray.includes(elemento)){
        outputArray.push(elemento);
    }
 }

 console.log(outputArray);