/*
Async / Await:
    - Es una implementacion para hacer funciones asincronas en js de forma nativa.
    - Decir que una funcion es asincrona, quiere decir que el codigo no se va a ejecutar uno de bajo de otro de forma secuencial, con async await establecemos paradas o bloqueos al codigo.
    - Digamos que tenemos 2 funciones a y b. Con async le decimos a JS esta función ahora es una Promesa automática y con await le decimos a la funcion b que espere a que se ejecute la funcion a antes de ejecutarse ella (No pases a la siguiente línea hasta que esta tarea termine). 
*/

// Funcion comun:
/*
const getName = () =>{
    return 'Pepe'
};

console.log(getName());
*/


// Funcion que devuelve una promesa
/*
const getName = () =>{
    return new Promise((resolve,reject) => {
        resolve('Pepe')
    })
};

getName().then(name => console.log(name));
*/



// Con Async 
/*
const getName = async () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Pepe')
        },1500)
    })
};

getName().then(name => console.log(name));
*/


// Con Async / await: el problema viene cuando, la informacion que nos devuelve la api, la base de datos o lo que sea, la use otra funcion
// Cuando escribimos async en una funcion, automaticamente esa funcion va a devolver una promesa
const getName = async () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Pepe')
        },1500)
    })
};

const sayHello = async () => {
    const name = await getName() // Cuando ponemos await, estamos estableciendo un bloqueo hasta que getName() se alla resuelto
    return `Hello ${name}`
}

sayHello().then(res=>console.log(res));



/*******************************************************************************/

// Vamos a modificar el ejercicio de promesas con async / await

const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]
const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]



/*
const getUser = (id) => {
    const user = users.find(user => user.id == id)
    return promise = new Promise((resolve, reject) => {
        if (!user) reject(`Doesn't exist an user with id ${id}`)
        else resolve(user)
    })
}
*/

// Ya no tenemos que devolver promesas porque al escribir async ya estamos devolviendo una promesa
const getUser = async (id) => {
    const user = users.find(user => user.id == id) // buscamos el usuario en el array
        // Ya no tenemos un reject ni un resolve
        if (!user) throw new Error (`Doesn't exist an user with id ${id}`) // new Error es un constructor que crea un objeto error y se le pasa el mensaje del error. Y el throw es cuando se lanza una excepcion o un error y se controlan a travez de un bloque try
        else return user
}

// Lo mismo para funcion getEmail, escribimos async, sacamos la promesa, sacamos el resolve y el reject y agregamos el throw new Error
const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
        if (!email) throw new Error (`${user.name} hasn't email`)
        else return ({
            id: user.id,
            name: user.name,
            email: email.email
        })
}


/*
getUser(2)
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err))
*/

// Para llamar las funciones: 
// Hacemos una funcion para llamar a las dos funciones
// Creamos un bloque try para menejar todo, se traduce como intenta, es decir, intenta resolver lo primero y si algo no va bien, lo mandas al catch, captura ese error y lo imprimes
const getInfo = async (id) =>{
    try{
        const user = await getUser(id)
    const res = await getEmail(user)
    return `${user.name} email is ${res.email}`
    }catch(error){
        console.log(error)
    }
}

getInfo(3).then(res=>console.log(res));


/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: El Saludo Asíncrono
Crea una función getNameAsync que use un setTimeout envuelto en una Promesa para devolver el nombre "Sasha" después de 2 segundos.
Crea una función showName que sea async.
Adentro de showName, usa await para recibir el nombre y muéstralo en el asyncFeedback con un texto que diga: "Cargando..." antes de que aparezca
*/

const getNameAsync = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Sasha')
        },2000)
    })
};

const showName = async () => {
    const feedback = document.getElementById('asyncFeedback');
    feedback.textContent = 'Cargando...';
    const name1 = await getNameAsync()
    feedback.textContent = `Hola ${name1}`;
}

showName();

/*
Nivel 2: Fetch con Async/Await
Crea una función obtenerPost que sea async.
Adentro, usa await fetch('https://jsonplaceholder.typicode.com/posts/1').
No olvides hacer el await res.json().
Muestra el title del post en el div de feedback.
Bonus: Usa un try...catch básico por si la conexión falla.
*/

const btnPost = document.getElementById('btnNivel2Fetch');
const feedback = document.getElementById('asyncFeedback');

const obtenerPost = async () =>{
    btnPost.addEventListener('click', async () => {
        feedback.textContent = 'Cargando post...';
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const datos = await res.json();
        feedback.textContent = datos.title;
    })
}

obtenerPost()

/*
Nivel 3: Crear un sistema que verifique si un miembro es Premium antes de mostrarle un curso.
Escenario: Imagina que estás programando una plataforma de cursos. Tienes una lista de miembros y una lista de cursos privados. Solo los miembros "Premium" pueden acceder a los cursos.
Objetivo: Crear un sistema que encadene dos procesos asíncronos:
Validar Identidad: Buscar al miembro por su ID.
Validar Permisos: Si es Premium, entregarle su curso; si no lo es, denegarle el acceso.
Control de Errores: Si el ID no existe o el miembro no tiene permisos, mostrar un mensaje de error visual en color rojo. Si todo sale bien, mostrar el éxito en color verde.
*/

const miembrosVIP = [
    { id: 1, nombre: 'Sasha', rango: 'Premium' },
    { id: 2, nombre: 'Invitado', rango: 'Basico' }
];

const cursosPrivados = [
    { id: 1, leccion: 'Master en JavaScript Asíncrono' },
    { id: 2, leccion: 'Introducción a HTML (Gratis)' }
];

const buscarMiembro = async (id) =>{
    const miembro = miembrosVIP.find(miembro => miembro.id == id)
    if (!miembro) throw new Error (`ID ${id} de miembro inexistente`)
    return miembro;
};

const buscarCurso = async (miembro) => {
    if(miembro.rango === 'Basico'){
        throw new Error(`Acceso Denegado: ${miembro.nombre}, tu suscripción es Básica.`);
    }
    const curso = cursosPrivados.find(curso => curso.id === miembro.id);
    return curso.leccion;
};

const procesarAcceso = async (idABuscar) => {
    const feedback = document.getElementById('asyncFeedback');
    try {
        feedback.textContent = 'Verificando credenciales...';
        feedback.classList.remove('bgError', 'bgSuccess');

        const miembroEncotrado = await buscarMiembro(idABuscar);

        const leccionEntregada = await buscarCurso(miembroEncotrado);

        feedback.textContent = `¡Éxito! Bienvenido ${miembroEncotrado.nombre}. Tu curso: ${leccionEntregada}`;
        feedback.classList.add('bgSuccess');

    } catch (error) {
        feedback.textContent = error.message;
        feedback.classList.add('bgError');
    }
};



document.getElementById('btnNivel3Exito').addEventListener('click', () => {
    procesarAcceso(1);
});

document.getElementById('btnNivel3Error').addEventListener('click', () => {
    procesarAcceso(2);
});