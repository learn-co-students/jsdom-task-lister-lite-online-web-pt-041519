document.addEventListener("DOMContentLoaded", () => {
  // your code here

    const form = document.getElementById("main-content")
    const todos = document.getElementById("tasks")
    const yourTask = document.getElementById("new-task-description")
    console.log(yourTask)

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let newTask = document.createElement("li")
        newTask.innerText = yourTask.value
        todos.appendChild(newTask)
        yourTask.value = ""
        let deleteButton = document.createElement("button")
        deleteButton.innerText = "X"
        newTask.appendChild(deleteButton)
        deleteButton.addEventListener("click", event =>{
            newTask.remove()
        })
    })




});
