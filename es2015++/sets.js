// SETS -- store unique values of any type

const set1 = new Set();

set1.add(100);
set1.add('A string');
set1.add({name: "John"})
set1.add(true);
set1.add(100); // Doesn't get added, unique values only

const set2 = new Set([1, true, 'my string :)']);

// Get count of elements in set
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({name: "John"})); // false. Reference object, not primitve value

// Delete from set
set1.delete(100);
set1.delete(100); // Does nothing

// Iterating thorugh a set
for (let item of set1) {
  console.log(item);
}

set1.forEach((value) => {
  console.log(value);
})

// Convert sets into arrays
const setArray = Array.from(set1);
console.log(setArray);