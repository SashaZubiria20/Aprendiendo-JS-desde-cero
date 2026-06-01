/*
Atribustos:
    element.getAttribute('attribute')    // Lo que hace es devolver el atributo / Accede al atributo de cualquier etiqueta
    element.setAttribute('attribute', value)   // Lo que hace es asignarle un valor al atributo  / Modificamos atributos en el DOM

Clases: 
    element.classList.add('class', 'class', ...)        // Podemos añadir clases. 1 o las que necesitemos
    element.classList.remove('class', 'class', ...)     // Podemos eliminar clases
    element.classList.toggle('class'[,force])           // Si tiene una clase se la quita y sino tiene se la pone, se usa mucho en menus de moviles
    element.classList.contains('class')                 // Devuelve true o false, si tiene la clase o no
    element.classList.replace('oldClass', newClass)     // Remplaza una clase por otra

Atributos directos: (Existen muchos mas pero estos son los que mas se usan) nose llaman asi pero el profe dice que se acceden de forma direca y son los que mas se usan
    id
    value
*/

const title3 = document.getElementById('title3');
const name = document.getElementById('name');

// Atributos
console.log(name.getAttribute('type'));
//name.setAttribute('type', 'date');
name.setAttribute('type', 'number');

// Clases
title3.classList.add('main-title'); // Agrega

title3.classList.remove('title3');  // Quita

if(title3.classList.contains('main-title')) console.log('Title tiene la clase main-title')  // Comprueba si existe
    else console.log('Title no tiene la clase main-title')

title3.classList.replace('main-title', 'hola');  // Remplaza una clase

console.log(title3);
console.log(name);

// Atributos directos // no se llaman asi pero son los que no se desplegan en consola
console.log(title3.id)
console.log(title3.innerHTML);   // Devuelve todo el contenido dentro de una etiqueta, con todas las etiquetas dentro del elemento
console.log(title3.textContent); // Devuelve todo el contenido dentro de una etiqueta en texto plano, sin las otras etiquetas

console.log(name.value)   // Cuando queremos validar los campos de un formulario es importante saber que no hay que evaluar el id de la etiqueta, sino el valor, para eso el .value
console.log(name.value.length) // Evaluamos la longitud del valor, para saber si hay algo escrito o no.


/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: (El validador de clases)
Selecciona el título h1 por su ID.
Agrégale una clase llamada "resaltado".
Usa un if con el método .contains() para verificar si la clase se agregó correctamente.
Si existe, muestra en consola: "El título ya tiene su diseño".
*/

const titulo = document.getElementById('titulo');
titulo.classList.add('resaltado');
if(titulo.classList.contains('resaltado')) console.log('El título ya tiene su diseño');
    else console.log('No se agrego la clase');

/*
Nivel 2: (El transformador de Inputs)
Selecciona el input por su ID.
Cambia su atributo placeholder (el texto que sale adentro cuando está vacío) por "Escriba su nombre aquí..." usando setAttribute.
Usa un Operador Ternario para decidir: si el input tiene un ID que incluya la palabra "nombre", cámbiale el atributo type a "text". Si no, cámbialo a "password".
*/

const input = document.getElementById('nombre');
console.log(input);
input.setAttribute('placeholder', 'Escriba su nombre aquí...');
(input.id.includes('nombre'))  ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password');

/*
Nivel 3: (El Auditor Visual de Párrafos)
Vamos a usar Arrays, Bucles y Clases juntos:
Selecciona todos los párrafos que tengan la clase "texto" usando querySelectorAll.
Conviértelos en un Array real (recuerda cómo lo hicimos en el bloque anterior).
Usa el método .forEach() para recorrerlos.
Dentro del bucle:
Si el párrafo tiene más de 20 caracteres (textContent.length), agrégale la clase "texto-largo".
Si tiene 20 o menos, usa .toggle() para ponerle la clase "texto-corto".
Al final, usa un .filter() sobre ese array para mostrar en consola cuántos párrafos terminaron teniendo la clase "texto-largo".
*/

const parrafos = Array.from(document.querySelectorAll ('.texto'));
console.log(parrafos)

parrafos.forEach(parrafo => {
    if(parrafo.textContent.length>20){
    parrafo.classList.add('texto-largo');
}else{
    parrafo.classList.add('texto-corto');
}
});

const totalLargos = parrafos.filter(parrafo => parrafo.classList.contains('texto-largo'));
console.log(`Cantidad de párrafos largos ${totalLargos.length}`);