"use strict";
import { Patients } from "./model/MedicalCenter.js";

$(document).ready(function(){
    const patientData=[];

    $("#patientForm").submit(function(event){
        event.preventDefault();
        const PatientID=$("#patientIdNumber").val();
        const FirstName= $("#firstName").val();
        const MiddleInitial = $("#middleInitials").val();
        const LastName = $("#lastName").val();
        const DateOfBirth = $("#dateOfBirth").val();
        const Department = $("#ddlDepartment").val();
        const OutPatientYes = $("#radioIsOutPatientYes").is(':checked');;
        const OutPatientNo = $("#radioIsOutPatientNo").is(':checked');;
        
        const newPatients = new Patients(PatientID,FirstName,MiddleInitial,LastName,DateOfBirth,Department,OutPatientYes,OutPatientNo)
        patientData.push(newPatients);
        createPatient(newPatients);
        $("#PatientID").val("");
        $("#firstName").val("");
        $("#middleInitials").val("");
        $("#LastName").val("");
        $("#dateOfBirth").val("");
        $("#ddlDepartment").val("");
        $("#radioIsOutPatientYes").val("");
        $("#radioIsOutPatientNo").val("");
    });

    const createPatient= (newPatients) =>{
        const is_out = newPatients.getOutPatientYes() == true ? "Yes" : "No";
        const row = `<tr>
        <td>${newPatients.getPatientID()}</td>
        <td>${newPatients.getFirstName()}</td>
        <td>${newPatients.getMiddleInitial()}</td>
        <td>${newPatients.getLastName()}</td>
        <td>${newPatients.getDateOfBirth()}</td>
        <td>${newPatients.getDepartment()}</td>
        <td>${is_out}</td>
    </tr>`;
    $('#tablePatients tbody').append(row);
  
    }
    $("#chkShowOutPatients").on("click", function (event) {
        if ($('#chkShowOutPatients').is(':checked')) {
            const newData = patientData.filter(x => x.getOutPatientYes() == true);
            $('#tablePatients tbody').empty();
            newData.forEach(patient => {
                const is_out = patient.getOutPatientYes() == true ? "Yes" : "No";
                const row = `<tr>
                    <td>${patient.getPatientID()}</td>
                    <td>${patient.getFirstName()}</td>
                    <td>${patient.getMiddleInitial()}</td>
                    <td>${patient.getLastName()}</td>
                    <td>${patient.getDateOfBirth()}</td>
                    <td>${patient.getDepartment()}</td>
                    <td>${is_out}</td>
                </tr>`;
                $('#tablePatients tbody').append(row);

            });
        } else {
            const newData = patientData;
            $('#tablePatients tbody').empty();
            newData.forEach(patient => {
                const is_out = patient.getOutPatientYes() == true ? "Yes" : "No";
                const row = `<tr>
                    <td>${patient.getPatientID()}</td>
                    <td>${patient.getFirstName()}</td>
                    <td>${patient.getMiddleInitial()}</td>
                    <td>${patient.getLastName()}</td>
                    <td>${patient.getDateOfBirth()}</td>
                    <td>${patient.getDepartment()}</td>
                    <td>${is_out}</td>
                </tr>`;
                $('#tablePatients tbody').append(row);
            });
        }
    });

    $("#chkElderlyPatients").on("click", function (event) {
        if ($('#chkElderlyPatients').is(':checked')) {
            const newData = patientData;
            $('#tablePatients tbody').empty();
            newData.forEach(patient => {
                const is_out = patient.getOutPatientYes() == true ? "Yes" : "No";
                const row = `<tr>
                    <td>${patient.getPatientID()}</td>
                    <td>${patient.getFirstName()}</td>
                    <td>${patient.getMiddleInitial()}</td>
                    <td>${patient.getLastName()}</td>
                    <td>${patient.getDateOfBirth()}</td>
                    <td>${patient.getDepartment()}</td>
                    <td>${is_out}</td>
                </tr>`;
                $('#tablePatients tbody').append(row);

            });
        } else {
            const newData = patientData;
            $('#tablePatients tbody').empty();
            newData.forEach(patient => {
                const is_out = patient.getOutPatientYes() == true ? "Yes" : "No";
                const row = `<tr>
                    <td>${patient.getPatientID()}</td>
                    <td>${patient.getFirstName()}</td>
                    <td>${patient.getMiddleInitial()}</td>
                    <td>${patient.getLastName()}</td>
                    <td>${patient.getDateOfBirth()}</td>
                    <td>${patient.getDepartment()}</td>
                    <td>${is_out}</td>
                </tr>`;
                $('#tablePatients tbody').append(row);
            });
        }
    });
});