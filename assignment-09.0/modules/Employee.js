"use strict";

import { Person } from "./Person.js";

export class Employee extends Person {

  #Salary;
  #hireDate;

  constructor(name, dateOfBirth, Salary, hireDate) {
    super(name, dateOfBirth);
    this.#Salary = Salary;
    this.#hireDate = hireDate;
  }

  getSalary() {
    return this.#Salary;
  }
  getHireDate() {
    return this.#hireDate;
  }
  
  doJob(jobTitle) {
    console.log(
      `${this.name} is a ${jobTitle} who earns ${new Intl.NumberFormat(
        "en-US",
        { style: "currency", currency: "USD" }
      ).format(this.#Salary)}`
    );
  }
}