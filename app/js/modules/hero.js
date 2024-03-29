'use strict';
import { visitCounter } from './visits';

const hero = () => {
  const menu = document.querySelector('#hero-nav-list'),
    menuBtn = document.querySelector('#hero-burger'),
    links = document.querySelectorAll('.hero__link');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('burger_active');
    menu.classList.toggle('hero__nav-list_active');
    visitCounter('heroBurger');
  });

  links.forEach((item) => {
    item.addEventListener('click', () => {
      menuBtn.classList.toggle('burger_active');
      menu.classList.toggle('hero__nav-list_active');
    });
  });

  const moreButton = document.querySelector('#hero__more-btn'),
    moreBadges = document.querySelectorAll('.hero__more-badge');

  moreButton.addEventListener('click', () => {
    moreButton.classList.remove(
      'animate__animated',
      'animate__pulse',
      'animate__infinite'
    );
    moreButton.classList.add('animate__animated', 'animate__bounceOutDown');
    let time = 300;
    moreBadges.forEach((item) => {
      setTimeout(() => {
        item.classList.remove('visually-hidden');
        item.classList.add('animate__animated', 'animate__backInUp');
      }, time);
      time += 300;
    });
    setTimeout(() => {
      moreButton.classList.add('hidden');
      moreButton.classList.remove(
        'animate__animated',
        'animate__bounceOutDown'
      );
    }, 500);
  });

  visitCounter('heroMain');
};

export default hero;
