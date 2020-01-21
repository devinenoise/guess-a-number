//import compare numbers function
import compareNumbers from './compare-numbers.js';

//DOM variables
const guessButton = document.getElementById('guess-button');
const userGuess = document.getElementById('user-guess');
const resultsHolder = document.getElementById('results-holder');
const resultsDisplay = document.getElementById('results-display');
const guessHolder = document.getElementById('guess-holder');
const guessDisplay = document.getElementById('guess-display');
const guessCount = document.getElementById('guesses-remaining');
const resetButton = document.getElementById('reset-button');

// initilize random number generator with a max of 20

let correctNumber = Math.floor(Math.random() * 20) + 1;

// state of available attempts

let attempts = 4;

//guess button event listener

guessButton.addEventListener('click', () => {
    console.log(correctNumber);
    attempts--;
    guessCount.textContent = attempts;
    // if the guess is too high
    if (compareNumbers(Number(userGuess.value), correctNumber) === 1) {
        guessDisplay.textContent = 'Your guess is too high.  Try again.';
        guessHolder.classList.remove('hidden');
    }
    // if the guess is too low
    if (compareNumbers(Number(userGuess.value), correctNumber) === -1) {
        guessHolder.classList.remove('hidden');
        guessDisplay.textContent = 'Your guess is too low.  Guess again.';
    }
    // if the guess is correct
    if (compareNumbers(Number(userGuess.value), correctNumber) === 0) {
        guessDisplay.textContent = 'Your guess is correct!';
        resultsHolder.classList.remove('hidden');
        resultsDisplay.classList.remove('hidden');
        resultsDisplay.textContent = 'You just won.';
        guessButton.disabled = true;
        guessButton.textContent = 'Game Over';
    }
    if (attempts === 0 && compareNumbers(Number(userGuess.value), correctNumber) !== 0) {
        resultsHolder.classList.remove('hidden');
        resultsDisplay.classList.remove('hidden');
        resultsDisplay.textContent = 'You just lost.';
        guessButton.disabled = true;
        guessButton.textContent = 'Game Over';
        guessHolder.classList.add('hidden');
    }
});

// reset button event listener

resetButton.addEventListener('click', () => {
    attempts = 4;
    guessCount.textContent = attempts;
    guessButton.disabled = false;
    guessHolder.classList.add('hidden');
    resultsHolder.classList.add('hidden');
    resultsDisplay.classList.add('hidden');
    guessButton.textContent = 'Guess';
    correctNumber = Math.floor(Math.random() * 20) + 1;
});