/* 
AJAX
*/

/****************************************** Objeto XMLHTTP Request parte 2 - Ejercicio: Filtrado de Datos **********************************************/

const form2 = document.getElementById('formFiltros2');
const selecUser2 = document.getElementById('userSelector2');
const cuerpoTabla2 = document.getElementById('cuerpoTabla2');
const btnGetData2 = document.getElementById('btnGetData2');
const btnLimpiar2 = document.getElementById('btnLimpiar2');


const getData2 = (id) => {
    const xhr = new XMLHttpRequest();
    if(id == undefined){
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhr.addEventListener('load', (e) => {
            const datos = JSON.parse(e.target.response);
            selecUser2.innerHTML = '<option value="">-- Selecciona --</option>';

        const fragment = document.createDocumentFragment();
        for(const user of datos){
            const option = document.createElement('OPTION');
            option.setAttribute('value', user.id);
            option.textContent = user.name;
            fragment.append(option);
        }
        selecUser2.append(fragment);
        });
    }else{
        if (id === "") return;
        xhr.open('GET', `https://jsonplaceholder.typicode.com/users?id=${id}`);
        xhr.addEventListener('load', (e) => {
            const datos = JSON.parse(e.target.response);
            cuerpoTabla2.innerHTML = '';

        const fragment = document.createDocumentFragment();
        for(const user of datos){
            const row = document.createElement('TR');
            const dataID = document.createElement('TD');
            const dataName = document.createElement('TD');
            const dataEmail = document.createElement('TD');
            const dataCity = document.createElement('TD');

            dataID.textContent = user.id;
            dataName.textContent = user.name;
            dataEmail.textContent = user.email;
            dataCity.textContent = user.address.city;

            row.append(dataID);
            row.append(dataName);
            row.append(dataEmail);
            row.append(dataCity);

            fragment.append(row);

        }
        cuerpoTabla2.append(fragment);
    });
}
    xhr.send();
};

form2.addEventListener('submit', (a) => {
    a.preventDefault(); 
    if (selecUser2.value !== "") {
        getData2(selecUser2.value);
    }
});

btnLimpiar2.addEventListener('click', () => {
    cuerpoTabla2.innerHTML = '';
});

getData2();
