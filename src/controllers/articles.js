const fetch = require('node-fetch');
const apiKey = process.env.NEWSAPI_API_KEY;
let articles = [];

exports.renderArticles = (req, res, next) => {
  getNews().then(() => {
    console.log('Rendering Articles');
    res.render('articles', { articles: articles });
  });
};

exports.filterArticles = (req, res, next) => {
  // code here?
};

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
    responseData.articles.forEach((el) => {
      let article = {
        title: el.title,
        source: el.source.name,
        description: el.description,
        url: el.url,
        urlToImage: el.urlToImage,
      };
      articles.push(article);
    });
    console.log('getNews called');
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
