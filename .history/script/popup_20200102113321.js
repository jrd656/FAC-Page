
var testDiv = document.getElementsByClassName("testDiv");

var elDistanceToTop = window.pageYOffset + testDiv.getBoundingClientRect().top;


console.log(elDistanceToTop);

console.log("test Div : " + testDiv);