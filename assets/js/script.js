'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


// Dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
        if (isDarkMode) {
            body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
});





/**
 * toggle navbar
 */

// const navbar = document.querySelector("[data-navbar]");
// const navLinks = document.querySelectorAll("[data-nav-link]");
// const navToggler = document.querySelector("[data-nav-toggler]");

// const toggleNavbar = function () {
//   navbar.classList.toggle("active");
//   navToggler.classList.toggle("active");
// }

// addEventOnElem(navToggler, "click", toggleNavbar);

// const closeNavbar = function () {
//   navbar.classList.remove("active");
//   navToggler.classList.remove("active");
// }

// addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});