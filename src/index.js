document.addEventListener("DOMContentLoaded", () => {
  // your code here


  // grabs elements and selectors
  let input = document.getElementById('new-task-description')
  let form = document.querySelector('form')
  let submitButton = document.querySelector('input[type=submit]:nth-child(3)')


 // Success alert
  submitButton.addEventListener('click', (e) => {
    alert("Wubba Lubba Dub Dub!")
  })


  // stuff that happens when submit is triggered
  form.addEventListener("submit", (event) => {
    event.preventDefault()

    // selects the ul and creates li 
    let ul = document.getElementById('tasks')
    let li = document.createElement('li')

    // give the inner text for li whatever we enter as input and append it
    li.innerHTML = input.value
    ul.appendChild(li)
    // sets the input field back to empty
    input.value = ''
  })


  // Give app a better title
  const celebration = document.createElement('h1')
  celebration.innerText = "WUBBA LUBBA DUB DUB!"
  const main = document.getElementById('main-content')
  main.appendChild(celebration)
  main.insertBefore(celebration, main.querySelector('h1'))
});
