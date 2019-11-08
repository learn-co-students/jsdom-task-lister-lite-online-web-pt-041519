document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.getElementById("create-task-form")
  const toDo = document.getElementById("new-task-description")

  function addTaskToLost(task) {
    let list = document.getElementById("tasks")
    let li = document.createElement("li")

    if ( toDo.value.length !== 0 ) {
      li.innerText = toDo.value
      list.appendChild(li)
    }
    task.preventDefault()
    task.target.reset()
  }

  form.addEventListener('submit', addTaskToList)
});
