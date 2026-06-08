/*
Este objeto consiste en darnos informacion sobre el evento
El objeto evento, vive siempre y cuando haya un evento

*/

const form2 = document.getElementById('form2');
const input = document.getElementById('input2');
const boton2 = document.getElementById('boton2');


// Muestra lo que vamos escribiendo
input.addEventListener('keyup', () => {
    console.log(input2.value);
});

// Si ponemos event no siempre funciona en todos los navegadores
input.addEventListener('keyup', () => {
    console.log(event);
});

// Entonces tenemos la opcion de enviar el evento como parametro de la funcion por ejemplo una e (el nombre que queramos)
input.addEventListener('keyup', (e) => {
    console.log(e);
});

// si hacemos .key nos imprime las letras que estan ingresando en el input // es decir el evento accede al elemento referido en e y con . accedemos a su atributo key
input.addEventListener('keyup', (e) => {
    console.log(e.key);
});

// .target es el mas utilizado, ya que nos brinda info de donde se realizo el evento
// Si en algun navegador no funciona console.log se usa console.dir (antes se usaba .log)
boton2.addEventListener('click', (ev) => {
    console.log(ev.target);
});

/******************Evitar que se ejecute el evento*******************/
// Existe un metodo que permite evitar que se ejecute el evento por defecto, por ejemplo a la hs de enviar un formulario para que no se recargue la pagina y no se envie el formulario // cuando trabajamos de forma asincrona y no queremos que se envie el formulario, es decir que no queremos que pase algo por defecto
// Sirve para evitar cualquier comportamiento de HTML por defecto
// preventDefault()

form2.addEventListener('submit', (q) => {
    q.preventDefault();
    console.log('El formulario se ha enviado')
})


/*********************Forzar evento****************/
// Los eventos los podemos escuchar o los podemos forzar:
// Seleccionamos el elemento y le pasamos el evento como funcion
// lo podemos usar cuando queramos que se dispare un evento pero no queremos esperar la intereaccion del usuario
// form2.submit()
// button.click()



/*************************************/
// Vamos a ver la delegacion de eventos, que ayuda al rendimiento de las paginas
// Para saber en cual boton se hizo click y no ahcer un evento por cada uno de los elementos, la forma más recomendada es ponerle la escucha al padre y localizar en cual de los hijos se ha hecho click

const gallery = document.getElementById('gallery')

gallery.addEventListener('click', (a) => {
    // console.log(a.target);
    console.dir(a.target);
});

gallery.addEventListener('click', (a) => {
    // console.log(a.target);
    // console.dir(a.target.textContent);
    if (a.target.classList.contains('gallery__item')) {
        console.dir(a.target.textContent);
}
});

// Los podriamos pintar a medida que se vayan tocando los botones
gallery.addEventListener('click', (a) => {
    // console.log(a.target);
    if (a.target.classList.contains('gallery__item')) {
        a.target.classList.add('green');
    }
});


/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: El Validador Silencioso (preventDefault)
En tu formulario, haz que al intentar enviar (submit), se use preventDefault().
Lógica: Si el input está vacío, muestra un mensaje en consola que diga: "Error: No puedes enviar un campo vacío".
Si tiene texto, que diga: "Datos listos para ser enviados: " + el valor del input.
*/

const form3 = document.getElementById('form3');
const input3 = document.getElementById('input3');

form3.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input3.value === ''){
        console.log('Error: No puedes enviar un campo vacío');
    }else{
        console.log(`Datos listos para ser enviados: ${input3.value}`);
    }
});

/*
Nivel 2: El Portero de la Galería (Delegación con Filtro)
Usa la delegación de eventos en tu gallery.
Lógica: Al hacer clic en un número, en lugar de solo pintarlo de verde, haz que el texto de ese número cambie a la palabra "CLICK".
Importante: Asegúrate con un if de que si haces clic en el espacio vacío (el padre), no pase absolutamente nada.
*/

gallery.addEventListener('click', (a) => {
    if (a.target.classList.contains('gallery__item')) {
        a.target.textContent = 'CLICK';
        a.target.classList.add('green');
    }
});



/*
Nivel 3: El Teclado Inteligente (Objeto Evento Pro)
Escucha el evento keydown en todo el documento (document.addEventListener...).
Reto:
Si el usuario presiona la tecla "r", todos los números de la galería que estén en verde deben volver a su color original (quitar la clase green).
Si presiona la tecla "Enter", muestra una alerta que diga el valor actual de lo que esté escrito en el input.
*/

window.addEventListener('keydown', (a) => {
    if(a.key === 'r' || a.key === 'R'){
        const itemsVerdes = document.querySelectorAll('.gallery__item.green');
        itemsVerdes.forEach(item => {
            item.classList.remove('green');
            item.textContent = item.dataset.numero
        });
        console.log("Galería reiniciada");
    }
    if (a.key === 'Enter') {
        alert(`El valor del input es: ${input3.value}`);
    }
});