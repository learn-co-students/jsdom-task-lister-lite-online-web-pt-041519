// load DOM content, grab the necessary DOM elements
document.addEventListener('DOMContentLoaded', function() {
   console.log("The DOM has loaded - success!")

   // form input fields 
   const newTaskForm = document.getElementById('create-task-form')
   const newTaskDescription = document.getElementById('new-task-description')

   // need to create a new UL for new tasks 
   const newTaskUl = document.getElementById('tasks')

   // attach event listeners
   newTaskForm.addEventListener('submit', createTask)

})


// 3. create the task, stop form from trying to submit
function createTask(event) {
   // stops the function from immediately trying to post request
   event.preventDefault()

   const newTaskDescription = document.getElementById('new-task-description')
   const newTask = document.createElement('li')
   newTask.innerText = newTaskDescription.value

   // then you need to append to the new task ul
   const newTaskUl = document.getElementById('tasks')
   newTaskUl.appendChild(newTask)

   // reset the event target after it's been appended to the tasks ul
   event.target.reset()

}

