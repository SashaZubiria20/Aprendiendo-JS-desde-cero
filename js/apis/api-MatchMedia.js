/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

    mql = window.matchMedia(mediaQueryString)

    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS

    Se usa para cuando tenemos que usar media para logica de js, no sustituye las medias de css
*/

const seccionMM = document.getElementById('seccionMatchMedia');
const title = document.getElementById('titleMatchMedia')

// La variable mql recibe la variable matchMedia, que es un metodo al que hay que pasarle una media query string, cualquier media valida en css es valida aca
const mql = matchMedia('(min-width:400px) and (orientation: landscape)')

// Creamos una funcion para aplicar el match media
const applyMatchMedia = mql => {
    mql.matches ?
        //NO HACER ESTO NUNCA
        seccionMM.style.backgroundColor = 'red'
        //ESTO SI
        // title.classList.add('clase que sea')
        :
        //NO HACER ESTO NUNCA
        seccionMM.style.backgroundColor = 'royalblue'
}

// Para que funcione ejecutamos la funcion en un evento, usamos el evento resize
addEventListener('resize', () => applyMatchMedia(mql))
// Para solucionar que no se apliquen los estilos por defecto al recargar la pagina, lo hacemos en el evento DOMContentLoaded
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql))