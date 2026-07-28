/*
    Api Intersection Observer 1: Siver para saber cuando un elemento se ve y cuando esta oculto.
        Esto ayuda a hacer el Lazy Load, no cargamos elementos hasta que no se vayan a ver

*/



const boxes = document.querySelectorAll('.boxApi')

// El callback recibe como parametro los elementos que tiene que vigilar, lo mas normal es que se llame entries 
const callback = (entries) => {
    // console.log(entries)
    // Entonces, le decimos que por cada una de estas entradas preguntamos si esta interceptando ese objeto (elemento) entry.isIntersecting si da true es porque se esta viendo
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id, 'is intersecting')
        }
    })
}

/*
Las propiedades son:
    - root: es el elemento padre que vamos a estar vigilando, normalmento es el viuport, pero si queres vigilar otro elemento o crear otro elemento que haga de ventana aca se podria
    - rootMargin: Funciona igual que el margen de css y se pueden pasar de 1 a 4 parametros
    - threshold: Recibe valores entre 0 y 1, le decimos a que porcentaje que se esta viendo del elemento, se active el callback, funciona tanto para arriba como para abajo del scroll
*/
const options = {
    // root:
    // rootMargin: '-200px'
    threshold: 0.25
}

// Primero se crea el objeto IntersectionObserver, recibe 2 parametros (el segundo es opcional pero el primero es obligatorio) el primero es la funcion que se va a ejecutar cuando entre en nuestro rango de vision, el segundo es un objeto que recibe 3 propiedades (tambien opcionales)
const observer = new IntersectionObserver(callback, options)
// Aca recorremos el array de cajas con un forEach
boxes.forEach(element => observer.observe(element))
// Con esto ponemos a la escucha cada una de las cajas, y con el console.log de la linea 13 observamos que cada caja tiene la propiedad isIntersecting (true/false) avisa que elemento esta siendo interceptado