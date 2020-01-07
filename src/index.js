document.addEventListener("DOMContentLoaded", () => {
  // your code here

    //set variables for the form, input, and ul
    let form = document.querySelector('form')
    let input = document.querySelector('input#new-task-description')
    let ul = document.querySelector('ul#tasks')

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      //create new task li, set to input value, and append to the ul
      let newTask = document.createElement('li')
      newTask.innerText = input.value
      ul.appendChild(newTask)

      //Create and set up delete button
      let deleteButton = document.createElement('button')
      deleteButton.innerText = 'X'
      newTask.appendChild(deleteButton)

      //Add listner to delete li on button click
      deleteButton.addEventListener('click', (e) => e.target.parentNode.remove())

      //clear the input field
      input.value = ''

    })
});
