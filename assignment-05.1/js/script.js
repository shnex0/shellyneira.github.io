"use strict";

function currentTime() {
    const date = new Date(); 
    const year = date.getFullYear();
    const month = formatDate(date.getMonth());
    const day = formatDate(date.getDay());
    const hh = formatDate(date.getHours());
    const mm = formatDate(date.getMinutes());
    const ss = formatDate(date.getSeconds());
  
    const time = year + "-" + month+ "-" + day+ " " + hh + ":" + mm + ":" + ss;
  
    document.getElementById("clock").innerText = time; 

    setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();
  
function formatDate(num){
    return num.toLocaleString('en-US', {minimumIntegerDigits: 2})
}