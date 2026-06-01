/* Introduccion a Eventos

* Un evento es cualquier cosa que suceda en nuestro documento. No solo es cualquier interaccion del usuario
  - El contenido se ha leído.
  - El contenido se ha cargado.
  - El usuario mueve el raton.
  - El usuario pulsa una tecla.
  - La ventana se ha cerrado.
  - Etc.

* Antes:
  <p onclick = "saludo()">Soy un parrafo </p> // Esto ya no se hace

* En Angular se usa este tipo de sintaxis:
  <p (click) = "saludos()">Soy un parrafo </p>

* Ahora:
  Element.addEventListener('event', callback)

- Eement: el elemento al que queremos añadir al evento
- addEventListener: un escuchador de Eventos
- parametro 1 event: el evento que queremos escuchar, por ejemplo un click
- callback: Funcion que se ejecuta cuando se dispara el evento
*/

/*
* Eventos de ratón:
  - click = cuando pulsamos el botón izquierdo del raton
  - dblclick = cuando pulsamos dos veces seguidas el botón izquierdo del raton
  - mouseenter = cuando entramos a la zona que tiene el evento
  - mouseleave = cuando salimos de la zona que tiene el evento
  - mousedown = cuando pulsamos el botón izquierdo del ratón
  - mouseup = cuando soltamos el botón izquierdo del raton
  - mousemove = cuando movemos el raton

* Eventos de teclado:
  - keydown = cuando pulsamos una tecla
  - keyup = cuando soltamos una tecla
  - keypress - cuando pulsamos una tecla y no la soltamos

*/


const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');


button.addEventListener('click', () => {
  console.log('hola');
});

/*
box.addEventListener('mouseenter', () => {
  box.style.background='red'
});

box.addEventListener('mouseleave', () => {
  box.style.background='green'
});
*/
// Forma recomendada
box.addEventListener('mouseenter', () => {
  box.classList.add('green');
});
box.addEventListener('mouseleave', () => {
  box.classList.replace('green', 'red');
});

box.addEventListener('mousedown', () => {
  console.log('Pulsaste en la caja');
});

box.addEventListener('mouseup', () => {
  console.log('soltaste el click en la caja');
});

box.addEventListener('mousemove', () => {
  console.log('Moviste el mouse');
});

//--------
input.addEventListener('keydown', () => {
  console.log('Has pulsado una tecla')
})

input.addEventListener('keyup', () => {
  console.log('Has soltado una tecla')
})

input.addEventListener('keypress', () => {
  console.log('Has pulsado una tecla')
})

/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: El Portero (Click simple)
Selecciona el botón por su ID.
Agrégale un addEventListener para el evento 'click'.
Dentro de la función, haz que al hacer clic, el botón cambie su texto a "¡Me tocaste!" y se le agregue una clase CSS (que ya tengas creada) para cambiar su color.
*/
const boton = document.getElementById('btn-magico');

boton.addEventListener('click', () =>{
  boton.textContent = 'Me tocaste!';
  boton.classList.add('red');
});

/*
Nivel 2: El Espía de Teclado (Input + Condicionales)
Selecciona el input.
Escucha el evento 'input' (este se dispara cada vez que escribes una letra).
Lógica: Si el largo del texto (.value.length) es mayor a 5, cambia el borde del input a verde usando .style.borderColor. Si es menor, ponlo en rojo.
Muestra en el párrafo #mensaje cuántos caracteres faltan para llegar a 10.
*/

const inp = document.getElementById('campo-texto');
const mensaje = document.getElementById('mensaje');

inp.addEventListener('input', () =>{
  const longitud = inp.value.length;

  if(longitud>5){
    inp.style.borderColor = 'green';
}else{
    inp.style.borderColor = 'red';
}
const restantes = 10-longitud;
mensaje.textContent = `Te faltan ${restantes} caracteres para llegar a 10`;
});

/*
Nivel 3: El Transformador Pro (Mouse + Lógica de Array)
Vamos a usar un array de colores: const colores = ["red", "blue", "green", "yellow", "purple"];
Selecciona la #caja.
Escucha el evento 'mouseenter' (cuando el mouse entra).
Cada vez que el mouse entre, elige un color aleatorio del array (puedes usar Math.random y Math.floor que vimos antes) y aplícalo al background de la caja.
Escucha el evento 'dblclick' (doble clic) sobre la caja y haz que desaparezca (puedes usar display: none o una clase).
*/

const colores = ["red", "blue", "green", "yellow", "purple"];
const caja = document.getElementById('caja');

caja.addEventListener('mouseenter', () =>{
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    caja.style.backgroundColor = colores[indiceAleatorio];
});

caja.addEventListener('dblclick', () => {
  caja.style.display = 'none';
});