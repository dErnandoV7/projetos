// Seleção de elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("[data-todo-input]")
const todoList = document.querySelector(".todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("[data-edit-input]")
const cancelEditBtn = document.querySelector("[data-edit-cancel-btn]")
const searchInput = document.querySelector("[data-search-input]")
const eraseBtn = document.querySelector("[data-erase-button]")
const filterBtn = document.querySelector("#filter-select")

let oldInputValue

// Funções
const saveTodo = (text, done = 0, save = 1) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.textContent = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    todo.appendChild(deleteBtn)


    // Utilizando dados do LocalStorage

    if (done) todo.classList.add("done")
    if (save) saveTodoLocalStorage({ text, done })

    todoList.appendChild(todo)

    todoInput.value = ""
    todoInput.focus()
}

const toggleForms = () => {
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
    editForm.classList.toggle("hide")
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo")

    todos.forEach(todo => {
        const title = todo.querySelector("h3")

        if (title.textContent === oldInputValue) {
            title.textContent = text
        }
    })
}

const getSearchTodos = (search) => {
    const todos = document.querySelectorAll(".todo")
    todos.forEach(todo => {
        const title = todo.querySelector("h3").textContent.toLowerCase()

        if (!title.includes(search.toLowerCase())) {
            todo.style.display = "none"
        } else {
            todo.style.display = "flex"
        }
    })
}

const filterTodos = filterTodo => {
    const todos = document.querySelectorAll(".todo")

    switch (filterTodo) {
        case "all":
            todos.forEach(todo => todo.style.display = "flex")
            break;

        case "feito":
            todos.forEach(todo => todo.classList.contains("done") ? todo.style.display = "flex" : todo.style.display = "none")
            break;

        case "a-fazer":
            todos.forEach(todo => !todo.classList.contains("done") ? todo.style.display = "flex" : todo.style.display = "none")
            break;

        default:
            break;
    }
}
// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = todoInput.value
    if (inputValue) {
        saveTodo(inputValue)
    }
})

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.parentElement
    let todoTitle

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").textContent
    }

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done")
        doneTodoLocalStorage(todoTitle)
    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
        removeTodoLocalStorage(todoTitle)
    }

    if (targetEl.classList.contains("edit-todo")) {
        toggleForms()

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()

    toggleForms()
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if (editInputValue) {
        updateTodo(editInputValue)
        updateTodoLocalStorage(editInputValue)
    }

    toggleForms()
})

searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value
    
    getSearchTodos(search)
})

eraseBtn.addEventListener("click", (e) => {
    e.preventDefault()

    searchInput.value = ""
    searchInput.dispatchEvent(new Event("keyup"))
})

filterBtn.addEventListener("change", (e) => {
    const filterValue = e.target.value

    filterTodos(filterValue)
})


// Local Storage
const getTodosLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || []

    return todos
}

const saveTodoLocalStorage = todo => {
    const todos = getTodosLocalStorage()

    todos.push(todo)

    localStorage.setItem("todos", JSON.stringify(todos))
}

const loadLoadStorage = () => {
    const todosLocalStorage = getTodosLocalStorage()
    for (const todoKey in todosLocalStorage) {
        const { text, done } = todosLocalStorage[todoKey]
        saveTodo(text, done, 0)
    }
}

const removeTodoLocalStorage = todoText => {
    const todos = getTodosLocalStorage()
    const filteredTodos = todos.filter(todo => todo.text !== todoText)

    localStorage.setItem("todos", JSON.stringify(filteredTodos))
}

const updateTodoLocalStorage = todoTexto => {
    const todos = getTodosLocalStorage()

    todos.map(todo => todo.text === oldInputValue ? todo.text = todoTexto : null)

    localStorage.setItem("todos", JSON.stringify(todos))
}

const doneTodoLocalStorage = todoText => {
    const todos = getTodosLocalStorage()

    todos.map(todo => todo.text === todoText ? todo.done = !todo.done : null)
    localStorage.setItem("todos", JSON.stringify(todos))
}

loadLoadStorage()