'use strict';

const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const newButtonElement = document.querySelector('.btn--new');
const rollButtonElement = document.querySelector('.btn--roll');
const holdButtonElement = document.querySelector('.btn--hold');

let score, currentPlayer, playing, currentScore;

const init = () => {
  playing = true;
  currentPlayer = 0;
  score = [0, 0];
  currentScore = 0;

  score0Element.textContent = 0;
  score1Element.textContent = 0;

  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.add('player--active');
  diceElement.classList.add('hidden');
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--winner');
};

init();

const resetCurrentAndSwitchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer ? 0 : 1;
  document.querySelector(`.player--0`).classList.toggle('player--active');
  document.querySelector(`.player--1`).classList.toggle('player--active');
};

rollButtonElement.addEventListener('click', () => {
  if (!playing) return;

  const dice = Math.trunc(Math.random() * 6) + 1;

  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    resetCurrentAndSwitchPlayer();
  }
});

holdButtonElement.addEventListener('click', () => {
  if (!playing) return;

  score[currentPlayer] += currentScore;

  document.getElementById(`score--${currentPlayer}`).textContent =
    score[currentPlayer];

  if (score[currentPlayer] >= 20) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.toggle('player--active');
    playing = false;
    diceElement.classList.add('hidden');
  } else {
    resetCurrentAndSwitchPlayer();
  }
});

newButtonElement.addEventListener('click', init);
