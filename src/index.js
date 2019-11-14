document.addEventListener("DOMContentLoaded", () => {

 
//Create a function for when users click the Create New Task button.
  function clickSubmit(event) {
    //Set "things" to variables so I can edit them. 
    let taskList = document.querySelector("#tasks");
    let newTask = document.createElement("li");
    let description = document.getElementById("new-task-description").value;

    // Add a text node with the value of the task description.
    newTask.appendChild(document.createTextNode(description));
    //Add the new task to the tasks list
    taskList.appendChild(newTask);
    //Prevent default behavior
    event.preventDefault();

    //Add a delete button to the newTask
    let deleteButton = document.createElement('button');
    //Set the buton's text
    deleteButton.innerText = "X";
    //Add the button to the newTask
    newTask.appendChild(deleteButton);

    //Add a listener for the deleteButton
    deleteButton.addEventListener( "click", function(e) { 
      deleteButton.parentNode.remove(); 
    } );
  }
  // Setting a constant for the form as it will not change. 
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', clickSubmit)


});
