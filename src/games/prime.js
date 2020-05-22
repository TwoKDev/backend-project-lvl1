import utils from '../utils.js';
import playGame from '../engine.js';

const GAME_RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => playGame(GAME_RULE, makeRound);
