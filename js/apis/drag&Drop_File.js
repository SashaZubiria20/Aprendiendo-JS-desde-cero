const fileInput = document.getElementById('file5')
const dropZone = document.getElementById('dropZone5')

dropZone.addEventListener('click', () => fileInput.click())

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    dropZone.classList.add('dropZoneActive')
});

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    dropZone.classList.remove('dropZoneActive')
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    //console.log(e.dataTransfer);
    fileInput.files = e.dataTransfer.files
    //console.log(fileInput.files);
    dropZone.classList.remove('dropZoneActive')
});

fileInput.addEventListener('change', (e) => {
    //console.log(fileInput.files);
    console.log('Archivos recibidos por CLICK/SELECCIÓN:', fileInput.files);
});