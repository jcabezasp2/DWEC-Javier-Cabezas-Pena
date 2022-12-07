var miColor1 = new Color('#0033ff');
console.log(miColor1.ValorHex); //#0033ff
console.log(miColor1.getRojo()); //0
console.log(miColor1.getVerde()); //51
console.log(miColor1.getAzul()); //255

miColor1.ValorHex='#ff0000';
console.log(miColor1.ValorHex); //#ff0000
console.log(miColor1.getRojo()); //255
console.log(miColor1.getVerde()); //0
console.log(miColor1.getAzul()); //0

var miColor2 = new Color([0, 51, 255]);
console.log(miColor2.ValorHex); //#0033ff
console.log(miColor2.getRojo()); //0
console.log(miColor2.getVerde()); //51
console.log(miColor2.getAzul()); //255

miColor2.ValorRGB=[255, 0, 0];
console.log(miColor2.ValorHex); //#ff0000
console.log(miColor2.getRojo()); //255
console.log(miColor2.getVerde()); //0
console.log(miColor2.getAzul()); //0

console.log(Color.esHexadecimal("#fdddca"));