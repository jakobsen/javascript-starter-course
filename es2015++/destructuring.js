// Destructuring Assignment
let a, b;
[a, b] = [100, 200];
console.log(a);

// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500]
console.log(rest);

// Will match object names. If no corersponding name, proceeds in order listed.
({ a, b, ...rest } = { f: 100, b: 200, a: 300, d: 400, e: 500}); 
console.log(a, b);
console.log(rest);

// Array Destructuring
// const people = ['John', 'Beth', 'Mary']
// const [person1, person2, person3] = people;

// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mary'];
}

let person1, person2, person3;
person1, person2, person3 = getPeople();

// Object Destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'male'
}

// ES5
// var name = person.name,
//       age = person.age,
//       city = person.city;

// ES6
const { name, age, city } = person;
console.log(name, age, city);