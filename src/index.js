document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  let input = document.querySelector('input#new-task-description')
  let ul = document.querySelector('ul#tasks')
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    let li = `<li>${task}</li>`
    ul.textContent += li

    input.value = ''
  })
});
