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

    // Parte 4: Lo primero es crear una funcion que tome los datos que queremos actualizar y ponerlos en el formulario, la operacion es praticamente igual que la de añadir datos, con la diferencia de que añadir datos es obtener, para eso la funcion get()
    const getData = (key) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.get(key)

        // Evaluamos si termino
        request.onsuccess = (e) => {
            // Lo primero es que los valores de la tarea como la prioridad cambien
            formDB.task.value = request.result.taskTitle
            formDB.priority.value = request.result.taskPriority
            // Luego al boton, le vamos a cambiar el add por el update para que cuando hagamos click llamaremos a otra funcion que es actualizar datos
            formDB.button.dataset.action = 'update'
            // cambiamos el texto del boton
            formDB.button.textContent = 'Update Task'
        }
    }

    // Paso 4: Creamos una funcion para actualizar los datos, para esto usamos el metodo put, si existe el dato lo actualiza y sino lo añade
    const updateData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.put(data)
        request.onsuccess = () => {
            formDB.button.dataset.action = 'add'
            // cambiamos el texto del boton
            formDB.button.textContent = 'Add Task'
            readData()
        }
    }

    const readData = () =>{
        const transaction = db.transaction(['tasks'], 'readonly')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.openCursor()

        const fragment = document.createDocumentFragment()

        request.onsuccess = (e) => {
            const cursor = e.target.result
            if(cursor){
                const taskTitle = document.createElement('P')
                taskTitle.textContent = cursor.value.taskTitle
                fragment.appendChild(taskTitle)
                const taskPriority = document.createElement('P')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)

                // Parte 4: creamos los botones de actualizar y el de borrar, al de borrar falta añadirle cosas
                const taskUpdate = document.createElement('BUTTON')
                taskUpdate.dataset.type = 'update'
                taskUpdate.dataset.key = cursor.key
                taskUpdate.textContent = 'Update'
                fragment.appendChild(taskUpdate)

                const taskDelete = document.createElement('BUTTON')
                taskDelete.textContent = 'Delete'
                fragment.appendChild(taskDelete)

                cursor.continue()
            } else {
                tasks.textContent = ''
                tasks.appendChild(fragment)
            }
        }
    }

    formDB.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }

        // Vamos a preguntar si tenemos el boton de action como add o como update
        if (e.target.button.dataset.action == 'add') {
            addData(data)
        } else if (e.target.button.dataset.action == 'update') {
            updateData(data)
        }
        formDB.reset()
    })
    tasks.addEventListener('click', (e) => {
        // Preguntamos para asegurar que hicimos click en ipdate y y no en otro sitio
        if (e.target.dataset.type == 'update') {
            getData(e.target.dataset.key)
        }
    })
};