
/* Fichero errores. js
 * Autor: Maria R.F.
 * 
 * En este fichero definimos varios elementos que nos van a facilitar la 
 * gestión de errores
 */

/* La siguiente variable simula una clase estática con constantes, 
 * que nos permiten definir los tipos de error que tiene nuestra aplicación
 * 
 * Esto facilita el tratamiento de los mismos y evita errores de sintaxis,
 * al manejar siempre un código bien definido (y no se establecen de manera 
 * arbitraria en el código
 */
export var CODIGOS_ERROR={
    NOMBRE_VACIO:1,
    PASSWORD_CORTO:2,
    PASSWORDS_DISTINTOS:3,
    EMAIL_TIPO:4,
    DNI_INVALIDO:5
};



/* Clase que nos facilita la gestión lógica de errores que
 * se producen en las distintas entradas del formulario.
 * 
 * Al enviar el formulario se comprueba que se hayan rellenado
 * los campos obligatorios, pero también es necesario comprobar 
 * si en los campos que vamos a enviar se ha producido algún error.
 * 
 * La clase contiene un Array donde se almacenan los id de los campos
 * que tienen un error asociado. Una vez que se corrije el error, 
 * se borrará el id correspondiente.
 * 
 * El formulario solo se enviará cuando el número de errores asociados al 
 * mismo sera 0.
 * 
 * 
 * */
export default class GestorErrores{
   constructor (){
       this._errores=[];
   }
 
    /* Método que comprueba si existe error para un elemento concreto */
    existeError(idElemento){
        return this._errores.includes(idElemento);
    }

    /* Método que añade error para un elemento concreto.  */
   addError(idElemento){
            this._errores.push(idElemento);
    }

    /* Método que elimina el error de un elemento dado su id */ 
    eliminaError(idElemento){
        let posicion=this._errores.indexOf(idElemento);
        if(posicion!=-1){
            this._errores.splice(posicion,1);                     
            return true;
            }
        else return false;
    }
    
    /* Método que devuelve el error i-ésimo */
    getError(indice){
        return this._errores[indice];
    }
    
    /* Método que devuelve el número de errores */
    getNumeroErrores(){
        return this._errores.length;
    }
    
    /* Método que devuelve el primer error */
    getPrimerError(){
       if (this.getNumeroErrores()>0)
           return this._errores[0];
    }
    
    limpiaErrores(){
       this._errores=[];
    };
    
} /* Fin de GestorErrores */
 