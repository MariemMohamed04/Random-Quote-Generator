var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    by: "Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    by: "Frank Zappa",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    by: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    by: "Mahatma Gandhi",
  },
  {
    quote: "We accept the love we think we deserve.",
    by: "Stephen Chbosky",
  },
  {
    quote: "Without music, life would be a mistake.",
    by: "Friedrich Nietzsche",
  },
];

var shuffledQuotes = [];
var index = 0;

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = (Math.floor(Math.random() * (i + 1))[(array[i], array[j])] = [
      array[j],
      array[i],
    ]);
  }
}

function initQuoteArray() {
  shuffledQuotes = [...quotes]; // Making Copy of the array
  shuffleArray(shuffledQuotes); // Shuffling or Randomizing The copied array
  index = 0; // After shuffling return index to 0 to start randomizing
}

// To get random Quote
function getRandomQuote() {
  if (index >= shuffledQuotes.length) {
    initQuoteArray();
  }
  return shuffledQuotes[index++];
}

// To generate a quote
function generateQuote() {
  var quoteElement = document.getElementById("quote");
  var randomQuote = getRandomQuote();
  quoteElement.innerHTML = `<p>"${randomQuote.quote}"</p>
  <p>--${randomQuote.by}</p>`;
}

initQuoteArray();
