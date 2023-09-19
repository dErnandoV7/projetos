let calcularImc = document.querySelector(".calcular")

calcularImc.onclick = function calcular() {
    let valorPeso = parseFloat(document.querySelector(".peso").value)
    let valorAltura = parseFloat(document.querySelector(".altura").value)

    function analisarImc() {
        let imc = valorPeso / (Math.pow(valorAltura, 2))
        if (imc >= 40) {
            document.querySelector(".resultado").innerText = "Obesidade classe |||"
        } else if (imc >= 35) {
            document.querySelector(".resultado").innerText = "Obesidade classe ||"
        } else if (imc >= 30) {
            document.querySelector(".resultado").innerText = "Obesidade classe |"
        } else if (imc >= 25) {
            document.querySelector(".resultado").innerText = "Excesso de peso"
        } else if (imc >= 18.5) {
            document.querySelector(".resultado").innerText = "Peso normal"
        } else if (imc > 0) {
            document.querySelector(".resultado").innerText = "Abaixo do peso normal"
        } else {
            document.querySelector(".resultado").innerText = ""
        }
    }
    return analisarImc();
}