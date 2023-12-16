"use strict";
let current = 0

const txtDefaultMsgError = "Campo obrigatório!"
const senhaGeradaElement = document.querySelector(".senha-gerada")

// ---- Notificações ----
const notificationMaxCaracter = document.querySelector(".caracter-limite")
const notificationMinCaracter = document.querySelector(".caracter-minimo")

// ---- Funções ----
const changeTxtContent = (element, txt) => {
    element.textContent = txt
}

// Caracteres aleatórios
const getLetterLowerCase = () => {
    const caracterRandom = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    return caracterRandom
}

const getLetterUpperCase = () => {
    const caracterRandom = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    return caracterRandom
}

const getNumber = () => {
    const caracterRandom = String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    return caracterRandom
}

const getCaracterSpecial = () => {
    const caracterSpecial = `!\#$%¨&*()-_+={[}]´^~:;>.<,?/@|`
    return caracterSpecial[Math.floor(Math.random() * caracterSpecial.length)]
}

const gerarSenha = (regras) => {
    let password = ""

    const sizePassword = regras[0]
    const functionsGetCaracters = regras.slice(1, regras.length)
    for (let i = 0; i < sizePassword; i++) {
        const random = functionsGetCaracters[Math.floor(Math.random() * functionsGetCaracters.length)]()
        password += random
    }
    senhaGeradaElement.querySelector(".senha").classList.remove("hide")
    senhaGeradaElement.querySelector("h4").textContent = password
}

const changeNotificationStatus = (element) => {
    element.classList.add("notification-nohide")
    setTimeout(() => element.classList.remove("notification-nohide"), 3000)
}

// ---- Seleção ----
const buttonCadastrar = document.querySelector(".cadastrar")
const allInputsArray = document.querySelectorAll(".input-form")
const allInputsObj = {}
const AbaSenhaBtn = document.querySelector(".gerar-senha")
const gerarSenhaBtn = document.querySelector(".gerar-senha-avancada")
const allInputsRegrasSenha = document.querySelectorAll(".options-container input")
const allInputRegrasObj = {}
const allFunctions = [getLetterLowerCase, getLetterUpperCase, getNumber, getCaracterSpecial]
const copyPasswordBtn = document.querySelector(".copy-password")

// ---- Métodos ----
allInputsRegrasSenha.forEach(input => {
    const typeInput = input.getAttribute("type")
    const nameInput = input.getAttribute("name")

    allInputRegrasObj[nameInput] = {
        element: input,
        name: nameInput,
        type: typeInput
    }

    if (input.classList.contains("quant")) return
    input.classList.add(current)

    current++
})

allInputsArray.forEach(input => {
    const nameInput = input.getAttribute("name")
    const msg_error = input.parentElement.querySelector("span")
    const required = input.hasAttribute("required")

    allInputsObj[nameInput] = {
        element: input,
        msg: msg_error,
        isRequired: required,
        name: nameInput
    }

    input.removeAttribute("required")

    input.addEventListener("blur", () => msg_error.classList.add("hide"))
})


// ---- Eventos ----
buttonCadastrar.addEventListener("click", e => {
    e.preventDefault()

    for (const key in allInputsObj) {
        const { element, msg, isRequired, name } = allInputsObj[key]
        const valueValid = element.value
        if (!valueValid) msg.classList.remove("hide")
    }

})

AbaSenhaBtn.addEventListener("click", () => senhaGeradaElement.style.display = "flex")

gerarSenhaBtn.addEventListener("click", e => {
    e.preventDefault()

    const inputQuant = document.querySelector(".quant")
    if (Number(inputQuant.value) > 15) {
        changeNotificationStatus(notificationMaxCaracter)
        return
    }
    if (Number(inputQuant.value) < 8) {
        changeNotificationStatus(notificationMinCaracter)
        return
    }

    const selectRegras = [Number(inputQuant.value)]
    allInputsRegrasSenha.forEach(input => {
        if (input.checked) {
            const indice = input.classList[0]
            selectRegras.push(allFunctions[indice])
        }
    })

    gerarSenha(selectRegras)
})

copyPasswordBtn.addEventListener("click", e => {
    e.preventDefault()

    const password = senhaGeradaElement.querySelector("h4").textContent

    navigator.clipboard.writeText(password).then(() => {
        alert("Senha copiada com sucesso")
    })
})