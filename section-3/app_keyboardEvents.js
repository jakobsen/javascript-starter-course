const form = document.querySelector("form");
const taskInput = document.getElementById("task");

// Clear input
taskInput.value = "";

//form.addEventListener("submit", runEvent);

// KeyDown
// taskInput.addEventListener("keydown", runEvent);

// KeyUp
// taskInput.addEventListener("keyup", runEvent);

// KeyPress
// taskInput.addEventListener("keypress", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// Copy
// taskInput.addEventListener("copy", runEvent);

// Paste
// taskInput.addEventListener("paste", runEvent);

// Input
taskInput.addEventListener("input", runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // console.log(taskInput.value);
  // Usually needed for type=submit
  //e.preventDefault();
}
