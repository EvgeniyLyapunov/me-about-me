"use strict";

const checkLocalStorage = () => {
  if(!localStorage.getItem('portfolioLikes')) {
    const portfolioLikes = {
      myWallet: false,
      personBook: false
    }
    localStorage.setItem('portfolioLikes', `${JSON.stringify(portfolioLikes)}`);
  } 
}

export default checkLocalStorage;