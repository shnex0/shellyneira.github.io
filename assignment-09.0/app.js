"use strict";

/**
 * Question 01
 */
import {Person} from "./Module/Person.js";
import {Employee} from "./Module/Employee.js";

const people = [
    new Person("Anna Smith", new Date(1998,11,15)),
    new Person("Bob Jone", new Date(1945,10,16)),
    new Person("Carlos Slim Helu", new Date(1976,8,24))
];

for(const person of people) {
    console.log(person.toString());
}

/**
 * Question 02
 */
const jim = new Employee("Jim Hanson", null, 245995.00, null);
jim.doJob("Software Engineer");
jim.name = "Jim William Hanson";
jim.doJob = "Sr. Software Engineer";