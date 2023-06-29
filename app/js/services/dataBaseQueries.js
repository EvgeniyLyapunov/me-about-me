'use strickt';

/**
 * Метод делает POST запрос на сервер
 * @param urlPath url адрес запроса
 * @param json данные запроса в формате json
 * @returns объект c данными
 */
async function postData(urlPath, json) {
  try {
    let result = await fetch(urlPath, {
      method: 'POST',
      body: json,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    return await result.json();
  } catch (error) {
    console.log(error.message);
    return { status: 'error' };
  }
}

/**
 * Метод делает GET запрос на сервер
 * @param urlPath url адрес запроса
 * @returns объект c данными
 */
async function getData(urlPath) {
  try {
    let result = await fetch(urlPath);
    return await result.json();
  } catch (error) {
    console.log(error.message);
    return { status: 'error' };
  }
}

export { postData, getData };
