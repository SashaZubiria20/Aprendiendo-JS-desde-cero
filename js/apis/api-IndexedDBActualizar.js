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
                cursor.continue()
            } else {
                // console.log('No more data')
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
        addData(data)
    })
};