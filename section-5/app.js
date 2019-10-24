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

// // **** PROTOTYPES ****
// // Object.prototype
// function Person(firstName, lastName, dateOfBirth) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dateOfBirth);
    
// }

// // Calculate age
// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get full name
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// // Gets Married
// Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
// }

// const john = new Person("John", "Doe", "12/8/90")
// const mary = new Person("Mary", "Johnson", "March 20 1978")

// console.log(john)
// console.log(john.calculateAge());
// console.log(mary.getFullName());
// mary.getsMarried("Smith");
// console.log(mary.getFullName());
// console.log(mary.hasOwnProperty("firstName"));
// console.log(mary.hasOwnProperty("getFullName"));

// // **** PROTOTYPAL INHERITANCE ****
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function() {
//     return `Hello there, ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person("John", "Doe");
// // console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phoneNumber, membership) {
//     Person.call(this, firstName, lastName);

//     this.phoneNumber = phoneNumber;
//     this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make Customer.prototype return customer
// Customer.prototype.constructor = Customer;

// // Create customer
// const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard")

// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName}.\nWelcome to our company!`
// }

// console.log(customer1.greeting());

// // **** OBJECT CREATE ****
// const personPrototypes = {
//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName) {
//         this.lastName = newLastName;
//     } 
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;
// mary.getsMarried('Thompson');

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//     firstName: {value: 'Brad'},
//     lastName: {value: 'Traversy'},
//     age: {value: 36}
// });

// console.log(brad);
// console.log(brad.greeting());

// **** ES6 Classes ****
class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dateOfBirth);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName} `
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    // Static methods
    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Thompson', '11/13/1980');
mary.getsMarried('Smith');
console.log(mary.greeting());
console.log(Person.addNumbers(2, 1));

// **** INHERITANCE IN ES6 (Subclasses) ****
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');
console.log(john.greeting());
console.log(Customer.getMembershipCost());