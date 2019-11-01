document.addEventListener("DOMContentLoaded", () => {

    let item = document.getElementById("new-task-description");

    let form = document.getElementById("create-task-form");

    // when submit is heard
    function addTaskToList(e) {
        // add item string entered as new li under To Do list
        let list = document.getElementById("tasks")
        let li = document.createElement('li');

            // function createButton() {
            //     let button = document.createElement('button')
            //     let buttonText = document.createTextNode("X");
            //     button.appendChild(buttonText);
            //     document.body.appendChild(button);
            // }
        
        if ( item.value.length !== 0 ) {
            li.innerText = item.value;
            list.appendChild(li);
        } 

        // prevent submit event from performing its default behavior (submitting the form)
        e.preventDefault();
        e.target.reset();
    };


    // listen for submit
    form.addEventListener('submit', addTaskToList);   
});


// A delete function that will remove tasks from your list
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM