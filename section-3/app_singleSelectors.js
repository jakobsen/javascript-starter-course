// // document.getElementByID()

// console.log(document.getElementById("task-title"));

// // Get things from the element
// console.log(document.getElementById("task-title"));

// // Don't grab things all the time – store elements in variables

// const taskTitle = document.getElementById("task-title");

// // Do things to the styling – usually used for dynamic functionality
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";
// // taskTitle.style.display = "none";

// // Change the content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Tasks";
// taskTitle.innerHTML = "<span style='color:red'>Task List</span>";

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));
// If there's more than one, it'll get the first one in the DOM:
document.querySelector("li").style.color = "red";
// Grab onto subclasses
document.querySelector("ul li").style.color = "red";

// Use pseudoclasses
document.querySelector("ul li:last-child").style.color = "blue";
document.querySelector("ul li:nth-child(3)").style.color = "orange";

// Odd or even do not work as expected, only one is selected
document.querySelector("li:nt-child(odd)").style.background = "#333";

// In order for this to work, we need to use different selectors
