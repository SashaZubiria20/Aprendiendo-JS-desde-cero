// Operadores:

/*
let a = 5;
let b = 2;

// suma
console.log(a+b);
// resta
console.log(a-b);
// multiplicacion
console.log(a*b);
// division
console.log(a/b);
// modulo
console.log(a%b);

// concatenacion
let nombre = "Juan";
let edad = 25;
let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

// incremento / decremento

let c = 10;
console.log(c);
console.log(++c);

let d = 5;
console.log(d);
console.log(--d);

// Asignacion

let e = 10;
console.log(e);

e += 3;
console.log(e);

e -= 5;
console.log(e);

e *= 5;
console.log(e);

e /= 2;
console.log(e);
*/


/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: 
Declara dos variables de tipo número con los valores 10 y 20. Sumándolas, guarda el resultado en una tercera variable y muéstrala en consola.
Ahora, declara dos variables de tipo texto (string): una con tu nombre y otra con tu apellido. Crea una tercera variable que use el operador + para unirlas en un solo texto (asegúrate de que quede un espacio en blanco entre el nombre y el apellido). Muestra el resultado.
*/

let a = 10;
let b = 20;
let result = a+b;
console.log(result);

let nombre = 'Sasha';
let apellido = 'Zubiria';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

/*
Nivel 2:
Crea un sistema de puntos para un juego:
Declara una variable puntos que comience en 0.
El jugador elimina un enemigo común: usa el operador += para sumarle 10 puntos.
El jugador consigue un multiplicador de daño: usa el operador *= para triplicar sus puntos actuales.
El jugador cae en una trampa: usa el operador -= para restarle 5 puntos.
Muestra en consola el valor de puntos después de cada paso para ver cómo evoluciona.
*/

let puntos = 0;
const eComun = 10;
const mDaño = 3;
const trampa = 5;

/*
console.log(puntos);
puntos = puntos+=eComun;
console.log(puntos);
puntos = puntos*=mDaño;
console.log(puntos);
puntos = puntos -= trampa;
console.log(puntos);
*/

console.log(puntos);
console.log(puntos+=eComun);
console.log(puntos*=mDaño);
console.log(puntos-=trampa);


/*
Nivel 3: 
Imagina que tienes una tienda de dulces:
Declara una variable con el total de dulces que tienes: 26.
Declara otra variable con la cantidad de niños que van a recibir dulces: 5.
Calcula cuántos dulces le tocan a cada niño si los repartes en partes iguales sin romper ninguno (pista: usa la división /). Muestra este resultado.
Calcula cuántos dulces te sobran a ti después de la repartición (pista: usa el operador módulo %). Guarda este residuo en una variable llamada dulcesSobrantes y muéstrala.
*/

let dulces = 26;
let niños = 5;

let repartir = (dulces/niños);
console.log(repartir);

let dulcesSobrantes = dulces%niños;
console.log(dulcesSobrantes);

/*
Nivel 4:
Queremos que entiendas la diferencia exacta entre el pre y el post incremento.
Declara una variable vidas con valor 3.
Imprime en consola vidas++ (observa con atención qué número se muestra).
En la línea de abajo, imprime solo la variable vidas. ¿Qué número se muestra ahora?
Declara otra variable escudos con valor 3.
Imprime en consola ++escudos.
Deja un comentario de una sola línea en tu código explicando por qué el primer caso se comportó diferente al segundo.
*/

let vidas = 3;
console.log(vidas);
console.log(vidas++);
console.log(vidas);

let escudos = 7;
console.log(escudos);
console.log(++escudos);

// En el primer caso vidas se muestra y despues se aumenta, en el caso de escudo, se aumenta y despues se muestra.

/*
Nivel 5:
Diseña el flujo de cobro de una tienda aplicando todo lo aprendido:
Crea una constante con el nombre de un artículo de tecnología.
Crea una variable con el precio de ese artículo.
Crea una variable para llevar el totalAPagar que inicie en 0.
El cliente decide comprar 3 unidades de ese artículo. Calcula el subtotal usando multiplicación y súmalo a la variable totalAPagar usando un operador de asignación compuesta.
El cliente tiene un cupón de descuento de $15. Aplica ese descuento al totalAPagar usando el operador correspondiente.
Muestra un mensaje final en consola que concatene el nombre del producto y el total final a pagar (ejemplo esperado en consola: "El artículo comprado es: [Nombre] y el total a pagar es: $[Total]").
*/

let total = 0;

const articulo = 'Celular';
let precioCelular = 30;
let descuento = 15;

let subTotal = precioCelular*3;
total+=subTotal;
total-=descuento;
console.log(`El articulo comprado es ${articulo} y el total a pagar es de: $${total}`);