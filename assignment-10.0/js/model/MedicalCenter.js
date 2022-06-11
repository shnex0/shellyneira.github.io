"use strict";

export class Patients {
    #PatientID;
    #FirstName;
    #MiddleInitial;
    #LastName;
    #DateOfBirth;
    #Department;
    #OutPatientYes;
    #OutPatientNo;

    constructor(PatientID,FirstName,MiddleInitial,LastName,DateOfBirth,Department,OutPatientYes,OutPatientNo){
        this.#PatientID=PatientID;
        this.#FirstName=FirstName;
        this.#MiddleInitial=MiddleInitial;
        this.#LastName=LastName;
        this.#DateOfBirth=DateOfBirth;
        this.#Department=Department;
        this.#OutPatientYes=OutPatientYes;
        this.#OutPatientNo=OutPatientNo;

    }
    
    getPatientID= () =>  this.#PatientID;
    getFirstName= () => this.#FirstName;
    getMiddleInitial= () => this.#MiddleInitial;
    getLastName= () => this.#LastName;
    getDateOfBirth= () => this.#DateOfBirth;
    getDepartment= () => this.#Department;
    getOutPatientYes= () => this.#OutPatientYes;
    getOutPatientNo= () => this.#OutPatientNo;

    setPatientID= (PatientID)=>(this.#PatientID=PatientID);
    setFirstName = (FirstName)=>(this.#FirstName=FirstName);
    setMiddleInitial=(MiddleInitial)=>(this.#MiddleInitial=MiddleInitial);
    setLastName=(LastName)=>(this.#LastName=LastName);
    setDateOfBirth=(DateOfBirth)=>(this.#DateOfBirth=DateOfBirth);
    setDepartment=(Department)=>(this.#Department=Department);
    setOutPatientYes=(OutPatientYes)=>(this.#OutPatientYes=OutPatientYes);
    setOutPatientNo=(OutPatientNo)=>(this.#OutPatientNo=OutPatientNo);
    
    toString = ()=>{return  `Patient ID No	${this.getPatientID} First Name${this.#FirstName} Middle Initial(s)${this.#MiddleInitial}	Last Name${this.#MiddleInitial}	Date of birth${this.#DateOfBirth}	Department${this.#Department}	OutPatientYes:${this.#OutPatientYes} OutPatientNo ${this.#OutPatientNo}`;}
}