document.addEventListener("DOMContentLoaded", () => {


  // input fields
  const form = document.getElementById("create-task-form");
  const toDo = document.getElementById("new-task-description")

  function addTaskToList(e) {
    // add toDo string 
    let list = document.getElementById("tasks")
    let li = document.createElement('li');
    
    if ( toDo.value.length !== 0 ) {
        li.innerText = toDo.value;
        list.appendChild(li);
    } 

    // prevent submit event from performing its default behavior (submitting the form)
    e.preventDefault();
    e.target.reset();
};


// listen for submit
form.addEventListener('submit', addTaskToList);   
});

