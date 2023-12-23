'use strict';

// --- Seleção de elementos ---
const addNotesBtn = document.querySelector(".create-button-notes")
const addNotesInput = document.querySelector(".create-text-notes")
const containerNotes = document.querySelector(".notes-container")

// --- Funções ---

// Função para criar notas
const createNotes = text => {

    // Criando cada elemento e lhes dando as devidas configurações
    const notesElement = document.createElement("div")
    notesElement.classList.add("notes")

    const textareaElement = document.createElement("textarea")
    textareaElement.setAttribute("name", "notes-container__content")
    textareaElement.setAttribute("id", "notes-container__content")
    textareaElement.classList.add("notes-container__content")
    textareaElement.value = text
    const notesActionsElement = document.createElement("div")
    notesActionsElement.classList.add("notes-container-actions")

    const actionDelete = document.createElement("div")
    actionDelete.classList.add("delete")

    const iconDelete = document.createElement("i")
    iconDelete.setAttribute("class", "fa-solid fa-xmark icon-delete")

    const actionCopy = document.createElement("div")
    actionCopy.classList.add("copy")

    const iconCopy = document.createElement("i")
    iconCopy.setAttribute("class", "fa-regular fa-copy icon-copy")

    const actionFixed = document.createElement("div")
    actionFixed.classList.add("fixed")

    const iconFixed = document.createElement("i")
    iconFixed.style.color = "#ffffff"
    iconFixed.setAttribute("class", "fa-solid fa-shield icon-fixed")

    // Adicionando cada elemento ao seu elemento 'pai'
    actionDelete.appendChild(iconDelete)
    actionCopy.appendChild(iconCopy)
    actionFixed.appendChild(iconFixed)
    notesActionsElement.appendChild(actionDelete)
    notesActionsElement.appendChild(actionCopy)
    notesElement.appendChild(textareaElement)
    notesElement.appendChild(notesActionsElement)
    notesElement.appendChild(actionFixed)
    containerNotes.appendChild(notesElement)

    // Limpar valor do input 
    addNotesInput.value = ""
}

// --- Eventos ---
addNotesBtn.addEventListener("click", () => {
    if (addNotesInput.value) createNotes(addNotesInput.value)
})

document.addEventListener("click", e => {
    const element = e.target
    const classElement = element.getAttribute("class")
    const elementNotes = element.parentElement.parentElement.parentElement

    // Excluir nota
    if (classElement.includes("icon-delete")) elementNotes.remove()

    // Copiar nota
    if (classElement.includes("icon-copy")) {
        const notesText = elementNotes.querySelector("textarea").value
        createNotes(notesText)
    }
})
