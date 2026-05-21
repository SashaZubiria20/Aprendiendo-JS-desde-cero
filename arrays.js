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

// ****************************************************** Metodos: ***************************************

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


/*.reverse() - Devuelve el orden al reves de los elementos del array.
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
.splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    a - Indice de inicio
    b - Número de elementos (opcional)
    items - Elementos a añadir en el caso de que se añadan. (opcional)
*/

console.log(numeros);
numeros.splice(3);  // elimina desde la posicion que le indiquemos hasta el final
console.log(numeros);

console.log(numeros);
numeros.splice(2,2);  // elimina desde la posicion que le indiquemos, la cantidad de valores que le indiquemos en b
console.log(numeros);

console.log(numeros);
numeros.splice(2,2,10,23,54); // elimina desde la posicion que le indiquemos, la cantidad de valores que le indiquemos en b y el tercer parametro lo agrega (pueden ser los que queramos) // si b vale 0 solo añade alementos
console.log(numeros);



/*
.slice(a,b) - Extrae elementos de un array desde el indice a hasta el indice b. Si no existe b lo hace hasta el final, si no existe ni a ni b hace una copia del original.
*/

let numeros2 = [1,2,3,4,5];

let newNumeros = numeros2.slice();
console.log(numeros2);
console.log(newNumeros);

let newNumeros2 = numeros2.slice(2);
console.log(numeros2);
console.log(newNumeros2);

let newNumeros3 = numeros2.slice(2,3);
console.log(numeros2);
console.log(newNumeros3);



/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: (La lista del súper)
Crea un array vacío llamado carrito.
Añade tres productos de forma individual al final del array usando un método.
Añade un producto importante al principio del array usando otro método.
Muestra en consola el primer y el último elemento del array usando sus índices.
Muestra cuántos elementos totales hay en el carrito usando la propiedad correspondiente.
*/

let carrito = [];

carrito.push('fideos');
carrito.push('arroz');
carrito.push('sal');
carrito.unshift('carne');

console.log(carrito[0]);
console.log(carrito[3]);
console.log(carrito.length);

/*
Nivel 2: (El buscador de amigos)
Crea un array llamado amigos con al menos 5 nombres (asegúrate de que algunos nombres tengan espacios o mayúsculas desordenadas.
Elige el nombre que está en la posición 2 y límpialo (quita espacios y pon la primera letra en Mayúscula y el resto en minúscula).
Usa un método para verificar si en tu array existe el nombre "Juan". Muestra un mensaje en consola diciendo: "¿Juan está en la lista?: [true/false]".
Invierte el orden de todo el array.
Une todos los nombres en un solo String separado por un guion (-) y muéstralo.
*/

let amigos = ['Juan', '   peDro ', 'pAblo', 'anA', 'SUSAna'];

let amigo2 = amigos[1].trim()
let amigo2Limpio = amigo2[0].toUpperCase() + amigo2.slice(1).toLowerCase();
console.log(amigo2Limpio);


let estaJuan = amigos.includes('Juan');
console.log(`¿Juan está en la lista?: ${estaJuan}`);

let amigosAlReves = amigos.reverse();
console.log(amigosAlReves);

console.log(`Mis amigos son ${amigos.join(' - ')}`);


/*
Nivel 3: (El sistema de gestión de equipo - "Sasha-Team")
Simularemos la entrada y salida de jugadores en un equipo:
Declara un array equipo con: "Portero", "Defensa", "Medio", "Delantero".
Entrada aleatoria: Genera un número aleatorio entre 0 y 1. Si el número es mayor a 0.5, añade un "Suplente" al final del equipo. Si no, añade un "Entrenador" al principio. (Usa el Operador Ternario para decidir esto).
Lesión en el campo: Usa el método splice para eliminar al "Defensa" y en su lugar añadir a dos jugadores: "Defensa-1" y "Defensa-2".
Copia de seguridad: Crea una copia de los primeros tres jugadores del equipo usando slice y guárdala en un nuevo array llamado titulares.
Verificación final: Usa un if-else para comprobar si el tamaño del array equipo es mayor a 5.
Si es mayor: Muestra "Equipo completo: " seguido del array unido por comas.
Si no: Muestra "Faltan jugadores. Actualmente hay: [cantidad]".
*/

let equipo = ['Portero', 'Defensa', 'Medio', 'Delantero'];
console.log(equipo);


let numero = Math.random();
console.log(numero);

(numero>0.5) ? equipo.push('Suplente') : equipo.unshift('Entrenador');
console.log(equipo);

let defensa = equipo.indexOf('Defensa');
if (defensa !== -1){
    equipo.splice(defensa,1,'Defensa1', 'Defensa2');
    console.log(equipo);
}

let titulares = equipo.slice(0,3);
console.log(titulares);

if(equipo.length>5){
    console.log(`Equipo completo: ${equipo.join(', ')}`);
}else{
    console.log(`Faltan jugadores. Actualmente hay: ${equipo.length} jugadores`);
}




// ************************* MAS METODOS *************************

/* 

CONCEPTOS:
- Iterable: Un elemento iterable es todo aquel que se puede recorrer, por ejemplo un string, otro array.
- Callback: Es simplemente una funcion. Si una funcion ejecuta una funcion se llama callbakc.
- Valor Unicode: Es el numero que tienen asignadas las letras. Segun el valor unicode cada caracter tiene asignado un numero.

*/



/* .from(iterable) - Convierte en array el elemento iterable */

let word = 'Hola mundo'
console.log(Array.from(word));
console.log(word.split(''));



/* .sort([callback]) - Ordena los elementos de un array alfabeticamente (valor Unicode), si le pasamos un callback los ordena en funcion del algoritmo que le pasemos. */

