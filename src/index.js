document.addEventListener("DOMContentLoaded", () => {
  // Set variables for the form, input, and ul
  let form = document.querySelector('form')
  let input = document.querySelector('input#new-task-description')
  let ul = document.querySelector('ul#tasks')
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // Create new task li, set to input value, and append to the ul
    let newTask = document.createElement('li')
    newTask.innerText = input.value
    ul.appendChild(newTask)
    
    // Create and set up delete button
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'X'
    newTask.appendChild(deleteBtn)
    
    // Add listener to delete li on button click
    deleteBtn.addEventListener('click', (e) => e.target.parentNode.remove())
    
    // Clear the input field
    input.value = ''
  })
});
