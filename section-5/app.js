// Person constructor
function Person(name, dateOfBirth) {
    this.name = name;
    this.birthday = new Date(dateOfBirth);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const brad = new Person("brad", 36);
// const john = new Person("john", 30);

// console.log(brad);
// console.log(john);

const brad = new Person("Brad", '9/10/1981');
console.log(brad.calculateAge());