
var testDiv = document.getElementById("parallax-bottom");
var testDiv1 = document.querySelector("div.parallax-bottom");
var popupdiv = document.getElementById("pop-up")
const popupdivs = document.querySelectorAll(".popupanchor");

// [distance from top of page] + [distance to top of element] = height of element
var delphi = window.pageYOffset + testDiv1.getBoundingClientRect().top;


console.log(delphi);

console.log("test Div : " + testDiv1);


window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;

    if (offset < delphi-800) {
        popupdiv.style.display = "none";
        // console.log("We're not as far down as 2400");  
        console.log("distance to top of delphi: "+ delphi); 
        console.log("display is none"); 
    }

    if (offset < delphi-300) {
        popupdiv.style.display = "inline-block";
        // console.log("We're beyond 2000");
        console.log("distance to top of delphi: "+ delphi); 
        console.log("display is block"); 
    }

    let heightfromdelphi = (offset - delphi);

    console.log("yoffset: " + offset);
    console.log("delphi: "+delphi);
    console.log("height from top - delphi: "+ heightfromdelphi);
})

// when the pageyoffset is delphi-300 or less
