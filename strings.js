// ********** Strings
// Propiedades:


// length: devuelve la longitud de la cadena

let cadena = "Hola Mundo";
console.log(cadena.length);

// ********* Metodos
// Todos los metodos devuelven la cadena modificada pero no modifican la original.

// toUpperCase: devuelve la cadena en Mayusculas

console.log(cadena.toUpperCase());
console.log(cadena);

// toLowerCase: devuelve la cadena en Minusculas

console.log(cadena.toLowerCase());

// indexOF(string): Devuelve la posicion en la que se encuentra el string, si no lo encuentra devuelve -1

console.log(cadena.indexOf("a"));
// podemos buscar una letra o la palabra entera, el indice arranca en la posicion 0 por ende de la palabra Hola la "a" se encuentra en la posicion 3


// replace: replace(valor a buscar, valor nuevo) remplaza el fragmento de la cadena que le digamos y pone el nuevo valor
// recibe dos parametros separados por ,

console.log(cadena.replace("Mundo", "Pepe"));

// subtring(inicio [,fin]): extrae los caracteres desde el inicio hasta fin (el final no se incluye). Si no se incluye el fin, extrae hasta el final.
// los parametros separados por , son los lugares desde donde hasta donde queremos que extraiga por ejemplo de 3 a 8, o se puede poner 1 solo parametro

console.log(cadena.substring(3,8));
console.log(cadena.substring(7));

// slice(inicio [,fin]): igual que substring pero admite valores negativos, si ponemos valores negativos empezara desde atras. Muestra de atras hacia adelante

console.log(cadena.slice(-4));
console.log(cadena.slice(1, -2));

// trim: elimina los espacios al inicio y al final de una cadena / no recibe parametros

let cadena2 = "           Hola Mundo como estas?"     ;
console.log(cadena2);
console.log(cadena2.trim());

// startsWith(valor[,inicio]): sirve para saber si la cadena empieza con ese valor o en que posicion esta cierto valor. Devuelve true o false.

console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));
console.log(cadena.startsWith("M", 5));

// endsWith(valor [,longitud]): sirve para saber si la cadena termina con ese valor. Devuelve true o false.

console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("a", 4));
console.log(cadena.endsWith("o", 9));
console.log(cadena.endsWith("Mundo"));

// includes(valor[,inicio]): Igual que indexOf pero devuelve true o false.

console.log(cadena.includes("n"));
console.log(cadena.includes("a", 5));
console.log(cadena.includes("a", 2));

// repeat(valor): repite el string el numero de veces que le indiquemos.

let cadena3 = "Hola";
console.log(cadena3.repeat(2));
console.log("R".repeat(10));



// Template Strings

// Tecla AltGr + dos veces la tecla donde esta el } al lado de la flecha para borrar hace las comillas invertidas ``
// entre las llaves se puede escribir cualquier cosa, operaciones, condicionales, arrays, objetos.

let nombre2 = "Juan";
let apellido2 = "Gomez";
let edad2 = 20;

// asi seria comun
console.log("Hola " + nombre2 + " " + apellido2 + ". Tienes " + edad2 + " años.");
// asi seria con template string
console.log(`Hola ${nombre2} ${apellido2}. Tienes ${edad2} años.`);



/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: (El validador de correos)
Crea una variable email con un correo que tenga espacios accidentales al inicio y al final (ej: " estudiante@js.com ").
Limpia esos espacios usando el método adecuado.
Muestra en consola cuántos caracteres tiene el email ya limpio.
Usa un método para verificar si el email contiene el símbolo @ y muestra el resultado (true o false) en la consola.
*/

let email = '   juanperez@gmail.com'   ;
let emailOk = email.trim();
console.log(emailOk.length);
console.log(emailOk.includes('@'));

/*
Nivel 2: (Formateador de IDs de productos)
Declara una variable codigoBruto con el valor: " prod-123-celular ".
Primero, quita los espacios.
Luego, transforma todo el texto a MAYÚSCULAS.
Ahora, extrae solamente la palabra "CELULAR" (o la parte que corresponda a tu ejemplo) usando slice o substring.
Usa un Template String para mostrar este mensaje: "El producto de categoría [categoría extraída] tiene el código: [código limpio y en mayúsculas]".
*/

let codigoBruto = " prod-123-celular ";
let codigoBrutoOk = codigoBruto.trim();
console.log(codigoBrutoOk);
let codigoMayus = codigoBrutoOk.toUpperCase();
console.log(codigoMayus);
let producto = codigoMayus.slice(9);
console.log(producto);
let codigo = codigoMayus.slice(0,8);
console.log(codigo);

console.log(`El producto de categoría ${producto} tiene el código: ${codigo}`);


/*
Nivel 3: (El generador de facturas inteligente)
Declara una constante articulo con el valor "teclado mecanico".
Crea una variable precioUnitario con un número y otra cantidad con otro número.
Calcula el total (precio * cantidad).
Transformación: Crea una variable nombreFactura que sea el nombre del artículo pero con la primera letra en mayúscula (Pista: tendrás que combinar at(0).toUpperCase() o substring con el resto de la cadena).
Crea un mensaje final usando Template String que diga:
"FACTURA: [nombreFactura] | CANTIDAD: [cantidad] | TOTAL A PAGAR: $[total]"
Finalmente, verifica si ese mensaje final termina con el valor del total y muéstralo por consola (true/false).
*/

const articulo = 'teclado mecanico';

let precioUnitario = 10;
let cantidad = 5;
let total = precioUnitario*cantidad;
let nombreFactura = articulo[0].toUpperCase(0) + articulo.slice(1);
let mensaje = `FACTURA ${nombreFactura} | CANTIDAD ${cantidad} | TOTAL A PAGAR ${total}`;
console.log(mensaje.endsWith(total));
console.log(mensaje);