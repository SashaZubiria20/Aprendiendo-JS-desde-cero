// Tipos de datos y variables

/*
// numero
let numero = 5;
console.log(numero);

// strings
let palabra = "Hola Mundo";
console.log(palabra);

// bolean
let respuesta = true;
console.log(respuesta);

// constantes:
const PI = 3.14;
console.log(PI);
*/





/******************************************EJERCICIOS**********************************************/

/*
Nivel 1:
Declara una variable para guardar tu nombre y otra para guardar tu edad. Luego, declara una constante con el nombre de tu ciudad. Muestra los valores por consola.
*/

let nombre = 'Sasha';
let edad = 33;
const ciudad = 'Córdoba';

console.log(nombre);
console.log(edad);
console.log(ciudad);

/*
Nivel 2:
Crea una variable llamada estaLloviendo y asígnale un valor booleano que indique que sí está lloviendo. Luego, en la línea de abajo, cambia ese valor para indicar que ya paró de llover. Finalmente, intenta hacer lo mismo pero con una constante y observa qué sucede en tu consola (esto te ayudará a entender el error).
*/

let estaLloviendo = true;
console.log(estaLloviendo);

estaLloviendo = false;
console.log(estaLloviendo);

/*
Nivel 3:
Crea una variable llamada contenedor.
Asígnale primero un número.
En la siguiente línea, cambia su valor a un texto (string).
En la siguiente, cámbialo a un valor booleano.
Esto te servirá para experimentar cómo JavaScript permite que una variable cambie de "tipo" de dato sin problemas.
*/

let contenedor = 5;
console.log(contenedor);

contenedor = 'Hola';
console.log(contenedor);

contenedor = false;
console.log(contenedor);


/*
Nivel 4:
Declara tres variables que se llamen casi igual pero con diferentes mayúsculas (ejemplo: minombre, miNombre, MiNombre). Asígnales valores distintos a cada una. Comprueba que JavaScript las trata como tres "cajas" totalmente diferentes.
*/

let minombre = 'Juan';
console.log(minombre);
let miNombre = 'Pepe';
console.log(miNombre);
let MiNombre = 'Marta';
console.log(MiNombre);


/*
Nivel 5:
Imagina que estás programando un sistema de ventas:
Crea una constante para el nombre de un producto.
Crea una constante para el precio de ese producto.
Crea una variable para la cantidad que el cliente quiere comprar.
Crea una variable booleana que diga si el cliente tiene envío gratis.
(Extra: Intenta pensar cómo se vería esto organizado en tu código siguiendo las reglas de sintaxis de los ; y las llaves { } si fuera necesario).
*/

const producto = 'Alfajor';
const precioAlfajor = 20;
let cant = 10;
let envio = true;