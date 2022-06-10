"use strict";

export class Person {
    
    constructor(name,dateOfBirth){
        this.name=name;
        this.dateOfBirth=dateOfBirth;
    }

    getName(){return this.name;}
    getDateOfBirth(){return this.dateOfBirth;}

    setName(name){this.name=name;}
    setDateOfBirth(dateOfBirth){ this.dateOfBirth=dateOfBirth;}
   
    toString = () => `Name: ${this.name}, Date Of Birth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}`;
}