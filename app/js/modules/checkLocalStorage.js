'use strict';

const checkLocalStorage = () => {
  if (!localStorage.getItem('portfolioLikes')) {
    const portfolioLikes = {
      myWallet: false,
      personBook: false,
      colorCode: false,
      artGallery: false,
      noemi: false,
      amrita: false,
      meAboutMe: false,
      notesAboutMyFood: false,
    };
    localStorage.setItem('portfolioLikes', `${JSON.stringify(portfolioLikes)}`);
  }
};

export default checkLocalStorage;
