/*
Expresiones regulares:
    Son una secuencia de caracteres que forman un patron de busqueda, principalmente utilizada para la busqueda de patrones de cadenas de caracteres u operaciones de sustituciones.
    https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

    Sintaxis:
        /patron/
    Banderas:
        i: ignore case. No diferencia entre mayusculas y minusculas
        g: global. Busca de forma global, es decir, no se para despues de la primera coincidencia, distingue entre mayusculas y minusculas.

    www.regex101.com
*/

const text = document.getElementById('text').textContent;
const regEx = /lorem/gi
const regEx2 = /Lorem/g

console.log(regEx.test(text));
console.log(regEx2.test(text));
// Conseguiriamos lo mismo con un metodo de array
console.log(text.includes('Lorem'))



/* Existen otras formas de crear expresiones regulares */
const regEx3 = new RegExp('lorem', 'gi');

console.log(regEx3.test(text));



/*********************************/

/*
Comodines:
        -Sustitución: Define un comodín dentro del patron. El símbolo es el "."
            Equivale a cualquier caracter y se pueden poner tantos . como queramos
            Para validar un . (sin que sea comodin), se pone una \ adelante

        -Listado de caracteres válidos: Entre corchetes se pone una lista de los caracteres válidos. 
        [aeiou] Con esto cogeríamos todas las vocales

        -Rangos: Entre corchetes si ponemos un guión entre dos caracteres establecemos un rango. [a-z] Todas las letras minúsculas.
        Tabla ASCII https://ascii.cl/es/

        -Mezcla entre rangos y listas: 
            Podemos unir los dos anteriores en una sola expresión. [0-5ou] Serían números del 0 al 5, la letra "o" y la letra "u"

        -Cadenas completas:
            Para establecer una cadena completa debe ir entre paréntesis, si queremos más palabras irán separadas por un pipe. (lorem|amet) es válida la palabra "lorem" y la palabra "amet", tambien cuentan los espacios
            ejemplo: [(12)]

    Delimitadores:
        ^ Antes de este símbolo no puede haber nada
        $ Después de este símbolo no puede haber nada
        ^hola$
    Cantidad:
        - llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posibles. 
            {n} Se tiene que repetir n (numero) veces
            {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
            {n,} Se tiene que repetir como mínimo n veces y sin máximo
        ^[a-zA-Z]{1,3}@{1}$
        -asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.  .*@.*\..*
        -interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
            ^[ae]?$ 
        - operador +: lo que está antes del + tiene que estár una vez como mínimo
        A-[0-9]+
    
    Caracteres:
        En mayuscula es para que lo admita y en minuscula que no.
        \s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de linea y retorno de carro. ^[a-zA-Z]+\s[a-zA-Z]+$
        \S: Coincide con todo menos caracteres de espacio ^\S{5}$
        \d: Coincide con un carácter de número. Equivalente a [0-9] ^\d{5}$
        \D: Coincide con cualquier carácter no numérico. Equivalente a [^0-9] ^\D{5}$
        \w: Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_] ^\w+@$
        \W: Coincide con todo menos caracteres de palabra. ^\W+$
*/


/* Libreria */
// <script src="validate.js"></script>

/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: El Extractor
Seleccioná el texto del párrafo parrafoAnalizar.
Crea una RegEx que busque todos los números de 3 dígitos que aparezcan (Pista: el número de pedido).
Muestra el resultado en la consola usando el método .match().
*/

const p = document.getElementById('parrafoAnalizar').textContent;

const regEx3Digitos = /\b\d{3}\b/g;
const resultados = p.match(regEx3Digitos);
console.log(resultados);

/*
Nivel 2: El Reemplazador
Crea una RegEx que detecte las extensiones de los correos (es decir, el .com y el .net).
Usá el método .replace() para que, en lugar de esas extensiones, el texto diga [EXTENSIÓN OCULTA].
Mostrá el párrafo modificado en la consola.
*/

const textoOriginal = document.getElementById('parrafoAnalizar').textContent;

const regExExtensiones = /\.(com|net)/g;
const textoCensurado = textoOriginal.replace(regExExtensiones, '.[EXTENSIÓN OCULTA]');
console.log("Texto censurado:", textoCensurado);



/*
Nivel 3: El Validador de Cupones
Escuchá el evento input en el campo inputPromo.
Regla del cupón: Debe empezar con la palabra PROMO (en mayúsculas), seguir con un guion -, y terminar con 4 números.
Si el usuario escribe algo que coincide exactamente con ese patrón: poné el borde del input en verde (inputValido) y ocultá el error.
Si no coincide: poné el borde en rojo (inputInvalido) y mostrá el mensaje de errorPromo.
Pista: Usá ^ al principio y $ al final del patrón para que sea exacto.
*/

const inputPromo = document.getElementById('inputPromo');
const errorPromo = document.getElementById('errorPromo');

const regExCupon = /^PROMO-\d{4}$/;

inputPromo.addEventListener('input', (e) => {
    const valor = e.target.value;

    if (regExCupon.test(valor)) {
        inputPromo.classList.add('inputValido');
        inputPromo.classList.remove('inputInvalido');
        errorPromo.classList.add('oculto');
        errorPromo.classList.remove('errorVisible');
    } else {
        inputPromo.classList.add('inputInvalido');
        inputPromo.classList.remove('inputValido');
        errorPromo.classList.remove('oculto');
        errorPromo.classList.add('errorVisible');
    }
    
    if (valor === "") {
        inputPromo.classList.remove('inputValido', 'inputInvalido');
        errorPromo.classList.add('oculto');
    }
});