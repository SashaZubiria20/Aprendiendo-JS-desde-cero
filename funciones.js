/* Son fragmentos de codigo que escribimos para ejecutar una tarea y no volver a escribir el mismo codigo mas de una vez
Nos ayuda a modularizar el codigo
Las funciones deben realizar una sola tarea */

/* SINTAXIS:

Antes:
function nombreFuncion(){
    Codigo a ejecutar
    }

Ahora:
const nombreFuncion = () =>{
    Codigo a ejecutar
    }
*/



/*
Pueden recibir parametros:

function nombreFuncion(parametro1, parametro2){
    Codigo a ejecutar
    }

const nombreFuncion = (parametro1, parametro2) =>{
    Codigo a ejecutar
    }

* Los parametros los utiliza la funcion para ejecutarse, a veces puede llevar parametros y a veces no, no hay limites de parametros, puede tener 0 o miles.
*/


/*
* Pueden devolver valores

function nombreFuncion(parametro1, parametro2){
    return parametro1+parametro2
    }


const nombreFuncion = (parametro1, parametro2) => parametro1+parametro2

* Si la funcion de flecha, solo tiene 1 instruccion no es necesario utilizar return, y si solo tiene una linea no hace falta utilizar {}
*/

/*
function saludar(){
    console.log('Hola');
}
*/

/*
const saludar = () => console.log('Hola');

const saludarUsuario = (user) => console.log(`Hola ${user}`);

saludar()
saludarUsuario('Pepe')
saludarUsuario('Marta')
*/

const suma = (num1, num2) => num1+num2

console.log(suma(2,3));
