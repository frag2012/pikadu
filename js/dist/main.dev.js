"use strict";

var menuToggle = document.querySelector('#menu-toggle');
var menu = document.querySelector('.sidebar');
menuToggle.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.toggle('visible');
});