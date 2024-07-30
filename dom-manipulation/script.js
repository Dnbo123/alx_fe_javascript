const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteButton =document.getEleentById('newQuote');
const newQuoteText = document.getElementById('newQuoteText');
const newQuoteCategory = document.getElementByID('newQuoteCategory');
const addQuoteButton = document.getElementById('addQuoteButton');
const exportQuotesButton = document.getElementById('exportQuotes');
const importFile = document.getElementById('importFile');


//implementing web storage an JSON handling
let quote =  [];

const storedQuotes = localStorage.getItem('quote');
if (storedQuotes){
    quote.JSON.parse(storedQuotes);
}

function showRandmQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.legth);
    const randomQuote = quotes[random.index];

    // elements for styling flexibility
const quoteElement = document.createElement('p');
const authorElement =document.createElement('p');

quoteElement.textContent = `"${randomQuote.text}"`;
authorElement.textContent = `- ${randomQuote.author}`;

quoteDisplay.innerHTML = ''; 
quoteDisplay.appendChild(quoteElement);
quoteDisplay.appendChild(authorElement);

//store last viewed quote 
sesssionStorage.setItem('lastViewedQuote', JSON.stringify(randomQuote));
}

let quotes = [
    {text: 'The only way to do great workis to love what you do.', author: 'Don Bosco', category: 'inspirational'},
{text: 'In the middle of dificulty lies opportunity.', author: 'Albert Einstein', category: 'inspirational'}
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() *quotes.length);
    const randomQuote = quotes[randomIndex];

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
    const newQuote = newQuoteText.value.trim();
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

function saveQuotes() {
localStorage.setItem('quote', JSON.stringify(quote));
}
function exportQuoteToJson() {
     const quotesJson = JSON.stringify(quotes);
    const blob = new Blob([quotesJson], {type: 'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'quotes.json';
    link.click();
}
function importFromJsonFile(event) {
    const fileReader = new FileReader();
fileReader.onload = functin(event) {
    try {
        const importQuotes = JSON.parse(event.target.result);
        quotes.push(...importedQuotes);
        saveQuotes();
        alert('quotes imported successfully!');
    }catch (error) {
        alert('Error importing quotes: '+ error.messsage);
    };
    fileReader.readAsText(event.target.files[0]);
};
};

newQuoteButton.addEventListener('click', showRandomQuote);
addQuoteButton.addEventListener('click', addQuoote);
exportQuotesButton.addEventListener('click', exportQuoteToJson);
importFile.addEventListener('change', importFromJsonFile);
