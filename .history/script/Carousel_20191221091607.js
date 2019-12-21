//js for carousel
var myIndex = 0;
var defaultInterval = 700;
var slideInterval = setInterval(carousel,defaultInterval);


function carousel() {
  //declare vars
  var i;
  var x = document.getElementsByClassName("mySlides"); // x = array of images
  var dots = document.getElementsByClassName("dot"); //round buttons as an array
  var captions = document.getElementsByClassName("caption-containers"); //captions array
  //hide everything
  for (i = 0; i < x.length; i++) { //iterates through elements
    x[i].style.display = "none";  // Makes all images invisible
    dots[i].className = dots[i].className.replace(" JDwhite", ""); //makes dots all blank instead of white
    captions[i].style.display = "none"; //hides all captions
  }
  //cycle to next index
  myIndex++; // Adds 1 to index, so now index is 1. Stops -1 being an answer.
  if (myIndex > x.length) {myIndex = 1} //Brings index back to 1 once index gets higher than length. 
  if (myIndex <= 0) {myIndex = x.length}; 

  //show the relevant item
  x[myIndex-1].style.display = "inline-block";  //Displays the index image -1.
  dots[myIndex-1].className += "JDwhite"; // Makes dot solid.
  captions[myIndex-1].style.display = "block";
  // console.log(x[myIndex-1].style.display);
  } //carousel function

//Arrow function  
function plusDivs(arrowDirection){ // arrow direction gives arg -1 for left, 1 for right arrow
  
  //declare vars for arrow functions
  var x = document.getElementsByClassName("mySlides"); // x = array of images
  var dots = document.getElementsByClassName("dot"); //round buttons as an array
  var captions = document.getElementsByClassName("caption-containers"); //captions array
  //hide everything
  for (i = 0; i < x.length; i++) { //hide arrays
  x[i].style.display = "none";  // Makes all images invisible
  dots[i].className = dots[i].className.replace(" JDwhite", ""); //makes dots all blank instead of white
  captions[i].style.display = "none"; //hides all captions
  }
  //change index depending on arrow direction
  myIndex += arrowDirection // myIndex -1 or 1 depending on arrow direction.
  if (myIndex > x.length) {myIndex = 1} //Brings index back to 1 once index gets higher than length. 
  if (myIndex <= 0) {myIndex = x.length} 

  //show the relevant item
  x[myIndex-1].style.display = "block";  //Displays the index image -1.
  dots[myIndex-1].className += " JDwhite"; // Makes dot solid.
  captions[myIndex-1].style.display = "block";

  if(playing) {
    pauseSlideshow();
    playSlideshow();
  }

} //arrow function

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
    } 
    else {
    playSlideshow();
    }
} //pauseButton 

//Key presses
//window.addEventListener("keydown","plusDivs(-1)"); //left
window.addEventListener("keydown",TestFunction,false);

function TestFunction(key) {
  //press 'p' to pause
  if (key.keyCode == 80) {
      if(playing) {pauseSlideshow()} 
      else {
          pauseSlideshow()
          playSlideshow();
      }
  }
  //press left or right
  if (key.keyCode == 37) {plusDivs(-1)    }
  if (key.keyCode == 39) {plusDivs(1)    }
} // Key presses function

//space is 32, p is 80
//left arrow 37 right arrow 38