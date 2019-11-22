function addItemToList() {
  let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let item = document.querySelector("input#new-task-description");
      let ul = document.querySelector("ul#tasks");
      let li = document.createElement("li");
      li.innerHTML= item.value;
      ul.appendChild(li);
      item.value = ""
    });
};

document.addEventListener("DOMContentLoaded", function() {
  // your code here
  addItemToList();
});
  
