/*
DOM (DOCUMENT OBJET MODEL) - MODELO DE OBJETOS DEL DOCUMENTO    // INTRODUCCION

- Se considera DOM a toda la estructura HTML del documento.
- No es Java Script, es una API (Aplicacion Programing Interface) que se utiliza a travez de JS.


NODOS: cada parte del documento se considera un NODO - una etiqueta son un nodo, un comentario es un nodo, un contenido de una etiqueta es un nodo

* Hay varios tipos de nodos, 12 en total, los mas utilizados son:
- Element node - 1 (cualquier etiqueta HTML).
- Text node - 3 (el contenido de la etiqueta).
- Comment node - 8 (Cualquier comentario de HTML)
*/

/*
En la consola del navegador, podemos acceder a un elemento con $0
Y como cada elemento es un objeto podemos acceder a travez del .   // Ej: $0.id   ---  $0.textContent

Como buscar:
- Seleccionamos la etiqueta en el inspector
- En la consola $0 + intro aparece la etiqueta con todo su contenido y a cada elemento podemos acceder como si fuera un objeto con el .

Por ejemplo si tuvieramos seleccionado una etiqueta H1:
- $0.id - accedemos al id de la etiquete
- $0.textContent - accedemos al contenido del H1
- $0.nodeType - no devuleve un 1 porque H1 es un tipo de nodo elemento
- $0.nodeName - nos devuelve H1, el nombre


Para los nodos: SELECCIONAMOS EL ELEMENTO EN CONSOLA
$0.nodeType = nos devuelve 1 (Tipo de nodo elemento) - 3 (nodo de tipo contenido de la etiqueta) - 8 (nodo de tipo comentario)
$0.nodeName = nos devuelve "H1" el nombre de la etiqueta



Si queremos acceder a los demas elementos de la etiqueta: 
- Seleccionamos el elemento, $0 desplegamos y buscamos a que elemento queremos acceder
- Para acceder es como si fuera un array (con el .) (pero no lo es)
- Nuevamente en consola y habiendo buscado el nombre del nodo (elemento) $0.nombre del nodo[0].nodetype

- Lo que hacemos de $0 y desplegar para buscar a lo que queremos acceder, se hace siempre porque es immposible aprender todo de memoria
- Osea vemos la consola para ver como acceder a cada una de las cosas (elementos o nodos), a todo accedemos a travez del .
*/



/*
// Guardamos la lista de todos los hijos del body
const hijos = document.body.childNodes;

for (const nodo of hijos) {
    // Solo imprimimos si es una etiqueta real (tipo 1)
    if (nodo.nodeType === 1) {
        console.log(`Encontré una etiqueta: ${nodo.nodeName}`);
    }
}
*/


/* ******************************** METODOS ***************************** */

/*

* document.getElementById('id') - Acceder a un elemento del documento a traves de su id

* document | element.querySelector('selectorCSS') - Acceder al primer elemento que coincida con el selector CSS (tanto en el document (busca en toda la web) como un element específico (busca solo dentro de esa etiqueta).
- Si buscas una etiqueta: Pones el nombre solo. Ej: document.querySelector('h1').
- Si buscas una clase: Pones un punto adelante. Ej: document.querySelector('.paragraph').
- Si buscas un ID: Pones un hashtag adelante. Ej: document.querySelector('#title').

* document | element.querySelectorAll('selectorCSS') - Acceder a todos los elementos que coincidan con el selector CSS, devuelve un nodeList. (Tanto en el document (busca en toda la web) como un element específico (busca solo dentro de esa etiqueta).

*/

// Los eleentos siempre se guardan en una constante porque no van a cambiar.

const title = document.getElementById('title'); // El parametro es un string por lo tanto va entre comillas, si lo tuvieramos guardado en una variable iria sin cimillas.
console.log(title)  // Muestra en consola la etiqueta a la que accedimos a travez del id, en este caso el H1 con todas sus propiedades.
console.log(title.textContent) // textContent = Es una propiedad que nos permite leer o editar el contenido, de forma dinamica, en el HTML no se modifica.

// Para modificarlo podemos hacer
title.textContent = 'Hola mundo';
console.log(title.textContent)



// *********************************************

const paragraph = document.querySelector('.paragraph'); // Cuando usamos un querySelector lo que tenemos que pasar por parametro es un selector de CSS, no el nombre de la clase, por eso lleva el . adelante
console.log(paragraph);

// Como tenemos selector de CSS (.paragraph en este caso), todos los selectores de CSS llamados .paragraph son validos, lo que podriamos hacer para seleccionar otra clase con el mismo nombre, es usar seudo clases como nth-child(y el numero de elemento que queremos buscar)
/*
Las que mas se usan son:
:nth-child (el numero x)
:first-child (primera)
:last-child (ultima)
*/
const paragraph2 = document.querySelector('.paragraph:nth-child(2)');
console.log(paragraph2);


// *********************************************

const paragraph3 = document.querySelectorAll ('.paragraph');
console.log(paragraph3);
// Arroja un nodeList

// Para convertirlo en array y poder trabajarlo, podemos usar el Spread Operator aun no funciona en todos los navegadores
const paragraphSpread = [...document.querySelectorAll ('.paragraph')];
paragraphSpread.map(p => p.style.color = 'green');


// O podemos usar el metodo Array.from
const paragraphArray = Array.from(document.querySelectorAll ('.paragraph'));
paragraphArray.map(p => p.style.color = 'red');