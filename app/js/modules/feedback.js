import {postData} from '../services/dataBaseQueries';

const sendFeedback = () => {
  const form = document.querySelector('.feedback__form');
  const txtElements = form.querySelectorAll('.feedback__form-txt');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if(document.querySelector('.feedback__form-textarea').value.length === 0) {
      return;
    }

    const formData = new FormData(e.target);

    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    const answer = await postData('mailer/smart.php', json);

    if(answer.status === 'ok') {
      txtElements.forEach(item => {
        item.value = '';
        form.querySelector('.feedback__form-input-btn').blur();
      });
      feedbackThanks('Спасибо. Я обязательно прочитаю ваше сообщение!');
      setTimeout(() => {
        feedbackThanks('Спасибо за ваш визит!');
      }, 6000);
    } else {
      txtElements.forEach(item => {
        item.value = '';
        form.querySelector('.feedback__form-input-btn').blur();
      });
      feedbackThanks('Что-то пошло не так, сообщение не отправлено.');
      setTimeout(() => {
        feedbackThanks('Спасибо за ваш визит!');
      }, 6000);
    }

  })

  function feedbackThanks(text) {
    const textBlock = document.querySelector('.feedback__outro');

    textBlock.classList.add('animate__animated', 'animate__flipOutX');
    setTimeout(() => {
      textBlock.textContent = text;
      textBlock.classList.remove('animate__animated', 'animate__flipOutX');
      textBlock.classList.toggle('feedback__outro-answer');
      textBlock.classList.add('animate__animated', 'animate__flipInX');
    }, 1000);
  }
};

export default sendFeedback;