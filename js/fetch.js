/*
    Fetch API
    Es el reemplazo de XMLHTTPRequest.
    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
    También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
    Está basado en promesas, por lo cual tiene un response y un reject internos
        Response tiene varios métodos:
        - array​Buffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
        - blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente
        - clone(): crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable diferente.
        - form​Data(): Se utiliza para leer los objetos formData
        - json(): Convierte los archivos json en un objeto de JavaScript
        - text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8

        //Comprobación de soporte FETCH:
            if (window.fetch != undefined) console.log('FETCH OK')
            else console.log('FETCH NOT WORKS!')
*/

/*
button.addEventListener('click', () => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);

        const list = document.getElementById('list')
        for (const userInfo of dataJSON) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem)
        }
    });

    xhr.send();
});
*/

const button = document.getElementById('buttonFetch');

button.addEventListener('click', () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.ok ? Promise.resolve(res) : Promise.reject(res)) // Comprobamos si la peticion esta hecha a una url correcta a travez de un operador ternario, comprobamos el response OK
    .then(res => res.json()) // Transformamos el contenido en un objeto de JS
    .then(res => {
        const list = document.getElementById('listFetch')
        const fragment = document.createDocumentFragment()
        for (const userInfo of res) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.append(listItem);
    } // Leemos los datos
    list.append(fragment)
})
});

/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: El Despertar de Fetch (Bajo)
Selecciona el botón #btnFetchDog.
Al hacer clic, realiza un fetch a esta URL: https://dog.ceo/api/breeds/image/random
Simplemente imprime en consola el objeto JSON que te devuelve la API usando .json().
*/

const btn = document.getElementById('btnFetchDog');
/*
btn.addEventListener('click', () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => console.log(res.json()))
});
*/

/*
Nivel 2: Validación y Respuesta (Medio)
Añade la comprobación de res.ok usando la lógica de tu código anterior (operador ternario con Promise.resolve y Promise.reject).
Si la petición falla, muestra un console.error que diga "Error al conectar con la perrera".
Si tiene éxito, extrae la propiedad message (que es la URL de la imagen) e imprímela.
*/

/*
Nivel 3: El Pintor de Datos (Pro)
En el último .then(), selecciona el contenedor #dogContainer.
Limpia el contenedor antes de cada nueva petición.
Crea un elemento <img>.
Asigna la URL del perro al atributo src de la imagen.
Inyecta la imagen en el contenedor.
*/

btn.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        
        .then(datos => {
            const dogContainer = document.getElementById('dogContainer');
            dogContainer.innerHTML = "";

            const img = document.createElement('IMG');
            img.src = datos.message;
            img.classList.add('dogImage'); 

            dogContainer.appendChild(img);
        })
        
        .catch(err => console.error('Error al conectar con la perrera'));
});

