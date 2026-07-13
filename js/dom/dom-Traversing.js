// Recorre el DOM (DOM Traversing)

/*
Padre: parent (Nodo del que deciende)
    - parentNode - Devuelve el nodo padre (Que puede no ser un elemento)
    - parentElement - Devuelve el nodo elemento padre
    *NOTA: Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolvera siempre null.

Hijos: child (Nodo que desciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devuelve el primer nodo hijo
    - firstElementChild - Devuelve el primer nodo elemento hijo
    - lastChild - Devuelve el ultimo nodo hijo
    - lastElementChild - Devuelve el ultimo nodo elemento hijo
    - hasChildNodes() - Devuelve true si el nodo tiene hijos y false si no los tiene

Hermanos: sibling (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling - Devuelve el siguiente nodo elemento hermano
    - previousSibling- Devuelve el nodo hermano anterior
    - previousElementSibling - Devuelve el nodo elemento hermano anterior

Cercano:
    - Closest(selector) - Selecciona el nodo mas cercano que cumpla con el selector.

*/

const parent = document.getElementById('parent');

console.log(parent.parentNode);
console.log(parent.parentElement);

console.log(parent.childNodes);
console.log(parent.children);
console.log(parent.firstChild);
console.log(parent.firstElementChild);
console.log(parent.lastChild);
console.log(parent.lastElementChild);
console.log(parent.hasChildNodes());

console.log(parent.nextSibling);
console.log(parent.nextElementSibling);
console.log(parent.parentElement.nextElementSibling);

console.log(parent.parentElement.previousSibling);
console.log(parent.parentElement.previousElementSibling);


/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: El Salto al Padre (Upwards)
Selecciona el elemento con ID itemCentral.
Desde ahí, navega hasta su padre.
Cámbiale el color de fondo a la lista entera (ul) usando esa navegación.
*/

const punto = document.getElementById('itemCentral');
punto.parentElement.classList.add('a');

/*
Nivel 2: El Detective de Hijos (Downwards)
Selecciona el div con ID contenedorTareas.
Muestra en consola cuántos elementos hijos tiene.
Accede a su primer hijo y cámbiale el texto a: "Sasha's List".
*/

const div = document.getElementById('contenedorTareas');
console.log(div.children.length);
div.firstElementChild.textContent = 'Sasha List';


/*
Nivel 3: El Movimiento de Hermanos (Siblings)
Vuelve a seleccionar el itemCentral.
Accede a su hermano anterior y ponle el color de letra azul.
Accede a su hermano siguiente y ponle el color de letra rojo.
RETO PRO: Selecciona el botón #btnLimpiar. Desde el botón, usa .closest() para buscar al padre que tenga el ID contenedorTareas y agrégale un borde de 5px de color negro.
*/

punto.previousElementSibling.classList.add('letraAzul');
punto.nextElementSibling.classList.add('letraRoja');

const bt = document.getElementById('btnLimpiar');
bt.closest('#contenedorTareas').classList.add('btnTraveling');