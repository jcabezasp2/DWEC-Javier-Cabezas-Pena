class Color{
    constructor(valor='#ffffff'){
        if (typeof(valor) == 'string'){
            this._valorHex = valor;
            this._valorRGB = this._hex2RGB(this._valorHex);
        }
        if (Array.isArray(valor)){
            this._valorRGB = valor;
            this._valorHex = this._RGB2Hex(this._valorRGB);   
        } 
}

set ValorRGB(rgb){
    this._valorRGB = [rgb[0], rgb[1], rgb[2]];
    this._valorHex = this._RGB2Hex(this._valorRGB);    
}

set ValorHex (hex){    
    this._valorHex = hex;
    this._valorRGB = this._hex2RGB(this._valorHex);
}

get ValorHex(){
    return this._valorHex;
}
getRojo (){
    return this._valorRGB[0];
}

getVerde (){
    return this._valorRGB[1];
}

getAzul (){
    return this._valorRGB[2];
}

_RGB2Hex (rgb){
    let cadenaHex='#';
    
    let rojo= rgb[0].toString(16);
    cadenaHex+= rojo.length == 1 ? "0" + rojo : rojo;

    let verde= rgb[1].toString(16);
    cadenaHex+= verde.length == 1 ? "0" + verde : verde;

    let azul= rgb[2].toString(16);
    cadenaHex+= azul.length == 1 ? "0" + azul : azul;
    
    return cadenaHex;

   /* Otra forma:
    return '#' + ((1 << 24) + (parseInt(rgb[0]) << 16) + (parseInt(rgb[1]) << 8) + parseInt(rgb[2])).toString(16).slice(1);
    */
}

_hex2RGB (hex){
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}

static esHexadecimal(cadena){    
    return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/.test(cadena);    
}
static esNumeroValido(numero){    
    return (!isNaN(numero) && numero >= 0 && numero <= 255);
}

}

