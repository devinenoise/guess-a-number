// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compare-numbers.js';

const test = QUnit.test;

QUnit.module('testing compareNumbers');

test('is the guess correct?', assert => {
    //Arrange
    // Set up your parameters and expectations
    const userGuess = 7;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userGuess, 7);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('is the guess too low?', assert => {
    //Arrange
    // Set up your parameters and expectations
    const userGuess = 7;
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userGuess, 8);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('is the guess too high?', assert => {
    //Arrange
    // Set up your parameters and expectations
    const userGuess = 10;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userGuess, 8);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});