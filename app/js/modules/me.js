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


}

export default me;