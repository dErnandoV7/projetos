'use strict';

// --- Seleção de elementos ---
const addNotesBtn = document.querySelector(".create-button-notes")
const addNotesInput = document.querySelector(".create-text-notes")
const containerNotes = document.querySelector(".notes-container")
const search = document.querySelector("#search-notes")

// --- Funções ---

// Função para criar notas
const createNotes = (text, save = 1, fixed = 0) => {

    const notesObj = {
        textContent: text,
        fixed: false
    }
    // Criando cada elemento e lhes dando as devidas configurações
    const notesElement = document.createElement("div")
    notesElement.classList.add("notes")

    if (fixed) notesElement.classList.add("note-fixed")

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

    // Salvando no LocalStorage
    if (save) saveLocalStorage(notesObj)
}

const changeFixed = (notesElement, notesTextContent, fixed) => {
    notesElement.forEach(note => {
        if (notesTextContent === note.textContent) {
            const noteSelect = note

            const indice = notesElement.indexOf(note)
            notesElement.splice(indice, 1)


            if (!fixed) {
                noteSelect.fixed = true
                notesElement.unshift(noteSelect)
            } else {
                noteSelect.fixed = false
                notesElement.push(noteSelect)
            }

            localStorage.setItem("notes", JSON.stringify(notesElement))

            containerNotes.innerHTML = ''
            showNotes()
            return
        }
    })
}

// Coletando os dados do LocalStoragea
const getLocalStorage = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")

    return notes
}

const showNotes = () => {
    getLocalStorage().forEach(note => {
        const text = note.textContent
        const isFixed = note.isFixed
        createNotes(text, false, isFixed)
    })
}

// Salvando os dados do LocalStorage
const saveLocalStorage = (note) => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")
    notes.push(note)
    localStorage.setItem("notes", JSON.stringify(notes))
}

// --- Eventos ---
addNotesBtn.addEventListener("click", () => {
    if (addNotesInput.value) createNotes(addNotesInput.value)
})

document.addEventListener("click", e => {
    const element = e.target
    const classElement = element.getAttribute("class")

    // Acessando a 'nota' correspondente ao icone clicado (no seguintes casos: o icone de fixar ter sido clicado)
    const elementNotes = element.parentElement.parentElement

    // Excluir nota
    if (classElement.includes("icon-delete")) {
        const text = elementNotes.parentElement.querySelector("textarea").value
        elementNotes.parentElement.remove()
        const notes = getLocalStorage()

        notes.forEach(note => {
            if (note.textContent === text) {
                const indice = notes.indexOf(note)
                notes.splice(indice, 1)
            }
        })

        localStorage.setItem("notes", JSON.stringify(notes))
    }

    // Copiar nota
    if (classElement.includes("icon-copy")) {
        const notesText = elementNotes.parentElement.querySelector("textarea").value
        createNotes(notesText)
    }

    // Fixar nota
    if (classElement.includes("icon-fixed")) {
        const isFixed = elementNotes.classList.contains("note-fixed")
        const notes = getLocalStorage()
        const notesText = elementNotes.querySelector("textarea").value
        
        changeFixed(notes, notesText, isFixed)
    }
})

// Funções de inicialização
showNotes()

// Realizar pesquisa por notas
search.addEventListener("keyup", () => {
    const notes = document.querySelectorAll(".notes")
    const valueSearch = search.value

    notes.forEach(note => {
        const valueNotes = note.querySelector("textarea").value
        if (valueNotes.includes(valueSearch)) {
            note.classList.remove("hide")
        } else {
            note.classList.add("hide")
        }
    })
})