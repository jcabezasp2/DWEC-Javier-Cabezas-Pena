class ListaColores {

    constructor() {
        this._colores = [];
    }

    addColor(color){
       
        if(this._colores.indexOf(color) === -1){
            this._colores.push(color);
        }

    }

    getColor(posicion){
        return this._colores[posicion];
    }

    getNumeroColores(){
        return this._colores.length;
    }

    toHTML(){
        let resultado = "<h3>historial de colores</h3><ul>";

        this._colores.forEach((color) => {
            resultado += `<li>${color}</li>`;
        })

        resultado += "</ul>";

        return resultado;
    }
}