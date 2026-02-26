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