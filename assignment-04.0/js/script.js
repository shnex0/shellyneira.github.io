"use strict";

window.onload = function(){
    const form = document.getElementById('loginForm');
    form.addEventListener("submit", logIn);

    function logIn(event){
        event.preventDefault();
        const email = document.getElementById("inputEmail").value;
        const password = document.getElementById("inputPassword").value;
        const website = document.getElementById("inputWebsite").value;
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Website:", website);
    }
}