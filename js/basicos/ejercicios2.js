/*
Nivel 1:  (Fundamentos y Strings)
Crea un programa que pida al usuario su nombre y su edad.
Limpia el nombre (quitar espacios y poner primera mayúscula).
Usa el objeto Math para generar un "Número de socio" aleatorio entre 1000 y 9999.
Muestra en consola un mensaje usando Template Strings que diga: "Bienvenido [nombre]. Tu ID de socio es [ID]. El próximo año tendrás [edad + 1] años".
*/

let nombre = prompt('Introduzca su nombre');
let edad = parseInt(prompt('Introduzca su edad'));
let nombreOk = nombre.trim()[0].toUpperCase() + nombre.trim().slice(1).toLowerCase();
let num = Math.floor(Math.random()*(9999-1000+1))+1000;
console.log(`Bienvenido ${nombreOk}. Tu ID de socio es ${num}. el proximo año tendras ${edad+1} años`);


/*
Nivel 2: (Lógica y Bucles)
Crea un array llamado numeros con 6 números elegidos por ti.
Usa un bucle for...of para recorrerlo.
Dentro del bucle, usa un operador ternario para imprimir en consola si cada número es "Par" o "Impar".
Reto Extra: Al final, usa un método de array para añadir un nuevo número al principio y otro al final, y muestra el array invertido (reverse).
*/

let numeros = [35, 64, 12, 68, 34, 58];

for(const num of numeros){
    (num%2===0)? console.log(`El numero ${num} es par`) : console.log(`El numero ${num} es impar`);
}
numeros.unshift(8);
numeros.push(7);
console.log(numeros.reverse());


/*
Nivel 3: (Objetos y Funciones)
Crea un objeto literal llamado billetera que tenga: usuario (string) y saldo (número).
Crea una Arrow Function llamada procesarPago que reciba un monto por parámetro.
Dentro de la función, usa un if-else:
Si el saldo es suficiente: Resta el monto al saldo y retorna un mensaje de éxito con el nuevo saldo.
Si no alcanza: Retorna un mensaje de error.
Llama a la función, guarda el resultado en una variable e imprímela.
*/

let monto = parseInt(prompt(`Introduzaca un monto a retirar`));

const billetera ={
    usuario: 'Pepe',
    saldo: 20
};

const procesarPago = (monto) => {
    if(billetera.saldo>=monto){
        billetera.saldo = billetera.saldo-monto;
        return `${billetera.usuario}, retiro $${monto} con éxito y su saldo actual es de$${billetera.saldo}`;
    }else{
        return `${billetera.usuario}, el saldo no es suficiente, su saldo actual es de $${billetera.saldo}`;
    }
};

let respuesta = procesarPago(monto);
console.log(respuesta);


/*
Nivel 4: (Arquitectura de Clases)
Crea una clase llamada Libro.
El constructor debe recibir: titulo, autor y paginas.
Agrega un método llamado resumen que retorne: "[titulo] es una obra de [autor] y tiene [paginas] páginas".
Instancia (crea) 2 libros reales.
Usa un if para comparar cuál de los dos libros tiene más páginas y muestra en consola el resumen del libro más largo.
*/

class Libro{
    constructor(titulo, autor, paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    resumen(){
        return `${this.titulo} es una obra de ${this.autor} y tiene ${this.paginas} páginas`;
    }
};

const libro1 = new Libro ('a', 'a', 150);
const libro2 = new Libro ('b', 'b', 250);

if(libro1.paginas>libro2.paginas){
    console.log(libro1.resumen());
}else{
    console.log(libro2.resumen());
};


/*
Nivel 5: (El Sistema Total)
Vamos a combinarlo TODO (Clases + Arrays de Objetos + Bucles + Math + Funciones):
Crea una clase Producto con: nombre, precio y categoria.
Crea un Array llamado carrito y llénalo con 3 instancias (usando new) de la clase Producto. (Asegúrate de que uno sea categoría "Tecnología").
Crea una función llamada finalizarCompra que reciba el carrito.
Dentro de la función:
Recorre el array con un bucle.
Usa un switch para evaluar la categoría: Si es "Tecnología", aplica un 15% de descuento al precio (usando lo que sabes de this.precio).
Imprime el nombre de cada producto y su precio procesado.
Al final, la función debe retornar la suma total de todos los precios ya procesados.
Muestra el resultado final con un mensaje elegante en la consola.
*/

class Producto{
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
};

let carrito = [
    new Producto ('television', 1500, 'tecnologia'),
    new Producto ('frasada', 500, 'hogar'),
    new Producto ('estufa', 2000, 'calefaccion'),
];

const finalizarCompra = (carrito) =>{
    let total = 0;
    for(const producto of carrito){
        let precioActual = producto.precio;
        switch(producto.categoria){
            case 'tecnologia':
                precioActual = precioActual - (precioActual*15)/100;
                break;
            default:
        }
        total += precioActual;
        console.log(`Producto ${producto.nombre} | Precio $${precioActual}`);
    }
    return `La suma total de todos los producto es $${total}`;
}

console.log(finalizarCompra(carrito));