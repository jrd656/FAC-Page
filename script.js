


var myIndex = 0;
var defaultInterval = 1500;
var slideInterval = setInterval(carousel,defaultInterval);


function carousel() {

  var i;
  var x = document.getElementsByClassName("mySlides"); // x = array of images
  var dots = document.getElementsByClassName("dot"); //round buttons as an array
  var captions = document.getElementsByClassName("caption-text");
  console.log(dots);
  for (i = 0; i < x.length; i++) { //Hides elements
    x[i].style.display = "none";  // Makes all images invisible
    dots[i].className = dots[i].className.replace(" JDwhite", ""); //makes dots all blank instead of white
    captions[i].style.display = "none";
    console.log(dots);
  }
  myIndex++; // Adds 1 to index, so now index is 1. Stops -1 being an answer.
  if (myIndex > x.length) {myIndex = 1} //Brings index back to 1 once index gets higher than length. 
  if (myIndex <= 0) {myIndex = x.length} 

  x[myIndex-1].style.display = "block";  //Displays the index image -1.
  dots[myIndex-1].className += " JDwhite"; // Makes dot solid.
  captions[myIndex-1].style.display = "block";
  // console.log(x[myIndex-1].style.display);
}

//Arrow function  
function plusDivs(arrowDirection){
    var x = document.getElementsByClassName("mySlides"); // x = array of images
  var dots = document.getElementsByClassName("dot"); //round buttons as an array

    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  // Makes all images invisible
    dots[i].className = dots[i].className.replace(" JDwhite", ""); //makes dots all blank instead of white

}

myIndex += arrowDirection
if (myIndex > x.length) {myIndex = 1} //Brings index back to 1 once index gets higher than length. 
if (myIndex <= 0) {myIndex = x.length} 
x[myIndex-1].style.display = "block";  //Displays the index image -1.
  dots[myIndex-1].className += " JDwhite"; // Makes dot solid.

}

//Pause and play
var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
    pauseButton.innerHTML = '&#9658';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '&#9616;&nbsp;&#9612';
    playing = true;
    slideInterval = setInterval(carousel,defaultInterval);
}

pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

//Key presses
//window.addEventListener("keydown","plusDivs(-1)"); //left
window.addEventListener("keydown",TestFunction,false);

function TestFunction(key) {
    //press space to pause
    if (key.keyCode == 32) {
        if(playing) {pauseSlideshow()} 
        else {playSlideshow();}
    }
    //press left or right
    if (key.keyCode == 37) {plusDivs(-1)
        clearInterval(slideInterval);
        slideInterval = setInterval(carousel,defaultInterval);}
    if (key.keyCode == 39) {plusDivs(1)}
    console.log(key.keyCode)}

//space is 32
//left arrow 37 right arrow 38


