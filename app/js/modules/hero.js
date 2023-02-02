"use strict";

const hero = () => {
  const menu = document.querySelector('#hero-nav-list'),
        menuBtn = document.querySelector('#hero-burger'),
				links = document.querySelectorAll('.hero__link');

  menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('burger_active');
		menu.classList.toggle('hero__nav-list_active');
	});

	links.forEach(item => {
		item.addEventListener('click', () => {
			menuBtn.classList.toggle('burger_active');
			menu.classList.toggle('hero__nav-list_active');
		});
	});

}

export default hero;