// Se utiliza cuando una condicion va a ser true o false, al igual que el if
// Su ejecucionpuede tener una o varias sentencias, en este caso iran separadas por comas y entre parentesis
// Sintaxis:
// (condicion) ? true (se escribe lo que va a pasar en el caso de que sea true) : false (se escribe lo que va a pasar en el caso de que sea false)
// (condicion) ? (en el caso de que sean varias sentencias se separan por ,)
    // (primera sentencia,
    // segunda sentencia)
    // :
    // (primera sentencia,
    // segunda sentencia)


let n5 = 2;

(n5 % 2 == 0) ? console.log(`${n5} es par`) : console.log(`${n5} es impar`);

(n5 % 2 == 0) ? 
    (console.log(`${n5} es par`),
    console.log(`${n5} es par 2`))
:
    console.log(`${n5} es impar`);



/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: (El validador de acceso)
Declara una variable edad con un número.
Usa un operador ternario para mostrar en consola "Puede pasar" si es mayor o igual a 18, o "Acceso denegado" si es menor.
El resultado del ternario debe guardarse en una variable llamada estado y luego imprimirse.
*/

let edad = 25;

let estado = (edad>=18)? 'Puede pasar' : 'Acceso denegado';
console.log(estado);

/*
Nivel 2: (El detector de nombres largos)
Crea una variable nombreUsuario con un nombre cualquiera (ej: " Sasha ").
Limpia los espacios del nombre.
Usa un operador ternario para evaluar si la longitud del nombre es mayor a 5 caracteres.
Si es mayor a 5: El resultado debe ser el nombre en MAYÚSCULAS.
Si es 5 o menor: El resultado debe ser el nombre en minúsculas.
Muestra el resultado final usando un Template String.
*/

let nombreUsuario = '  pedro  ';
let nombreUsuarioLimpio = nombreUsuario.trim();

let usuario = (nombreUsuarioLimpio.length>5)? nombreUsuarioLimpio.toUpperCase() : nombreUsuarioLimpio.toLowerCase();

console.log(`Resultado: ${usuario}`);

/*
Nivel 3: (El mini-juego de daño crítico)
Vamos a usar la sintaxis de varias sentencias que viste en tu imagen (usando paréntesis y comas):
Genera un número aleatorio entre 1 y 20 y guárdalo en ataque.
Usa un operador ternario para evaluar si el ataque es mayor o igual a 15 (un golpe crítico).
Si es crítico (True): (Muestra un mensaje que diga "¡GOLPE CRÍTICO!", multiplica el valor de ataque por 2).
Si no es crítico (False): (Muestra un mensaje que diga "Golpe normal", mantén el valor de ataque igual).
Al final de todo, muestra un mensaje que diga: "Daño final causado: [valor de ataque]".
*/

let ataque = Math.round(Math.random()*(20-1)+1);

(ataque>=15)?
    (ataque *= 2,
    console.log('GOLPE CRÍTICO!'))
    :
    (console.log('Golpe normal!'));

console.log(`Daño final causado: ${ataque}`);