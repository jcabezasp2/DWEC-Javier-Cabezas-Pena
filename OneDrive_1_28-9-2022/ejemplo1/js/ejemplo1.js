/**
 * DWEC: Ejemplo 1. Encontrar los errores del script
 * @author Maria R. F.
 * 
 * Realiza un script que se encargue de leer 10 nombres por pantalla y los inserte en un array. 
 * Posteriormente, los nombres se mostrarán una unica ventana emergente
 */

/* Encontrar los errores que tiene el siguiente script, usando las herramientas de depuración de Google Chrome */

var nombres=[];

var NUMERO_NOMBRES=10;




for (var i=0;i<NUMERO_NOMBRES-1;i++){
	nombres[i]= prompt("Introduce un nombre");
} 


 for (var i=0;i<NUMERO_NOMBRES;i++){
	//CADENA_NOMBRES=CADENA_NOMBRES+ nombres[i] + " ";
	alert(nombres[i]);
} 
 
 

