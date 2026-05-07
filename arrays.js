/* Son estructuras que nos permiten almacenar varios datos y agruparlos.
Se pueden llenar con cualquier tipo de dato valido en JavaDcript y deben ir separados por Comas.
Se pueden mezclar tipos de datos, pero no es recomendable.
Se declaran con corchetes []
Pueden declararse vacios o con un contenido ya establecido.
Pueden añadirse o eliminarse elementos en cualquier momento.
sintaxis:

let array = []
let array = [1,2,3,4,]
Cada uno de los elementos puede ser identificado por su indice, es decir su posicion.
Los indices empiezan a contar desde 0
*/


//let numeros = [1,2,3,4,5];
//let palabras = ['Hola', 'como', 'estan'];

//console.log(numeros);
//console.log(numeros[0]+numeros[2]);
//console.log(`La palabra "${palabras[2]}" tiene ${palabras[2].length} letras`);


// Propiedades:

/*
.length - Devuelve el numero de posiciones que contiene el array
*/

//console.log(numeros.length);

// ****************************************************** Metodos:

/*
Array.isArray(variable a evaluar) - Devuelve true si la variable es un array.
*/

//console.log(Array.isArray(numeros));

/*
Eliminar un elemento:
.shift() - Elimina el primer elemento del array y devuelve ese elemento.
.pop() - Elimina el ultimo elemento del array y devuelve ese elemento.
*/

//console.log(numeros);
//numeros.shift();  // let deleteElement = numbers.shift(); elimina el valor y lo guarda en esa variable
//console.log(numeros);
//numeros.pop();
//console.log(numeros);

/* Añadir elementos:
.push(elemento1, elemento2, .....) - Añade uno o mas elementos al final del array y devuelve la nueva longitud.
.unshift(elemento1, elemento2, .....) - Añade uno o mas elementos al comienzo del array y devuelve la nueva logitud.
*/

//numeros.push(7);
//console.log(numeros);

//numeros.unshift(9,5);
//console.log(numeros);

/*
.indexof() - Devuelve el primer indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado
*/

//console.log(numeros);
//console.log(numeros.indexOf(5));

/*
.lastIndexof() - Devuelve el ultimo indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado
*/

//console.log(numeros.lastIndexOf(3));

/*.reverse() - Devuelve el orden de los elementos del array.
*/

//console.log(numeros);
//numeros.reverse();
//console.log(numeros);

/*
.join(separador) - Devuelve un string con el separador que indiquemos, por defecto son comas ,
*/

//console.log(numeros);
//console.log(numeros.join());
//console.log(numeros);
//console.log(numeros.join('-'));

/*
.splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    a - Indice de inicio
    b - Número de elementos (opcional)
    items - Elementos a añadir en el caso de que se añadan. (opcional)
*/

//console.log(numeros);
//numeros.splice(3);  // elimina desde la posicion que le indiquemos hasta el final
//console.log(numeros);

//console.log(numeros);
//numeros.splice(2,2);  // elimina desde la posicion que le indiquemos, la cantidad de valores que le indiquemos
//console.log(numeros);

//console.log(numeros);
//numeros.splice(2,2,10,23,54); // elimina desde la posicion que le indiquemos, la cantidad de valores que le indiquemos y el tercer parametro lo agrega (pueden ser los que queramos) // si b vale 0 solo añade alementos
//console.log(numeros);

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


// ************************* MAS METODOS *************************

/* 

CONCEPTOS:
- Iterable: Un elemento iterable es todo aquel que se puede recorrer, por ejemplo un string, otro array.
- Callback: Es simplemente una funcion. Si una funcion ejecuta una funcion se llama callbakc.
- Valor Unicode: Es el numero que tienen asignadas las letras. Segun el valor unicode cada caracter tiene asignado un numero.

*/



/* .from(iterable) - Convierte en array el elemento iterable */

//  let word = 'Hola mundo'
//  console.log(Array.from(word));
//  console.log(WebTransportDatagramDuplexStream.split(''));




/* .sort([callback]) - Ordena los elementos de un array alfabeticamente (valor Unicode), si le pasamos un callback los ordena en funcion del algoritmo que le pasemos. */

// const letters = ['b', 'c', 'z', 'a']
// const numbers = [1,8,100,300,3]

// console.log(letters);
// console.log(letters.sort());

// console.log(numbers.sort());
// console.log(numbers.sort((a,b)=>a-b));

/* Recorre el array a travez de pares a-b / b-a, va comparando para saber cual es menor/mayor





/* .forEach(callback(currentValue, [index])) - Ejecuta la funcion indicada una vez por cada elemento del array. */

// const numbers = [12, 25, 47, 84, 98]

// numbers.forEach((number)=>console.log(number));
/* number, se suele llamar element, imprime cada elemento del array*/

// numbers.forEach((number, index) => console.log(`${number} esta en la posicion ${index}`));
/* index, tambien se puede llamar como quiera pero imprime la poscixion del elemento en el array*/




/* .some(callback) - Compueba si al menos un elemento del array cumple la condicion. */

// const word = ['HTML', 'CSS', 'JavaScript', 'PHP']

// console.log(word.some(word => word.length>2));
// console.log(word.some(word => word.length>5));
// console.log(word.some(word => word.length>10));





/* .every(callback) - Comprueba si todos los elementos del array cumplen la condicion. */

// const word = ['HTML', 'CSS', 'JavaScript', 'PHP']

// console.log(word.every(word => word.length>3));
// console.log(word.every(word => word.length>10));
// console.log(word.every(word => word.length>2));




/* .map(callback) - Transforma todos los elementos del array y devuelve un nuevo array. */

// const numbers = [12, 25, 47, 84, 98]
// console.log(numbers);

// numbers.map(number =>console.log(number*2));


// const numbers2 = numbers.map(number => number*2);
// console.log(numbers2);




/* .filter(callback) - Filtra todos los elementos del array que cumplan la condicion y devuelve un nuevo array. */

// const numbers = [12, 25, 47, 84, 98]

// const numbers2 = numbers.filter(number=>number>40)

// console.log(numbers2);


/* .reduce(callback) - Reduce todos los elementos del arra a un unico valor. */

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.reduce((a,b)=>a+b));
// console.log(numbers.reduce((a,b)=>a*b));


/*
const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]

const usersOnline = users.reduce((cont, user) => {
    if(user.online) cont++
    return cont
},0)

console.log(`Hay ${usersOnline} usuarios conectados`);

*/