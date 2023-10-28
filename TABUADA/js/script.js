const resultadoTabuada = document.querySelector('.tabuada-result-content')

// Template Resultado da tabuada
const templateResultadoTabuada = document.createTextNode
    ('Informe um número para calcular uma tabuada')

resultadoTabuada.appendChild(templateResultadoTabuada)

// Calcular tabuada
const buttonCalcular = document.querySelector('[data-gerarTabuada]')
const inputNumero = document.querySelector('[data-numero]')
const inputMult = document.querySelector('[data-mult]')

buttonCalcular.addEventListener('click', () => {
    const inputIsInvalid = !inputNumero.value || !inputMult.value
    if (inputIsInvalid) {
        resultadoTabuada.innerHTML = ''
        resultadoTabuada.appendChild(templateResultadoTabuada)
        return
    }

    resultadoTabuada.innerHTML = ''
    for (let i = 1; i <= inputMult.value; i++) {
        const celulaTabuada = document.createElement('p')
        const contentCelulaTabuada = document.createTextNode(`${inputNumero.value} x ${i} = ${inputNumero.value * i}`)
        celulaTabuada.appendChild(contentCelulaTabuada)
        resultadoTabuada.appendChild(celulaTabuada)
    }
})
