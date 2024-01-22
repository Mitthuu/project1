document.addEventListener("DOMContentLoaded", function () {
  // Load tasks from localStorage when the page is loaded
  loadTasks();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = `
          <span>${taskInput.value}</span>
          <button onclick="completeTask(this)">Complete</button>
          <button onclick="removeTask(this)">Remove</button>
      `;
    taskList.appendChild(newTask);

    // Save tasks to localStorage after adding a new task
    saveTasks();

    taskInput.value = "";
  }
}

function completeTask(button) {
  const task = button.parentElement;
  task.classList.toggle("completed");

  // Save tasks to localStorage after marking a task as completed
  saveTasks();
}

function removeTask(button) {
  const task = button.parentElement;
  task.remove();

  // Save tasks to localStorage after removing a task
  saveTasks();
}

function saveTasks() {
  const taskList = document.getElementById("taskList");
  const tasks = taskList.innerHTML;

  // Save the tasks to localStorage
  localStorage.setItem("tasks", tasks);
}

function loadTasks() {
  const taskList = document.getElementById("taskList");

  // Load tasks from localStorage
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    taskList.innerHTML = savedTasks;
  }
}
