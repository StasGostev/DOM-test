
'use strict';

class ArticleList {
    constructor(container) {
        this.container = container;
    }

    addArticle(article) {
        this.container.push(article);
    }

    removeArticle(article) {
        this.container.shift()
    }

    render() {
        const list = document.querySelector('#article-list');
        this.container.forEach(({title, author, text}) => {
            const item = document.createElement('article');
            const h1 =  document.createElement('h1').textContent = title;
            const span =  document.createElement('span').textContent = author;
            const p = document.createElement('p').textContent = text;
            item.append(h1, span, p);
            list.append(item);
        })
        this.container = [];
        return list;
    }
}

