// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Event listener to add a new task.
addTaskBtn.addEventListener("click", addTask);

// Function to add a new task.
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    // Event listener to mark a task as complete.
    const checkbox = taskItem.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", markTaskComplete);

    // Event listener to delete a task.
    const deleteBtn = taskItem.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", deleteTask);

    taskList.appendChild(taskItem);
    
    // Clear the input field
    taskInput.value = "";
}

// Function to mark a task as complete.
function markTaskComplete(event) {
    const taskItem = event.target.parentElement;
    if (event.target.checked) {
        taskItem.classList.add("completed");
    } else {
        taskItem.classList.remove("completed");
    }
}

// Function to delete a task.
function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
}
