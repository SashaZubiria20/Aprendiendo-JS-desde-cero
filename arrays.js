/* Son estructuras que nos permiten almacenar varios datos y agruparlos.
Se pueden llenar con cualquier tipo de dato valido en JavaDcript y deben ir separados por Comas.
Se pueden mezclar tipos de datos, pero no es recomendable.
Se declaran con corchetes []
Pueden declararse vacios o con un contenido ya establecido.
Pueden añadirse o eliminarse elementos en cualquier momento.
sintaxis:

let array = []
let array = [1,2,3,4,
Casa uno de los elementos puede ser identificado por su indice, es decir su posicion.
Los indices empiezan a contar desde 0
*/


let numeros = [1,2,3,4,5];
let palabras = ['Hola', 'como', 'estan'];

console.log(numeros);
console.log(numeros[0]+numeros[2]);
console.log(`La palabra "${palabras[2]}" tiene ${palabras[2].length} letras`);


// Propiedades:

/*
.length - Devuelve el numero de posiciones que contiene el array
*/

console.log(numeros.length);

// Metodos:

/*
Array.isArray(variable a evaluar) - Devuelve true si la variable es un array.
*/

console.log(Array.isArray(numeros));

/*
Eliminar un elemento:
.shift() - Elimina el primer elemento del array y devuelve ese elemento.
.pop() - Elimina el ultimo elemento del array y devuelve ese elemento.
*/

console.log(numeros);
numeros.shift();  // let deleteElement = numbers.shift(); elimina el valor y lo guarda en esa variable
console.log(numeros);
numeros.pop();
console.log(numeros);

/* Añadir elementos:
.push(elemento1, elemento2, .....) - Añade uno o mas elementos al final del array y devuelve la nueva longitud.
.unshift(elemento1, elemento2, .....) - Añade uno o mas elementos al comienzo del array y devuelve la nueva logitud.
*/

numeros.push(7);
console.log(numeros);

numeros.unshift(9,5);
console.log(numeros);

/*
.indexof() - Devuelve el primer indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado
*/

console.log(numeros);
console.log(numeros.indexOf(5));

/*
.lastIndexof() - Devuelve el ultimo indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado
*/

console.log(numeros.lastIndexOf(3));

/*.reverse() - Devuelve el orden de los elementos del array.
*/

console.log(numeros);
numeros.reverse();
console.log(numeros);

/*
.join(separador) - Devuelve un string con el separador que indiquemos, por defecto son comas ,
*/

console.log(numeros);
console.log(numeros.join());
console.log(numeros);
console.log(numeros.join('-'));

/*
.splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y7o agregando nuevos elementos.
    a - Indice de inicio
    b - Número de elementos (opcional)
    items - Elementos a añadir en el caso de que se añadan. (opcional)
*/

console.log(numeros);
numeros.splice(3);  // elimina desde la posicion que le indiquemos hasta el final
console.log(numeros);

console.log(numeros);
numeros.splice(2,2);  // elimina desde la posicion que le indiquemos, la cantidad de valores que le indiquemos
console.log(numeros);

console.log(numeros);
numeros.splice(2,2,10,23,54); // Si b es un valor distinto de 0 elimina el numero de valores que indiquemos en b y añade los valores de items a partir de la posicion a
console.log(numeros);

/*
.slice(a,b) - Extrae elementos de un array desde el indice a hasta el indice b. Si no existe b lo hace hasta el final, si no existe ni a ni b hace una copia del original.
*/

// let newNumeros = numeros.slice();
// console.log(numeros);
// console.log(newNumeros);

// let newNumeros = numeros.slice(2);
// console.log(numeros);
// console.log(newNumeros);

// let newNumeros = numeros.slice(2,3);
// console.log(numeros);
// console.log(newNumeros);


