"use strict";

$("#container a").on("click", function(event) {
  event.preventDefault();
  console.log($(this).text());
  $("#container").append(`<article><p>Article Title - <a href="https://google.com">Click to Add a new Article</a></p></article>`);
});