

const images = document.getElementById('imagesLL')
const getImages = () => {
    axios('https://picsum.photos/v2/list?page=3&limit=3')
        .then(res => {
            const fragment = document.createDocumentFragment()
            res.data.forEach(element => {
                const newImage = document.createElement('IMG')
                newImage.src = element.download_url
                newImage.classList.add('imgLL');
                fragment.appendChild(newImage)
            })
            images.appendChild(fragment)
            setObserver()
        })
}

// Aca recorremos las entradas
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 1. Dejamos de vigilar el elemento actual para que no repita la petición
            observer.unobserve(entry.target); 
            // 2. Traemos las nuevas imágenes
            getImages();
        }
    });
}

// En este caso creamos el observer dentro de una funcion, para que cuando estemos viendo la ultima imagen haga la peticion
const setObserver = () => {
    const options = {
        threshold: 0.5
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(images.lastElementChild)
}

getImages()
//