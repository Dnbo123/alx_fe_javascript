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
    quoteDisplay.textContent = `"${randomQuote.text} - ${randomQuote.author}"`;
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
