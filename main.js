"use strict";

function loadData(url) {
  debugger;
  const xhr = new XMLHttpRequest();
  let parsedData;
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = function() {
    console.log(xhr.status);
    parsedData = JSON.parse(xhr.responseText);
  };
  return parsedData;
}

const dataURL =
  "http://my-json-server.typicode.com/mate-academy/literary-blog/articles";

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector("#article-list");
  const input = document.querySelector('[type="text"]');
  const articleList = new ArticleList(mainContainer);
  const myLocalStorage = localStorage.getItem("prevData");
  let data = myLocalStorage || loadData(dataURL);

  document.addEventListener("click", ev => {
    if (ev.target.tagName === "BUTTON") {
      articleList.removeArticle(ev.target);
    }
  });

  data.forEach(elem => {
    articleList.addArticle(new Article(elem.title, elem.author, elem.text));
    articleList.render();
  });

  input.addEventListener("input", ev => {
    const value = ev.target.value;
    articleList.render(value);
  });

  window.addEventListener("upload", () => {
    localStorage.setItem("prevData", articleList.tmpList);
  });
});
