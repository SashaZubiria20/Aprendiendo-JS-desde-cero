/*
Formularios
*/

// Como validar que los campos esten rellenos y el formulario se pueda enviar:

const form4 = document.getElementById('form4');
const button4 = document.getElementById('submitForm4');

const name4 = document.getElementById('nameForm4');
const email4 = document.getElementById('emailForm4');
const gender4 = document.getElementById('genderForm4');
const terms4 = document.getElementById('termsForm4');


// Primero construimos un objeto que contenga las propiedades que son validas para el formulario

const formIsValid = {
    name: false,
    email: false,
    gender: false,
    terms: false
};

// impedir que el formulario se envie

form4.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
});

// Una vez que tenemos esto, debemos cambiar las propiedades a true en funcion de si los campos estan correctos

// Por lo general en los formularios se ve el evento keyup, pero puede fallar si el usuario copia y pega con el mouse, change registra cualquier evento siempre y cuando el valor del campo haya cambiado.
name4.addEventListener('input', (e) => {
    formIsValid.name = e.target.value.trim().length > 0;
});

// Para el email lo mismo
email4.addEventListener('input', (e) => {
    formIsValid.email = e.target.value.trim().length > 0;
});

// Lo mismo para el genero
gender4.addEventListener('input', (e) => {
    formIsValid.gender = e.target.value.trim().length > 0;
});


terms4.addEventListener('input', (e) => {
    formIsValid.terms = e.target.checked // En el boton de terminos, comprobamos primero si es true o false (si esta marcado o no)
    e.target.checked ? button4.removeAttribute('disabled') : button4.setAttribute('disabled', true) // Con un ternario, si esta marcado habilitamos el boton de enviar, si es true le quitamos el atibuto disabled, si es false se lo modificamos a true (le agregamos el atributo disabled)
});

const validateForm = () =>{
    // Agarramos todos los valores del objeto, pero para recorrerlo no nos sirve que sea un objeto, tenemos que transformarlo a un array
    const formValues = Object.values(formIsValid)
    // comprobamos si hay algun false
    const valid = formValues.findIndex(value => value == false)
    // if(valid == -1) form.submit()
    // else alert('Form invalid')
    if (valid == -1) {
    console.log("¡Formulario validado y listo para enviar!");
    console.log("Datos a enviar:", formIsValid);
    alert("Formulario enviado con éxito (mira la consola)");
}
};

/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: El Vigía
Crea un objeto llamado validadorExplorador con 3 propiedades en false (nombre, nivel, seguro).
Escucha el evento input en el Nombre de Aventurero. Será válido (true) solo si el largo del texto es mayor a 2 caracteres.
Escucha el evento input en el Nivel de Valentía. Será válido solo si el número es igual o mayor a 5.
Escucha el evento change en el Checkbox. Será válido solo si está marcado (checked).
*/

/*
Nivel 2: El Guardián de la Puerta
Crea una función llamada actualizarBoton().
Esta función debe ser llamada al final de cada evento de validación del Nivel 1.
Dentro de esta función, debes usar Object.values() y un método de array (como every o includes) para revisar si todos los campos del objeto validadorExplorador son true.
Si todo es true: Quita el atributo disabled al botón y cambia su clase de btnBloqueado a btnActivo.
Si algo es false: Vuelve a poner el disabled y la clase original.
*/

/*
Nivel 3: El Maestro de Mapas
Escucha el evento submit del formulario y evita que la página se recargue.
Crea una función que capture los valores reales (lo que escribió el usuario en el nombre y en el nivel).
Muestra el div mensajeResultado (quitándole la clase oculto) y agrégale la clase mensajeExito.
Escribe dentro de ese div un mensaje que diga: "¡Bienvenido Explorador [Nombre]! Tu nivel [Nivel] es suficiente para iniciar el viaje."
Extra: Usa .reset() para limpiar el formulario después de mostrar el mensaje.
*/

const formExplorador = document.getElementById('formExplorador');
const boton = document.getElementById('btnEnviarRegistro');
const div = document.getElementById('mensajeResultado');

const nombreAventurero = document.getElementById('nombreAventurero');
const nivelValentia = document.getElementById('nivelValentia');
const check =document.getElementById('checkSeguro');


const validadorExplorador = {
    nombre: false,
    nivel: false,
    seguro: false,
};

formExplorador.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = nombreAventurero.value;
    const nivel = nivelValentia.value;

    div.textContent = `¡Bienvenido Explorador ${nombre}! Tu nivel ${nivel} es suficiente para iniciar el viaje.`;
    div.classList.remove('oculto');
    div.classList.add('mensajeExito');

    formExplorador.reset();
    validadorExplorador.nombre = false;
    validadorExplorador.nivel = false;
    validadorExplorador.seguro = false;

    actualizarBoton()
});


nombreAventurero.addEventListener('input', (e) => {
    validadorExplorador.nombre = e.target.value.trim().length > 2;
    actualizarBoton()
});

nivelValentia.addEventListener('input', (e) => {
    validadorExplorador.nivel = parseFloat(e.target.value) >= 5;
    actualizarBoton()
});

check.addEventListener('input', (e) => {
    validadorExplorador.seguro = e.target.checked;
    actualizarBoton()
});

const actualizarBoton = () =>{
    const valores = Object.values(validadorExplorador);
    const validar = valores.findIndex(value => value === false);
        if (validar === -1) {
            boton.removeAttribute('disabled');
            boton.classList.replace('btnBloqueado', 'btnActivo');
        } else {
            boton.setAttribute('disabled', true);
            boton.classList.replace('btnActivo', 'btnBloqueado');
    }
};