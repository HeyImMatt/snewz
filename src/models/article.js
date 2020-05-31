const getDb = require('../util/database').getDb;

module.exports = class Article {
  constructor(title, source, description, url, urlToImage, publishDate, tags) {
    this.title = title;
    this.source = source;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
    this.publishDate = publishDate;
    this.tags = tags;
  }

  save() {
    const db = getDb();
    db.collection('articles')
      .insertOne(this)
      .then((result) => {
        console.log('article saved');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAllSaved() {
    const db = getDb();
    return db
      .collection('articles')
      .find()
      .toArray()
      .then((articles) => {
        return articles;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchFilteredArticles(tags) {
    const db = getDb();
    return db
      .collection('articles')
      .find({tags: tags})
      .toArray()
      .then((articles) => {
        return articles;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
