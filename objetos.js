/* Estructura de datos que represeta propiedades, valores y acciones que puede realizar el objeto
Todos los objetos tienen propiedades o atributos y comportamientos o acciones representados por pares de clave (key) : valor (value)

Para acceder a las propiedades y acciones del objeto se utiliza la nomenclatura del punto
EJ:
const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego']
}
    console.log(person.name);
*/

const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego']
}
console.log(person);
console.log(person['name']);

for(const key in person){
    console.log(key);
}

for(const key in person){
    console.log(person[key]);
}

for(const son in person.sons){
    console.log(son);
}

for(const son of person.sons){
    console.log(son);
}

/* Para imprimir el objeto completo*/
console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(', ')}`);