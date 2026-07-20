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

// Preguntamos si indexedDB existe y en el caso de que si, trabajamos con la base de datos
if (indexedDB1) {
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
        // Segundo paso: despues de abrir la base de datos, lo siguiente es crear el almacen de datos, creamos una constante y le damos un nombre
        const objectStore = db.createObjectStore('tasks')
    }

    // Para saber si hubo error
    request.onerror = (error) => {
        console.log('Error', error)
    }
};

// Una vez que se abrio la baso de datos y vemos que esta todo correcto, lo siguiente es crear el almacen de datos, todas las funciones de creacion de base de datos, eliminacion y lectura lo vamos hacer con onupgradeneeded porque lo vamos hacer directamente actualizando, y porque el metodo onsuccess solo se ejecuta a la hs de acceder a la base de datos por primera vez 