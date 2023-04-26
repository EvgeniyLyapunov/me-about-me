'use strict';

import { getData } from '../services/dataBaseQueries';

const queryPortfolioLikes = async () => {
  const answer = await getData('server/getAllLikes.php');

  if (answer.status === 'ok') {
    answer.data.forEach((item) => {
      document.querySelector(`#${item.nameApp}`).textContent = item.likesCount;
    });
  } else {
    console.log(answer.status);
  }
};

export default queryPortfolioLikes;
