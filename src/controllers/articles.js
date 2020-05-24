const fetch = require('node-fetch');
const apiKey = process.env.NEWSAPI_API_KEY;

const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

let articles = [];

exports.renderArticles = (req, res, next) => {
  getNews().then(() => {
    console.log('rendering articles')
    res.render('index', {articles: articles})
  });
};

function sendHttpRequest(url) {
  return fetch(url).then(
    (response) => {
      console.log(response)
      return response.json();
    },
    (reject) => {
      console.log(`Rejected: ${reject}`);
    },
  );
}

async function getNews(params = '') {
  try {
    const responseData = await sendHttpRequest(
      // Use this link for headlines
      //`https://newsapi.org/v2/top-headlines?country=us&${params}apiKey=${apiKey}`,
      `https://newsapi.org/v2/everything?q=-trump%20-trump%27s%20-coronavirus%20-covid19%20-covid-19%20-pandemic&from=${date}&language=en&sources=abc-news,al-jazeera-english,associated-press,axios,bloomberg,cbs-news,cnbc,cnn,fortune,hacker-news,nbc-news,new-scientist,newsweek,politico,reuters,the-hill,the-washington-post,time,vice-news&sortBy=relevancy&apiKey=${apiKey}`,
    );
    console.log('getNews called');
    articles = [];
    console.log(responseData.articles)
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
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
