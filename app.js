//import compare numbers function
import compareNumbers from './compare-numbers.js';

//define DOM variables
const guessButton = document.getElementById('guess-button');
const userGuess = document.getElementById('user-guess');
const resultsHolder = document.getElementById('results-holder');
const resultsDisplay = document.getElementById('results-display');
const guessHolder = document.getElementById('guess-holder');
const guessDisplay = document.getElementById('guess-display');
const guessCount = document.getElementById('guesses-remaining');
const guessesRanOut = document.getElementById('out-of-guesses');


// initial state

let correctNumber = Math.floor(Math.random() * 20) + 1;

let attempts = 4;

//button event listener

guessButton.addEventListener('click', () => {
    attempts--;
    guessCount.textContent = attempts;
    if (compareNumbers(Number(userGuess.value), correctNumber) === 1) {
        guessDisplay.textContent = 'too high.  Try again.';
        guessHolder.classList.remove('hidden');
    }
    if (compareNumbers(Number(userGuess.value), correctNumber) === -1) {
        guessDisplay.textContent = 'too low.  Try again.';
        guessHolder.classList.remove('hidden');
    }
    if (compareNumbers(Number(userGuess.value), correctNumber) === 0) {
        guessDisplay.textContent = 'correct!';
        resultsHolder.classList.remove('hidden');
        guessButton.disabled = true;
        guessButton.textContent = 'Game Over';
    }
    if (attempts === 0) {
        guessesRanOut.classList.remove('hidden');
        guessButton.disabled = true;
        guessButton.textContent = 'Game Over';

    }
});