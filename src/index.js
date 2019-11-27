document.addEventListener("DOMContentLoaded", () => {

    // Get form and ul
    let form = document.querySelector('form');
    const ulTasks = document.getElementById('tasks');
    let tasksArray = [];
  
    // Build select list
    let selectList = document.createElement('select');
    selectList.id = "priority-list";
    let optionOne = document.createElement('option');
    let optionTwo = document.createElement('option');
    let optionThree = document.createElement('option');
    optionOne.value = "1";
    optionOne.innerText = "High";
    optionTwo.value = "2";
    optionTwo.innerText = "Medium";
    optionThree.value = "3";
    optionThree.innerText = "Low";
  
    // Insert select list before description
    form.insertBefore(selectList, form.childNodes[3]);
    // Add options
    selectList.appendChild(optionOne);
    selectList.appendChild(optionTwo);
    selectList.appendChild(optionThree);
    
  
    // Listen for submit, then display input as li
    form.addEventListener('submit', function(event){
      event.preventDefault();
  
      // Reset existing task list
      ulTasks.removeChild;
  
      // Get input
      let task = document.getElementById('new-task-description');
      let priority = document.getElementById('priority-list');
  
      // Ensure description isn't empty
      if (task.value === "") {
        return;
      } 
  
      // Construct new li element
      let li = document.createElement('li');
      li.classList.add(`priority-${priority.value}`);
      li.innerText = task.value + " ";
      li.priority = priority.value;
  
      // Construct delete button
      let deleteButton = document.createElement('button');
      deleteButton.innerHTML = "Delete";
      li.appendChild(deleteButton);
  
      // Add task object to array
      tasksArray.push(li);
  
      // Sort task array
      tasksArray.sort(function(a, b){return a.priority-b.priority});
  
      // Display sorted tasks
      for(let el of tasksArray){
        ulTasks.appendChild(el);
      }
  
      // Empty input box
      task.value = "";  
      priority.value = "1";  
    })   
  
    // Delete li on button click
    ulTasks.addEventListener('click', function(event){
      event.preventDefault();
      if (event.target.nodeName === "BUTTON") {
        event.target.parentNode.remove();
      }
    }) 
      
  });