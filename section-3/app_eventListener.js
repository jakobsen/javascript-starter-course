// The Evenet object
// document.querySelector(".clear-tasks").addEventListener("click", function(e) {
//   console.log("Hello World");

//   // The event object
//   e.preventDefault();
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  // console.log("clicked!");
  val = e;

  // Event target element

  val = e.target;
  // val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // e.target.innerText = "Hello";

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;
  console.log(val);
}
