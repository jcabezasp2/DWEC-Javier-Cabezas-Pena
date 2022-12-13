export const mixer = (arr) => arr.sort(() => Math.random() - 0.5); 

export const getUnique = (arr) => [...new  Set(arr)];

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // Con unos pequeños cambios sirve para recoger cualquier input radio
  export function validaGenero(){
    let resultado;
    document.querySelectorAll("input[name=genero]").forEach(a =>{
        if(a.checked){
            resultado = a.value;
        }
    });

    return resultado;
}

