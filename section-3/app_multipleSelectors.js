// // Get elements by class name

// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// // Can access items with array indexing
// console.log(items[0]);
// items[0].style.color = "red";
// // items[3].textContent = "Hello";

// // Nest selectors, i.e. set scope for getter
// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");

// // Get Elements by tag name (that is, the _HTML_-tag):
// let list = document.getElementsByTagName("li");
// console.log(list);

// // An HTML collection is NOT an array – in order to consider it as
// // such we must use an Array constructor

// list = Array.from(list);
// list.reverse();
// list[0].style.background = "#f3f3f3";
// list.forEach(function(li, index) {
//   li.textContent = `${index}: Hello`;
// });

// document.querySelectorAll
const items = document.querySelectorAll("ul.collection li.collection-item");

console.log(items);

items.forEach(function(item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function(li, index) {
  li.textContent = "I am odd";
  li.style.background = "#333";
});

// We can also use for-loop
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#ccc";
}
