/*
Crear un elemento es lo mismo que crear una etiqueta y se crea en el documento, por eso el metodo createElement siempre va precedido por document

- Crear un elemento: document.createElement(element)
- Escribir texto en un elemento: element.textContent = texto
- Escribir HTML en un elemento: element.innerHTML = codigo HTML

- Añadir un elemento al DOM: parent.appendChild(element)

- Fragmentos de codigo: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const title = document.getElementById('title4');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');


// Crear elemento
const itemList = document.createElement('LI');


// Escribir texto en un elemento
itemList.textContent = 'Lunes';


// Añadir elemento a la lista. Siempre que queramos añadir un elemento, se añade al padre, en este caso dayList representa la ul en HTML
daysList.appendChild(itemList);


//***********************************************


// Escribir HTML en un elemento
// si usamos la propiedad textContent el navegador interpreta todo como texto
title4.textContent = 'Hola <span>JavaScript</span>';
// Para insertar una etiqueta de HTML y que el navegador las interprete, debemos usar la propiedad innerHTML
title4.innerHTML = 'Hola <span>JavaScript</span>';


//***********************************************

// Para insertar los elementos del array en la lista
// Como lo hacen ahora pero gasta muchos recursos

/*
for (const day of days) {
    daysList.innerHTML += `<li>${day}</li>`;
}
*/

// Para eso se creo el metodo createDocumentFragment()
// Primero debemos crear un fragmento de codigo, que es una variable o un contenedor donde vamos a escribir todo el HTML que queremos insertar en todo el documento, una vez que lo tenemos, inyectamos todo el codigo de golpe. Asi le ahorramos recursos al navegador.

const fragment = document.createDocumentFragment()

for (const day of days) {
    const itemList = document.createElement('LI');
    itemList.textContent = day;
    fragment.appendChild(itemList);
};

daysList.appendChild(fragment);
console.log(fragment);


//***********************************************

// Para rellenar el select

const fragment2 = document.createDocumentFragment()

for (const day of days){
    const selectItem = document.createElement('OPTION');
    selectItem.setAttribute('value',day.toLowerCase()); // Cuando tratamos con un OPTION, tenemos que tocar el value, es lo que se envia cuando estamos trabajando con un lenguaje de backend, por ejemplo cuando se envian los formularios y el valor que lee es el Value. Como tenemos que enviar un valor, le asignamos el atributo value, y le enviamos el valor, en este caso lo de la variable day. Cuando se envian valores, no deben ser en mayusculas, por eso el toLowerCase()
    selectItem.textContent = day;
    fragment2.appendChild(selectItem);
};

selectDays.appendChild(fragment2);

/******************************************EJERCICIOS**********************************************/
/*
Nivel 1: El Título Dinámico (Creación simple)
Selecciona el div con ID.
Crea un elemento de tipo <h3>.
Ponle de texto tu nombre: "Programador: [Tu Nombre]".
Usa appendChild para meterlo dentro del contenedor.
*/

const contenedor = document.getElementById('contenedorTarjeta');

const name = document.createElement('H3');
name.textContent = 'Programador: Sasha Zubiria';
contenedor.appendChild(name);

/*
Nivel 2: El Muro de Habilidades (Array + Fragmento)
Tienes este array de tus habilidades actuales:
const skills = ['JavaScript', 'HTML5', 'CSS3', 'Git', 'Lógica de Programación'];
Selecciona la lista #lista-skills.
Crea un DocumentFragment.
Recorre el array skills con un bucle forEach.
Por cada skill: crea un <li>, ponle el texto de la skill y mételo al fragmento.
Final: Inyecta el fragmento completo en la lista #lista-skills.
*/

const skills = ['JavaScript', 'HTML5', 'CSS3', 'Git', 'Lógica de Programación'];
const lista = document.getElementById('listaSkills');
const fragment3 = document.createDocumentFragment()

skills.forEach((skill) => {
    const item = document.createElement('LI');
    item.textContent = skill;
    fragment3.appendChild(item);
});

lista.appendChild(fragment3);

/*
Nivel 3: El Selector de Lenguajes (Objetos + Atributos + Interacción)
Usa este array de objetos:
const lenguajes = [{id: 1, texto: 'JavaScript'}, {id: 2, texto: 'Python'}, {id: 3, texto: 'Java'}];
Selecciona el #selectLenguajes.
Usa un fragmento para crear etiquetas <option> para cada lenguaje.
Lógica: El texto de la opción debe ser la propiedad texto, y el atributo value debe ser el id.
RETO PRO: Agrega un evento change al select para que, al elegir un lenguaje, se muestre una alerta que diga: "Has seleccionado el lenguaje con ID: [id seleccionado]"
*/

const lenguajes = [
    {id: 1, texto: 'JavaScript'}, 
    {id: 2, texto: 'Python'}, 
    {id: 3, texto: 'Java'}
];

const select = document.getElementById('selectLenguajes');
const fragment4 = document.createDocumentFragment();

for (const leng of lenguajes){
    const selectLeng = document.createElement('OPTION');
    selectLeng.textContent = leng.texto;
    selectLeng.setAttribute('value', leng.id);
    fragment4.appendChild(selectLeng);
};

select.appendChild(fragment4);

select.addEventListener('change', () => {
    alert(`Has seleccionado el lenguaje con ID: ${select.value}`);
});