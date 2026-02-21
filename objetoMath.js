// Objeto Math: es un objeto estatico, debemos usar su nombre para utilizarlo

// propiedades:
// - Math.E - Math.PI

// Metodos:
// - Math.abs(x) Devuelve el valor absoluto de x /// el numero sin signo.
// - Math.ceil(x) Devuelve el entero mas pequeño mayor o igual que un numero /// redondea para arriba.
// - Math.floor(x) Devuelve el entero mas grande menor o igual que un numero /// redondea para abajo.
// - Math.pow(x,y) Devuelve la potencia de x elevado a y.
// - Math.sqrt(x) Devuelve la raiz cuadrada de x.
// - Math.random() Genera un numero pseudoaleatorio entre 0 y 1.
// - Math.round(x) Devuelve el valor de un numero redondeado al entero mas cercano.
// - Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.

console.log(Math.E);
console.log(Math.PI);

let num = -5;
console.log(Math.abs(num));

let num2 = 5.3
console.log(Math.ceil(num2));
console.log(Math.floor(num2));

console.log(Math.pow(3, 3));
console.log(Math.pow(2,2));
console.log(Math.pow(2,3));

console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.round(Math.random()*100));
console.log(Math.round(Math.random() * (10-5)+5));

let num3 = 5.2
console.log(Math.round(num3));
let num4 = 5.7
console.log(Math.round(num4));

console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(0));

console.log(Math.sqrt(9));
console.log(Math.sqrt(2));