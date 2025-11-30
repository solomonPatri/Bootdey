
function createarticle (note){

    let article = document.createElement("article");

    article.innerHTML=`
          <div class="header-book">
          <p class="article-title">${note.title}</p>
          <p class="date-article">${note.date}</p>
        </div>

        <div class="desc-article">${note.desc}
        </div>

        <div class="footer-article btn-container">
          <button class="btn-forms btn-star fa-solid fa-star"></button>
          <button class="btn-forms fa-solid fa-trash"></button>
        </div>
    
    `
    article.classList.add("cards-container");
    article.classList.add("card");
    return article;

}

function loadArticles(articles){

  let list = document.querySelector(".cards-container");

  list.innerHTML="";

  articles.map((article)=> createarticle(article)).forEach(element => {
    
      list.appendChild(element);

  });


}



