let articles = [];

module.exports = class Article {
  constructor(title, source, description, url, urlToImage) {
    this.title = title;
    this.source =  source;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
  }

  save() {
    articles.push(this)
  }

  static fetchAllSaved() {
    return articles;
  }
  
  static clearSavedArticles() {
    articles = [];
  }

}