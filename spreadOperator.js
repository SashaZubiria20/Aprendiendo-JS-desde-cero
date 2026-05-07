/*
Spread Operator (Operador de expansion)
Solo hay que escribir los tres puntos ...
Lo que hace es expandir el contenido de un array.

Su sintaxis es ...

*/






// const numbers = [-12, 2, 3, 23, 43, 2, 3]
// console.log(numbers)
// console.log(...numbers)




/* Enviar elementos de un array a una funcion */
/* creamos una funcion para sumar tres numeros*/

/*
const addNumbers = (a,b,c) => {
    console.log(a+b+c)
}

addNumbers(1,2,3)
*/



/*
const addNumbers = (a,b,c) => {
    console.log(a+b+c)
}

let numbersToAdd = [1,2,3]

addNumbers(...numbersToAdd)
*/

/*************************************************************************/

// Añadir un array a otro array

/*
let users = ['Javier', 'David', 'Rosa', 'Juan', 'Mercedes'];
let newUsers = ['Marta', 'Jaime', 'Laura'];

// users.push(...newUsers);
// users.unshift(...newUsers);
// users.splice(2,0,...newUsers);

console.log(users);

*/

/*************************************************************************/

// Copiar arrays


/*
// let arr1 = [1, 2, 3, 4]
// let arr2 = [arr1]
// console.log(arr2);


let arr1 = [1, 2, 3, 4]
let arr2 = [...arr1]
console.log(arr2);
*/

/*************************************************************************/

// Concatenar arrays

/*
let arr1 = [1, 2, 3, 4]
let arr2 = [6, 7, 8]

let arrConcat = arr1.concat(arr2)
console.log(arrConcat);
*/

/*
let arr1 = [1, 2, 3, 4]
let arr2 = [6, 7, 8]

let arrConcat = [...arr1, ...arr2]
console.log(arrConcat);
*/


/*************************************************************************/

// Enviar un numero indefinido de argumentos a una funcion (parametro REST)

/*
const restParms = (...numbers) => {
    console.log(numbers);
}

restParms(1,2,3,4,5,6)
*/


/*************************************************************************/

// Libreria math

/*
const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
*/


/*************************************************************************/

// Eliminar elementos duplicados

/*
const numbers = [-12, 2, 3, 23, 43, 2, 3]
console.log(new Set(numbers));
*/


/*
const numbers = [-12, 2, 3, 23, 43, 2, 3]
console.log([...new Set(numbers)]);
*/