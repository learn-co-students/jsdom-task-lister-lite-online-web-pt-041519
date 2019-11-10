document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.querySelector('form#create-task-form input:last-child')
  submit.addEventListener("click", function(event) {
    let tasksList = document.getElementById('tasks')
    let li = document.createElement('li')
    value = document.getElementById('new-task-description')
    li.innerText = `${value.value}`
    tasksList.appendChild(li)
    value.form.reset()
    event.preventDefault()
  }, false)
  




});
