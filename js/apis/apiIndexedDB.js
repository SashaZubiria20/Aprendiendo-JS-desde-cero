/*
API IndexedDB:
    CREACIÓN Y ACCESO
        * Es una manera de almacenar datos de manera persistente en el navegador.
        * Almacena pares de llave-valor. Los valores pueden ser objetos con estructuras complejas, y las llaves pueden ser propiedades de esos objetos.
        * La API de IndexedDB es mayormente asincrona.
        * IndexedDB usa eventos DOM para notificar cuando los resultados estan disponibles
        * IndexedDB es orientada a objetos.

        *Para crear la base de datos a través del objeto IndexedDB:
            - Primero debemos acceder al objeto IndexedDB que ya lo tiene el navegador y el metodo open() que abre la base de datos
            - Comprobar si la base de datos existe o tiene que ser creada a travéz del metodo onupgradeneeded()
            - Crear almacen de objetos con el metodo createObjectStore() 
            - Escuchar los eventos de exito y de error con los metodos onsucces() y onerror()
*/

// Primero creamos una constante para almacenar el acceso a IndexedDB
const indexedDB1 = window.indexedDB
// Parte 2: seleccionamos el formulario
const formDB = document.getElementById('formDB1');

// Preguntamos si indexedDB existe y en el caso de que si, trabajamos con la base de datos
if (indexedDB1 && formDB) {
    let db // creamos una variable para almacenar la base de datos
    const request = indexedDB1.open('tasksList', 1) // El primer parametro es el nombre de la base de datos que queremos acceder y el segundo podemos pasar la version de la base de datos, tiene que ser un numero entero

    // Una vez que hicimos la peticion, usamos los metodos asincronos que nos da la api de indexedDB1
    // Para saber que todo funciona
    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }

    // Para saber si necesita actualizacion o pregunta si existe la base de datos
    request.onupgradeneeded = () => {
        db = request.result
        console.log('Create', db)
        // Segundo paso: despues de crear/abrir la base de datos, lo siguiente es crear el almacen de datos, creamos una constante y le damos un nombre
        const objectStore = db.createObjectStore('tasks', {
            //autoIncrement: true
            keyPath: 'taskTitle'
        })
    }

    // Para saber si hubo error
    request.onerror = (error) => {
        console.log('Error', error)
    }

    // Parte 2: Creamos una funcion para guardar el objeto en nuestra base de datos
    /*
        Para añadir datos hay que fragmentar el proceso en 3 pasos:
            1- (aca le decimos sobre cual vamos hacer la transaccion y cual va a ser el modo) Todas las operacion sobre una base de datos indexada funciona a travez de lo que se denomina una transaccion, esta transaccion recibe dos parametros, el almacen sobre el cual vamos a trabajar y de que modo vamos a trabajar, este segundo parametro puede ser readonly (se usa para leer la base de datos), si no ponemos nada es el valor por defecto, o readwrite (se usa para escribir).
            2- (aca hacemos la transaccion) Una vez que tenemos la transaccion creada, necesitamos abrir el almacen de datos, creamos una constante y dentro del objeto qeu nos va a devolver transaction tenemos el metodo objectStore que recibe como parametro el almacen sobre el cual vamos a trabajar.
            3- Por ultimo añadimos los datos, los datos que vaos añadir son los que llegan por parametro objectStore.add(data)
    */

    const addData = (data) =>{
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.add(data)
    }


    // Parte 2: ponemos el formulario a la escucha para ver cuando se envio
    formDB.addEventListener('submit', (e) => {
        e.preventDefault();
        // Creamos el objeto que vamos añadir a la base de datos
        const data = {
            taskTitle: e.target.task.value, // task hace referencia al input del html del formulario ya que teine ese name y value a lo que esta escrito (al valor)
            taskPriority: e.target.priority.value // priority hace referencia al select del html y value a lo que seleccionamos
        }
        //console.log(data)
        addData(data)
    })
};

// Una vez que se abrio / creo la base de datos y vemos que esta todo correcto, lo siguiente es crear el almacen de datos, todas las funciones de creacion de base de datos, eliminacion y lectura lo vamos hacer con onupgradeneeded porque lo vamos hacer directamente actualizando, y porque el metodo onsuccess solo se ejecuta a la hs de acceder a la base de datos por primera vez.

/*Cuando creamos registros en la base de datos necesitamos tener una clave para acceder a los datos que haya en value. A la hora de crear el const objectStore = db.createObjectStore('tasks') linea 39, si ponemos una , despues de tasks, const objectStore = db.createObjectStore('tasks', ) podemos crear un objeto y poner autoIncrement: true 

const objectStore = db.createObjectStore('tasks', {
            autoIncrement: true
        })

autoIncrement: es un boleano, si lo ponemos en true le decimos que la clave la genere automaticamente, despues le decimos que la clave sera el titulo de la tarea.
Esto se hace al crear la base de datos, no despues

Esto nos genera una key con numeros, pero acceder a esa key con numeros es complicado si la base de datos es grande, entonces lo recomendado es usar un valor qeu sepamos que es unico, por ejemplo si fuera para personas podriamos usar el DNI.

const objectStore = db.createObjectStore('tasks', {
            keyPath: 'taskTitle'
        })


keyPath: es la ruta de la llave y le decimos que propiedad de nuestro objeto va a ser la clave unica

*/