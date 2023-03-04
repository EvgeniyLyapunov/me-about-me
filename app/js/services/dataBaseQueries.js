"use strickt";

async function postData(urlPath, json) {
  try {
    let result = await fetch(urlPath, {
      method: "POST",
      body: json,
      headers: { "Accept": "application/json", "Content-Type": "application/json;charset=utf-8" }
    });
    return await result.json();
  } catch(error) {
    console.log(error.message);
    return {status: 'error'};
  }
}

async function getData(urlPath) {
  try{
    let result = await fetch(urlPath);
    return await result.json();
  } catch(error) {
    console.log(error.message);
    return {status: 'error'};
  }
}

export {postData, getData};