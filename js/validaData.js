
 export function validarGeral(input) {
    const tiposDeInput = input.dataSet.tipo
    
    if (objetoValidador[tiposDeInput]) {
        objetoValidador[tiposDeInput](input)
    }
}
const objetoValidador = {
    dataNascimento: input => valida(input)
}

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