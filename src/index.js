import { restoreLocal } from "./localstorage"
import { NewTask } from "./constructor"
import { currentProject } from "./handleProjects"
import { saveLocal } from "./localstorage"

//From Projects:
restoreLocal()

//Dom Manipulacion Task:
const containerTask = document.querySelector(".container-task")
const tasksButton = document.querySelector(".add-task-button")
const inputTasks = document.querySelector(".input-task-container")
const cancelTaskPopUp = document.querySelector(".button-cancel-task-popup")
const editBtn = document.querySelector(".button-edit-task-popup")
const submitTaskBtn = document.querySelector(".button-add-task-popup")

// Activar el PopUp Task:
tasksButton.addEventListener("click", function () {
  inputTasks.classList.add("active")
})

// Hide PupUp Task:
cancelTaskPopUp.addEventListener("click", function (e) {
  e.preventDefault()
  inputTasks.classList.remove("active")
})

// Submit of the form Task:
submitTaskBtn.addEventListener("click", function (e) {
  e.preventDefault()
  const check = document.querySelector("#checkTask").checked
  const title = document.querySelector("#textTask").value
  const date = document.querySelector("#task-date-popup").value
  const priority = document.querySelector("#task-priority-popup").value
  addtaskToStorage(check, title, date, priority)
  renderAllNewTasks()

  inputTasks.classList.remove("active")
})

/* Render all tasks */
export function renderAllNewTasks() {
  containerTask.innerHTML = " " // quiero borrar primero todo lo que hay en el DOM
  currentProject.tasks.forEach((task) => {
    /*  console.log(task) // test */
    const newTask = document.createElement("div")
    newTask.classList.add("new-task-added")
    newTask.id = task.id

    //Check:
    const check = document.createElement("input")
    check.type = "checkbox"
    check.textContent = task.checked

    // title:
    const TextTask = document.createElement("p")
    TextTask.textContent = task.title
    TextTask.classList.add("new-task-text")

    // date:
    const date = document.createElement("p")
    date.textContent = task.date
    date.id = "task-date"

    // priority:
    const priority = document.createElement("p")
    priority.textContent = task.priority
    /* priority.id = "task-priority-popup" */

    // icon Edit:
    const iconEdit = document.createElement("div")
    iconEdit.classList.add("icon-edit")

    iconEdit.addEventListener("click", function () {
      inputTasks.classList.add("active")
      /* document.querySelector('#checkTask').checked = task.checked 
  document.querySelector('#textTask').value = task.title 
  document.querySelector('#task-date-popup').value =  task.date
  document.querySelector('#task-priority-popup').value =  task.priority */
      editTask(task.id)
    })

    // icon cancel:
    const iconCancel = document.createElement("div")
    iconCancel.classList.add("icon-cancel")

    iconCancel.addEventListener("click", function () {
      removeTasks(task.id)
    })

    containerTask.appendChild(newTask)
    newTask.appendChild(check)
    newTask.appendChild(TextTask)
    newTask.appendChild(date)
    newTask.appendChild(priority)
    newTask.appendChild(iconEdit)
    newTask.appendChild(iconCancel)
  })
}

function removeTasks(id) {
  currentProject.tasks = currentProject.tasks.filter((task) => task.id !== id)
  saveLocal()
  renderAllNewTasks()
}

function editTask(id) {
  editBtn.addEventListener("click", function (e) {
    e.preventDefault()

    const $check = document.querySelector("#checkTask").checked
    const $title = document.querySelector("#textTask").value
    const $date = document.querySelector("#task-date-popup").value
    const $priority = document.querySelector("#task-priority-popup").value

    currentProject.tasks.forEach((task) => {
      console.log(id)
      if (task.id === id) {
        task.check = $check
        task.title = $title
        task.date = $date
        task.priority = $priority
        id = null
      }

      return console.log(id)
    })

    saveLocal()

    inputTasks.classList.remove("active")
    renderAllNewTasks()
  })
}

// Agregar tasks al Storage dentro del Constructor de Projectos:
function addtaskToStorage(check, title, date, priority) {
  var newTask = new NewTask(check, title, date, priority)
  currentProject.tasks.push(newTask)
  saveLocal()
}

export { containerTask }
export { removeTasks }
