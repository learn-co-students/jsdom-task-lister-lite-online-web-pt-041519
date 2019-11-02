document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  // console.log(taskForm);
  // console.log(taskList);

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // console.log(e.target);
    const newTask = e.target.querySelector("#new-task-description").value;
    // console.log(newTask);
    // slap newTask value on DOM

    // method 1: innerText
    const taskItems = document.createElement("li");
    taskItems.innerText = newTask;
    // console.log(taskItems.innerText);
    taskList.appendChild(taskItems);
    taskForm.reset();

    // method 2: innerHTML hardcode
    // taskList.innerHTML += `<li>${newTask}</li>`;
    // taskForm.reset();

    // add delete button
    appendDeleteButton(taskItems);

  });

  function appendDeleteButton(taskItems){
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    taskItems.appendChild(deleteButton);

    deleteButton.addEventListener("click", function(e){
      // console.log(e.target.parentElement);
        e.target.parentElement.remove();
    });
  }


});
