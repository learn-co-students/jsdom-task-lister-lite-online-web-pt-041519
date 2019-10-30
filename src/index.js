document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", addTask)
});

function addTask(event) {
  event.preventDefault()
  let task = document.getElementById("new-task-description").value
  //alert(task)
  let li = `<li>${task}</li>`
  document.querySelector("#tasks").innerHTML += li
  document.getElementById("new-task-description").value = ""
}