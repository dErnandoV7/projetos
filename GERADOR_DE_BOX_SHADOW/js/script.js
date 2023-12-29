'use strict';

const objInputs = []

// String regra 'box shadow'
const styleBoxShadow = ["#000", "", "0px", "0px", "10px", "10px"]

// --- Seleção de elementos ---
const allInputsConfiguration = document.querySelectorAll(".input-configuration")
const allSpansCopy = document.querySelectorAll(".rule-configuration")
const inputIsInset = document.querySelector(".inset")
const boxPreview = document.querySelector(".box")

// --- Funções ---
const hexToRgb = hex => {
    return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${("0x" + hex[5] + hex[6]) | 0
        }`;
}

// --- Eventos e Métodos ---
allInputsConfiguration.forEach(input => {
    const nameInput = input.getAttribute("name")
    objInputs[nameInput] = {
        element: input,
        name: nameInput
    }
})

for (const key in objInputs) {
    const { element, name } = objInputs[key]
    // Acessando o elemento que devera exibir o valor do input range
    const inputReference = document.querySelector(`.reference-${name}`)
    element.addEventListener("input", () => {
        inputReference.value = element.value

        if (name === "color") styleBoxShadow[0] = String(element.value)
        if (name === "horizontal") styleBoxShadow[2] = String(element.value + "px")
        if (name === "vertical") styleBoxShadow[3] = String(element.value + "px")
        if (name === "blur") styleBoxShadow[4] = String(element.value + "px")
        if (name === "spread") styleBoxShadow[5] = String(element.value + "px")
        if (name === "opacity") {
            inputReference.value = element.value / 100
            const colorOld = boxPreview.style.boxShadow.split(" ").slice(0, 3)
            const lastElementColorOld = colorOld.pop().replace(")", ",") + element.value / 100 + ")"
            const colorNew = colorOld.concat(lastElementColorOld).join("")
            styleBoxShadow[0] = colorNew
        }

        const newStyleBoxShadow = styleBoxShadow.join(" ")
        boxPreview.style.boxShadow = newStyleBoxShadow

    })
    element.dispatchEvent(new Event("input"))
}

// Configuração 'inset'
inputIsInset.addEventListener("click", () => {
    styleBoxShadow[1] = ""

    if (inputIsInset.checked) styleBoxShadow[1] = "inset"

    const newStyleBoxShadow = styleBoxShadow.join(" ")
    boxPreview.style.boxShadow = newStyleBoxShadow
    allSpansCopy.forEach(span => span.textContent = newStyleBoxShadow)
})