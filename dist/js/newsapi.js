import { renderArticle } from './renderArticle.js'

export function sendHttpRequest(url) {
  return fetch(url).then(
    (response) => {
      return response.json();
    },
    (reject) => {
      alert(`Rejected: ${reject}`);
    },
  );
}

export async function getNews(params = '') {
  try {
    const responseData = await sendHttpRequest(
      `https://newsapi.org/v2/top-headlines?country=us&${params}apiKey=54d6e4440c29487eaef2ff9e3c210148`,
    );
    console.log(responseData);
    responseData.articles.forEach(el => {
      let article = {
        title: el.title,
        description: el.description,
        url: el.url,
        urlToImage: el.urlToImage
      }
      renderArticle(article);
    });
  } catch (error) {
    alert(`Error: ${error}`);
  }
}

export function search() {
  //queries is an array you need to iterate through
  //if there are sources selected, you can't mix in country or category
  // const country = 'us';
  // let params;
  // if (this.sources) {
  //   params = `sources=${queries[0]}&`
  // } else params = `${country}&`
  // console.log(params)
  //getNews(params);
}
