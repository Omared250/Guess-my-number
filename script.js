'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0;

// Displaying a message in any case
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

// Setting the Score value
const setScore = (score) => {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // When there is not input
    if (!guess) {
        displayMessage('No Number!')
    
    // When players win
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!')

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // HighSCore values
        if(score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }

    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!')
            score--;
            setScore(score);           
        } else {
            displayMessage('You lost the game!!');
            setScore(0);
        }
    } 
});

/*
Coding Challenge #1

Implement a game rest functionality, so that the player can make a new guess!
Your tasks:

1. Select the element with the 'again' class and attach a click event handler

2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables

3. Restore the initial conditions of the message, number, score and guess input
fields

4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀 */

document.querySelector('.again').addEventListener('click', function() {
    // Restoring the value of the variabels
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Restoring the values of the message, score, number and gess input
    displayMessage('Start guessing...')
    setScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // REstoring CSS values
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = 'black';
})