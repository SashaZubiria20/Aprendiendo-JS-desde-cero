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

// - Math.min() y Math.max(): Son súper útiles. Les pasas una lista de números y te devuelven el más pequeño o el más grande automáticamente.
// - La fórmula del rango aleatorio: Math.random() solo da números entre 0 y 1. Para obtener un número entre, por ejemplo, 1 y 10, se usa una fórmula que deberías practicar: Math.floor(Math.random() * (max - min + 1)) + min.
// - Math.trunc(): Similar a floor pero simplemente "corta" los decimales sin importar si el número es positivo o negativo.


/*
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

console.log(Math.random());                            // Numero aleatorio entre 0-1
console.log(Math.random()*100);                        // Numero aleatorio entre 0-100
console.log(Math.round(Math.random()*100));            // Numero aleatorio entre 0-100 sin decimales
console.log(Math.round(Math.random() * (10-5)+5));     // Numero aleatorio entre un  minimo y un maximo
// formula = console.log(Mat.round(Math.random() * (max-min)+min));

let num3 = 5.2
console.log(Math.round(num3));
let num4 = 5.7
console.log(Math.round(num4));

console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(0));

console.log(Math.sqrt(9));
console.log(Math.sqrt(2));

*/


/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: (El calculador de potencias)
Declara una variable llamada base con el valor 5 y otra exponente con el valor 3.
Calcula la potencia usando Math.pow y guarda el resultado.
Calcula la raíz cuadrada de ese resultado usando Math.sqrt.
Muestra en consola un Template String que diga: "La base [base] elevada al [exponente] es [resultado] y su raíz es [raíz]".
*/

let base = 5;
let exponente = 3;

let result = Math.pow(base,exponente);
console.log(result);
let raiz = Math.sqrt(result);
console.log(raiz);

console.log(`La base ${base} elevada al ${exponente} es ${result} y su raíz es ${raiz}`);

/*
Nivel 2: (Simulador de Dados y Suerte)
Crea una variable nombreJugador con cualquier nombre en minúsculas.
Transforma la primera letra de ese nombre a Mayúscula (como hiciste en el ejercicio anterior).
Genera un número aleatorio entre 1 y 10. Para este ejercicio, usa Math.random() * 10 y aplícale Math.ceil() para que no tenga decimales y nunca sea 0.
Muestra un mensaje: "El jugador [Nombre] ha lanzado el dado y obtuvo un: [numero]".
Usa Math.sign() para verificar si ese número es positivo (debería darte 1) y muéstralo en consola.
*/

let nombreJugador = 'juan';
let nombreOk = nombreJugador[0].toUpperCase() + nombreJugador.slice(1);
console.log(nombreOk)
let numero = Math.ceil(Math.random()*10);
console.log(numero);
console.log(`El jugador ${nombreOk} ha lanzado el dado y obtuvo un: ${numero} `);
console.log(Math.sign(numero));

/*
Nivel 3: (La Pizzería de Sasha - Geometría Aplicada)
Imagina que vas a calcular el área de una pizza para tu sistema de ventas:
Crea una constante radio con valor 15.
Calcula el área de la pizza. La fórmula es: π * radio² (Usa Math.PI y Math.pow).
El resultado del área seguramente tenga muchos decimales. Crea tres variables nuevas:
Una con el área redondeada hacia abajo (floor).
Una con el área redondeada hacia arriba (ceil).
Una redondeada al entero más cercano (round).
Usa un único Template String para mostrar los tres resultados de forma organizada.
Reto Extra: Crea una variable precio de 15.45. Únela a un texto que diga "El precio es: " y luego usa un método de String para verificar si ese mensaje incluye el número 15.
*/

const radio = 15;

let areaPizza = Math.PI * Math.pow(radio, 2);
console.log(areaPizza);

let areaPizzaAbajo = Math.floor(areaPizza);
console.log(areaPizzaAbajo);
let areaPizzaArriba = Math.ceil(areaPizza);
console.log(areaPizzaArriba);
let areaPizzaCentro = Math.round(areaPizza);
console.log(areaPizzaCentro);
let precio = 15.45;
let mensaje = `Contamos con una promocion de 3 Pizzas por un valor de ${precio}: Incluye 1 Pizza chica ${areaPizzaAbajo}, 1 Pizza mediana ${areaPizzaCentro} y 1 Pizza grande ${areaPizzaCentro}`;
console.log(mensaje.includes(15));
console.log(mensaje);