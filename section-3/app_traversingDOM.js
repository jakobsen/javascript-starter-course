// Traversing the DOM
let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item"); // Only select first one

val = listItem;
val = list;

// Getting children and parents of element; get child nodes
// When there is line breaks in the markup, this counts as text nodes.
// Mostly, these are of no interest.
val = list.childNodes;
val = val[0].nodeType;

// 1  - Element
// 2  - Attribute (deprecated)
// 3  - Text node
// 8  - Comment
// 9  - Document itself
// 10 - Doctype

// Get children element nodes – mostly what we want
val = list.children;
// Can manipulate elements as usual
list.children[1].textContent = "Hello";
// Children of children
list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];

val = list.firstChild;
// Don't want text in most cases; mostly we will use ElementChild
val = list.firstElementChild;

// Can also get last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Same stuff also works for parent nodes:
val = listItem.parentNode;
val = listItem.parentElement;
// Can also get parent of parent ... like traversing linked lists
val = listItem.parentElement.parentElement;

// Also have siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

val = listItem.previousSibling;
val = listItem.previousElementSibling; // null; ∄ previous sibling
console.log(val);
