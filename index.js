let quote = document.getElementById("quoteText");
let author = document.getElementById("author");

let quoteContent = '';
let authorContent = '';

let newQuote = document.getElementById("new-quote");


window.addEventListener('load', () =>{

    fetch('https://api.quotable.io/random')
        .then(response => {
            return response.json()})
        .then(data =>{
            quoteContent = data.content;
            authorContent = data.author;

            quote.textContent = quoteContent;
            author.textContent = '-  ' + authorContent;
    
        })


})

newQuote.addEventListener('click', () =>{

    fetch('https://api.quotable.io/random')
        .then(response => {
            return response.json()})
        .then(data =>{
            quoteContent = data.content;
            authorContent = data.author;

            quote.textContent = quoteContent;
            author.textContent = '-  ' + authorContent;
    
        })


})



