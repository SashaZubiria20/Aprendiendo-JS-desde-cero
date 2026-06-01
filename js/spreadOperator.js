/*
Spread Operator (Operador de expansion)
Solo hay que escribir los tres puntos ...
Lo que hace es expandir el contenido de un array.

Su sintaxis es ...

*/


const numbers = [-12, 2, 3, 23, 43, 2, 3]
console.log(numbers)
console.log(...numbers) // Tenemos todos los elementos por separado




// Enviar elementos de un array a una funcion.
// creamos una funcion para sumar tres numeros.


const addNumbers = (a,b,c) => {
    console.log(a+b+c)
}

addNumbers(1,2,3);

/* --- */
const addNumbers2 = (a,b,c) => {
    console.log(a+b+c)
}

let numbersToAdd = [1,2,3]

// Para enviar los elementos de un array a una funcion.
addNumbers2(...numbersToAdd)




// Añadir un array a otro array


let users = ['Javier', 'David', 'Rosa', 'Juan', 'Mercedes'];
let newUsers = ['Marta', 'Jaime', 'Laura'];

users.push(...newUsers);
// users.unshift(...newUsers);
// users.splice(2,0,...newUsers);

console.log(users);



// Copiar arrays

let arr1 = [1, 2, 3, 4];
let arr2 = [arr1];
console.log(arr1);
console.log(arr2);


let arr3 = [15, 27, 31, 42];
let arr4 = [...arr3];
console.log(arr3);
console.log(arr4);




// Concatenar arrays


let arry1 = [1, 2, 3, 4]
let arry2 = [6, 7, 8]

let arrConcat = arry1.concat(arry2)
console.log(arrConcat);



let arry3 = [1, 2, 3, 4]
let arry4 = [6, 7, 8]

let arrConcat1 = [...arry3, ...arry4]
console.log(arrConcat1);





// Enviar un numero indefinido de argumentos a una funcion (parametro REST)


const restParms = (...pepe) => {
    console.log(pepe);
}

restParms(1,2,3,4,5,6)





// Libreria math
// nos permite sacar el numero maximo o minimo de un array

const numbers2 = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.max(...numbers2));
console.log(Math.min(...numbers2));




// Eliminar elementos duplicados de un array


const numbers3 = [-12, 2, 3, 23, 43, 2, 3]
console.log(new Set(numbers3));
// transforma todo en un objeto set sin duplicados



const numbers4 = [-12, 2, 3, 23, 43, 2, 3]
console.log([...new Set(numbers4)]);
// en vez de objeto, devuelve todo en un array sin elementos duplicados



/******************************************EJERCICIOS**********************************************/


/*
Nivel 1: (La fusión de listas)
Crea dos arrays: lista1 (con 3 nombres de ciudades) y lista2 (con otras 3 ciudades).
Crea un tercer array llamado todasLasCiudades.
Usa el Spread Operator para que todasLasCiudades contenga todos los elementos de las dos listas anteriores en una sola línea.
Muestra el resultado en consola.
*/

let lista1 = ['Cordoba', 'Santa Fe', 'Buenos Aires'];
let lista2 = ['Mendoza', 'San Juan', 'Chubut'];

let todasLasCiudades = [...lista1, ...lista2];
console.log(todasLasCiudades);

/*
Nivel 2: (El buscador de extremos)
Crea un array llamado puntuaciones con los números: 45, 82, 11, 95, 33.
Usa el objeto Math junto con el Spread Operator para encontrar el número más alto y el más bajo de esa lista.
Guarda ambos resultados en variables y muéstralos usando un Template String.
Reto: Agrega un nuevo número al array original usando .push() y vuelve a realizar el cálculo para ver cómo cambia.
*/

let puntuaciones = [45, 82, 11, 95, 33];

let puntuacionMax = Math.max(...puntuaciones);
let puntuacionMin = Math.min(...puntuaciones);

console.log(`La puntuación más alta fue ${puntuacionMax} y la más baja ${puntuacionMin}`);


let nuevasPuntuaciones = [108, 200];
puntuaciones.push(...nuevasPuntuaciones);
let puntuacionMax2 = Math.max(...puntuaciones);
let puntuacionMin2 = Math.min(...puntuaciones);
console.log(`La puntuación más alta fue ${puntuacionMax2} y la más baja ${puntuacionMin2}`);

/*
Nivel 3: (Inmutabilidad y Limpieza)
Vamos a aplicar lo que hablamos ayer de no "manchar" el original:
Crea una clase Usuario que reciba nombre y puntos.
Crea un array llamado jugadores que contenga 3 instancias de esa clase.
Crea una función llamada duplicarPuntaje que reciba a un jugador por parámetro.
Dentro de la función:
Crea una copia del jugador usando el Spread Operator.
A esa copia, duplícale los puntos.
Retorna la copia modificada.
Afuera de la función, llama a duplicarPuntaje pasándole el primer jugador del array.
Muestra en consola el jugador original y el jugador retornado para comprobar que el original no cambió.
*/

class Usuario {
    constructor (nombre, puntos){
        this.nombre = nombre
        this.puntos = puntos
    }
};

let jugadores = [
    new Usuario ('Juan', 500),
    new Usuario ('Pedro', 300),
    new Usuario ('Pablo', 1500)
];

const duplicarPuntaje = (jugador) =>{
    const copia = {...jugador};
    copia.puntos = copia.puntos*2;
    return copia
}

const jugadorOriginal = jugadores[0];
const jugadorModificado = duplicarPuntaje(jugadorOriginal);

console.log("Original:", jugadorOriginal);
console.log("Modificado:", jugadorModificado);