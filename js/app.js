import { validarGeral } from './validaData.js'
 
const inputsDOM = document.querySelectorAll('input')

 inputsDOM.forEach(input => {
    input.addEventListener('blur', (evento) => {
    validarGeral(evento.target) 
    })
 })