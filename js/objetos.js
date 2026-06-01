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




/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: (Mi Perfil Tecnológico)
Crea un objeto llamado laptop.
Agrégale las siguientes propiedades: marca, modelo, procesador y un booleano estaEncendida.
Muestra en consola un Template String que diga: "Tengo una laptop [marca] [modelo] con procesador [procesador]".
Usa un operador ternario para imprimir en consola si la laptop está encendida o apagada.
*/

const laptop ={
    marca: 'Bangho',
    modelo: 2546,
    procesador: 'i7',
    estaEncendida: true
};

(laptop.estaEncendida === true)? console.log(`Tengo una laptop ${laptop.marca} ${laptop.modelo} con un procesador ${laptop.procesador} y esta encendida`) : console.log(`Tengo una laptop ${laptop.marca} ${laptop.modelo} con un procesador ${laptop.procesador} y esta apagada`);

/*
Nivel 2: (El Menú del Restaurante)
Crea un objeto llamado platoEspecial.
Debe tener: nombre (string), precio (número) e ingredientes (un Array con 4 ingredientes).
Muestra el nombre del plato en MAYÚSCULAS.
Muestra en consola el segundo ingrediente del array (recuerda los índices).
Muestra cuántos ingredientes tiene el plato en total usando .length.
Usa un bucle for...of para recorrer el array de ingredientes e imprimirlos uno por uno.
*/

const platoEspecial={
    nombre: 'Plato volador',
    precio: 20,
    ingredientes: ['metal', 'plastico', 'vidrio', 'pegamento']
};

console.log(platoEspecial.nombre.toUpperCase());

console.log(platoEspecial.ingredientes[1]);

console.log(`El plato cuenta con un total de ${platoEspecial.ingredientes.length} ingredientes`);

for(const ingrediente of platoEspecial.ingredientes){
    console.log(ingrediente)
};


/*
Nivel 3: (El Escáner de Propiedades)
Vamos a practicar el recorrido dinámico que viste en la última imagen:
Crea un objeto llamado auto con las propiedades: marca, modelo, año, color y kilometraje.
Usa un bucle for...in para recorrer las claves (keys) del objeto.
Dentro del bucle, muestra en consola un mensaje con este formato: "La propiedad [clave] tiene el valor: [valor]".
Reto Extra: Usa un if dentro del bucle para que, si el valor de la propiedad es de tipo número, le aplique un Math.round() por si acaso tuviera decimales.
*/

const auto ={
    marca: 'Fiat',
    modelo: 'Palio',
    año: 2017,
    color: 'Blanco',
    km: 140000
};

for(const key in auto){
    if (typeof auto[key] === 'number'){
        console.log(`La propiedad ${key} tiene el valor ${Math.round(auto[key])}`);
        
    }else{
        console.log(`La propiedad ${key} tiene el valor ${auto[key]}`);
    }
};