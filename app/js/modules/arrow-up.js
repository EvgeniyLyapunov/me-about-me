// стрелка перемотки вверх

export function arrowUp() {
  const arrowUp = document.querySelector('.arrow-up');
  const screenHight = document.documentElement.clientHeight;
  window.addEventListener('scroll', (e) => {
    if (document.documentElement.scrollTop > screenHight) {
      arrowUp.classList.remove('hide');
      arrowUp.classList.add('show-block');
    } else {
      arrowUp.classList.remove('show-block');
      arrowUp.classList.add('hide');
    }
  });

  arrowUp.addEventListener('click', (e) => {
    window.scrollBy(0, -window.scrollY);
  });
}
