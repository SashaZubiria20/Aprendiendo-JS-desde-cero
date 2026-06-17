const button = document.getElementById('butonON');
/*
Objeto window - Es el objeto global, de el descienden todos los objetos
    alert() - Tenemos una ventana con un mensaje
    prompt() - Tenemos una ventana donde se puede escribir e ingresar algun valor
    confirm() - tenemos una ventana para aceptar o cancelar

Aparecen ventanas en la web apenas carga, si no se asocia a nada es como poner window.alert()
Son ventana que pausan la carga de la pagina
*/


/*
Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/web/API/Console
    console.log() - Imprime en consola
    console.dir() - igual que console log pero a veces al imprimir con console.log no se pude desplegar el elemento y usamos console.dir
    console.error() - Podemos sacar mensajes de error, por ejemplo usarlo con un equipo para depurar codigo
    console.table() - Sirve para visualizar en consola la informacion de un elemento pero en tabla, es un poco mas visual
*/

const person = {
    name: 'Pepe',
    age: 30,
    email: 'juanperez@gmail.com'
}
console.table(person);


/*
Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/web/API/Location

    location.href - Devuelve la direccion de la barra de navegacion, tambien nos permite cambiar la url e ir a otra pagina
    location.protocol - Devuelve si es http: o https:
    location.host - Nos da el dominio principal
    location.pathname - Nos da el resto de la localizacion, el dominio sin la parte principal
    location.hash - es una forma de pasar parametros entre paginas, podemos usarlo para tener un solo html y en funcion del hash que pasemos cargar una info u otra
    location.reload() - Recarga la pagina
*/

console.log(location.href);
console.log(location.protocol);


/*
Objeto history
    history
    history.back() - Para volver atras
    history.forward() - Para ir adelante
    history.go(n| -n) - Navegamos por el historia x paginas hacia adelante o x paginas hacia atras

    length - Nos da la cantidad de paginas guardadas en el historial de esa pestaña, solo funciona sobre la secion en curso, no sobre todo el historial del navegador

Trabaja con el historial de la pestaña en la que estamos navegando
*/

/*
Objeto date
    https://developer.mozilla.org/es/docs/web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref_obj_date.asp

    Hay muchos metodos,para usarlo necesitamos instanciarlo.
*/

const date = new Date()

console.log(date.getDay());

/*
Timers:
    Lo que podemos hacer es establecer que una funcion se ejecute, no desde que se lee, sino pasados unos segundos

    Timeout:
    https://developer.mozilla.org/en-US/docs/web/API/windowOrworkerGlobalScope/setTimeout

    setTimeout(()=>{code}, delay-in-milisecond) - Hace que se ejecute la funcion despues de deplay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

    Interval:
    https://developer.mozilla.org/en-US/docs/web/API/windowOrworkerGlobalScope/setInterval

    setInterval(() =>{code}, delay-in-miliseconds) - Hace que se ejecute la funcion cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

// Si la funcion es externa no hay que poner los parentesis y la flecha de la funcion, si el codigo de la funcion, osea lo que se va a ejecutar va dentro si hay que ponerlo
button.addEventListener('click', () =>{
    //setTimeout(()=>saludar,3000)
    setTimeout(()=>{
        console.log('Adios');
    },3000)
});

const saludar = () =>{
    console.log('Hola')
};