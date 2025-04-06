// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".add");
    const taskInput = document.querySelector(".tasking");
    const tasksContainer = document.querySelector(".tasks-container");
  
    addButton.addEventListener("click", function () {
      // Trim input and check if not empty
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        // Create a new div to hold the task
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("new-task");
  
        // Create an element to show the task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
  
        // Create a delete button for the task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "-";
        deleteButton.addEventListener("click", function () {
          // Remove the task div when clicked
          tasksContainer.removeChild(taskDiv);
        });
  
        // Append the text and delete button to the task div
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(deleteButton);
  
        // Add the task div to the tasks container
        tasksContainer.appendChild(taskDiv);
  
        // Clear the input field after adding the task
        taskInput.value = "";
      }
    });
  });
  