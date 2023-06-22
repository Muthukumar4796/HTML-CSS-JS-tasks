/*
function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    
    if (task !== "") {
      var list = document.getElementById("taskList");
      var listItem = document.createElement("li");
      listItem.innerHTML = task;
  
      // Create delete button
      var closeButton = document.createElement("button");
      closeButton.innerHTML = "X";
      closeButton.classList.add("close-button");
      closeButton.onclick = function() {
        this.parentNode.remove();
      };
  
      listItem.appendChild(closeButton);
      list.appendChild(listItem);
      input.value = "";
    }
  } */


  // todo.js
function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value;

  if (task !== "") {
    var list = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.innerHTML = task;

    // Create delete button
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    closeButton.classList.add("close-button");
    closeButton.onclick = function() {
      this.parentNode.remove();
    };

    listItem.appendChild(closeButton);
    list.appendChild(listItem);
    input.value = "";

    // Set timer for task completion
    var timer = setTimeout(function() {
      listItem.classList.add("completed");
      showSuccessToast("Task completed before timer!");
    }, 5000); // Change the timer duration as needed (in milliseconds)

    // Handle task completion before the timer
    listItem.onclick = function() {
      clearTimeout(timer);
      this.classList.add("completed");
      showSuccessToast("Task completed before timer!");
    };
  }
}

function showSuccessToast(message) {
  var toast = document.createElement("div");
  toast.classList.add("toast", "success");
  toast.innerHTML = message;

  var container = document.querySelector(".container");
  container.appendChild(toast);

  setTimeout(function() {
    toast.remove();
  }, 3000); // Adjust the toast display duration as needed (in milliseconds)
}
