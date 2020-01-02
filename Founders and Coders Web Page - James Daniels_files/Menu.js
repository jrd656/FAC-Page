//js for hiding and showing the menu
//add event listener for click
document.querySelector('.menu-button')  
  .addEventListener('click', classToggle);

  document.querySelector('.menu-button-hidden')  
  .addEventListener('click', classToggle);

function classToggle() {
  const navs = document.querySelectorAll('.fixed-menu')
  navs.forEach(nav => nav.classList.toggle('menu-toggle-hide'));

  const hiddennavs = document.querySelectorAll('.hidden-menu')
  hiddennavs.forEach(nav => nav.classList.toggle('hidden-menu-toggle-hide'));

  //hide developer info
  const devel = document.querySelectorAll('.developer-info')
  devel.forEach(nav => nav.classList.toggle('menu-toggle-hide'));

  const requir = document.querySelectorAll('.requirements')
  requir.forEach(nav => nav.classList.toggle('hidden'));
}


//left menu bar
//Click Menu Button to open menu
function openNav() {
  //Create width for left menu
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("main").classList.add("margin250");
  //hide menu button
  document.getElementById("left-menu-button").classList.add("narrowhidden");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";

  document.getElementById("main").classList.add("margin0");
  document.getElementById("left-menu-button").classList.remove("narrowhidden");
  document.getElementById("left-menu-button").classList.add("show-left-button");

  // var element = document.getElementById("myDIV");
  // element.classList.add("mystyle");
}
