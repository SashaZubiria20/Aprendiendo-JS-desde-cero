/*
DRAG Y DROP:
    Esta API nos permite arrastrar y soltar cosas dentro del navegador.

        Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo

        Para controlar estas acciones tenemos varios eventos de cada una de las partes
            Objeto a arrastrar:
                dragstart: Se dispara al comenzar a arrastrar
                drag: Se dispara mientras arrastramos
                dragend: Se dispara cuando soltamos el objeto

            Zona de destino:
                dragenter: Se dispara cuando el objeto entra en la zona de destino
                dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
                drop: Se dispara cuando soltamos el objeto en la zona de destino
                dragleave: Se dispara cuando el objeto sale de la zona de destino
*/

const smile = document.getElementById('smile');
const dropZone = document.getElementById('drop-zone');

smile.addEventListener('dragstart', () => {
    console.log('Drag Start')
});

smile.addEventListener('drag', () => {
    console.log('Drag')
});

smile.addEventListener('dragend', () => {
    console.log('Drag End')
});


dropZone.addEventListener('dragenter', (e) => {
    e.preventDefault()
    console.log('Drag Enter')
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    console.log('Drag Over')
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    console.log('Drop')
});

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    console.log('Drag Leave')
});

/******************************************EJERCICIOS**********************************************/

const pendingTasks = document.getElementById('pending-tasks');
const finishedTasks = document.getElementById('finished-tasks');

/*
dataTransfer: Objeto que se usa en firefox, contiene toda la info del objeto que se esta arrastrando
setData: Establece la información que queremos compartir
getData: Establece la información que queremos obtener
*/


pendingTasks.addEventListener('dragstart', (e) => {
    //console.log(e.target);

    //en firefox:
    //console.log(e.dataTransfer)
    //Para asignarle cosas al objeto dataTransfers se usa setData y getData
    // A dataTransfer le decimos lo que queremos compartir (primero el formato texto plane / y cual es la info que vamos a guardar)
    e.dataTransfer.setData('text/plain', e.target.id);
    //console.log(e.dataTransfer)
    // Pero la info hay que compartirla con getData y decirle en que formato llega la informacion, entonces
    //console.log(e.dataTransfer.getData('text'))
    e.dataTransfer.getData('text')
});

pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('activeDrop')
});

pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('activeDrop')
});

// Falta el evento de soltar el elemento, pero sin el evento del drafover no funciona
//OBLIGATORIO, SI NO, NO FUNCIONA
finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
});

// Ahora si el evento al soltar el elemento en la zona de destino

finishedTasks.addEventListener('drop', (e) => {
    // Primero tenemos que mover la tarea de un contenedor a otro, por ende primero prevenimos el comportamiento por defecto
    e.preventDefault()
    // Primero guardamos el elemento que vamos a mover, tenemos que usar el id que estamos compartiendo y el formato en el que queriamos la informacion
    const element = document.getElementById(e.dataTransfer.getData('text'))
    // Le quitamos la clase al elemento
    element.classList.remove('activeDrop')
    // Luego añadimos el elemento al div de finishedTasks
    finishedTasks.append(pendingTasks.removeChild(element))
});