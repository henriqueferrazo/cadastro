// const validaDataNascimento = document.getElementById('dataNascimento')

// validaDataNascimento.addEventListener('blur', (event) => {
//     validarNascimento(event.target)
// })

// function validarNascimento(input){
//     const valorRecebido = new Date(input.value)
//     let mensagem = " "

//     if(!maiorQue16(valorRecebido)){
//         mensagem = "Você precisa ter mais de 16 anos para se cadastrar"
//         validaDataNascimento.setAttribute('style', 'border-color: red')
//     }else{
//         validaDataNascimento.setAttribute('style', 'border-color: green')
//     }

//     input.setCustomValidity(mensagem)

// }
// function maiorQue16(data){
//     const dataAtual = new Date()
//     const maiorDe16 = new Date(data.getUTCFullYear() + 16, data.getUTCMonth(), data.getUTCDate())
//     return  maiorDe16 <= dataAtual
// }

 export function validarGeral(input) {
    const tiposDeInput = input.dataSet.tipo
    
    if (objetoValidador[tiposDeInput]) {
        objetoValidador[tiposDeInput](input)
    }
}
const objetoValidador = {
    dataNascimento: input => valida(input)
}

// validaDataNascimento.addEventListener('blur', (event) => {
//     valida(event.target)
// })
const valida = (input) => {
    const dataAtual = new Date()
    const valorRecebido = new Date(input.value)
    const maiorDe16 = new Date(valorRecebido.getUTCFullYear() + 16, valorRecebido.getUTCMonth(), valorRecebido.getUTCDate())
    let mensagem = " "

    if (!(maiorDe16 <= dataAtual)) {
        mensagem = "Você precisa ter mais de 16 anos para se cadastrar"
        validaDataNascimento.setAttribute('style', 'border-color: red')
    } else {
        validaDataNascimento.setAttribute('style', 'border-color: green')
    }

    input.setCustomValidity(mensagem)
}