"use strict";

const me = () => {
  const picture = document.querySelector('.me__image-box'),
        menu = document.querySelector('.me__nav-box'),
        menuBtn = document.querySelector('#me__burger');

  menuBtn.addEventListener('click', () => {
    picture.classList.toggle('me__image-box_opacity');
    menu.classList.toggle('me__nav-box_active');
    menuBtn.classList.toggle('me__burger_active');
  });

  const meButtonsBlock = document.querySelector('.me__nav-list'),
        modals = document.querySelectorAll('.modal-me'),
        overlayMe = document.querySelector('.overlay-me'),
        closeMeModal = document.querySelectorAll('.modal-me__close');

  function showMeModal(modalSelector) {
    overlayMe.classList.add('overlay-me_show');
    overlayMe.classList.add('animation-overlay-show');
  }

  meButtonsBlock.addEventListener('click', (e) => {
    if(e.target.classList.contains('button-base')) {
      showMeModal(e.target.getAttribute('data-modal'));
    } 
  });
  
}

export default me;