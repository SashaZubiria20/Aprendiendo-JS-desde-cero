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


const saludar = () => console.log('Hola');

const saludarUsuario = (user) => console.log(`Hola ${user}`);

saludar()
saludarUsuario('Pepe')
saludarUsuario('Marta')


const suma = (num1, num2) => num1+num2

console.log(suma(2,3));




/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: (La Máquina de Saludos)
Crea una función llamada darBienvenida.
Debe recibir dos parámetros: nombre y apellido.
Dentro de la función, limpia los datos (primera mayúscula, resto minúscula).
La función debe mostrar en consola un mensaje como: "¡Hola [Nombre] [Apellido], bienvenido a JavaScript!".
Llama a la función tres veces con diferentes nombres
*/

let nombre = prompt('Introduza su nombre');
let apellido = prompt('Introduza su apellido');

const darBienvenida = (nombre, apellido) => {
    let nombreOk = nombre.trim()[0].toUpperCase() + nombre.trim().slice(1).toLowerCase();
    let apellidoOk = apellido.trim()[0].toUpperCase() + apellido.trim().slice(1).toLowerCase();
    console.log(`Bienvendo ${nombreOk}, ${apellidoOk} bienvenido a JavaScript!`);
};

darBienvenida(nombre, apellido);
darBienvenida(' AgusTin', 'olMos');
darBienvenida('aNa', 'suAreZ  ');

/*
Nivel 2: (El Calculador de IVA)
Crea una Arrow Function llamada obtenerPrecioFinal.
Debe recibir un parámetro: precioSinIva.
La función debe calcular el precio final sumándole el 21% de IVA.
Importante: La función NO debe mostrar nada en consola, debe retornar (return) el valor final redondeado hacia arriba (Math.ceil).
Afuera de la función, declara una variable totalAPagar, asígnale el resultado de la función y recién ahí imprímela en consola usando un Template String.
*/

let precioSinIva = parseInt(prompt('Introduza el precio'));

const obtenerPrecioFinal = (precioSinIva) => Math.ceil(precioSinIva *1.21);

let totalAPagar = obtenerPrecioFinal(precioSinIva);
console.log(`El precio final con iva es de ${totalAPagar}`);


/*
Nivel 3: (El Auditor de Almacén 2.0)
Vamos a profesionalizar el ejercicio que hicimos de los precios de la tienda:
Crea un array de objetos llamado inventario. Cada objeto debe tener nombre y precio (ej: {nombre: 'teclado', precio: 50.55}). Crea al menos 4 objetos.
Crea una función llamada procesarInventario que reciba el array por parámetro.
Dentro de la función, usa un bucle (for...of) para recorrer el array.
Por cada producto, debe imprimir: "Producto: [nombre] | Precio Final: $[precio con IVA]".
Pista: Dentro de esta función puedes llamar a la función obtenerPrecioFinal que creaste en el Nivel 2 para no repetir la lógica del IVA.
Al final, la función debe retornar un mensaje que diga: "Se procesaron [cantidad] productos correctamente".
*/

let inventario = [
    {nombre: 'Televisor', precio: 150},
    {nombre: 'Mueble', precio: 200},
    {nombre: 'Ropero', precio: 500},
    {nombre: 'Meza', precio: 100},
];

const procesarInventario = (inventario) =>{
    for(const producto of inventario){
    let precioConIva = obtenerPrecioFinal(producto.precio);
    console.log(`Producto: ${producto.nombre} | Precio Final: $${precioConIva}`);
    }
    return `Se procesaron ${inventario.length} productos correctamente`;
}

let a = procesarInventario(inventario);
console.log(a);


let frutas = [
    {nombre: 'manzana', precio: 150},
    {nombre: 'banana', precio: 200},
    {nombre: 'pera', precio: 500},
    {nombre: 'uva', precio: 100},
];
console.log(procesarInventario(frutas));