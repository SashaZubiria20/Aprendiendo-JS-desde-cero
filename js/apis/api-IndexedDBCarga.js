

const indexedDB1 = window.indexedDB
// Parte 2: seleccionamos el formulario
const formDB = document.getElementById('formDB1');

// Parte 2: Aparte de preguntar si existe indexedDB1, por precaucion preguntamos si tambien existe form
if (indexedDB1 && formDB) {
    let db
    const request = indexedDB1.open('tasksList', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }

    request.onupgradeneeded = () => {
        db = request.result
        console.log('Create', db)
        // Parte 2: Agregamos la key (la clave) keyPath: 'taskTitle'
        const objectStore = db.createObjectStore('tasks', {
            //autoIncrement: true
            keyPath: 'taskTitle'
        })
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }


    // Parte 2: Creamos una funcion para guardar el objeto creado en el formulario, en nuestra base de datos
    /*
        Para añadir datos hay que fragmentar el proceso en 3 pasos:
            1- (aca le decimos sobre cual vamos hacer la transaccion y cual va a ser el modo) Todas las operacion sobre una base de datos indexada funciona a travez de lo que se denomina una transaccion, esta transaccion recibe dos parametros, el almacen sobre el cual vamos a trabajar y de que modo vamos a trabajar, este segundo parametro puede ser readonly (se usa para leer la base de datos), si no ponemos nada es el valor por defecto, o readwrite (se usa para escribir).
            2- (aca hacemos la transaccion) Una vez que tenemos la transaccion creada, necesitamos abrir el almacen de datos, creamos una constante y esta dentro del objeto que nos va a devolver transaction, dentro de ese objeto tenemos el metodo objectStore que recibe como parametro el almacen sobre el cual vamos a trabajar.
            3- (Hacemos la peticion) Por ultimo añadimos los datos, los datos que vamos añadir son los que llegan por parametro objectStore.add(data)
    */

    const addData = (data) =>{
        const transaction = db.transaction(['tasks'], 'readwrite') // Le decimos a que almacen vamos a acceder y de que tiene que hacer (el modo) si escribir o leer
        const objectStore = transaction.objectStore('tasks') // Abrimos el almacen
        const request = objectStore.add(data) // Agregamos los datos
    }


    // Parte 2: ponemos el formulario a la escucha para ver cuando se envio
    formDB.addEventListener('submit', (e) => {
        e.preventDefault();
        // Creamos el objeto que vamos añadir a la base de datos
        const data = {
            taskTitle: e.target.task.value, // e.target.task hace referencia al input del html del formulario ya que teine ese name y value a lo que esta escrito (al valor)
            taskPriority: e.target.priority.value // priority hace referencia al select del html y value a lo que seleccionamos
        }
        //console.log(data)
        // Llamamos al metodo (funcion)
        addData(data)
    })
};

/*Cuando creamos registros en la base de datos necesitamos tener una clave para acceder a los datos que haya en value. A la hora de crear el const objectStore = db.createObjectStore('tasks') linea 39, si ponemos una , despues de tasks, const objectStore = db.createObjectStore('tasks', ) podemos crear un objeto y poner autoIncrement: true 

const objectStore = db.createObjectStore('tasks', {
            autoIncrement: true
        })

autoIncrement: es un boleano, si lo ponemos en true le decimos que la clave la genere automaticamente, despues le decimos que la clave sera el titulo de la tarea.
Esto se hace al crear la base de datos, no despues.

Esto nos genera una key con numeros, pero acceder a esa key con numeros es complicado si la base de datos es grande, entonces lo recomendado es usar un valor que sepamos que es unico, por ejemplo si fuera para personas podriamos usar el DNI.

const objectStore = db.createObjectStore('tasks', {
            keyPath: 'taskTitle'
        })


keyPath: es la ruta de la llave y le decimos que propiedad de nuestro objeto va a ser la clave unica
*/