// hide the menu
window.addEventListener('load', () => {
  TweenMax.set('.menu', {x: -350});
});

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  //menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', function() {
  // TweenMax.to(".header h1", 2, {x:300, ease:Bounce.easeOut, yoyoEase:Power2.easeOut, yoyo:true, repeat:1, repeatDelay:0.1});
  TweenMax.to('.menu', 2, {x: 1});
  //toggleMenu();
});