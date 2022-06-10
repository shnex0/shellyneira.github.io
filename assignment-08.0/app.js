"use strict";

/**
 * Question 1
 */
let Person = {
  name: "",
  dateOfBirth: "",

  setName: function (name) {
    this.name = name;
  },
  getName: function () {
    return this.name;
  },
};

function isPerson() {
  let Jo = Object.create(Person);
  Jo.setName("johan");
  Jo.dateOfBirth = "1998-12-10";
  console.log("The Person's name is " + Jo.getName());
  console.log("John was born on " + Jo.dateOfBirth);
}
isPerson();

/**
 * Question 02
 */
let EmployeeObjectloyee = {
  __proto__: Person,
  Salary: "0",
  hireDate: "Mar,8,2022",
  doJob: function (job) {
    console.log(this.getName() + " is a " + job + " who earns $" + this.Salary);
  },
};
function isEmployeeObjectloyee() {
  let EmployeeObject = Object.create(EmployeeObjectloyee);
  EmployeeObject.setName("Anna");
  EmployeeObject.Salary = "249,995,50";
  EmployeeObject.doJob("Programmer");
}
isEmployeeObjectloyee();

/**
 * Question 03
 */
function Person(Name, DateOfBirth){
this.Name=Name;
this.DateOfBirth=DateOfBirth;
this.toString=function(){
    console.log("Name: "+ this.Name + " DateOfBirth: "+ this.DateOfBirth);
};
};

new Person("Johan", "1998-12-10").toString();