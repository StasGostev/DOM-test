"use strict";

class ArticleList {
  constructor(container) {
    this.container = container;
    this.tmpList = [];
  }

  addArticle(article) {
    this.tmpList.push(article);
  }

  removeArticle(article) {
    article.parentNode.remove();
  }

  render(value) {
    while (this.container.children.length !== 0) {
      this.container.lastChild.remove();
    }

    if (value) {
      let filtred = this.tmpList.filter(elem => elem.matches(value));
      filtred.forEach(elem => this.container.append(makeDomArticle(elem)));
    } else {
      this.tmpList.forEach(elem => this.container.append(makeDomArticle(elem)));
    }
  }
}

function addRemoveButton() {
  const btn = document.createElement("button");
  btn.textContent = "X";
  btn.class = "remover";
  btn.style.backgroundColor = "red";
  return btn;
}

function makeDomArticle(e) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const span = document.createElement("span");
  div.append(
    (h1.textContent = e.title),
    (span.textContent = e.author),
    (span.textContent = e.text),
    addRemoveButton()
  );

  return div;
}
