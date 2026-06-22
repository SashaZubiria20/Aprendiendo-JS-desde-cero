/* 
AJAX
*/

/****************************************** Objeto XMLHTTP Request 1 **********************************************/

/*
Lo primero es saber como funciona la red, nosotros hacemos una peticion a travez del protocolo HTTP a un dominio, entonces cuando buscamos una direccion lo que hacemos es pedir a un servidor cierta informacion.
Ese servidor lo que hace es devolvernos lo que nosotros denominamos la pagina web, la que esta compuesta por HTML, CSS, JS, img, videos, o lo que sea.

Cuando usamos AJAX, interceptamos esa respuesta para evitar que la pagina se recargue, guardamos toda la informacion en un objeto, para que no se carguen directamente en el navegador y una vez que estan ahi trabajamos con ese objeto de la forma que necesitemos.
*/

/* Para hacer peticiones a travez de AJAX sin depender de JQuery y haciendo que sea compatible con navegadores antiguos, JQuery pesa demaciado.
AJAX trabaja de forma acincrona */

/*
https://es.wikipedia.org/wiki/protocolo_de_transferencia_de_hipertexto
Codigos de estado de respuesta HTTP:
https://developer.mozilla.org/es/docs/web/HTTP/Status
*/

/*
Las peticiones normalmento se hacen a traves de PHP, para no crear base de datos o de intalar otras cosas, vamos a usar una API JSONPlaceholder
https://jsonplaceholder.typicode.com
Se pueden hacer peticiones normales o peticiones AJAX
Vemos que una API al hacer una peticion esta arrojando un array con un objeto dentro que a su vez tiene mas objetos adentro
*/

const button = document.getElementById('butonAjax')

// Esta funcion sera nuestra peticion AJAX, pero primero necesitamos crear un objeto donde se guarde la respuesta de la peticion (la informacion), por convencion este objeto se suele llamar xhr, porque el objeto tiene un nombre dificil.

button.addEventListener('click', () => {
    let xhr = new XMLHttpRequest()
})

/* Para evitar que esto no funcione en navegadores viejos, y sin depender de JQuery, la forma es preguntar si window tiene XMLHttpRequest, si devuelve true significa que no estamos en una version inferior a internet explorer 11 y podemos usar el objeto XMLHttpRequest(), a partir del 11 esto ya se soporta, si devuelve false, creamos el objeto ActiveXObject('Microsoft.XMLHTTP')
Esto es solo para asegurarnos de que funcione si estan usando un sistema viejo y de no tener que usar la libreria de JQuery solo para esto porque es muy pesada.
*/


button.addEventListener('click', () => {
    let xhr
    if(window.XMLHttpRequest){
        xhr= new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
});


//Continuamos con la peticion AJAX

button.addEventListener('click', () => {
    let xhr
    if(window.XMLHttpRequest) xhr= new XMLHttpRequest();
    else xhr = new ActiveXObject('Microsoft.XMLHTTP');

    // El objeto xhr tiene un metodo que es open, y recibe dos parametros, primero el metodo que vamos a usar para hacer la peticion, que puede ser GET, POST, PUT, DELET, es algo de node, estos son los metodos de la peticion HTML, si se hace a travez de GET, los codigos hay que ponerlos dentro de la url a la qeu hacemos la peticion y si lo hacemos por POST tenemos que crear un objeto donde guardariamos esa informacion.
    // Si estuvieramos trabajando con un lenguaje de bakend en el segundo parametro iria la direccion de donde este el archivo de ese lenguaje
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    // Pero antes de enviarla xhr.send(), le tenemos que decir que hacer con los datos, como AJAX es asincrono, tardara una fraccion de tiempo y para saber cuando se ha completado es peticion tenemos que hacer un evento y saber que la info llego, para eso tenemos el evento load y lo guardamos en una variable, en este caso la llamamos data
    xhr.addEventListener('load', (data) =>{
        // console.dir(typeof data.target.response) El operador typeof, nos dice que tipo de dato es, de esta forma llegaria un strin, pero necesitamos un objeto para poder trabajar
        // Para convertir el string en un objeto usamos JSON.parse() lo convierte a un formato de objeto
        // console.dir(JSON.parse(data.target.response))
        // Entonces lo podemos guardar en una variable
        const dataJSON = JSON.parse(data.target.response);

        // Como ya tenemos todos los datos podemos trabajar con el
        const list2 = document.getElementById('list2');
        for(const userInfo of dataJSON){
            const listItem = document.createElement('LI');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list2.appendChild(listItem);
        }

    });

    //Una vez que tenemos esto, lo que tenemos que hacer es enviar esta peticion
    xhr.send()
});


/******************************************EJERCICIOS**********************************************/

/*
Nivel 1: La Conexión Básica
Selecciona el botón #btnCargarUsuarios.
Al hacer clic, crea un objeto new XMLHttpRequest().
Ábrelo con el método GET a esta URL: https://jsonplaceholder.typicode.com/users.
Usa el evento 'load' para mostrar en la consola el texto crudo que responde el servidor (e.target.response).
No olvides usar el método .send() al final para enviar la petición.
*/

const botonUsuario = document.getElementById('btnCargarUsuarios');
const listaUsuarios = document.getElementById('listaUsuarios');
const infoDetallada = document.getElementById('infoDetallada');

botonUsuario.addEventListener('click', () =>{
    let xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr1.addEventListener('load', (e) =>{
        const eJson = JSON.parse(e.target.response);
        console.log(eJson);
        
    })
    xhr1.send()
})

/*
Nivel 2: Del Texto al Objeto (JSON.parse)
En el mismo evento 'load', crea una constante llamada datos.
Convierte la respuesta del servidor (que es un String) en un objeto real usando JSON.parse().
Recorre ese array de usuarios (son 10) usando un bucle forEach.
Por cada usuario, crea un <li> con su nombre y agrégalo a la lista #listaUsuarios.
*/

botonUsuario.addEventListener('click', () =>{
    const xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr2.addEventListener('load', (e) =>{
        const datos = JSON.parse(e.target.response);
        listaUsuarios.innerHTML = '';
        const fragmento = document.createDocumentFragment();
        datos.forEach((dato) => {
            const datoItem = document.createElement('LI');
            datoItem.textContent = dato.name;
            fragmento.appendChild(datoItem);
        });
        listaUsuarios.appendChild(fragmento);
    })
    xhr2.send();
});


/*
Nivel 3: El Inspector de Emails (Lógica Pro)
Modifica el ejercicio anterior:
Cuando los datos lleguen, antes de crear la lista, selecciona el primer usuario del array (datos[0]).
Crea un elemento <p>, ponle de texto: "El email del jefe es: " + su email, y mételo dentro del div #infoDetallada.
Reto Extra: Si la petición falla (puedes probar desconectando tu internet un segundo), muestra un console.error que diga "Error de conexión".
*/

botonUsuario.addEventListener('click', () =>{
    const xhr3 = new XMLHttpRequest();
    xhr3.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr3.addEventListener('load', (e) =>{
        const datos = JSON.parse(e.target.response);
        const user1 = datos[0];
        const p = document.createElement('P');
        p.textContent = `El email del jefe es: ${user1.name} y su email es ${user1.email}`;
        infoDetallada.innerHTML = '';
        infoDetallada.appendChild(p);

        const fragmento2 = document.createDocumentFragment();
        listaUsuarios.innerHTML = '';
        datos.forEach((dato) => {
            const datoItem = document.createElement('LI');
            datoItem.textContent = dato.name;
            fragmento2.appendChild(datoItem);
        });
        listaUsuarios.appendChild(fragmento2);
    })
    xhr3.send()
});

