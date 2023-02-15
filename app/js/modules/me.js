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
        closeMeModalButtons = document.querySelectorAll('.modal-me__close');

  meButtonsBlock.addEventListener('click', (e) => {
    if(e.target.classList.contains('button-base')) {
      showMeModal(e.target.getAttribute('data-modal'));
    } 
  });

  // обработчик закрытия модального окна по клику на значёк закрытия
  closeMeModalButtons.forEach(item => {
    item.addEventListener('click', () => {
      modals.forEach(item => {
        if(!item.classList.contains('hide')) {
          closeMeModal(item);
        }
      });
    });
  });
  // обработчик закрытия модального окна по клику за его пределами
  overlayMe.addEventListener('click', () => {
    modals.forEach(item => {
      if(!item.classList.contains('hide')) {
        closeMeModal(item);
      }
    });
  });

  function showMeModal(modalSelector) {
    overlayMe.classList.add('overlay-me_show');
    overlayMe.classList.add('animation-overlay-show');

    modals.forEach(item => {
      if(item.getAttribute('data-modal') === modalSelector) {
        const textBlock = document.querySelector(`#${item.getAttribute('data-modal')}`);
        textBlock.classList.add('hide');
        item.classList.remove('hide');
        item.classList.add('show-flex');
        item.classList.add('animation-modal-show');
        setTimeout(() => {
          textBlock.classList.remove('hide');
          textBlock.classList.add('animation-text-show');
          overlayMe.classList.remove('animation-overlay-show');
        }, 400)
      } else {
        item.classList.add('hide');
        item.classList.remove('show-flex');
        item.classList.remove('animation-modal-show');
      }
    })
  }

  function closeMeModal(modal) {
    const textBlock = document.querySelector(`#${modal.getAttribute('data-modal')}`);
    textBlock.classList.add('hide');
    modal.classList.add('animation-modal-hide');
    overlayMe.classList.add('animation-overlay-hide');
    
    setTimeout(() => {
      modal.classList.remove('show-flex');
      modal.classList.add('hide');
      textBlock.classList.remove('hide');
      modal.classList.remove('animation-modal-hide');
      overlayMe.classList.remove('overlay-me_show');
      overlayMe.classList.remove('animation-overlay-hide');
    }, 400)
  }

 
}

export default me;