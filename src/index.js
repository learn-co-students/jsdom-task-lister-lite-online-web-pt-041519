document.addEventListener("DOMContentLoaded", () => {
  // Set the submit button to a variable.
  const add_item = document.querySelector('#create-task-form input[type="submit"]');

  // Set the list to a variable, so that items can be added to it.
  const to_do_list = document.querySelector('ul#tasks');


  // PREVENT DEFAULT ACTION + ADD NEW ITEM + 'DONE' BUTTON
  add_item.addEventListener("click", function(e) {
    // Prevent page reload on submit.
    e.preventDefault();

    // Set the text input field to a variable.
    let new_item = document.querySelector('input#new-task-description');

    // Set the importance selection field to a variable.
    let importance = document.querySelector('select#task-importance');

    // Create a new <li></li>.
    let new_li = document.createElement('li');

    // Define new_li class based on Importance
    // Determine class from Importance
    switch(importance.value.toString(10)) {
      case "3":
        new_li.className = "high";
        break;
      case "2":
        new_li.className = "med";
        break;
      case "1":
        new_li.className = "low";
        break;
    }

    // Add value from input field to the new list item.
    new_li.innerText = new_item.value;

    // Add "Done" button to new_li
    let done_button = document.createElement('button');
    done_button.innerText = "Done";
    done_button.className = "done_button";
    new_li.appendChild(done_button);

    // Add listener for done_button.
    done_button.addEventListener("click", function(e) {
      done_button.parentNode.remove();
    });

    // Add "Edit" button to new_li
    let edit_button = document.createElement('button');
    edit_button.innerText = "Edit";
    edit_button.className = "edit_button";
    new_li.appendChild(edit_button);

    // Add listener for edit_button.
    edit_button.addEventListener("click", function(e) {
      // Remove visibility for Edit and Delete buttons
      let all_edits = document.querySelectorAll('.edit_button')
      for (let i = 0; i < all_edits.length; i++) {
        all_edits[i].setAttribute('style', 'display: none');
      }

      let all_dones = document.querySelectorAll('.done_button')
      for (let i = 0; i < all_dones.length; i++) {
        all_dones[i].setAttribute('style', 'display: none');
      }

      // Set current li compontents to variables.
      let editing_li = edit_button.parentNode;
      let li_body = editing_li.firstChild;
      let editable_task = li_body.textContent;

      // Create a form to edit the item.
      let edit_form = document.createElement('form');
      edit_form.className = 'edit_form';

      // Create the text input field.
      let edit_form_task_editor = document.createElement('input');
      edit_form_task_editor.type = "text";
      edit_form_task_editor.value = editable_task;

      // Create the importance select field + options.
      let edit_form_importance = document.createElement('select');
      let high_imp = document.createElement('option');
      high_imp.text = "High";
      high_imp.value = 3;
      edit_form_importance.add(high_imp, edit_form_importance[1])
      let med_imp = document.createElement('option');
      med_imp.text = "Medium";
      med_imp.value = 2;
      edit_form_importance.add(med_imp, edit_form_importance[2])
      let low_imp = document.createElement('option');
      low_imp.text = "Low";
      low_imp.value = 1;
      edit_form_importance.add(low_imp, edit_form_importance[3])
      let no_imp = document.createElement('option');
      no_imp.text = "";
      edit_form_importance.add(no_imp, edit_form_importance[0])

      // Set 'selected' in dropdown if any
      switch(new_li.className) {
        case "high":
          edit_form_importance.selectedIndex = 1;
          break;
        case "med":
          edit_form_importance.selectedIndex = 2;
          break;
        case "low":
          edit_form_importance.selectedIndex = 3;
          break;
        default:
          edit_form_importance.selectedIndex = 0;
      };

      // Add Save button
      let save_button = document.createElement('input');
      save_button.type = "submit";
      save_button.value = "Save";
      save_button.className = "save_button";

      // Add the fields to the form.
      edit_form.appendChild(edit_form_task_editor);
      edit_form.appendChild(edit_form_importance);
      new_li.appendChild(save_button);

      // Add listener for save_button.
      save_button.addEventListener("click", function(e) {
        // Prevent default submit action.
        e.preventDefault();

        // Set edit form fields to variables
        let update_field = document.querySelector('.edit_form input');
        let updated_importance = document.querySelector('.edit_form select');

        // Update values of item text and item class
        editing_li.textContent = update_field.value;
        switch(updated_importance.value.toString(10)) {
          case "3":
            editing_li.className = "high";
            break;
          case "2":
            editing_li.className = "med";
            break;
          case "1":
            editing_li.className = "low";
            break;
          default:
            editing_li.className = "no_i";
        }

        // Remove the edit form and return the edit/done buttons
        edit_form.remove();
        editing_li.appendChild(done_button);
        for (let i = 0; i < all_edits.length; i++) {
          all_edits[i].setAttribute('style', 'display: inline-block');
        }
        editing_li.appendChild(edit_button);
        for (let i = 0; i < all_dones.length; i++) {
          all_dones[i].setAttribute('style', 'display: inline-block');
        }

      })

      // Replace the task text with the form.
      li_body.replaceWith(edit_form);
    });

    // Add the list item to the list.
    to_do_list.appendChild(new_li);

    // Clear the value from the input field.
    new_item.value = "";
    importance.value = 0;
  });

});
