const getDb = require('../util/database').getDb;

let articlesFromDb;

module.exports = class Article {
  constructor(title, source, description, url, urlToImage) {
    this.title = title;
    this.source = source;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
  }

  // save(title) {
   //  const db = getDb();
  //   articles.forEach((el) => {
  // if (el.title !== title) {
  //   db.collection('articles').insertOne(this).then(result => {
  //     console.log(result)
  //   }).catch(err => {
  //     console.log(err)
  // }

  static fetchAllSaved() {
   const db = getDb();
    articlesFromDb = db
      .collection('articles')
      .find()
      .toArray()
      .then((articles) => {
        return articles;
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(articlesFromDb);
  }
  
};
