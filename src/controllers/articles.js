const fetch = require('node-fetch');
const apiKey = process.env.NEWSAPI_API_KEY;

const today = new Date();
const date =
  today.getUTCFullYear + '-' + (today.getUTCMonth() + 1) + '-' + today.getUTCDate();

let articles = [];

exports.renderArticles = (req, res, next) => {
  getNews('-trump%20-trump%27s%20-coronavirus%20-covid19%20-covid-19%20-pandemic').then(() => {
    res.render('index', { articles: articles, filters: {snoozetrump: 'on', snoozecovid: 'on'} });
  });
};

exports.filterArticles = (req, res, next) => {
  const filters = req.body;
  if (filters.snoozetrump && filters.snoozecovid) {
    getNews(
      '-trump%20-trump%27s%20-coronavirus%20-covid19%20-covid-19%20-pandemic',
    ).then(() => {
      res.render('index', { articles: articles, filters: filters });
    });
  } else if (filters.snoozetrump === 'on') {
    getNews('-trump%20-trump%27s').then(() => {
      res.render('index', { articles: articles, filters: filters });
    });
  } else if (filters.snoozecovid === 'on') {
    getNews('-coronavirus%20-covid19%20-covid-19%20-pandemic').then(() => {
      res.render('index', { articles: articles, filters: filters });
    });
  } else
    getNews('all').then(() => {
      res.render('index', { articles: articles, filters: filters });
    });
};

function sendHttpRequest(url) {
  return fetch(url).then(
    (response) => {
      return response.json();
    },
    (reject) => {
      console.log(`Rejected: ${reject}`);
    },
  );
}

async function getNews(params) {
  try {
    const responseData =
      params === 'all'
        ? await sendHttpRequest(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
          )
        : await sendHttpRequest(
            `https://newsapi.org/v2/everything?q=${params}&from=${date}&language=en&sources=abc-news,al-jazeera-english,associated-press,axios,bloomberg,cbs-news,cnbc,cnn,nbc-news,newsweek,politico,reuters,the-hill,the-washington-post,time,vice-news&sortBy=relevancy&apiKey=${apiKey}`,
          );
    articles = [];
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