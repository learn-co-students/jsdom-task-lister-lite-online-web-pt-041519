document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let input = document.querySelector('input#new-task-description')

    let ul = document.querySelector('ul#tasks')

    let newTask = document.createElement('li')
    newTask.textContent = input.value 
  })
});
