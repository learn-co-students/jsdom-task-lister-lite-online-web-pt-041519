document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    event.preventDefault()
    var e = document.getElementById("new-task-description").value
    var list = document.getElementById("tasks")
    var entry = document.createElement('li')
    entry.appendChild(document.createTextNode(e))
    list.appendChild(entry)
  })
});
