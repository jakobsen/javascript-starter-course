// ALL OF THE FOLLOWING FUNCTIONS ARE THE SAME

// function sayHello() {
//   console.log('Hello');
// }

// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// May run into trouble with object literals
// const sayHello = () => { msg: 'hello' };

// Fix: Wrap object in paranthesis
// const sayHello = () => ({ msg: 'hello' });

// Single argument does not need paranthesis
// const sayHello = name => console.log(`Hello, ${name}!`);

// More than one argument does
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}!`);

// sayHello('Brad', 'Traversy');

// Can also be used for callbacks
const users = ['Nathan', 'John', 'William']

// const nameLengths = users.map(function(name) {
//   return name.length;
// })

// const nameLengths = users.mape((name) => {
//   return name.length;
// })

const nameLengths = users.map(name => name.length);

console.log(nameLengths);