"use strict";
import { showModal, closeModal } from "./modal";

const me = () => {
  const picture = document.querySelector('.me__image-box'),
        menu = document.querySelector('.me__nav-box'),
        menuBtn = document.querySelector('#me__burger');

  menuBtn.addEventListener('click', () => {
    picture.classList.toggle('me__image-box_opacity');
    menu.classList.toggle('me__nav-box_active');
    menuBtn.classList.toggle('me__burger_active');
  });

  const meButtonsBlock = document.querySelector('.me__nav-list');

  meButtonsBlock.addEventListener('click', (e) => {
    if(e.target.classList.contains('button-base')) {
      showModal('.modal-me', '.overlay-me', e.target.getAttribute('data-modal'));
    } 
  });

  closeModal('.modal-me', '.modal-me__close', '.overlay-me');
}

export default me;