// Helpers
import utils from '../utils.js';
import startGame from '../engine.js';

const POSSIBLE_ANSWER = {
  yes: 'yes',
  no: 'no',
};

const isEven = (num) => num % 2 === 0;

const makeRound = () => {
  const question = utils.getRandomNumber(0, 1000);
  const correctAnswer = isEven(question) ? POSSIBLE_ANSWER.yes : POSSIBLE_ANSWER.no;

  return [question, correctAnswer];
};

const startEvenGame = () => {
  const description = `Answer "${POSSIBLE_ANSWER.yes}" if the number is even, otherwise answer "${POSSIBLE_ANSWER.no}".`;

  startGame(description, makeRound);
};

export default startEvenGame;
