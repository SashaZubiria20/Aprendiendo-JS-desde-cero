/*
Fetch API - Lectura de archivos

    blob(): Binary Long OBject
        Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla

        URL: Con el objeto URL usando el método createObjectURL(archivo) podemos crear una ruta válida para ver ese archivo
        https://developer.mozilla.org/es/docs/Web/API/URL
*/

const btnImg = document.getElementById('btnImg');
const btnPDF = document.getElementById('btnPDF');

btnImg.addEventListener('click', () => {
    fetch('./assets/dog.webp')
        .then(res => res.blob())
        .then(img=> {
            document.getElementById('img').src = URL.createObjectURL(img)
        })
});



btnPDF.addEventListener('click', () => {
    fetch('./assets/demo.pdf')
        .then(res => res.blob())
        .then(pdf=> {
            document.getElementById('pdf').href = URL.createObjectURL(pdf)
        })
})