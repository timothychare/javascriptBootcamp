var newQuoteButton = document.querySelector('.new-quote');

newQuoteButton.addEventListener('click', getQuote);

var endpoint = 'https://www.tronalddump.io/random/meme';

// want to change this to dumb quote from trump endpoint https://www.tronalddump.io/random/meme
// https://api.whatdoestrumpthink.com/api/v1/quotes/random

function getQuote() {
    fetch("https://api.tronalddump.io/random/quote")
    .then(response => {
        console.log(response);
        return response.json();
    }).then(function (data) {
        console.log(data.value);
        displayQuote(data.value);
    })
    .catch(err => {
        console.error(err);
    });
};

// old Code
// function getQuote() {
//     fetch(endpoint)
//         .then(function (response) {
//             console.log(response)
//             return response.json();
//         })
//         .then(function (data) {
//             displayQuote(data.message);
//         })
//         .catch(function () {
//             console.log("An error occurred");
//         });
// }

function displayQuote(quote) {
    var quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

getQuote();