// se utiliza para elegir un camino de varios preestablecidos. Tenemos 2 tipos principales:

// * Sintaxis simple:
// switch(evaluacion){
//    case n1:
//    //codigo
//    breack;
//    case n2:
//    //codigobreack;
//    default:
//    //codigo
// }

// * Sintaxis multiple:
//     switch(evaluacion){
//         case n1:
//         case n2:
//         case n3:
//         //codigo;
//         breack;
//         default:
//         //codigo
//     }

/*

let n4 = 2;

switch(n4){
    case 1: 
        console.log(`${n4} tiene el valor 1`);
        break;
    case 2:
        console.log(`${n4} tiene el valor 2`);
        break;
    default:
        console.log(`${n4} no es ni 1 ni 2`);
        break;
}

switch(n4){
    case 1:
    case 3:
    case 5:
        console.log(`${n4} es impar`);
    break;
    case 2:
    case 4:
        console.log(`${n4} es par`);
}
*/


/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: (El Planificador de Menú)
Declara una variable diaSemana con el nombre de un día (ej: "Lunes").
Crea un switch que evalúe esa variable.
Configura casos para al menos 3 días distintos y que impriman qué hay de almorzar (ej: "Hoy toca pizza").
Agrega un caso default que diga: "Día no válido o no tenemos menú para hoy".
*/

let diaSemana = 'Martes';

switch (diaSemana){
    case 'Sabado': console.log(`Hoy toca asado`);
    break;
    case 'Miercoles': console.log(`Hoy toca arroz con pollo`);
    break;
    case 'Jueves': console.log(`Hoy toca milanesas`);
    break;
    default:
        console.log(`Hoy hacemos dieta`);
}

/*
Nivel 2: (Cajero Automático "Sasha-Bank")
Declara una variable saldo inicial de 500.
Declara una variable opcion con un texto que el usuario "escribiría" (ej: " RETIRO ").
Limpieza: Antes del switch, limpia la variable opcion (quitar espacios y pasar a minúsculas).
Crea un switch para evaluar la opcion:
Caso "deposito": Suma 100 al saldo y muestra el total.
Caso "retiro": Resta 50 al saldo y muestra el total.
Caso "consultar": Solo muestra el saldo actual.
default: "Operación no reconocida".
*/


let saldo = 500;
let opcion = prompt(`Introduzca una opcion: deposito, retiro, consultar`);
let opcionLimpia = opcion.trim().toLowerCase();

switch(opcionLimpia){
    case 'deposito':
        saldo = saldo+100;
        console.log(saldo);
    break;
    case 'retiro':
        saldo = saldo-50
        console.log(saldo);
    break;
    case 'consultar': console.log(saldo);
    break;
    default: console.log(`Opcion no reconocida`);
}


/*
Nivel 3: (El Oráculo de la Suerte - Switch Múltiple)
Vamos a usar la sintaxis múltiple (agrupar casos) que viste en la imagen:
Genera un número aleatorio entre 1 y 10 usando Math y guárdalo en numeroSuerte.
Crea un switch para evaluar ese número:
Agrupa los casos 1, 2 y 3: Muestra el mensaje: "¡Mala suerte! Perdiste tus monedas.".
Agrupa los casos 4, 5 y 6: Muestra el mensaje: "Suerte media. Recuperas lo apostado.".
Agrupa los casos 7, 8 y 9: Muestra el mensaje: "¡Gran suerte! Ganaste un premio.".
Caso 10: Muestra el mensaje: "¡JACKPOT! Te llevas el premio mayor.".
Al final, usa un Template String para mostrar: "Tu número fue [numeroSuerte] y el resultado es: [mensaje del switch]".
(Pista: puedes guardar el mensaje en una variable dentro de los casos y mostrarla al final de todo).
*/

let numeroSuerte = Math.round(Math.random()*(10-1)+1);
let mensaje

switch(numeroSuerte){
    case 1:
    case 2:
    case 3:
        mensaje = 'Mala suerte! Perdiste tus monedas.';
        break;
    case 4:
    case 5:
    case 6:
        mensaje = 'Suerte media. Recuperas lo apostado.';
        break;
    case 7:
    case 8:
    case 9:
        mensaje = 'Gran suerte! Ganaste un premio.';
        break;
    case 10:
        mensaje = 'JACKPOT! Te llevas el premio mayor.';
        break;
        default:
}
console.log(`Tu número fue ${numeroSuerte} y el resultado es: ${mensaje}`);