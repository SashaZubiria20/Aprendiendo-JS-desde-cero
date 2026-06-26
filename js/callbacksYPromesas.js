/*
Callbacks:
    - Los vemos para entender porque se dejaron de usar y poder entender luego promesas.
    - Un callback es una funcion que se ejecuta a traves de otra funcion
    - Los callbacks no son asincronos, se ejecutan por orden
    - cb es una abreviatura de callback
*/

const getUser = (id, cb) =>{
    const user = {
        name: 'Pepe',
        id:id
    }
    if (id == 2) cb ('user not exist')
    else cb(null, user);
};

getUser(1, (err, user) =>{
    if(err) return console.log(err)
    console.log(`User name is ${user.name}`);
});

/*******************/

const users2 = [
    {
        id:1,
        name: 'Juan'
    },
    {
        id:2,
        name: 'Maria'
    },
    {
        id:3,
        name: 'Carlos'
    },
];

const emails = [
    {
        id:1,
        email: 'Juan@gmail.com'
    },
    {
        id:2,
        email: 'Maria@gmail.com'
    },
];

getUser2 = (id,cb) =>{
    const user1 = users2.find(user=>user.id == id);
        if(!user1) cb(`No existe un usuario con el id ${id}`);
        else cb(null, user1);
};

const getEmail = (user, cb) =>{
    const email = emails.find(email=>email.id==user.id);
    if(!email) cb(`${user.name} no tiene email`);
    else cb(null, {
        id:user.id,
        name:user.name,
        email:email.email
    });
}

getUser2(2,(err,user1)=>{
    if(err) return console.log(err);
    getEmail(user1, (err,res)=>{
        if(err) return console.log(err);
        console.log(res)
    });
});


/******************************************EJERCICIOS**********************************************/

/*
Crea una función llamada saludar que reciba un nombre y un callback.
Dentro de la función, crea un string que diga "Hola, [nombre]".
Llama al callback pasándole ese string.
Ejecuta la función saludar pasándole tu nombre y una función de flecha que imprima el resultado en consola.
*/

const saludar = (nombre, cb) =>{
    let mensaje = `Hola ${nombre}`;
    cb(mensaje);
};

saludar('Sasha', (resultado) =>{
    console.log(resultado);
});


/******************************************Promesas**********************************************/
/*
Una promesa es un objeto con dos callbacks internos, es un objeto de JavaScript que sirve para manejar codigo asincrono de una forma mas clara y ordenada que usando callbacks

* Una promesa puede tener 3 estados:
- Pendiente: La operacion se esta eecutando
- Resolvio: La operacion fue exitosa
- Rechazo: La operacion fallo

* La promesa se divide en dos partes: crear, Consumir(usar)
*/

// Para crear una promesa debemos llamar a la clase new promise()
// La promesa ya trae dos callback por defecto resolve (res) se ejecuta cuando todo sale bien, reject (rej) se ejecuta cuando algo salga mal

const usuarios = [{id:1, name:'Susana'},{id:2, name:'Pablo'},{id:3, name:'Maria'}];
const correos = [{id:1, correo:'Susana@gmail.com'},{id:2, correo:'Pablo@gmail.com'}];

const buscarUsuario = (id) =>{
    const usuario = usuarios.find(usu => usu.id ==id);
    const promise = new Promise((resolve, reject) =>{
        if(!usuario) reject (`No existe el usuario con el id ${id}`);
        else resolve(usuario);
    });
    return promise
};

const buscarEmail = (user) =>{
    const email = correos.find(email => email.id == user.id);
    const promise = new Promise((resolve, reject) =>{
        if(!email) reject (`El usuario con el id ${user.id} no tiene email`);
        else resolve({
            id: user.id,
            name: user.name,
            email: email.correo
        });
    });
    return promise
};

/*
Para leer el contenido de las promesas tenemos 2 metodos:
    - .then(): Resuelve el contenido de la promesa (lo lee), como la promesa nos devuelve la info encapsulada y no podemos acceder a la info de forma directa, usamos este metodo.
    - .catch(): Resuelve el error
*/

/*
buscarUsuario(3)
    .then(usuario => buscarEmail(usuario))
    .then(res => console.log(res))
    .catch(err => console.log(err))
*/
// Se puede simplificar mas

buscarUsuario(2)
    .then(buscarEmail)
    .then(console.log)
    .catch(console.log)