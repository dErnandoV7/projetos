
// Container Tarefas
const containerTodo = document.querySelector(".todo-container")

//  Adicionar tarefa
const buttonAdd = document.querySelector("[data-todo-add]")

buttonAdd.addEventListener("click", (e) => {
    e.preventDefault()

    // Verificando de o campo foi preenchido
    const inputTarefa = document.querySelector("[data-todo-input]")
    if (!inputTarefa.value) return

    // template Todo
    const templateTodo = document.createElement("div")

    templateTodo.classList.add("todo")
    templateTodo.innerHTML = `<h3>${inputTarefa.value}</h3>
    <button class="finish-todo">
        <i class="fa-solid fa-check"></i>
    </button>
    <button class="edit-todo">
        <i class="fa-solid fa-pen"></i>
    </button>
    <button class="delete-todo">
        <i class="fa-solid fa-xmark"></i>
    </button>`

    containerTodo.appendChild(templateTodo)
    inputTarefa.value = ""
    actions()
})

// Apagar - Editar - Marcar
function actions() {
    // Apagar
    const allButtonDelete = document.querySelectorAll(".delete-todo")
    allButtonDelete.forEach(button => {
        button.addEventListener("click", (e) => {
            e.target.parentElement.remove()
        })
    })

    // Marcar
    const allButtonFinish = document.querySelectorAll(".finish-todo")
    allButtonFinish.forEach(button => {
        button.addEventListener("click", (e) => {
            const elementPai = e.target.parentElement
            const isFinish = elementPai.classList.
            contains("done")
            if (isFinish) {
                elementPai.classList.remove("done")
            } else {
                elementPai.classList.add("done")
            }
        })
    })
}