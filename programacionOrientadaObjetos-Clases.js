// ************************OBJETOS**************************:

/* Conceptos fundamentales:
- Clases: Plantilla que sirve como molde para crear objetos.
- Herencia: 
- Objeto: 
- Metodo: 
- Evento: 
*/

/*
* Clases: Plantilla que sirve como molde para crear objetos.
- Necesitamos una funcion constructora. Se tiene que llamar constructor y se ejecuta cada vez que creemos un objeto.
- Las clases se nombran con mayuscula por convenciones (se recomienda)
- Despues creamos la funcion constructora (constructor) y entre parentesis pasamos los parametros que son las propiedades que va a tener el objeto (despues se pueden agregar mas).
- Para asignar esos valores al objeto se usa la palabra reservada THIS. Con this estamos haciendo referencia al objeto que creamos.

This se podria traducir como:
- nombre del objeto = nombre del parametro
- apellido del objeto = apellido del parametro
- edad del objeto = edad del parametro

class Persona{
    Constructor(nombre, apellido, edad){
    
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    }
}

Se le pueden asignar propiedades que no haya en los parametros, pero siempre utilizando this para referenciar al objeto:
this.datos = `${nombre} ${apellido} ${edad}`
*/


// ************************METODOS**************************:

/*
- Los metodos son las funciones de los objetos. Es decir que son funciones pero que pertenecen al objeto.
- Dentro de la clase pero fuera del constructor, podemos crear un metodo asociado al objeto.

saludar() {
    return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`;
}
*/

// ************************CREACION DE OBJETOS**************************:
/*
- Para crear un objeto utilizando la clase (plantilla) se hace con la palabra reservada new y el nombre de la clase que queremos utilizar.

const juan = new Persona('Juan', 'Garcia', 23)

- Una vez INSTANCIADO (creado) el objeto podemos acceder a sus propiedades y metodos utilizando la nomenclatura del punto o buscando su propiedad en el objeto.

jua.nombre                          juan['nombre']
jua.apellido                        juan['apellido']
jua.edad                            juan['edad']
jua.datos                           juan['datos']
jua.saludar()                       juan['saludar']()
*/

/*
class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }

    saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`
    }
}

const juan = new Persona ('Juan', 'Garcia', 25)
const maria = new Persona ('Maria', 'Garcia', 35)

console.log(juan);
console.log(juan.saludar());
console.log(maria.saludar());
*/





// ************************EJERCICIOS**************************

/*
Crea una clase Libro.
La clase libro tendra titulo, autor, año y genero.
Crea un metodo que devuelva toda la informacion del libro.
Pide 3 libros y guardalos en un array.
Los libros se introduciran al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacios.
Validar que el año sea un numero y que tenga 4 digitos.
Validar que el genero sea: aventuras, terror o fantasia.
Crea una funcion que muestre todos los libros.
Crea una funcion que muestre los autores ordenados alfabeticamente.
Crea una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando el metodo que devuelve la informacion
*/

/*
class Book{
    constructor(title, author, year, gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    bookInfo(){
        return `${this.title}, es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`
    }

    getAuthor(){
        return this.author
    }

    getGender(){
        return this.gender
    }
}

let books = []

while(books.length<3){
    let title = prompt(`Introduce el titulo del libro`)
    let author = prompt(`Introduce el autor del libro`)
    let year = prompt(`Introduce el año del libro`)
    let gender = prompt(`Introduce el genero del libro`).toLowerCase()

    if(title != '' && author != '' && !isNaN(year) && year.length == 4 && (gender=='aventura' || gender=='terror' || gender=='fantasía')){
    
    books.push(new Book(title, author, year, gender))

    }
}

const showAllBooks = () => {
    console.log(books);
}

const showAuthors = () => {
    let authors = []

    for(const book of books){
        authors.push(book.getAuthor());
    }
    console.log(authors.sort());
}

const showGender = () => {
    const gender = prompt(`Introduce el genero a buscar`)

    for(const book of books){
        if (book.getGender() == gender){
            console.log(book.bookInfo())
        }
    }
}

showAllBooks()
showAuthors()
showGender()

*/


/******************************************EJERCICIOS**********************************************/


/*
Nivel 1: (El Molde de Personajes)
Crea una clase llamada Personaje.
El constructor debe recibir: nombre, clase (guerrero, mago, etc.) y nivel.
Crea un método llamado describir que retorne un Template String: "Soy [nombre], un [clase] de nivel [nivel]".
Instancia (crea) dos personajes distintos y muestra en consola el resultado de llamar al método describir de cada uno.
*/

class Personaje{
    constructor(nombre, clase, nivel){
        this.nombre = nombre
        this.clase = clase
        this.nivel = nivel
    }
    descubrir(){
        return `Soy ${this.nombre}, un clase ${this.clase} de nivel ${this.nivel}`;
    }
}

const personaje1 = new Personaje ('Clark', 'Guerrero', 10);
const personaje2 = new Personaje ('Magda', 'Maga', 15);

console.log(personaje1.descubrir());
console.log(personaje2.descubrir());

/*
Nivel 2: (La Cuenta de Ahorros)
Crea una clase Cuenta.
El constructor recibe: titular y saldo (que empieza en 0 por defecto).
Agrega un método llamado ingresar(cantidad) que sume ese monto al saldo actual.
Agrega un método llamado retirar(cantidad) que reste el monto.
Lógica extra: Usa un if para que, si el saldo es menor a la cantidad que quiere retirar, muestre un error: "Fondos insuficientes".
Crea una cuenta, ingresa 500, retira 200 y muestra el saldo final.
*/


class Cuenta{
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }
    ingresar(cantidad){
        return this.saldo += cantidad
    }

    retirar(cantidad){
        if(this.saldo<cantidad){
            return console.log('Fondos insuficientes');
        }else{
            return this.saldo -= cantidad
        }
    }
}

const cuenta1 = new Cuenta ('Juan', 0);
console.log(cuenta1.ingresar(500));
console.log(cuenta1.retirar(200));
console.log(`El saldo final de la cuenta es ${cuenta1.saldo}`);


/*
Nivel 3: (El Gestor de Concesionaria)
Crea una clase Auto. Debe tener marca, modelo y precio.
Agrega un método aplicarDescuento(porcentaje) que reduzca el precio del auto según el número recibido.
Afuera de la clase, crea un Array llamado concesionaria que contenga 3 instancias (objetos) de la clase Auto.
Usa un bucle for...of para recorrer el array concesionaria.
Dentro del bucle:
Si el precio del auto es mayor a 20.000, aplícale un descuento del 10% usando el método de la clase.
Muestra un mensaje: "Auto: [marca] [modelo] | Precio Final: $[precio]".
*/

class Auto{
    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    aplicarDescuento(porcentaje){
        this.precio = this.precio - (this.precio * porcentaje / 100);
    }
}

let concesionaria = [
    new Auto ('Fiat', 'Palio', 10000),
    new Auto ('Peugeot', '208', 21000),
    new Auto ('Fiat', 'Cronos', 25000)
];

for(const auto of concesionaria){
    if (auto.precio > 20000) {
        auto.aplicarDescuento(10);
    }
    console.log(`Auto: ${auto.marca} ${auto.modelo} | Precio Final: $${auto.precio}`);
};