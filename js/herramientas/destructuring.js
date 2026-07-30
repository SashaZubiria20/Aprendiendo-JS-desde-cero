/* 
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

    La destructuración es una expresión de JavaScript que nos permite sacar datos de arrays u objetos.

    Es una sintaxis que nos permite "desempaquetar" valores de arrays u objetos directamente en variables individuales, de forma mucho más corta.
*/

const person = {
    name: 'Juan',
    age: 20,
    email: 'Juan@gmail.com'
}


// FORMA TRADICIONAL
/*
Con lo que sabemos hasta ahora para sacar los datos deberiamos poner:
    const name = person.name
    const age = person.age
    const email = person.email

    console.log(name, ege, email)
*/


// FORMA DESTRUCTURING
// Con la destructuracion:
// Entre llaves va a el nombre de la svariables que quereos usar y = al objeto al que pertenecen esas propiedades
const {name, age, email} = person

console.log(name, age, email)

/*
Tambien podemos usar asignacion de nombres:

const {name:nombre, age:edad, email} = person

console.log(nombre, edad, email)
*/



// Con los array se usan corchetes
const numbers = [1, 2, 3, 4]

//forma tradicional
console.log(numbers[0])


// Con deswtructurin
const [primeraPosicion] = numbers
console.log(primeraPosicion)
/*
Si quisieramos imprimir la segunda o la tercera habria que poner huecos que rellenen
const [a,b, terceraPosicion] = numbers
console.log(terceraPosicion)
*/



// Destructuramos el parametro para que agarre solo el dato que queremos
const printPerson = ({name}) => {
    console.log(name)
}

printPerson(person)



// Podemos hacer destructurizacion en las peticiones de Axios o cualquier peticions

const getUsers = async () => {
    const {data:users} = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(users)
}

getUsers()
