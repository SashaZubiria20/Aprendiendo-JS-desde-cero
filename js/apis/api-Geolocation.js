/* 
    Api: Geolocation: 
                Podemos geolocalizar el navegador en funcion de donde este cituado

        *Documentacion oficial:    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/


const button = document.getElementById('buttonGeo')

button.addEventListener('click', () => {
    // Primero creamos una constante para guardar la geolocalizacion
    const geolocation = navigator.geolocation

    // Tenemos 3 metodos, solo vamos a ver getCurrentPosition porque no estamos en movil, en la documentacion lo podemos ver, este metodo recibe 3 parametros, el primero es obligatorio y los otros dos opcionales, el primero seria la funcion que va a obtener la posicion, el segundo un error, y el tercero opciones que podemos poner
    geolocation.getCurrentPosition(getPosition, error, options)
})

/*
    Las opciones son:
        - enableHightAccuracy: Es un boleano que por defecto es false, en el caso de que el dispositivo permita tener mas opciones de geolocalizacion (como por ejemplo un cel que tiene gps, lo va a usar)
        - timeout: es el tiempo que establecemos para que devuelva la posicion
        - maximunAge: Es el tiempo que le permitimos tener algo en cache, es decir, al preguntarle la posicion, si la tenemos en cache la va a usar o no, como queremos info real es cero
*/
const options = {
    enableHightAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}


const getPosition = (position) => {
    console.log(position)
    //console.log(object)

}

const error = (error) => console.log(error)