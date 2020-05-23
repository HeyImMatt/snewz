export function renderArticle(article) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'card';
    articleDiv.innerHTML = `
    <div class="card-body">
      ${article.urlToImage ? `<img class="card-img-top" src="${article.urlToImage}" alt="Article Image">` : ''}
      <h5 class="card-title">${article.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${article.source}</h6>
      <p class="card-text">${article.description}</p>
      <a href="${article.url}" target="_blank" class="card-link">Read Full Article</a>
    </div>
    `;
    document.getElementById("headline-articles").appendChild(articleDiv);
  }

