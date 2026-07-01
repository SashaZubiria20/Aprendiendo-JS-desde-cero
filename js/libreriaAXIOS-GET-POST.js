/*
Es una libreria basada en promesas para el cliente y para el servidor
Es una libreria liviana y tiene soporte para internet explorer 11
Recomendada para hacer peticiones a una API RES
Realiza las peticiones mas rapido
link de la libreria: <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
*/



/****************************AXIOS GET**************************/

// Teniamos este ejercicio con fetch

/* button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))

        .then(res => res.json())
        .then(res => {
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for (const userInfo of res) {
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
        })
})
*/


// Con la libreria AXIOS GET

const button = document.getElementById('buttonAxiosGet');


button.addEventListener('click', () => {
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res => {
        const list = document.getElementById('listAxiosGet')
        const fragment = document.createDocumentFragment()
        for (const userInfo of res.data) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }).catch(err => console.log(err))
})


/****************************AXIOS POST**************************/

// Teniamos este ejercicio con fetch

/* button.addEventListener('click', () => {
    const newPost = {
        title: 'A new post',
        body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        userId: 1
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}) */


// Con la libreria AXIOS POST
const button2 = document.getElementById('buttonAxiosPost');


button2.addEventListener('click', () => {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: 'A new post',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            userId: 1
        }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
})