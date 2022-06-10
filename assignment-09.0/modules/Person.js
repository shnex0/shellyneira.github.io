"use strict";

export class Person {
    #name = "";
    #dateOfBirth = null;

    constructor(name, dateOfBirth){
        this.#name = name;
        this.#dateOfBirth = dateOfBirth;
    }

    get name(){ return this.#name }
    get dateOfBirth(){ return this.#dateOfBirth }

    set name(name){ this.#name = name }
    set dateOfBirth( dateOfBirth){ this.#dateOfBirth = dateOfBirth }
   
    toString = () => `Name: ${this.#name}, Date Of Birth: ${this.#dateOfBirth.getFullYear()}-${this.#dateOfBirth.getMonth()+1}-${this.#dateOfBirth.getDate()}`;
}