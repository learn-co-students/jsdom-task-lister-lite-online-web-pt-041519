




document.addEventListener("DOMContentLoaded", function() {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let input = document.querySelector('input#new-task-description')
    
    let ul = document.querySelector('ul')

    let text = document.createElement("text")
    
    text.innerText = input.value + " "

    let button = document.createElement("button")
    button.textContent = "x"
    button.addEventListener('click', (e) => e.target.parentNode.remove())

    let li = document.createElement('li')
    li.appendChild(text)
    li.appendChild(button)
    ul.appendChild(li)

    input.value = " "
    });
  })


