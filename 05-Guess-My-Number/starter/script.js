'use strict';

let secretNumber = calculateSecretNumber();
console.log(secretNumber);

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);

  if (!guessValue) {
    updateMessageContent('Invalid or no number!');
  } else if (guessValue === secretNumber) {
    updateContentsToCorrect();
    verifyAndUpdateHightScore();
  } else {
    updateContentsToError(guessValue);
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = calculateSecretNumber();
  score = 20;
  console.log(secretNumber);

  updateMessageContent('Start guessing...');
  updateScoreTextContent(score);
  updateNumberTextContent('?');
  document.querySelector('.guess').value = '';

  updateBodyBackgroundColor('#222');
  updateNumberWidth('15rem');
});

function updateContentsToError(guessValue) {
  if (score < 2) {
    updateMessageContent('Game lost!');
    updateScoreTextContent(0);
  } else {
    updateMessageContent(guessValue > secretNumber ? 'Too High!' : 'Too Low!');
    updateScoreTextContent(--score);
  }
}

function verifyAndUpdateHightScore(score) {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
}

function updateContentsToCorrect() {
  updateMessageContent('Correct number!');
  updateNumberTextContent(secretNumber);
  updateScoreTextContent(score);

  updateBodyBackgroundColor('#60b347');
  updateNumberWidth('30rem');
}

function calculateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function updateMessageContent(textContent) {
  document.querySelector('.message').textContent = textContent;
}

function updateScoreTextContent(textContent) {
  document.querySelector('.score').textContent = textContent;
}

function updateNumberTextContent(textContent) {
  document.querySelector('.number').textContent = textContent;
}

function updateNumberWidth(width) {
  document.querySelector('.number').style.width = width;
}

function updateBodyBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}
