'use strict';


const mainContainer = document.querySelector('#article-list');

document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('input[type=text]');


        
//     let articlesData = () => {debugger;
//         const articlesURL = 'http://my-json-server.typicode.com/mate-academy/literary-blog/articles'; 
//         let data = new XMLHttpRequest ();
//         data.open('GET', articlesURL);
//         data.send();
//         let dataParse = JSON.stringify(data);
//         console.log(data.status);
//         return dataParse;
// }
// renderContent(articlesData());

    input.addEventListener('input', findMatches);
});

function findMatches(ev) {
    const targetVal = ev.target.value;
    const childrens = mainContainer.querySelectorAll('article');
    
}

function renderContent() {

}