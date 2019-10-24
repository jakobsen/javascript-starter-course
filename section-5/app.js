// // Person constructor
// function Person(name, dateOfBirth) {
//     this.name = name;
//     this.birthday = new Date(dateOfBirth);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// // const brad = new Person("brad", 36);
// // const john = new Person("john", 30);

// // console.log(brad);
// // console.log(john);

// const brad = new Person("Brad", '9/10/1981');
// console.log(brad.calculateAge());

// // Built-in Constructors -- not recommended to use!
// //Strings
// const name1 = "Jeff"; // Yes
// const name2 = new String("Jeff"); // No

// console.log(name1);
// console.log(name2);
// console.log(name1 == name2);
// console.log(name1 === name2);

// // Numbers
// const num1 = 5;
// const num2 = new Number(5);

// console.log(num1);
// console.log(num2);
// console.log(num1 == num2);
// console.log(num1 === num2);

// // Bools
// const bool1 = true;
// const bool2 = new Boolean(true);
// console.log(bool1 == bool2);
// console.log(bool1 === bool2);

// // Function
// const getSum1 = function(x, y) {
//     return x + y
// }

// const getSum2 = new Function('x', 'y', 'return x + y');

// console.log(getSum1(1, 1));
// console.log(getSum2(1, 1));

// // Object
// const john1 = {name: "John"};
// const john2 = new Object({name: "John"});
// console.log(john1);
// console.log(john2);

// // Arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = new Array(1, 2, 3, 4);
// console.log(arr1)
// console.log(arr2)
// console.log(arr1 == arr2) // Would also be false if the two arrays were made the same way
// console.log(arr1 === arr2)

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp("\\w+");
// console.log(re1);
// console.log(re2);

// **** PROTOTYPES ****
// Object.prototype
function Person(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dateOfBirth);
    
}

// Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person("John", "Doe", "12/8/90")
const mary = new Person("Mary", "Johnson", "March 20 1978")

console.log(john)
console.log(john.calculateAge());
console.log(mary.getFullName());
mary.getsMarried("Smith");
console.log(mary.getFullName());
console.log(mary.hasOwnProperty("firstName"));
console.log(mary.hasOwnProperty("getFullName"));