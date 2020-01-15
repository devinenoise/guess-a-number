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



// initial state

let correctNumber = 15;  //Math.floor(Math.random() * 20) + 1);

let attempts = 4;

//button event listener

guessButton.addEventListener('click', () => {
    attempts--;
    guessCount.textContent = attempts;



});




