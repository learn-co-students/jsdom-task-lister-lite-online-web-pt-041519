document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
  const toDo = document.getElementById("new-task-description")
  const list = document.getElementById("tasks")
  const form = document.getElementById("create-task-form")
  

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    let task = toDo.value
    let li = document.createElement('li')
    li.innerText = task

    const deleteButton = document.createElement("button")

    deleteButton.innerText = "X"
    li.appendChild(deleteButton)

    deleteButton.addEventListener('click', (e) => {
      list.removeChild(li)
    })

    list.appendChild(li)

    toDo.value = ""
  })

});
