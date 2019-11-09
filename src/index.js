document.addEventListener("DOMContentLoaded", () => {
  // your code here

document.addEventListener('submit', event => {
  event.preventDefault();
  let form = document.getElementById("create-task-form");
  let ul = document.getElementById("tasks");
  let input = document.querySelector('#new-task-description').value
  let li = document.createElement('li');


    li.textContent = input;
    ul.appendChild(li);
    form.reset();


  });

});









// #create-task-form = form
// #new-task-description = value
// #tasks
