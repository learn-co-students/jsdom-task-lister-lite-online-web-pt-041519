document.addEventListener("DOMContentLoaded", () => {
  // your code here

  function addToList(event) {
    let ul = document.getElementById("tasks")
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(document.getElementById("new-task-description").value))
    ul.appendChild(li)
    event.preventDefault()
  }
  const form= document.getElementById('create-task-form')
  form.addEventListener('submit', addToList)
});
