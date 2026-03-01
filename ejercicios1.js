/*
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
*/

// let name = prompt('Introcude tu nombre');
// let age = parseInt(prompt('Introcude tu edad'));

// console.log(`Hola ${name} tienes ${age} años y el año que viene tendras ${age+=1} años`);


/*
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
triángulo = b * h/2
rectángulo = b* h
círculo = π* r2 (pi * radio al cuadrado)
*/

// let figure = prompt('Introduce la figura geometrica de la que quieres calcular el area: triangle, rectangle or circle');

// let base;
// let heigth;
// let radius;

// switch(figure){
//     case 'triangle':
//         base=prompt('Introduce la base del triangulo')
//         heigth=prompt('Introduce la altura del triangulo')
//         console.log(`El area del triangulo es ${(base*heigth)/2}`);
//         break
//     case 'rectangle':
//         base=prompt('Introduce la base del rectangulo')
//         heigth=prompt('Introduce la altura del rectangulo')
//         console.log(`El area del rectangulo es ${base*heigth}`);
//         break
//     case 'circle':
//         radius=prompt('Introduce el radio del circulo')
//         console.log(`El area del circulo es ${Math.PI * Math.pow(radius,2)}`);
//         break
//     default: console.log('la figura geometrica no es valida');
// }

/*
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar
*/

// let num = parseInt(prompt('Introduce un numero'));

// for(let i=1; i<=num; i++){
//     if(i%2==0){
//         console.log(`${i} - es par`);
//     }else{
//         console.log(`${i} - es impar`);
//     }
// }


/*
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/

// let num = parseInt(prompt('Introduce un numero'));
// let divisores = 0;

// if(num == 1) console.log('El número no es valido');
// else{

//     for (let i=2; i<num; i++){
//         if(num % i == 0){
//             console.log(`${num} / ${i} = ${num/i} No es primo`);
//             divisores++
//             break
//         }
//     }
// }

// if(divisores==0) console.log(`${num} es primo`);

/*
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
!5 = 5*4*3*2*1 = 120
*/

// let num = parseInt(prompt('Introduce un numero'));
// let result = 1;

// for(let i = num; i>0; i--){
//     result *= i;
// }

// console.log(`El factorial de ${num} es ${result}`);


/*
6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
*/

// let suma=0;
// let cont=0;

// while(suma<=50){
//     suma += parseInt(prompt('Introduce un numero para añadir a la suma'));
//     cont++
// }
// console.log(`La suma total es de: ${suma}`);
// console.log(`El total de numero introducidos es ${cont}`);


/*
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares
*/

// const numbers = [3,43,21,20,56];
// let pares = [];
// let impares = [];

// for(const number of numbers){
//     let random = Math.round(Math.random() * 10 + 1);
//     const result = number * random;

//     console.log(`${number} x ${random} = ${number*random}`);
//     if(result % 2 == 0){
//         pares.push(result);
//     }else{
//         impares.push(result);
//     }
// }

// console.log(pares);
// console.log(impares);


/*
8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/

// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// const dni = prompt(`Introduce tu DNI`);

// if(dni.length==8 && parseInt(dni)>0){
//     console.log(`Tu DNI completo es ${dni}${letras[dni%23]}`);
// }



/*
9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

// const palabra = prompt('Introduce una palabra').toLowerCase();

// let consonantes = 0;
// let vocales = 0;

// for(const letra of palabra){
//     if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
//         vocales++;
//     }else{
//         consonantes++;
//     }
// }

// console.log(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total de ${palabra.length} letras`);

/*
10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

// const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

// const color = prompt(`Introduce un color`).toLowerCase();

// if(colores.indexOf(color) !== -1){
//     console.log('Tu color se encuentra en el array');
// }else{
//     console.log('Tu color no esta definido');
// }