const letters = ['b', 'c', 'z', 'a']
const numbers4 = [1,8,100,300,3]

console.log(letters);
console.log(letters.sort());

console.log(numbers4);
console.log(numbers4.sort());
console.log(numbers4.sort((a,b)=>a-b));
console.log(numbers4.sort((a,b)=>b-a));

// Recorre el array a travez de pares a-b / b-a, va comparando para saber cual es menor/mayor



/* .forEach(callback(currentValue, [index])) - Ejecuta la funcion indicada una vez por cada elemento del array. */

const numbers5 = [12, 25, 47, 84, 98]

numbers5.forEach((pepe)=>console.log(pepe));
// pepe, se suele llamar element, imprime cada elemento del array
numbers5.forEach((pepe, index) => console.log(`${pepe} esta en la posicion ${index}`));
// index, tambien se puede llamar como quiera pero imprime la poscixion del elemento en el array




/* .some(callback) - Compueba si al menos un elemento del array cumple la condicion. */

const word1 = ['HTML', 'CSS', 'JavaScript', 'PHP']

console.log(word1.some(word => word1.length>2));
console.log(word1.some(word => word1.length>5));
console.log(word1.some(word => word1.length>10));



/* .every(callback) - Comprueba si todos los elementos del array cumplen la condicion. */

const word2 = ['HTML', 'CSS', 'JavaScript', 'PHP']

console.log(word2.every(word => word2.length>3));
console.log(word2.every(word => word2.length>10));
console.log(word2.every(word => word2.length>2));




/* .map(callback) - Transforma todos los elementos del array y devuelve un nuevo array. */

const numbers6 = [12, 25, 47, 84, 98];
console.log(numbers6);

numbers6.map(number =>console.log(number*2));


const numbers7 = numbers6.map(number => number*2); // Guardamos el resultado en la variable numbers7
console.log(numbers7);




/* .filter(callback) - Filtra todos los elementos del array que cumplan la condicion y devuelve un nuevo array. */

const numbers8 = [12, 25, 47, 84, 98]
console.log(numbers8);
const numbers9 = numbers8.filter(number=>number>40); // Todos los elementos del array numbers8 que cumplen la condicion se guardaron en el nuevo array numbers9
console.log(numbers9);


/* .reduce(callback) - Reduce todos los elementos del arra a un unico valor. Va realizando la accion que le indiquemos a cada elemento del array a travez de pares*/

const numbers10 = [1, 2, 3, 4, 5];

console.log(numbers10.reduce((a,b)=>a+b)); // suma todos los elementos y devuelve un unico valor
console.log(numbers10.reduce((a,b)=>a*b)); // multiplica todos los elementos y devuelve un solo valor


// Creamos un array de objetos, en este caso de usuarios
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

const usersOnline = users.reduce((cont, user) => {   //cont es el elemento donde se van sumando los usuarios online, user es el elemento que va recorriendo reduce
    if(user.online) cont++
    return cont
},0) // si aca ponemos una coma le podemos dar un valor inicial, en este caso el 0

console.log(`Hay ${usersOnline} usuarios conectados`);


/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: (El Transformador de Precios)
Crea un array de números llamado preciosBase con los valores: 100, 200, 350, 500.
Usa el método .map() para crear un nuevo array llamado preciosConDescuento.
La lógica dentro del .map() debe ser: restarle un 10% a cada precio.
Muestra ambos arrays en la consola para comparar el original con el nuevo.
*/

let preciosBase = [100, 200, 350, 500];

let preciosConDescuento = preciosBase.map(precio => precio-((precio*10)/100));
console.log(preciosBase);
console.log(preciosConDescuento);


/*
Nivel 2: (El Portero del VIP)
Crea un array de objetos llamado invitados. Cada objeto debe tener: nombre y edad. (Crea al menos 5 invitados, algunos menores de 18 y otros mayores).
Usa el método .filter() para crear un nuevo array llamado soloMayores.
Usa el método .every() para verificar si todos los invitados en la lista original son mayores de 18 y muestra el resultado (true/false) en consola.
Usa el método .some() para verificar si al menos uno se llama "Sasha" y muestra el resultado.
*/

const invitados = [
    {
        nombre: 'Juan',
        edad: 20
    },
    {
        nombre: 'Pedro',
        edad: 17
    },
    {
        nombre: 'Analia',
        edad: 30
    },
    {
        nombre: 'Maria',
        edad: 23
    },
    {
        nombre: 'Susana',
        edad: 16
    }
];


const soloMayores = invitados.filter(invitado => invitado.edad>18);
console.log(soloMayores);
console.log(invitados.every(mayor => mayor.edad>18));
console.log(invitados.some(persona => persona==='Sasha'));

/*
Nivel 3: (El Gran Total de la Tienda)
Vamos a usar .reduce(), el método más difícil pero poderoso:
Crea una clase Producto que tenga nombre y precio.
Crea un array llamado estanteria que contenga 4 instancias de la clase Producto con diferentes precios.
Usa el método .forEach() para imprimir en consola cada producto con el formato: "Viendo producto: [nombre] - $[precio]".
Usa el método .reduce() para calcular el precio total de todos los productos que hay en la estantería.
Al final, muestra un Template String que diga: "El valor total de tu inventario es de $[total]".
*/

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
};

let estanteria = [
    new Producto ('Tele', 2000),
    new Producto ('Cama', 1800),
    new Producto ('Sillon', 2500),
    new Producto ('Aire', 3000),
];

estanteria.forEach((producto)=>console.log(`Viendo producto: ${producto.nombre} - precio $${producto.precio}`));

let valorTotal = estanteria.reduce((a,b)=> a + b.precio, 0);
console.log(`El valor total de tu inventario es de $${valorTotal}`);