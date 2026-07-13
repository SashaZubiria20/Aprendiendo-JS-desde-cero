/*
    API webStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:

            sessionStorage mantiene un área de almacenamiento separada para cada origen que está disponible mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos).

            localStorage hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.

        Ambos funcionan con clave:valor y tienen dos métodos fundamentales setItem() para asignar una clave:valor y getItem() que recibe como parámetro la clave de la que quieremos obtener el valor
*/

const form = document.getElementById('formApi1')
const keys = document.getElementById('keysApi1')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // const person = {
    //     name: 'Dorian',
    //     email: 'dorian@gmail.com'
    // }

    // sessionStorage.setItem('person', JSON.stringify(person))
    // sessionStorage.setItem('name', 'Dorian')

    localStorage.setItem(form.key.value, form.value.value)

    keys.innerHTML += `<option>${form.key1.value}</option>`

    form.reset()
})

keys.addEventListener('change', () => {
    document.getElementById('infoValueApi1').textContent =
        localStorage.getItem(keys[keys.selectedIndex].textContent)
})


// Para borrar:

// sessionStorage | localStorage.clear()
// sessionStorage | localStorage.removeItem('name')


/******************************************EJERCICIOS**********************************************/
/*
Nivel 1: Persistencia Simple
Al cargar la página, revisa si existe un nombre en localStorage bajo la clave "nameUser".
Si existe, muéstralo en el span userNameDisplay.
Al hacer clic en "Guardar Preferencias", captura el valor de userNameInput y guárdalo en localStorage.
*/

const form2 = document.getElementById('formUserStorage');
const span = document.getElementById('userNameDisplay');
const displayArea = document.getElementById('displayProfileArea');
const btnReset = document.getElementById('clearDataBtn');

const savedName = localStorage.getItem('nameUser');

if (savedName) span.textContent = savedName;


form2.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = document.getElementById('userNameInput').value;
    localStorage.setItem('nameUser', nameValue);
    span.textContent = nameValue;
});

/*
Nivel 2: El Objeto Configuración
En lugar de guardar solo el nombre, crea un objeto llamado userSettings que contenga el nombre y el color del tema.
Usa JSON.stringify() para guardarlo en localStorage bajo la clave "profileSettings".
Al cargar la página, usa JSON.parse() para recuperar el objeto.
Aplica el color guardado al fondo (style.backgroundColor) del div displayProfileArea
*/

const savedSettings = JSON.parse(localStorage.getItem('profileSettings'));

if (savedSettings) {
    span.textContent = savedSettings.name;
    displayArea.style.backgroundColor = savedSettings.color;
}



form2.addEventListener('submit', (e) => {
    e.preventDefault();

    // NIVEL 2: Creamos el objeto con los valores reales
    const userSettings = {
        name: document.getElementById('userNameInput').value,
        color: document.getElementById('themeColorInput').value
    };

    // Guardamos el objeto convertido a STRING (importante)
    localStorage.setItem('profileSettings', JSON.stringify(userSettings));

    // Actualizamos la interfaz al instante
    span.textContent = userSettings.name;
    displayArea.style.backgroundColor = userSettings.color;

    // NIVEL 3: Contador de intentos en SessionStorage
    // Si no existe, empezamos en 0. Si existe, lo traemos y sumamos 1.
    let attempts = sessionStorage.getItem('saveAttempts') || 0;
    attempts = parseInt(attempts) + 1;
    
    sessionStorage.setItem('saveAttempts', attempts);
    console.log(`Has intentado guardar tus datos ${attempts} veces en esta sesión.`);
});


btnReset.addEventListener('click', () => {
    // Borramos todo de ambos almacenamientos
    localStorage.clear();
    sessionStorage.clear();
    
    // Recargamos la página para que vuelva al estado inicial
    location.reload();
});