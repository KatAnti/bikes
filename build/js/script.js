'use strict';

const menu = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.header__menu-button');
const logoWrapper = document.querySelector('.header__logo-wrapper');
const body = document.querySelector('body');

menu.classList.remove('main-nav--nojs');
menuToggle.classList.remove('header__menu-button--nojs');
logoWrapper.classList.remove('header__logo-wrapper--nojs');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('main-nav--closed');
  logoWrapper.classList.toggle('header__logo-wrapper--open');
  menuToggle.classList.toggle('header__menu-button--open');
  menuToggle.classList.toggle('header__menu-button--close');
  body.classList.toggle('body--overflow');
});
