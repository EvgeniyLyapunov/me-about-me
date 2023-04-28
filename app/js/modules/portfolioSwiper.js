import Swiper from 'swiper/bundle';

const portfolioSwiper = new Swiper('.portfolio-swiper', {
  slidesPerView: 1,
  spaceBetween: 100,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export default portfolioSwiper;
