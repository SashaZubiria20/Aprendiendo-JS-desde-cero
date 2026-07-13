/* AJAX - Objeto XMLHTTP Request 3 -  enviar datos POST */


/*
1. ¿Para qué sirve el método POST?
Hasta ahora usamos GET, que es como pedirle al camarero la carta del menú (solo recibes información).
POST es como enviarle al camarero tu pedido anotado en un papel (tú envías información para que el servidor la guarde o la procese).
- ¿Para qué sirve? Para enviar datos sensibles o pesados al servidor (crear un usuario, subir una foto, publicar un comentario).
- Uso en la vida real: Cuando te registras en una red social, rellenas el formulario y das clic en "Registrarse", eso es un POST.
- ¿Qué más falta aprender? Aprender que los datos no viajan en la URL (como hacíamos antes con ?id=1), sino que viajan "escondidos" en el cuerpo de la petición.
*/

/*
2. El Objeto FormData (La estrella de este video)
En lugar de ir uno por uno haciendo document.getElementById('nombre').value, JavaScript inventó el objeto FormData.
- ¿Qué hace? Es como una "bolsa" mágica. Tú le pasas el formulario entero y él solito agarra todos los input, saca sus nombres (name) y sus valores (value) y los mete en la bolsa.
- ¿Para qué sirve? Para ahorrarte 20 líneas de código capturando datos de un formulario largo.
- ¿Cuándo se usa? Siempre que tengas que enviar un formulario por AJAX.
*/

const form3 = document.getElementById('formRegistro');

form3.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData(form3);
});

const sendData = (data) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    const datosForm = new FormData(data);

    xhr.addEventListener('load', (e) => {
        const mensajeServidor = document.getElementById('mensajeServidor');
        const respuesta = JSON.parse(e.target.response);
        console.log(respuesta);
        mensajeServidor.textContent = `¡Éxito! Post creado con el ID: ${respuesta.id}`;

        form3.reset();
    });
    
    xhr.send(datosForm);
};

