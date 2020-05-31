const fetch = require('node-fetch');
const apiKey = process.env.NEWSAPI_API_KEY;

const Article = require('../models/article');

const today = new Date();
const currentDate =
  today.getUTCFullYear() +
  '-' +
  (today.getUTCMonth() + 1) +
  '-' +
  today.getUTCDate();
let lastApiCallTime;

exports.renderArticles = (req, res, next) => {
  const filters = { snoozetrump: 'on', snoozecovid: 'on' };
  const tags = ['snoozetrump', 'snoozecovid'];
  if (
    typeof lastApiCallTime === 'undefined' ||
    Date.now() > (lastApiCallTime + 1200000)
  ) {
    getNews(
      '-trump%20-trump%27s%20-coronavirus%20-covid19%20-covid-19%20-pandemic',
      res,
      filters,
      tags,
    );
    lastApiCallTime = Date.now();
  } else {
    console.log('Rendering articles from db')
    Article.fetchFilteredArticles(tags).then((articles) => {
      res.render('index', { articles: articles, filters: filters });
    });
  }
};

exports.filterArticles = (req, res, next) => {
  const filters = req.body;
  if (filters.snoozetrump && filters.snoozecovid) {
    getNews(
      '-trump%20-trump%27s%20-coronavirus%20-covid19%20-covid-19%20-pandemic',
      res,
      filters,
      ['snoozetrump', 'snoozecovid'],
    );
  } else if (filters.snoozetrump === 'on') {
    getNews('-trump%20-trump%27s', res, filters, ['snoozetrump']);
  } else if (filters.snoozecovid === 'on') {
    getNews('-coronavirus%20-covid19%20-covid-19%20-pandemic', res, filters, [
      'snoozecovid',
    ]);
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

async function getNews(params, res, filters, tags) {
  try {
    const responseData =
      params === 'all'
        ? await sendHttpRequest(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
          )
        : await sendHttpRequest(
            `https://newsapi.org/v2/everything?q=${params}&from=${currentDate}&pageSize=50&language=en&sources=abc-news,al-jazeera-english,associated-press,axios,bloomberg,cbs-news,cnbc,nbc-news,newsweek,politico,reuters,the-hill,the-washington-post,time,vice-news&apiKey=${apiKey}`,
          );
    Article.fetchAllSaved()
      .then((articles) => {
        responseData.articles.forEach((el) => {
          const article = new Article(
            el.title,
            el.source.name,
            el.description,
            el.url,
            el.urlToImage,
            el.publishedAt,
            tags,
          );
          if (
            articles.filter(function (e) {
              return e.title === article.title;
            }).length > 0
          ) {
            console.log('article in db');
          } else article.save();
        });
      })
      .then(() => {
        Article.fetchFilteredArticles(tags).then((articles) => {
          res.render('index', { articles: articles, filters: filters });
        });
      });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
