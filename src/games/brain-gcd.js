// Helpers
import getRandomNumber from '../helpers/getRandomNumber.js';

const QUESTION_MIN_NUMBER = 0;
const QUESTION_MAX_NUMBER = 100;

const getGCD = (...nums) => {
  const minNumber = Math.min(...nums);

  const gcd = Array(minNumber)
    .fill(null)
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
  const firstNumber = getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER);
  const secondNumber = getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER);

  return `${firstNumber} ${secondNumber}`;
};

const makeBrainGCDGame = (numberOfRounds) => {
  const description = 'Find the greatest common divisor of given numbers.';
  const questions = Array(numberOfRounds).fill(null).map(makeQuestion);

  return {
    description,
    questions,
    getCorrectAnswer,
  };
};

export default makeBrainGCDGame;
