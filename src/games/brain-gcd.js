// Helpers
import utils from '../utils/index.js';
import makeGameEngine from '../core/game-engine.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';
const QUESTION_MIN_NUMBER = 0;
const QUESTION_MAX_NUMBER = 100;

const getGCD = (...nums) => {
  const minNumber = Math.min(...nums);

  const gcd = utils
    .makeArray(minNumber)
    .reduceRight((acc, _, index) => {
      const newAcc = index + 1;

      if (acc > newAcc) {
        return acc;
      }

      const remainders = nums.map((num) => num % newAcc);

      const isRemainder = remainders.every((num) => num === 0);
      if (!isRemainder) {
        return acc;
      }

      return newAcc;
    }, 0);

  return gcd;
};

const getCorrectAnswer = (question) => {
  const numbers = question.split(' ').map(Number);
  const gcd = getGCD(...numbers);

  return gcd.toString();
};

const makeQuestion = () => {
  const firstNumber = utils.getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER);
  const secondNumber = utils.getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER);

  return `${firstNumber} ${secondNumber}`;
};

const makeRound = () => {
  const question = makeQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return utils.makeGameRound(question, correctAnswer);
};

const startBrainGCDGameData = () => {
  const rounds = utils.makeGameRounds(makeRound);

  const startGame = makeGameEngine(DESCRIPTION, rounds);
  startGame();
};


export default startBrainGCDGameData;
