
var testDiv = document.getElementById("parallax-bottom");
var testDiv1 = document.querySelector("div.parallax-bottom");

// var elDistanceToTop = window.pageYOffset + testDiv.getBoundingClientRect().top;
var elDistanceToTop1 = window.pageYOffset + testDiv1.getBoundingClientRect().top;

console.log(elDistanceToTop1);

console.log("test Div : " + testDiv1);