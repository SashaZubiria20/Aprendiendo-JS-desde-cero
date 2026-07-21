//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

const indexedDB1 = window.indexedDB;
const formDB = document.getElementById('formDB1');
const tasks = document.getElementById('tasksDB1');


if (indexedDB1 && formDB) {
    let db
    const request = indexedDB1.open('tasksList', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
        readData()
    }

    request.onupgradeneeded = () => {
        db = request.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', {
            keyPath: 'taskTitle'
        })
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }

    const addData = (data) =>{
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.add(data)
        readData()
    }

    // Parte 3: Para leer los datos debemos hacer la transaccion de lectura (readonly), tenemos el objectStore sobre el cual vamos a trabaar y luego debemos hacer la peticion y no necesitamos el parametro data porque no va a recibir nada
    const readData = () =>{
        // Cambiamos el parametro a readonly, que en realidad no hace falta ponerlo porque es el valor por defecto
        const transaction = db.transaction(['tasks'], 'readonly')
        const objectStore = transaction.objectStore('tasks')
        // Para leer lo que necesitamos tenemos que crear un cursor (que ya viuene con indexedDB), recorre cada uno de los objetos y nos devuelve el valor
        const request = objectStore.openCursor()
        // Una vez abierto el cursor debemos ver si todo funciona
        const fragment = document.createDocumentFragment()

        request.onsuccess = (e) => {
            //console.log(e.target)
            // El cursor va leyendo registro a registro y si no le decimos nada solo lee uno
            // Para que lee todos los registros guardamos el resultado en ua constante
            const cursor = e.target.result
            // Y preguntamos si existe, esta pregunta es porque al guardar el resultado, si ya termino de leer los datos, result da nulo porque no tiene nada mas que leer, por lo qeu si cursor no exite es porque termino de leer los datos
            if(cursor){
                //console.log(cursor.value) // Solo tenemos uno
                const taskTitle = document.createElement('P')
                taskTitle.textContent = cursor.value.taskTitle
                fragment.appendChild(taskTitle)
                const taskPriority = document.createElement('P')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)
                // Para decirle que siga leyendo
                cursor.continue()
            } else {
                // console.log('No more data')
                tasks.textContent = ''
                tasks.appendChild(fragment)
            }

            // Faltaria llamar a la funcion, pero si lo hacemos abajo, es un proceso asincrono, por lo tanto para leer la base de datos debemos esperar a que este abierta, por lo que el readData() lo ponemos en request.onsuccess
        }
    }

    formDB.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        addData(data)
    })
};
