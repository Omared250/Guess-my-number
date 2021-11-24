'use strict';
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; */

let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // When there is not input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    
    // When players win
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    // When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;            
        } else {
            document.querySelector('.message').textContent = 'You lost the game!!'
            document.querySelector('.score').textContent = 0;
        }
    
    // When guess is to low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;
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
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // REstoring CSS values
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = 'black';
})