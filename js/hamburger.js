let hamburger  = document.querySelector('.hamburger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

let links = document.querySelectorAll('.drop-menu__link');

links.forEach(function(e){
  e.preventDefault;
  e.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  hamburger.classList.toggle('hamburger--active');
  overlay.classList.toggle('overlay--active');
  body.classList.toggle('body--active-menu');
}

hamburger.addEventListener('click' , toggleMenu);