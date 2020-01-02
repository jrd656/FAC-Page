
var testDiv = document.getElementById("parallax-bottom");
var testDiv1 = document.querySelector("div.parallax-bottom");
var popupdiv = document.getElementById("pop-up")
const popupdivs = document.querySelectorAll(".popupanchor");

// var elDistanceToTop = window.pageYOffset + testDiv.getBoundingClientRect().top;
var elDistanceToTop1 = window.pageYOffset + testDiv1.getBoundingClientRect().top;

console.log(elDistanceToTop1);

console.log("test Div : " + testDiv1);


window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;

    if (offset < 2400) {
        popupdiv.style.display = "none";
        console.log("We're below 2400");
        console.log("popupdiv.display:" + popupdiv.display)
    
        popupdivs.forEach(function(ppp) {
            ppp.style.opacity = (1 - offset/500);
        });

    }
})