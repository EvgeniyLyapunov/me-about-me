import { showModal, closeModal } from './modal';
import { postData } from '../services/dataBaseQueries';
import { visitCounter } from './visits';

const portfolio = () => {
  const textButtons = document.querySelectorAll('.subject__main-reade-more');

  textButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
      showModal(
        '.modal-portfolio',
        '.overlay-portfolio',
        e.target.getAttribute('data-modal')
      );
      visitCounter(e.target.getAttribute('data-modal'));
    });
  });

  closeModal(
    '.modal-portfolio',
    '.modal-portfolio__close',
    '.overlay-portfolio'
  );

  // все кнопки "поставить лайк"
  const likeBtns = document.querySelectorAll('.subject__footer-like-btn');

  likeBtns.forEach((item) => {
    item.addEventListener('click', async (e) => {
      const itemName = e.target.getAttribute('data-like');
      const localData = JSON.parse(localStorage.getItem('portfolioLikes'));

      // если лайк ещё не ставился
      if (!localData[`${itemName}`]) {
        // элемент с числом лайков, счётчик
        const likeCounter = document.querySelector(`#${itemName}`);
        // значение счётчика с нашим лайком
        const newLikeCount = `${+likeCounter.textContent + 1}`;
        // данные для обновления данных на сервере
        const json = JSON.stringify({
          nameApp: `${itemName}`,
          likesCount: `${newLikeCount}`,
        });
        // функция анимирует смену значения, и обновляет его на сервере
        const success = await heart(item, likeCounter, json);

        // если нет ошибок на сервере, значение меняется
        // в localStorage записывается что этот лайк уже поставлен
        if (success === 'ok') {
          likeCounter.textContent = `${newLikeCount}`;
          localData[`${itemName}`] = true;
          localStorage.setItem(
            'portfolioLikes',
            `${JSON.stringify(localData)}`
          );
        }
      }
    });
  });

  // функция анимирует смену значения количества лайков
  // аргументы:
  // btn - кнопка "поставить лайк",
  // counter - счётчик лайков
  // json - данные с изменением счётчика на сервер
  async function heart(btn, counter, json) {
    btn.disabled = true;
    // создаём элемент с сердцем
    const heartIcon = document.createElement('span');
    heartIcon.classList.add('heart-class');
    // скрываем элемент с числом лайков
    counter.style.display = 'none';
    // помещаем на место элемента с числом лайков элемент с сердцем
    btn.insertAdjacentElement('afterend', heartIcon);

    // отправка лайка на сервер
    const answer = await postData('server/changeCount.php', json);
    if (answer.status) {
      // добавляем сердцу css классы анимации исчезновения
      heartIcon.classList.add('animate__animated', 'animate__fadeOutUp');
      // плавно возвращаем назад счётчик лайков
      setTimeout(() => {
        heartIcon.remove();
        counter.style.display = 'block';
        counter.classList.add('animate__animated', 'animate__fadeIn');
        btn.disabled = false;
      }, 800);
      return answer.status;
    }
  }
};

export default portfolio;
