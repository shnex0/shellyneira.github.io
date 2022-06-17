/**
 * @author Shelly
 */

"use strict";

document.getElementById('add').addEventListener('click',(event) =>{
    if(event.target.className==="buttonLink"){
        console.log("clicked!");
        
        const article = document.createElement('article');
        const p = document.createElement('p');
        const a = document.createElement('a');

        a.innerText= "Click to Add a new Article";
        a.setAttribute("id", "button");
        a.setAttribute("href","#");
        p.innerText="Article Title - ";
        p.appendChild(a);
        article.appendChild(p);

        document.getElementById("add")
                .appendChild(article)
    }
})