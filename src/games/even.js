import utils from '../utils.js';
import playGame from '../engine.js';

const isEven = (num) => num % 2 === 0;

const makeRound = () => {
  const question = utils.getRandomNumber(0, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => playGame('Answer "yes" if the number is even, otherwise answer "no".', makeRound);
