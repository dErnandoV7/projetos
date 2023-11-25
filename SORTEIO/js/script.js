const firsInput = document.querySelector("[data-input-inicial]")
const secondInput = document.querySelector("[data-input-final]")
const buttonSortear = document.querySelector(".sortear-numero")
const numero = document.querySelector(".numero")

buttonSortear.addEventListener("click", () => {
    const isValid = firsInput.value && secondInput.value

    if (isValid) {
        const numeroSorteado = Math.floor(Math.random() * ((secondInput.value) - firsInput.value)) + firsInput.value

        console.log(numeroSorteado)
    }
})