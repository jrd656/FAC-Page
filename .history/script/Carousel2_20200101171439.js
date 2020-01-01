//js for carousel
var myIndex2 = 0;
var defaultInterval2 = 5000;
var slideInterval2 = setInterval(carousel2,defaultInterval2);


function carousel2() {
  //declare vars
  var i;
  var x = document.getElementsByClassName("mySlides2"); // x = array of images
  var dots = document.getElementsByClassName("dot2"); //round buttons as an array
  var captions = document.getElementsByClassName("caption-containers2"); //captions array
  //hide everything
  for (i = 0; i < x.length; i++) { //iterates through elements
    x[i].style.display = "none";  // Makes all images invisible
    dots[i].className = dots[i].className.replace(" JDwhite2", ""); //makes dots all blank instead of white
    captions[i].style.display = "none"; //hides all captions
  }
  //cycle to next index
  myIndex2++; // Adds 1 to index, so now index is 1. Stops -1 being an answer.
  if (myIndex2 > x.length) {myIndex2 = 1} //Brings index back to 1 once index gets higher than length. 
  if (myIndex2 <= 0) {myIndex2 = x.length}; 

  //show the relevant item
  x[myIndex2-1].style.display = "inline-block";  //Displays the index image -1.
  dots[myIndex2-1].className += " JDwhite2"; // Makes dot solid.
  captions[myIndex2-1].style.display = "block"; //displays caption?
  // console.log(x[myIndex2-1].style.display);
  } //carousel function

//Arrow function  
function plusDivs(arrowDirection2){ // arrow direction gives arg -1 for left, 1 for right arrow
  
  //declare vars for arrow functions
  var x = document.getElementsByClassName("mySlides2"); // x = array of images
  var dots = document.getElementsByClassName("dot2"); //round buttons as an array
  var captions = document.getElementsByClassName("caption-containers2"); //captions array
  //hide everything
  for (i = 0; i < x.length; i++) { //hide arrays
  x[i].style.display = "none";  // Makes all images invisible
  dots[i].className = dots[i].className.replace(" JDwhite2", ""); //makes dots all blank instead of white
  captions[i].style.display = "none"; //hides all captions
  }
  //change index depending on arrow direction
  myIndex2 += arrowDirection // myIndex2 -1 or 1 depending on arrow direction.
  if (myIndex2 > x.length) {myIndex2 = 1} //Brings index back to 1 once index gets higher than length. 
  if (myIndex2 <= 0) {myIndex2 = x.length} 

  //show the relevant item
  x[myIndex2-1].style.display = "block";  //Displays the index image -1.
  dots[myIndex2-1].className += " JDwhite"; // Makes dot solid.
  captions[myIndex2-1].style.display = "block";

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