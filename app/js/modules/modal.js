'use strickt';

function showModal(allModalsSelector, overlaySelector, modalSelector) {
  const modals = document.querySelectorAll(allModalsSelector),
    overlay = document.querySelector(overlaySelector);

  overlay.classList.add('show-flex');
  overlay.classList.add('animation-opacity-show');

  document.querySelector('body').style.overflow = 'hidden';
  if (document.documentElement.clientWidth > 500) {
    document.body.style.paddingRight = 17 + 'px';
  }

  modals.forEach((item) => {
    if (item.getAttribute('data-modal') === modalSelector) {
      const textBlock = document.querySelector(
        `#${item.getAttribute('data-modal')}`
      );
      textBlock.classList.add('hide');
      item.classList.remove('hide');
      item.classList.add('show-flex');
      item.classList.add('animation-modal-show');
      setTimeout(() => {
        textBlock.classList.remove('hide');
        textBlock.classList.add('animation-text-show');
        overlay.classList.remove('animation-opacity-show');
      }, 400);
    } else {
      item.classList.add('hide');
      item.classList.remove('show-flex');
      item.classList.remove('animation-modal-show');
    }
  });
}

function closeModal(allModalsSelector, closeButtonsSelector, overlaySelector) {
  const modals = document.querySelectorAll(allModalsSelector),
    closeButtons = document.querySelectorAll(closeButtonsSelector),
    overlay = document.querySelector(overlaySelector);

  // обработчик закрытия модального окна по клику на значёк закрытия
  closeButtons.forEach((item) => {
    item.addEventListener('click', () => {
      modals.forEach((item) => {
        if (!item.classList.contains('hide')) {
          close(item);
        }
      });
    });
  });

  // обработчик закрытия модального окна по клику за его пределами
  overlay.addEventListener('click', () => {
    modals.forEach((item) => {
      if (!item.classList.contains('hide')) {
        close(item);
      }
    });
  });

  function close(modalItem) {
    const textBlock = document.querySelector(
      `#${modalItem.getAttribute('data-modal')}`
    );
    textBlock.classList.add('hide');
    modalItem.classList.add('animation-modal-hide');
    overlay.classList.add('animation-opacity-hide');

    document.querySelector('body').style.overflow = '';
    document.body.style.paddingRight = '';

    setTimeout(() => {
      modalItem.classList.remove('show-flex');
      modalItem.classList.add('hide');
      textBlock.classList.remove('hide');
      modalItem.classList.remove('animation-modal-hide');
      overlay.classList.remove('show-flex');
      overlay.classList.remove('animation-opacity-hide');
    }, 400);
  }
}

export { showModal, closeModal };
