/* ======================== BUCLES ======================== */


/*  - Se usa cuando queremos que un pedazo de codigo se repita.
    - Existe bucles determinados e indeterminados.
    - Los determinados se usan cuando especificamos el numero de veces que se va a repetir.
        Ej: Imprimir numeros del 1 al 10
    -Los indeterminados se usan cuando no sabemos el numero de veces que se va a repetir.
        Ej: Repetir mensaje de introducir contraseña

    La estructura del bucle siempre es la misma

        Bucle{
        Codigo a ejecutar
        }
*/


/* ======================== BUCLE WHILE Y DO WHILE ======================== */

/*
1) Bucle While: Bucle indeterminado. Se ejecuta cuando la condicion se cumple y Se ejecuta indefiniamente hasta que la condicion no se cumpla.
* Su sintaxis se compone de una unica parte
    - Condicion de salida

    while(condicion){
    Codigo a ejecutar
    }

2) Bucle Do While: Bucle indeterminado. Se ejecuta si o si 1 vez se cumpla o no la condicion y luego se seguira ejecutando hasta que la condicion no se cumpla.
* Su sintaxis se compone de dos partes
    - Codigo a ejecutar
    - Condicion de salida

    do{
    Codigo a ejecutar
    }while(condicion)
*/


/*
let pass = '';

while(pass != 'hola'){
    pass = prompt('introduzca su contraseña')
}
console.log('Fin del bucle')
*/

/*
do{
    pass = prompt('introduzca su contraseña')
}while(pass != 'hola')
*/

/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: (La cuenta regresiva)
Declara una variable contador que empiece en 10.
Usando un bucle while, muestra en consola los números del 10 al 1.
Dentro del bucle, resta 1 al contador en cada vuelta.
Al salir del bucle, muestra el mensaje: "¡DESPEGUE! 🚀".
*/

/*
let contador = 10;

while (contador>0){
    console.log(contador);
    contador --
};
console.log('DESPEGUE! 🚀');
*/

/*
Nivel 2: (El cajero persistente)
Declara una variable pinCorrecto con un número de 4 dígitos (como String, ej: "1234").
Declara una variable pinIngresado vacía.
Usando un bucle while, pide al usuario mediante un prompt que ingrese su PIN. El bucle debe repetirse mientras el pinIngresado sea diferente al pinCorrecto.
Cuando el usuario acierte, muestra un mensaje de bienvenida usando su nombre (usa una variable de nombre de ejercicios anteriores).
*/
/*
let usuario;
let pinCorrecto = '1234';
let pinIngresado;

while(pinCorrecto != pinIngresado){
    usuario = prompt('Ingrese su nombre');
    pinIngresado = prompt('Ingrese su pin');
}

let mensaje = `Bienvenido/a ${usuario}`;
console.log(mensaje);
*/

/*
Nivel 3: (Limpiador de Array)
Crea un array llamado frutas con: "manzana", "banana", "pera", "uva".
Usando un bucle while, ve eliminando el último elemento del array uno por uno (usa .pop()).
En cada vuelta, muestra en consola: "Eliminando fruta... Quedan [cantidad] frutas".
El bucle debe detenerse cuando el array esté vacío (pista: usa .length > 0 como condición).
*/

/*
let frutas = ['manzana', 'banana', 'pera', 'uva'];

while(frutas.length>0){
    frutaEliminada = frutas.pop();
    console.log(`Eliminando fruta ${frutaEliminada}. Quedan ${frutas.length} frutas.`);
}
*/

/*
Nivel 4: (El acumulador de la suerte)
Crea una variable sumaTotal que empiece en 0.
Usando un bucle do while:
Genera un número aleatorio entre 1 y 10.
Súmalo a sumaTotal.
Muestra en consola: "Salió el número [random]. La suma actual es: [sumaTotal]".
La condición de salida del bucle es que sumaTotal sea mayor a 50.
Al final, usa un ternario para mostrar: si la suma es par, "Resultado par", si no, "Resultado impar".
*/

/*
let sumaTotal = 0;

do{
    let numero = Math.round(Math.random()*(10-1)+1);
    sumaTotal += numero;
    console.log(`Salio el numero ${numero}, la suma actual es ${sumaTotal}`);
}while(sumaTotal<=50);

(sumaTotal%2 == 0) ? console.log('Resultado par') : console.log('Resultado impar');

*/
/*
Nivel 5: (El buscador inteligente)
Crea un array de 5 nombres de ciudades.
Pide al usuario mediante un prompt que escriba el nombre de una ciudad para buscarla.
Limpia el texto del usuario (espacios y minúsculas).
Crea una variable encontrado que empiece en false y un indice que empiece en 0.
Usando un bucle while, recorre el array de ciudades:
Compara la ciudad del array en la posición indice con la ciudad que escribió el usuario.
Si coinciden, cambia encontrado a true.
¡No olvides sumar 1 al indice para no crear un bucle infinito!
Al final, usa un if-else para decir si la ciudad se encontró o no en la lista.
*/

/*
let ciudades = ['Cordoba', 'Buenos aires', 'Santa Fe', 'Salta', 'Jujuy'];

let ciudad = prompt('Introduza una ciudad');
let ciudadLimpia = ciudad.trim();
let ciudadOk = ciudadLimpia[0].toUpperCase() + ciudadLimpia.slice(1).toLowerCase();
let encontrado = false;
let indice = 0;

while(indice<ciudades.length){
    if (ciudad === ciudades[indice]){
        encontrado = true;
    }
    indice++;
}

if (encontrado){
    console.log(`¡Genial! ${ciudadOk} está en nuestra lista.`);
}else{
    console.log(`Lo siento, ${ciudadOk} no se encuentra.`);
}
*/


/* ======================== BUCLE FOR ======================== */

/*
- Es un bucle determinado ya que haya qye especificarle cuantas vueltas dara durante su ejecucion.
- Su sintaxis se compone de 3 parter:
    1) Iniciacion de variable
    2) Numero de vueltas
    3) Incremento o decremento

for(let i=0; i<=10; i++){
    Codigo a ejecutar
}

EJEMPLO:

for(let i=0; i<=10; i++){
    console.log(i)
}

- Durante su ejecucion la variable i aumentara su valor en cada vuelta
*/

/*
for(let i=0; i<=10; i++){
    console.log(i)
}

let numbers = [0,1,2,3,4,5];

for(i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}


let numbers2 = [56,14,23,37,41,59];

for(i=0;i<numbers2.length;i++){
    console.log(`i vale ${i} y el valor de esa posicion en el array es ${numbers2[i]}`);
}
*/

/******************************************EJERCICIOS**********************************************/
























/* ======================== BUCLE FOR OF / FOT IN ======================== */

/*
- Simplifica el bucle for tradicional sin tener que darle un numero de vueltas ni realizar un incremento

*/

// let names = ['Paco','Jose','Paula','Maria'];

// for(let name of names){
//     console.log(name);
// }

// for(let index in names){
//     console.log(index);
// }

// El for of recorre el array y nos devuelve el valor en cada posicion, el for in recorre el array (sirve mas para recorrer objetos) y devuelve el numero de indice.


/*
Palabras reservadas de bucles_
    - breack: Rompe el bucle
    - continue: Se salta la(s) posiciones que le indiquemos y despues continua su ejecucion

for (let i =0; i<names.length; i++){
    if(names[i]==='Paula'){
        break
    }
        console.log(names[i]);
}

for (let i =0; i<names.length; i++){
    if(names[i]==='Paula'){
        continue
    }
        console.log(names[i]);
}
*/
