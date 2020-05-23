//import { renderArticle } from '../public/scripts/renderArticle.js';

const fetch = require('node-fetch')
const apiKey = process.env.NEWSAPI_API_KEY;

function sendHttpRequest(url) {
  return fetch(url).then(
    (response) => {
      return response.json();
    },
    (reject) => {
      alert(`Rejected: ${reject}`);
    },
  );
}

async function getNews(params = '') {
  try {
    const responseData = await sendHttpRequest(
      `https://newsapi.org/v2/top-headlines?country=us&${params}apiKey=${apiKey}`,
    );
    console.log(responseData);
    responseData.articles.forEach((el) => {
      let article = {
        title: el.title,
        source: el.source.name,
        description: el.description,
        url: el.url,
        urlToImage: el.urlToImage,
      };
      // renderArticle(article);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

//export function search() {
  //queries is an array you need to iterate through
  //if there are sources selected, you can't mix in country or category
  // const country = 'us';
  // let params;
  // if (this.sources) {
  //   params = `sources=${queries[0]}&`
  // } else params = `${country}&`
  // console.log(params)
  //getNews(params);
//}

exports.getNews = getNews();