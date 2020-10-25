const quotes = [
    {
        quote: 'It is beyond a doubt that all our knowledge begins with experience',
        source: 'Immanuel Kant',
        citation: 'Brain Quotes',
        year: 1804
    },
    {
        quote: 'Government of the people, by the people, for the people, shall not perish from the Earth',
        source: 'Abraham Lincoln',
        citation: 'Brain Quotes',
        year: 1865

    },
    {
        quote: 'The first draft is just you telling yourself the story',
        source: 'Terry Pratchett'
    },
    {
        quote: 'I have never started a poem yet whose end I knew. Writing a poem is discovering',
        source: 'Robert Frost',
        tag: 'london'
    }, {
        quote: 'It is perfectly okay to write garbage as long as you edit brilliantly',
        source: 'C. J. Cherryh',
        year: 1800
    }
]

// function returning random quote object
const getRandomQuote = (randomNumber) => quotes[randomNumber]

var randomQuote = getRandomQuote(quotes)

// Calling printQuote every after 3 seconds
setInterval(function () {
    printQuote()
}, 3000);

// Adds random quotes to the DOM
const printQuote = () => {
    // creating random number from 1 to 5. Created here so that can used for print
    // random quotes and background color
    var randomNumber = Math.floor(Math.random() * quotes.length)

    // creates a random background color
    document.getElementById('page-body').setAttribute('style', `background-color: rgb(${
        randomNumber * 100
    }
    , ${
        randomNumber * 50
    }, ${
        randomNumber * 50
    }`)

    let randomQuote = getRandomQuote(randomNumber)

    // adding random created quotes to the DOM
    document.getElementById('container').innerHTML = `<div id="quote-box" class="quote-box"> 
     <p id="quote" class="quote">${
        randomQuote.quote
    }</p>${
        randomQuote.tag ? `<span>**${
            randomQuote.tag
        } </span>` : ''
    } <p id="source"class="source">${
        randomQuote.source
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

document.getElementById('load-quote').addEventListener("click", printQuote, false);
