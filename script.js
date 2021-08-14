'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // prints number b/w 1 to 20
console.log(secretNumber);
var message = document.querySelector('.message');
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when user doesnt enter any number
  if (!guess) {
    message.textContent = 'Are you komedi me ??😏😏';

    //when user enters correct number
  } else if (guess == secretNumber) {
    message.textContent = 'Correct number 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    score > highScore ? (highScore = score) : score;
    document.querySelector('.highscore').textContent = highScore;

    //when guess is greater than random number
  } else if (guess == secretNumber + 2 || guess == secretNumber + 1) {
    if (score > 1) {
      message.textContent = '📈 Little Higher than true value.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😫 You loose the game.';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is lesser than random number
  } else if (guess == secretNumber - 2 || guess == secretNumber - 1) {
    if (score > 1) {
      message.textContent = '📉 Little lower than true value.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😫 You loose the game.';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is far greater than random number
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😫 You loose the game.';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is far lesser than random number
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉  Too low.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😫 You loose the game.';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
});
