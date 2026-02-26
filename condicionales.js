// Estructura de control de flujo:

// *Condicionales:
// - Simples - Una sola cosa a comprobar
// - Compuestos - si se cumple esto haz esto sino, lo otro
// - Multiples - Varias opciones

// Sintaxis: dos formas, si hay una sola linea de codigo no necesito las llaves, si hay mas si

// condicion simple:

// if(condicion) // codigo a ejecutar

// if(condicion){
//     //codigo a ejecutar 1
//     //codigo a ejecutar 2
//     ...
// }

// condicion compuesta:

// if(condicion) // ejecutar codigo
// else // codigo a ejecutar en caso contrario

//*********************

let num5 = 5;
if (num5>0) console.log(`${num5} es mayor que 0`);

//*********************

let num6 = 7;{
if (num6>5) console.log(`${num6} es mayor que 5`);
if (num6>5) console.log(`${num6} es mayor que 5`);
}

//*********************

let num7 = 5;

if (num7>4){ 
    console.log(`${num7} es mayor que 4`);
}else{
    console.log(`${num7} es menor que 4`);
}

//*********************

let num8 = 5;

if (num8>6){ 
    console.log(`${num8} es mayor que 6`);
}else{
    console.log(`${num8} es menor que 6`);
}

//*********************

let num9 = 5;

if (num9>5){
    console.log(`${num9} es mayor que 5`);

}else if(num9<0){
    console.log(`${num9} es menor que 5`);
}else{
    console.log(`${num9} es igual a 5`);
}

//*********************

// operadores logicos:

// && and
// || o

let num10 = 2;
let num11 = 5;

if(num10>0 || num11>0){
    console.log(`${num10} o ${num11} son mayores que 0`);
}

if(num10>0 && num11>0){
    console.log(`${num10} o ${num11} son mayores que 0`);
}

//*********************
// Ejercicios

if(num10=0 || num11!=0){
    console.log("hola");
}else{
    console.log("Pepe");
}

if(num10=0 && num11!=0){
    console.log("hola");
}else{
    console.log("Pepe");
}

//*********************

let num12 = 2;
let num13 = 5;
let num14 = 8;

if(num12>num13 && num13>num14){
    console.log(`los numeros ${num12} , ${num13} y ${num14} estan ordenados de mayor a menor`);
}else{
    console.log("Los numeros no estan ordenados de mayor a menor");
}

if(num14>num13 && num13>num12){
    console.log(`los numeros ${num12} , ${num13} y ${num14} estan ordenados de menor a mayor`);
}else{
    console.log("Los numeros no estan ordenados de menor a mayor");
}

let word = "Holas";
if(word.length>4){
    console.log(`${word} tiene más de 4 letras`);
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}

let respuesta2 = false;

if(respuesta2==true) console.log("respuesta tiene el valor true");
if(respuesta2!=true) console.log("respuesta tiene el valor false");


//Ejercicio: Ordenar 3 numeros de menor a mayor

const numbers = document.getElementById(`numbers`);
const result = document.getElementById(`result`);

let n1=prompt(`Introduzca el primer número`);
let n2=prompt(`Introduzca el segundo número`);
let n3=prompt(`Introduzca el tercer número`);

numbers.textContent = `Los numeros introducidos son ${n1} ${n2} ${n3}`

if(n1>=n2 && n1>=n3){
    if(n2>n3){
        result.textContent = `El orden es: ${n1}, ${n2}, ${n3}`
    }else{
        result.textContent = `El orden es: ${n1}, ${n3}, ${n2}`
    }
}else if (n2>=n1 && n2>=n3){
    if(n1>n3){
        result.textContent = `El orden es: ${n2}, ${n1}, ${n3}`
    }else{
        result.textContent = `El orden es: ${n2}, ${n3}, ${n1}`
    }
}else if(n3>=n1 && n3>=n2){
    if(n1>n2){
        result.textContent = `El orden es: ${n3}, ${n1}, ${n2}`
    }else{
        result.textContent = `El orden es: ${n3}, ${n2}, ${n1}`
    }
}