'use strict';
import { visitCounter } from './visits';

const techno = () => {
  const section = document.querySelector('.techno');
  const gridContainer = document.querySelector('.techno__grid');
  const sectionStartPos = section.getBoundingClientRect().y; // от границы окна на старте
  const icons = document.querySelectorAll('.techno__grid-elem');
  let count = 0;

  const me = document.querySelector('.techno__grid-me-block');
  const text = document.querySelector('.techno__grid-text-block');

  window.addEventListener('scroll', () => {
    if (sectionStartPos - scrollY < 40 && count === 0) {
      iconsRain();
      count++;
    }
  });

  function iconsRain() {
    const time = new Promise((resolve) => {
      const minRange = 400;
      const maxRange = 3000;
      // добавление каждой иконки функцию падения с рандомно отложенным временем запуска
      setTimeout(() => {
        icons.forEach((item) => {
          const timer =
            Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
          setTimeout(() => {
            iconFadeDown(item);
          }, timer);
        });
        resolve(maxRange + 1000);
      }, 500);
    }).then((data) => {
      setTimeout(() => {
        gridContainer.style.background =
          'linear-gradient(45deg, #ffd8c7,  #ffe6db, #fff1eb, #fff, #fff)';
        gridContainer.classList.add('animation-opacity-show');
      }, data);
      setTimeout(() => {
        me.classList.remove('hide');
        me.classList.add(
          'animate__animated',
          'animate__fadeIn',
          'animate__slower'
        );
        visitCounter('techno');
      }, +data + 400);
      setTimeout(() => {
        text.classList.remove('hide');
        text.classList.add(
          'animate__animated',
          'animate__fadeIn',
          'animate__slower'
        );
      }, +data + 400);
    });
  }

  // функция анимирует падение и исчезновение иконок технологий
  function iconFadeDown(icon) {
    icon.classList.add(
      'animate__animated',
      'animate__backOutDown',
      'animate__slower'
    );
    setTimeout(() => {
      icon.classList.add('hide');
      icon.classList.remove(
        'animate__animated',
        'animate__backOutDown',
        'animate__slower'
      );
    }, 2000);
  }
};

export default techno;
