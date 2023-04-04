/** @format */

const character = document.getElementById('character');

const quoteEl = document.getElementById('quote');

const quoteBtn = document.getElementById('quoteBtn');

quoteBtn.addEventListener('click', generateQuote);

generateQuote();

function generateQuote() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    fetch(
        'https://animechan.vercel.app/api/random/anime?title=black clover',
        config
    )
        .then((res) => res.json())
        .then((data) => {
            character.innerHTML = data.character;
            quoteEl.innerHTML = data.quote;
        });
}
