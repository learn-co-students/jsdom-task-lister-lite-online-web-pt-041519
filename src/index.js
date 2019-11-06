document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById('create-task-form')
  const newTaskDescription = document.getElementById('new-task-description')
  const taskList = document.getElementById('tasks')
  newTaskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let listItem = document.createElement('li')
    listItem.innerText = newTaskDescription.value
    taskList.appendChild(listItem)
  });

});
