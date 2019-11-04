document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


//prevents form from trying to POST somewhere
document.getElementById("create-task-form").addEventListener("submit", function(event) {
  event.preventDefault();
}, false);


// runs addtask function when submitting task
document.getElementById("create-task-form").addEventListener("submit", addTask);


// finds ul#tasks, grabs entered value from form field new-task-description, creates a new li and TextNode and appends them to ul#tasks
function addTask() {
  let list = document.getElementById('tasks');
  let task = document.getElementById('new-task-description').value;
  // let task = document.querySelector('input#new-task-description').value;
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(task));
  list.appendChild(li);
  document.getElementById("create-task-form").reset();
}

//