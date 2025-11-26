
function createarticle (title,date,desc){
let articlescontainer= document.querySelector('.grid-article');

    let article = document.createElement("article");
    article.innerHTML=`
          <div class="header-book">
          <p class="article-title">${title}</p>
          <p class="date-article">${date}</p>
        </div>

        <div class="desc-article">${desc}
        </div>

        <div class="footer-article btn-container">
          <button class="btn-forms btn-star fa-solid fa-star"></button>
          <button class="btn-forms fa-solid fa-trash"></button>
        </div>
    
    `

    articlescontainer.appendChild(article);
    article.classList.add('box-article');

}




