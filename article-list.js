'use strict';

class ArticleList {
    constructor(container) {
        this.container = container;
        this.tmpList = [];
    }

    addArticle(article) {
        this.tmpList.push(article);
    }

    removeArticle(article) {
        let index = this.tmpList.indexOf(article);
        this.tmpList.splice(index, 1);
    }

    render(value) {
        while(this.container.children.length !== 0) {
            this.container.lastChild.remove();
        }

        if(value) {
            let filtred = this.tmpList.filter((elem) => elem.matches(value));
            filtred.forEach((elem) => this.container.append(makeDomElement(elem)))
        } else {
            this.tmpList.forEach((elem) => this.container.append(makeDomElement(elem)));
        }

    }
}


function addRemoveButton() {
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.class = 'remover';
    btn.style.backgroundColor = 'red';
    return btn;
}
function makeDomElement(e){
    const [title, author, text] = e;
    const div =document.createElement('div');
    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    const p = document.createElement('p');
    div.append(h1.textContent = title, 
        span.textContent = author, 
        p.textContent = text,
        addRemoveButton());

    return div;
} 
