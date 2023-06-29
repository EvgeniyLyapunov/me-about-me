import { postData } from '../services/dataBaseQueries';

export const visitCounter = async (breakPoint) => {
  if (sessionStorage.getItem(breakPoint)) {
    return;
  }

  const data = {
    breakPoint: breakPoint,
    lastDate: new Date().toLocaleDateString(),
  };

  try {
    sessionStorage.setItem(breakPoint, JSON.stringify(true));
  } catch {
    // ignore
  }

  await postData('server/postCount.php', JSON.stringify(data));
};
