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

