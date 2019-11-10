// Create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(Symbol('id') === Symbol('id'));
// console.log(`Hello ${String(sym2)}`);
// console.log(`Hello ${sym2.toString()}`);

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3'; // Standard property

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);
// console.log(myObj);

// Symbols are not enumerable in for ... in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON Stringify
console.log(JSON.stringify(myObj));