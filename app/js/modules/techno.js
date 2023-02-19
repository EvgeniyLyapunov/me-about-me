

const techno = () => {
  const section = document.querySelector('.techno');
  const sectionStartPos = section.getBoundingClientRect().y; // от границы окна на старте
  const icons = document.querySelectorAll('.techno__grid-elem');
  let count = 0;


  window.addEventListener('scroll', () => {
    if((sectionStartPos - scrollY) < 100 && count === 0) {
      setTimeout(() => {
        iconsRain();
      }, 3000);
    }
  })

  function iconsRain() {
    icons.forEach(item => {
      const timer = Math.floor(Math.random() * 20) * 400;
      setTimeout(() => {
        iconFadeDown(item)
      }, timer)
    })
  }

  function iconFadeDown(icon) {
    icon.classList.add('animate__animated', 'animate__backOutDown', 'animate__slower');
    setTimeout(() => {
      icon.classList.add('hide');
      icon.classList.remove('animate__animated', 'animate__backOutDown', 'animate__slow')
    }, 2000)
  }

}

export default techno;