import utils from '../utils.js';
import playGame from '../engine.js';

const GAME_RULE = 'Find the greatest common divisor of given numbers.';

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

const makeRound = () => {
  const firstNumber = utils.getRandomNumber(0, 100);
  const secondNumber = utils.getRandomNumber(0, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

export default () => playGame(GAME_RULE, makeRound);
