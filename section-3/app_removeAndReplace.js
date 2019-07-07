// Replacing elements

// Create element
const newHeading = document.createElement("h2");
newHeading.id = "task-title";
// New text node
newHeading.appendChild(document.createTextNode("Task List"));

// Get old heading
const oldHeading = document.getElementById("task-title");
// Parent
const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classes and attributes
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
link.classList.add("test");
link.classList.remove("test");
val = link;

// Attributes
val = link.getAttribute("href");
link.setAttribute("href", "http://google.com");
val = link.hasAttribute("href");
link.removeAttribute("title");

console.log(val);
