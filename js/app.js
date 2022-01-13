import { validarGeral } from './validaData.js'
 
const inputsDOM = document.querySelectorAll('input')

 inputsDOM.forEach(input => {
    input.addEventLister('blur', (evento) => {
    validarGeral(evento.target) 
    })
 })