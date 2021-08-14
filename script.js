'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1; // prints number b/w 1 to 20
console.log(secretNumber);
var message = document.querySelector('.message');
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'Are you komedi me ??😏😏';
  } else if (guess == secretNumber) {
    message.textContent = 'Correct number 🎉';
  } else if (guess == secretNumber + 2 || guess == secretNumber + 1) {
    if (score > 1) {
      message.textContent = '📈 Little Higher than true value.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😫 You loose the game.';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess == secretNumber - 2 || guess == secretNumber - 1) {
    if (score > 1) {
      message.textContent = '📉 Little lower than true value.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😫 You loose the game.';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😫 You loose the game.';
      document.querySelector('.score').textContent = 0;
    }
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
