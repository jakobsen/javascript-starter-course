// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addTask);

  // Remove task events
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearAllTasks);

  filter.addEventListener("keyup", filterTasks);
}

function addTask(e) {
  if (taskInput.value == "") {
    alert("Add a task");
  } else {
    // Create li element
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(link);

    console.log(li);

    taskList.appendChild(li);

    taskInput.value = "";
    e.preventDefault();
  }
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearAllTasks(e) {
  // taskList.innerHTML = "";

  // Faster
  while (taskList.firstChild) {
    taskList.firstChild.remove();
  }
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document -
    document.querySelectorAll(".collection-item").forEach(function(task) {
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });

  console.log(text);
}
