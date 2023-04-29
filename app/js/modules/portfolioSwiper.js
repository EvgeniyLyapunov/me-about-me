import Swiper from 'swiper/bundle';

const portfolioSwiper = new Swiper('.portfolio-swiper', {
  slidesPerView: 1,
  spaceBetween: 100,
  loop: true,
  pagination: {
    el: '.portfolio-swiper__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.portfolio-swiper__button-next',
    prevEl: '.portfolio-swiper__button-prev',
  },
});

export default portfolioSwiper;
