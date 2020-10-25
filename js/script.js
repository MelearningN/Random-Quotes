/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


const quotes = [
    {
        quote: 'It is beyond a doubt that all our knowledge begins with experience',
        author: 'Immanuel Kant',
        citation: 'Brain Quotes',
        year: 1804
    },
    {
        quote: 'Government of the people, by the people, for the people, shall not perish from the Earth',
        author: 'Abraham Lincoln',
        citation: 'Brain Quotes',
        year: 1865

    },
    {
        quote: 'The first draft is just you telling yourself the story',
        author: 'Terry Pratchett'
    },
    {
        quote: 'I have never started a poem yet whose end I knew. Writing a poem is discovering',
        author: 'Robert Frost',
        tag: 'london'
    }, {
        quote: 'It is perfectly okay to write garbage as long as you edit brilliantly',
        author: 'C. J. Cherryh',
        year: 1800
    }
]

const getRandomQuote = (randomNumber) => quotes[randomNumber]

var randomQuote = getRandomQuote(quotes)

setInterval(function () {
    printQuote()
}, 3000);

const printQuote = () => {
    var randomNumber = Math.floor(Math.random() * quotes.length)
    document.getElementById('page-body').setAttribute('style', `background-color: rgb(${
        58 + randomNumber * 100
    }, 93, 208)`)
    let randomQuote = getRandomQuote(randomNumber)

    document.getElementById('container').innerHTML = `<div id="quote-box" class="quote-box"> <p id="quote" class="quote">${
        randomQuote.quote
    }</p>${
        randomQuote.tag ? `<span>**${
            randomQuote.tag
        } </span>` : ''
    } <p id="source"class="source">${
        randomQuote.author
    }${
        randomQuote.citation ? `<span id="citation"class="citation">${
            randomQuote.citation
        } </span>` : ''
    }${
        randomQuote.year ? `<span id="year" class="year">${
            randomQuote.year
        }</span>` : ''
    }</p></div>`
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
