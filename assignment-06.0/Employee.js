/**
 * @author Shelly
 * Question 10 and 11:
 */

'use strict';

const Employee = () => {
    let name = "";
    let age = 0;
    let salary = 0;
    let address = "";
  
    const getAge = () => age;
    const getSalary = () => salary;
    const getName = () => name;
    const getAddress = () => address;
  
    const setAddress = (address) => (this.address = address);
    const setAge = (age) => (this.age = age);
    const setSalary = (salary) => (this.salary = salary);
    const setName = (name) => (this.name = name);
  
    const increaseSalary = (percentage) => {
        setSalary(getSalary * (percentage / 100));
    };
    const incrementAge = () => {
        setAge(getAge+1);
    };
  
    return {
      setAge: setAge,
      setName: setName,
      setSalary: setSalary,
      increaseSalary: increaseSalary,
      incrementAge: incrementAge,
    };
};
