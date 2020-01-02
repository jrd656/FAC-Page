
var testDiv = document.getElementsByClassName("testDiv");
var testDiv1 = document.querySelector("div.testDiv");

var elDistanceToTop = window.pageYOffset + testDiv.getBoundingClientRect().top;
var elDistanceToTop1 = window.pageYOffset + testDiv1.getBoundingClientRect().top;

console.log(elDistanceToTop1);

console.log("test Div : " + testDiv1);