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
