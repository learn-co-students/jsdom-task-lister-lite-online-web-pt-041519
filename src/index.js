document.addEventListener("DOMContentLoaded", () => {
  // Set variables for the form, input, and ul
  let form = document.querySelector('form')
  let input = document.querySelector('input#new-task-description')
  let ul = document.querySelector('ul#tasks')
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    // Create new li, set to input value, and append to the ul
    let newTask = document.createElement('li')
    newTask.innerText = input.value
    ul.appendChild(newTask)
    // Clear the input field
    input.value = ''
  })

  // Create and set up delete button
  let deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'X'
  deleteBtn.className = 'delete-button'
  newTask.appendChild(deleteBtn)

  deleteBtn.addEventListener('click', (e) => e.target.parentNode.remove())
});
