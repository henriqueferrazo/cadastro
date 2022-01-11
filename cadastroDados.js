const labelNomeDOM = document.getElementById("labelNome")
const nomeDOM = document.getElementById("nome")
const labelSobreNome = document.getElementById("labelSobreNome")
const sobreNomeDOM = document.getElementById("sobreNome")
const labelEmail = document.getElementById("labelEmail")
const email = document.getElementById("email")
const labelSenha = document.getElementById("labelSemha")
const senha = document.getElementById("senha")
const LabelCorfirmarSenha = document.getElementById("labelConfirmarSenha")
const confirmarSenha= document.getElementById("confirmarSenha")
const btnConfirmar = document.getElementById("confirmar")

nomeDOM.addEventListener('keyup', () => {
    if(nomeDOM.value.length <= 2 || nomeDOM.value == ""){
        nomeDOM.setAttribute('style', 'border-color: red')
    }else{
        nomeDOM.setAttribute('style', 'border-color : green')
    }
})
sobreNomeDOM.addEventListener('keyup', () => {
    if(sobreNomeDOM.value.length <= 3 || sobreNomeDOM.value == ""){
        nomeDOM.setAttribute('style', 'border-color: red')
    }else{
        sobreNomeDOM.setAttribute('style', 'border-color : green')
    }
})

btnConfirmar.addEventListener('click', (event) =>{
    event.preventDeFault()
})
