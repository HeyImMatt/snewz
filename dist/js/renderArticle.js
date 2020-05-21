export function renderArticle(article) {
  const articleDiv = document.createElement('div');
  articleDiv.className = 'card';
  articleDiv.innerHTML = `
  <div class="card-body">
    <img class="card-img-top" src="${article.urlToImage ? article.urlToImage : ''}" alt="Article Image">
    <h5 class="card-title">${article.title}</h5>
    <p class="card-text">${article.description}</p>
    <a href="${article.url}" class="card-link">Go To Article</a>
  </div>
  `;
  document.getElementById("headline-articles").appendChild(articleDiv);
}
