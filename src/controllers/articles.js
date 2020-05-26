const fetch = require('node-fetch');
const apiKey = process.env.NEWSAPI_API_KEY;

const Article = require('../models/article');

const today = new Date();
const date =
  today.getUTCFullYear +
  '-' +
  (today.getUTCMonth() + 1) +
  '-' +
  today.getUTCDate();

exports.renderArticles = (req, res, next) => {
  getNews(
    '-trump%20-trump%27s%20-coronavirus%20-covid19%20-covid-19%20-pandemic',
    res,
    { snoozetrump: 'on', snoozecovid: 'on' },
  );
};

exports.filterArticles = (req, res, next) => {
  const filters = req.body;
  if (filters.snoozetrump && filters.snoozecovid) {
    getNews(
      '-trump%20-trump%27s%20-coronavirus%20-covid19%20-covid-19%20-pandemic',
      res,
      filters,
    );
  } else if (filters.snoozetrump === 'on') {
    getNews('-trump%20-trump%27s', res, filters);
  } else if (filters.snoozecovid === 'on') {
    getNews('-coronavirus%20-covid19%20-covid-19%20-pandemic', res, filters);
  } else getNews('all', res, filters);
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

async function getNews(params, res, filters) {
  try {
    const responseData =
      params === 'all'
        ? await sendHttpRequest(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
          )
        : await sendHttpRequest(
            `https://newsapi.org/v2/everything?q=${params}&from=${date}&language=en&sources=abc-news,al-jazeera-english,associated-press,axios,bloomberg,cbs-news,cnbc,nbc-news,newsweek,politico,reuters,the-hill,the-washington-post,time,vice-news&sortBy=relevancy&apiKey=${apiKey}`,
          );
    Article.fetchAllSaved().then((articles) => {
      responseData.articles.forEach((el) => {
        const article = new Article(
          el.title,
          el.source.name,
          el.description,
          el.url,
          el.urlToImage,
        );
        if (
          articles.filter(function (e) {
            return e.title === article.title;
          }).length > 0
        ) {
          console.log('article in db ');
        } else article.save();
      });
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  } finally {
    Article.fetchAllSaved().then((articles) => {
      res.render('index', { articles: articles, filters: filters });
    });
  }
}
