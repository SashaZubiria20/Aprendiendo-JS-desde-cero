/* 
    Tutorial chrome https://developers.google.com/web/tools/chrome-devtools/javascript?hl=es

    Depurar: Es el proceso de encontrar y corregir errores en el código. En lugar de adivinar qué está pasando, usamos el Depurador para "congelar el tiempo" y ver qué está haciendo JavaScript paso a paso.
    
    Como debuggiar (depurar) con la consola:
        - En Chrome - fuentes
        - Puntos de ruptura: Sirven para detener el codigo donde queramos: si seleccionamos la linea 17 y ejecutamos el programa se detendra en la linea 16, al pasar a la siguiente linea, vemos el error, los numero son string, entonces se concatenan, para que se sumen, los parseamos
        - Luego podemos ir a Expresiones vigiladas: podemos acceder a cualquier valor, si por ejemplo ponemos la variable number1 + enter, nos da el valor de la variable. Usando el operador typeof + variable a evaluar + enter y nos da el tipo de valor "string"
*/

const form = document.getElementById('formDebugging')
const resultElement = document.getElementById('resultDebugging')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.target.number1.value != '' && e.target.number2.value != '') {

        //const number1 = e.target.number1.value
        //const number2 = e.target.number2.value
        const number1 = parseInt(e.target.number1.value)
        const number2 = parseInt(e.target.number2.value)

        const result = number1 + number2
        resultElement.textContent = `${number1} + ${number2} = ${result}`
        e.target.reset()
    }
})