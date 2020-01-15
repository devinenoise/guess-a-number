export default function compareNumbers(userGuess, correctNumber) {
    if (userGuess === correctNumber) {
        return 0;
    } else if (userGuess < correctNumber) {
        return -1;
    } else (userGuess > correctNumber); {
        return 1;
    }
};
