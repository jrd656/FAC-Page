
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

    if (offset > delphi-400 || offset < delphi-700) {
        popupdiv.style.display = "none";
        // console.log("We're not as far down as 2400");  
        // console.log("distance to top of delphi: "+ delphi); 
        console.log("display is none"); 
    }

    if (offset < delphi-400 && offset > delphi-700) {
        popupdiv.style.display = "inline-block";
        console.log("We're over 400 above delphi and ");
        // console.log("distance to top of delphi: "+ delphi); 
        console.log("display is block"); 
    }

    let heightfromdelphi = (offset - delphi);

    // console.log("yoffset: " + offset);
    // console.log("delphi: "+delphi); 
    // console.log("height from top - delphi: "+ heightfromdelphi); 
})

// when the pageyoffset is delphi-300 or less

function popupclicked(){

    var slides2 = document.getElementById("about-me-section2");
    var popup = document.getElementById("pop-up");
    var popupcontainer = document.getElementById("popupcontainer");
  
    console.log(popup);
    console.log(popupcontainer);
  
    slides2.style.display = "inline-block";
    popup.style.display = "none";
    popupcontainer.style.display = "none";
    popupcontainer.style.height = "10px";
  
  }