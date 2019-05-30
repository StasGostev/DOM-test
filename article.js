
'use strict';

class Article {
    constructor(title, author, text) {
        this.title = title;
        this.author = author;
        this.text = text;
    }

    matches(query) {
        let str = `${this.title}+${this.author}+${this.text}`.toLowerCase();
        return !!str.match(query.toLowerCase());
    }
}
