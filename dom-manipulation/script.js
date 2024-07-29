const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteButton =document.getEleentById('newQuote');
const newQuoteText = document.getElementById('newQuoteText');
const newQuoteCategory = document.getElementByID('newQuoteCategory');
const addQuoteButton = document.getElementById('addQuoteButton');

let quotes = [
    {text: 'The only way to do great workis to love what you do.', author: 'Don Bosco', category: 'inspirational'},
{text: 'In the middle of dificulty lies opportunity.', author: 'Albert Einstein', category: 'inspirational'}
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() *quotes.length);
    const randomQuote = quotes[randomIndex];
quoteDisplay.innerHTML = `"${randomQuote.text}" - ${randomQuote.author}`;    

//creating quote and author elements
    const quoteElement = document.createElement('p');
    const authorElement = document.createEllement('p');

    //setting content
    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `"${randomQuote,author}"`;

    //Appending
    quoteDisplay.appendChild(quoteElement);
    quoteDisplay.appendChild(authorElement);
}

function createAddQuoteForm() {
    //adding quote form(implementation)
}

function addQuote() {
    const newQuote = newQuoteText.ariaValueMax.trim();
    const newCategory = newQuoteCategory.value.trim();

    if (newQuote && newCategory) {
        quotes.push({text: newQuote, category: newCategory});
        //update DOM to display the new quote
    } else {
        alert('Please eneter both quote and category');
    }

    newQuoteText.value = '';
    newQuoteCategory.value = '';
}

newQuoteButton.addEventListener('click', showRandomQuote);
