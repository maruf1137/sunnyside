
// mobile menu
const menu = document.querySelector('#menu');
const mobileMenu = document.querySelector('.mobile-menu__list');
const close = document.querySelector('#close');

console.log(mobileMenu.style.transform)

menu.addEventListener('click', function(){
  mobileMenu.style.transform = "translate(0)";
})

close.addEventListener('click', function(){
  mobileMenu.style.transform = "translate(-100%)";
})


// scoll


window.addEventListener('scroll', function(){
  const nav = document.querySelector('.nav');
  nav.classList.toggle('sticky', window.scrollY > 0)
})
