// Event Bubbling
// document.querySelector(".card-title").addEventListener("click", function() {
//   console.log("card title");
// });

// document.querySelector(".card-content").addEventListener("click", function() {
//   console.log("card content");
// });

// document.querySelector(".card").addEventListener("click", function() {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function() {
//   console.log("col");
// });

// Event delegation

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // Not a great way to do it, must match _entier_ class name which may change:
  // if (e.target.parentElement.className === "delete-item secondary-content") {
  //   console.log("delete item");
  // }

  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}
