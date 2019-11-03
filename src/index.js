document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let input = document.getElementById('new-task-description')
  let form = document.querySelector('form')

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let ul = document.getElementById('tasks')
    let li = document.createElement('li')

    li.innerHTML = input.value
    ul.appendChild(li)
    event.target.reset()
  })


  // To celebrate success
  const celebration = document.createElement('h1')
  celebration.innerText = "WUBBA LUBBA DUB DUB!"
  const main = document.getElementById('main-content')
  main.appendChild(celebration)
  main.insertBefore(celebration, main.querySelector('h1'))
});
