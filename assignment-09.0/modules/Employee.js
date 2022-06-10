"use strict";

import { Person } from "./Person.js";

export class Employee extends Person {
  #salary = 0.0;
  #hireDate = new Date();

  constructor(name, dateOfBirth, salary, hireDate) {
    super(name, dateOfBirth);
    this.#salary = salary;
    this.#hireDate = hireDate;
  }

  get salary()  {this.#salary };
  get hireDate() { return this.#hireDate }

  doJob(jobTitle) {
    console.log(`${this.name} is a ${jobTitle} who earns ${new Intl.NumberFormat("en-US",{ style: "currency", currency: "USD" }).format(this.#salary)}`);
  }
}