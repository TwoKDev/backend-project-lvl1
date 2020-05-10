// Helpers
import utils from '../utils.js';
import startGame from '../game-engine.js';

const POSSIBLE_ANSWER = {
  yes: 'yes',
  no: 'no',
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const makeRound = () => {
  const question = utils.getRandomNumber(2, 100);
  const correctAnswer = isPrime(question) ? POSSIBLE_ANSWER.yes : POSSIBLE_ANSWER.no;

  return [question, correctAnswer];
};

const startPrimeGame = () => {
  const description = `Answer "${POSSIBLE_ANSWER.yes}" if given number is prime. Otherwise answer "${POSSIBLE_ANSWER.no}".`;

  startGame(description, makeRound);
};

export default startPrimeGame;
