const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classlist.toggle('is-active');
  menuLinks.classlist.toggle('active');
  body.classlist.toggle('active');
};

menu.addEventListener('click', mobileMenu);