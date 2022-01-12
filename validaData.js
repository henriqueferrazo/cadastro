const validaDataNascimento = document.getElementById('dataNascimento')

validaDataNascimento.addEventListener('blur', (event) => {
    validarNascimento(event.target)
})

function validarNascimento(input){
    const valorRecebido = new Date(input.value)
    let mensagem = " "

    if(!maiorQue16(valorRecebido)){
        mensagem = "Você precisa ter mais de 16 anos para se cadastrar"
    }
    
    input.setCustomValidity(mensagem)

}
function maiorQue16(data){
    const dataAtual = new Date()
    const maiorDe16 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())
    return  maiorDe16 <= dataAtual
}
