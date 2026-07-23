/*
    API Online / Offline: Es para saber si el navegador esta Online u Offline
*/


const alert1 = document.getElementById('alert1')

addEventListener('online', (e) => {
    setAlert(1)
})

addEventListener('offline', (e) => {
    setAlert(0)
})

const setAlert = (status) => {
    alert1.classList.remove('alert1--online')
    alert1.classList.remove('alert1--offline')

    status === 0 ?
        setTimeout(() => {
            alert1.textContent = "Vaya, parece que estás desconectado."
            alert1.classList.add('alert1--offline')
        }, 100) :
        setTimeout(() => {
            alert1.textContent = "Genial! ¡Ya estás en línea otra vez!"
            alert1.classList.add('alert1--online')
        }, 100)
};