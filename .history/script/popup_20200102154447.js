
var testDiv = document.getElementById("parallax-bottom");
var testDiv1 = document.querySelector("div.parallax-bottom");
var popupdiv = document.getElementById("pop-up")

// var elDistanceToTop = window.pageYOffset + testDiv.getBoundingClientRect().top;
var elDistanceToTop1 = window.pageYOffset + testDiv1.getBoundingClientRect().top;

console.log(elDistanceToTop1);

console.log("test Div : " + testDiv1);

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;

    if (offset < 2400) {
        popupdiv.display = "none";
    }
})