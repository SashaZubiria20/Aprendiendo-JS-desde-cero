/*
Insertar y eliminar elementos II

    parent.insertBefore(newElement, referenceElement) - Insertar un elemento nuevo, antes del elemento de referencia, recibe dos parametros, el elemento nuevo y el elemento de referencia.

    * SOPORTE TOTAL:
    - parent.insertAdjacentElement(position, element)
    - parent.insertAdjacentHTML(position, HTML)
    - parent.insertAdjacentText(position, text)

* positions:
    - beforebegin - Antes de que empiece (hermano anterior)
    - afterbegin - Despues de que empiece (primer hijo)
    - beforeend - Antes de que acabe (ultimo hijo)
    - afterend - Despues de que acabe (hermano siguiente)

parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/


const list1 = document.getElementById('list1');
const newElement = document.createElement('li');
newElement.textContent = 'Soy el elemento nuevo';

/********************* PARA INSERTAR UN ELEMENTO CON ELEMENTO DE REFERENCIA **********************/

// Si usamos el metodo appendChild, siempre se va a colocar en el ultimo lugar
list1.appendChild(newElement);
// Para incertar donde queramos
list1.insertBefore(newElement, list1.children[1]);


/************************ MAS METODOS PARA INSERTAR ELEMENTOS CON POSICIONES *******************/
// Como list1 es el padre (la ul) y lo estamos colocando como hermano anterior (beforebegin), queda por fuera
list1.insertAdjacentElement('beforebegin', newElement);
// Para que quede por dentro
list1.children[0].insertAdjacentElement('beforebegin', newElement);


list1.insertAdjacentElement('afterbegin', newElement);
list1.insertAdjacentElement('beforeend', newElement);

// Como list1 es el padre (la ul) y lo estamos colocando como hermano posterior (afterend), queda por fuera
list1.insertAdjacentElement('afterend', newElement);
// Para que quede por dentro
list1.children[0].insertAdjacentElement('afterend', newElement);


/*********************** NO SE USAN MUCHO PERO PARA INSERTAR TEXTO O HTML********************/
list1.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>');
list1.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>');
list1.children[2].insertAdjacentText('afterend', 'Hola');


/******************** METODO PARA REEMPLAZAR UN HIJO CON OTRO *****************************/

list1.replaceChild(newElement, list1.children[0]);



// En las ultimas actualizaciones de JS vinieron estos metodos que son los mismos que se usaban en JQuery
/*
DOM manipulation convenience methods - JQuery like
https://caniuse.com/#search=jQuery-like

// * Metodos para colocar elementos
    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - Despues de que empiece (primer hijo)
        parent.append() - Antes de que acabe (ultimo hijo)
        parent.after() - Despues de que acabe (hermano siguiente)

// * Metodos para reemplazar elementos
        child.replaceWith(newChild)
*/

list1.children[0].before(newElement);
list1.prepend(newElement);
list1.append(newElement);
list1.children[0].after(newElement);

list1.children[0].replaceWith(newElement);



/*
    Clonar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos.
        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

list1.after(list1.cloneNode(true));

list1.remove()

list1.removeChild(list1.children[0])




/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: El Clonador Serial (cloneNode + append)
Selecciona el botón #btnClonar y agrégale un evento de click.
Cada vez que se haga clic, selecciona el #itemReferencia, clónalo (con todo su contenido) y agrégalo al final del #contenedorPrincipal.
Reto: El clon debe aparecer abajo del original.
*/

const btn = document.getElementById('btnClonar');
const conte = document.getElementById('contenedorPrincipal');
const itm = document.getElementById('itemReferencia');

btn.addEventListener('click', () => {
    const nuevoClon = itm.cloneNode(true);
    nuevoClon.removeAttribute('id');
    conte.append(nuevoClon);
});

/*
Nivel 2: La Transformación (replaceWith)
Selecciona el botón #btnReemplazar.
Al hacer clic, crea un nuevo elemento div que diga "¡OFERTA LIMITADA!" con fondo rojo y letras blancas.
Usa el método moderno replaceWith para quitar el #itemReferencia y poner tu nuevo div de oferta en su lugar.
*/

const btnRem = document.getElementById('btnReemplazar');
const div1 = document.getElementById('itemReferencia');

btnRem.addEventListener('click', () => {
    const div2 = document.createElement('div');
    div2.classList.add('div2EjerciciosClon');
    div2.innerHTML = '<h2>OFERTA LIMITADA!</h2>';
    div1.replaceWith(div2);
});


/*
Nivel 3: El Guardián del Orden (insertAdjacent + remove)
Selecciona el #itemReferencia.
Usa insertAdjacentHTML con la posición 'beforebegin' para insertar un párrafo que diga: "--- Inicio del Inventario ---".
Lógica Pro (Delegación): Agrega un evento de clic al #contenedorPrincipal. Si el usuario hace clic en un botón que tenga la clase .btnEliminar, el elemento padre de ese botón (la tarjeta completa) debe borrarse usando el método .remove().
Ayuda: Usa lo que aprendimos de e.target y closest() o parentElement.
*/

div1.insertAdjacentHTML('beforebegin', '<p>--- Inicio del Inventario ---</p>');
const contenedor = document.getElementById('contenedorPrincipal');

contenedor.addEventListener('click', (e) =>{
    if (e.target.classList.contains('btnEliminar')) {
        e.target.parentElement.remove();
        console.log("Producto eliminado del inventario");
    }
});
