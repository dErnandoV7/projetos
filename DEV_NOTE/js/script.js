'use strict';

// --- Seleção de elementos ---
const addNotesBtn = document.querySelector(".create-button-notes")
const addNotesInput = document.querySelector(".create-text-notes")
const containerNotes = document.querySelector(".notes-container")
const search = document.querySelector("#search-notes")

// --- Funções ---

// Função para criar notas
const createNotes = (text, save = 1, fixed = 0, id) => {

  const idNotes = toDefineId()

  const notesObj = {
    id: idNotes,
    textContent: text,
    fixed: false
  }

  // Criando cada elemento e lhes dando as devidas configurações
  const notesElement = document.createElement("div")
  notesElement.classList.add("notes")

  if (save) {
    notesElement.setAttribute("id", idNotes)
  } else {
    notesElement.setAttribute("id", id)
  }

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


const changeFixed = (notesElement, id, fixed) => {
  notesElement.forEach(note => {
    if (id == note.id) {
      const notes = getLocalStorage()
      const indice = notesElement.indexOf(note)

      fixed ? notes[indice].fixed = false : notes[indice].fixed = true

      const notesOrder = notes.sort((a, b) => (a.fixed > b.fixed ? -1 : 1))
      console.log(notesOrder)
      localStorage.setItem("notes", JSON.stringify(notesOrder))

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
    const isFixed = note.fixed
    const id = note.id
    createNotes(text, false, isFixed, id)
  })
}

// Salvando os dados do LocalStorage
const saveLocalStorage = (note) => {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]")
  notes.push(note)
  localStorage.setItem("notes", JSON.stringify(notes))
}

// Gerar id para cada nota
const toDefineId = () => {
  const idRandom = Math.floor(Math.random() * 1000)
  getLocalStorage().forEach(note => {
    if (note.id == idRandom) {
      return toDefineId()
    }
  })

  return idRandom
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
    const id = elementNotes.parentElement.getAttribute("id")
    elementNotes.parentElement.remove()

    const notes = getLocalStorage()

    notes.forEach(note => {
      if (note.id == id) {
        const indice = notes.indexOf(note)
        notes.splice(indice, 1)
      }
    })

    localStorage.setItem("notes", JSON.stringify(notes))
  }

  // Copiar nota
  if (classElement.includes("icon-copy")) {
    const id = elementNotes.parentElement.getAttribute("id")
    let valueNotes
    getLocalStorage().forEach(note => {
      if (note.id == id) valueNotes = note.textContent
    })

    createNotes(valueNotes)
  }

  // Fixar nota
  if (classElement.includes("icon-fixed")) {
    const isFixed = elementNotes.classList.contains("note-fixed")
    const notes = getLocalStorage()
    const idNotes = elementNotes.getAttribute("id")

    changeFixed(notes, idNotes, isFixed)
  }

  // Alterar dados do note no LocalStorage
  if (element.classList.contains("notes-container__content")) {

    element.addEventListener("keyup", () => {
      const notes = getLocalStorage()
      const id = element.parentElement.getAttribute("id")

      notes.forEach(note => {
        if (note.id == id) note.textContent = element.value
      })

      localStorage.setItem("notes", JSON.stringify(notes))
    })
  }
})

// Funções de inicialização
showNotes()

// Realizar pesquisa por notas
search.addEventListener("keyup", () => {
  const notes = document.querySelectorAll(".notes")
  const valueSearch = search.value.toLowerCase()

  notes.forEach(note => {
    const valueNotes = note.querySelector("textarea").value.toLowerCase()
    if (valueNotes.includes(valueSearch)) {
      note.classList.remove("hide")
    } else {
      note.classList.add("hide")
    }
  })
})