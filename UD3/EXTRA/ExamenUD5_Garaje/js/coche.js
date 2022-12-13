
class Coche{
constructor(modelo,marca,matricula,color){	
	//defino atributos privados
	this._modelo=modelo;
	this._marca=marca;
	this._matricula=matricula;
	this._color=color;	
}
	
	//defino set y get atributo privado modelo: no compruebo formato pues lo hare en formulario.js mediante patron
	set Modelo(modelo){
		this._modelo=modelo;
	}
	
	get Modelo(){
		return this._modelo;
	}
	
	//defino set y get atributo privado marca
	set Marca(marca){	
	  //OJO mirar como estan escritos los values del los radios en el form (mayusc, minusculas)
     if((marca.toLowerCase()=="seat")||(marca.toLowerCase()=="renault")||(marca.toLowerCase()=="citroen")){   
         this._marca=marca;   
     }else{       
         this._marca="no permitido";    
     }	
	}	
	
	get Marca(){
		return this._marca;
	}
		
	//defino set y get atributo privado matricula: no compruebo formato pues lo hare en formulario.js mediante patron
	set Matricula(matricula){
		this._matricula=matricula;
	}
	
	get Matricula(){
		return this._matricula;
	}

	//defino set y get atributo privado color
	set Color(color){ 
	 //OJO mirar como estan escritos los values de los option del select en el form (mayusc, minusculas)
     if((color.toLowerCase()=="rosa")||(color.toLowerCase()=="amarillo")||(color.toLowerCase()=="verde")||(color.toLowerCase()=="blanco")||(color.toLowerCase()=="gris")){    
         this._color=color; 
     }else{      
         this._color="no permitido";      
     }
	}
	
	get Color(){
		return this._color;
	}	

    //metodo toString	
	toString(){
	  var cadena="";
	  cadena+=this.getModelo();           
	  cadena+=" "+this.getMarca();          
	  cadena+=" "+this.getMatricula();               
	  cadena+=" "+this.getColor();
	  return cadena;
	}

    //metodo toHTML	como el string pero entre obj pega salto de linea
	toHTML(){
	  var cadena="";
	  cadena+=this.Modelo;           
	  cadena+="-"+this.Marca;          
	  cadena+="-"+this.Matricula;               
	  cadena+="-"+this.Color;
	  cadena+="";
	  return cadena;
	}
}
	
	
