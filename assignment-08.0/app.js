"use strict";

/**
 * Question 1
 */
let person = {
  name: "",
  dateOfBirth: null,
  getName: function () {
    return this.name;
  },
  setName: function (name) {
    this.name = name;
  }
};

const john = Object.create(person);
console.log(john)
console.log(john.prototype)

john.setName("john");
john.dateOfBirth = new Date(1998,11,10);

console.log(`The person's name is ${john.getName()}.
${john.getName()} was born on ${new Intl.DateTimeFormat().format(john.getDateOfBirth())}`);

/**
 * Question 02
 */
const employee = {
  __proto__: person,
  salary: 0.0,
  hireDate: new Date(),
  doJob: function (job) {
    console.log(`${this.getName()} is a ${job} who earns ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.salary)}`);
  },
};

const anna = Object.create(employee);
anna.setName("Anna");
anna.salary = 249995.50;
anna.doJob("Programmer");

const employee2 = Object.create(person, {
    salary: {
        writable: true,
        configurablel: true,
        enumareble: true,
        value: 0.0
    },
    hireDate: {
        writable: true,
        configurablel: true,
        enumareble: true,
        value: new Date()
    }
});


/**
 * Question 03
 */
function Person(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
};

const peter = new Person("Peter", new Date(1985,10,10));
Person.prototype.toString = function(){
    return `{Name: ${this.name}, DateOfBirth: ${new Intl.DateTimeFormat().format(peter.getDateOfBirth())}}`
}

const john2 = new Person("John", new Date());