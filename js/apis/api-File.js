/* 
    API File
        Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la API Drag&Drop.

        La interfaz más utilizada para interactuar con ella es FileReader
        https://developer.mozilla.org/es/docs/Web/API/FileReader
*/

const fileInput = document.getElementById('file');
const imgFile = document.getElementById('imgFile');
const images = document.getElementById('imagesFile');
const text = document.getElementById('textFile');

// Para leer archivos de texto
/*
fileInput.addEventListener('change', (e) => {
    console.log(e);
    console.log(e.target.files);
    // Creamos unas variables para poder acceder al contenido de ese archivo de texto
    const file = e.target.files[0]
    //console.log(file) lo que tenemos es la informacion del fichero pero no el contenido
    // Para eso usamos la interfaz de FileReader
    const fileReader = new FileReader() // con esto ya tenemos acceso a todas las propiedades y metodos de fileReader
    fileReader.readAsText(file)
    // Esto es un proceso asincrono, el archivo puede pesar poco o mucho pero va a tardar un tiempo en leerlo, para saber cuando a terminado de cargar y analizar el archivo, le añadimos un evento
    fileReader.addEventListener('load', (e) => {
        //console.log(e)
        console.log(e.target.result);
        text.textContent = e.target.result
    })
});
*/


// Para leer imagenes
// Carga simple
/*
fileInput.addEventListener('change', (e) => {
    // Creamos unas variables para poder acceder al contenido de ese archivo de texto
    const file = e.target.files[0]
    // Usamos la interfaz de FileReader
    const fileReader = new FileReader() // con esto ya tenemos acceso a todas las propiedades y metodos de fileReader
    fileReader.readAsDataURL(file)
    // Esto es un proceso asincrono, el archivo puede pesar poco o mucho pero va a tardar un tiempo en leerlo, para saber cuando a terminado de cargar y analizar el archivo, le añadimos un evento
    fileReader.addEventListener('load', (e) => {
        imgFile.setAttribute('src', e.target.result)
    })
});
*/

//Carga múltiple de imágenes
fileInput.addEventListener('change', (e) => {
    const files = e.target.files
    const fragment = document.createDocumentFragment()
    for (const file of files) {
        const fileReader = new FileReader()
        const img = document.createElement('IMG')
        fileReader.readAsDataURL(file)
        fileReader.addEventListener('load', (e) => {
            img.setAttribute('src', e.target.result)
        })
        fragment.appendChild(img)
    }
    images.appendChild(fragment)
});







// Barra de progreso cuando subimos un archivo
const fileInput2 = document.getElementById('fileProgress');
const progress = document.getElementById('progress');

/*
//detectamos cuando cambio con el evento change
fileInput2.addEventListener('change', (e) => {
    const file = e.target.files[0] // Localizamos el archivo
    const fileReader = new FileReader() // Creamos el objeto
    fileReader.readAsDataURL(file) // Lo leemos como DataURL y le pasamos ese file

    // Para controlar el progreso de subida de un archivo tenemos un evento
    fileReader.addEventListener('progress', (e) => {
        //console.log(e)
        // Lo que nos interesa es loaded y total, con esas dos propiedades establecemos que tan grande es el archivo y cuanto lleva cargando
        // console.log(e.loaded)
        // console.log(e.total)
        // Este evento no tira hasta el 100% porque es solo mientras esta cargando
        // Hscemos css en linea porque es un contenido dinamico
        progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
    })
    // Para saber el 100% necesitamos este evento
    fileReader.addEventListener('loadend', () => {
        progress.style.width = '100%'
    })
});
*/


// Para hacerlo con un solo elemento html

const root = document.documentElement

fileInput2.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%')
    })

    fileReader.addEventListener('loadend', () => {
        root.style.setProperty('--bar-width', '100%')
    })
})