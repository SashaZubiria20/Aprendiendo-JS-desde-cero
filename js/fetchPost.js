/*
Fetch API:
    Sirven para enviar datos o hacer inserciones en una api, base de datos, etc.
    Para hacer peticiones POST, fetch admite un segundo parametro:

    fetch(url, {
        method: 'POST',
        body: Los datos que enviamos. Si es un objeto los datos hay que convertirlos con JSON.stringify(datos)
        headers: {
            cabeceras de informacion sobre lo que estamos enviando
            https://developer.mozilla.org/es/docs/web/HTTP/Headers
        }
})

*/

const btn = document.getElementById('buttonFetchPost');

btn.addEventListener('click', () =>{
    const newPost = {
        title: 'A new post',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, similique.',
        userId: 1
    }
    /*
    console.log(newPost); // Aca tenemos los datos en formato objeto
    console.log(JSON.stringify(newPost)); // Pero al igual que cuando nosotros recibimos los datos, no recibimos un objeto, lo que recibimos es un JSON que tenemos que convertir a objeto, al enviarlo tenemos el mismo problema, no podemos enviar un objeto, entonces lo transformamos en un JSON, para que la api lo pueda interpretar
    */
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(newPost),
        headers:{
            'content-type': 'application/json'
        }
    }).then(res=>res.json())
    .then(data=>console.log(data))
});


/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: El Envío Manual
Selecciona el botón #btnSimplePost.
Al hacer clic, crea un objeto llamado data con un title, body y un userId: 1.
Haz un fetch a https://jsonplaceholder.typicode.com/posts usando el método POST.
Recuerda configurar el body con JSON.stringify(data) y los headers con 'Content-type': 'application/json'.
Imprime en consola el objeto que te devuelve la API (debería tener el ID 101).
*/

const botonP = document.getElementById('btnSimplePost');

botonP.addEventListener('click', () => {
    const data1 = {
        title: 'Hola soy un post',
        body: 'Este es el contenido del post.',
        userId: 1
    }
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(data1),
        headers:{
            'content-type': 'application/json'
        }
    })
    .then(respuesta=>respuesta.json())
    .then(respuesta=>console.log(respuesta))
});

/*
Nivel 2: Captura de Formulario
Escucha el evento submit del formulario #formPostNuevo.
Evita la recarga de página (preventDefault).
Captura los valores de los inputs y mételos en un objeto.
Envía ese objeto mediante fetch (POST) a la misma URL de arriba.
Al recibir la respuesta, muestra un console.log que diga: "Post creado exitosamente".
*/

const form = document.getElementById('formPostNuevoFetch');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const titleValue = document.getElementById('inputTitleFetch').value;
    const bodyValue = document.getElementById('inputBodyFetch').value;

    const postNuevo = {
        title: titleValue,
        body: bodyValue,
        userId: 1
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postNuevo),
        headers: { 'Content-type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
        console.log('Post creado exitosamente:', data);
        form.reset();
    });
});

/*
Nivel 3: Feedback y Control de Errores
Selecciona el div #statusFeedback y el botón #btnErrorTest.
Al usar el botón de error, intenta hacer un fetch a una URL que no exista (ej: .../posts/error).
Usa un operador ternario con res.ok para manejar la promesa (Promise.resolve / Promise.reject).
Lógica Visual: Si la petición es correcta, escribe "Datos enviados" en el div y agrégale la clase bgSuccess. Si falla, escribe "Error en la conexión" y ponle la clase bgError.
Limpia el formulario automáticamente solo si la petición fue exitosa.
*/

const div = document.getElementById('statusFeedback');
const botonError = document.getElementById('btnErrorTest');

botonError.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/error',{
        method: 'POST'
    })
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res =>{
        div.textContent = "Datos enviados con éxito";
        div.classList.remove('bgError');
        div.classList.add('bgSuccess');
    })
    .catch(err => {
        div.textContent = "Error en la conexión o URL no encontrada";
        div.classList.remove('bgSuccess');
        div.classList.add('bgError');
    });
})