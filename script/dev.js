/* Developer tools */
lastModified()

function lastModified() {
  var x = document.lastModified;
  document.getElementById("lastModified").innerHTML = "Last modified: " + x ;
  document.getElementById("lastRefresh").innerHTML = "Last refresh: " + Date() ;
}

var quickInterval = 100;
var widthInterval = setInterval(screenWidth,quickInterval);
function screenWidth() {
  var x = "Total Width: " + window.innerWidth;
  document.getElementById("screenWidth").innerHTML = "Screen.width: " + x ;
}
/* Developer tools */

