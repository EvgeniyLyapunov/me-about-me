import { showModal, closeModal } from "./modal";

const portfolio = () => {
  const textButtons = document.querySelectorAll('.portfolio__subject-btn-text');

  textButtons.forEach(item => {
    item.addEventListener('click', (e) => {
      showModal('.modal-portfolio', '.overlay-portfolio', e.target.getAttribute('data-modal'));
    });
  });

  closeModal('.modal-portfolio', '.modal-portfolio__close', '.overlay-portfolio');
};

export default portfolio;