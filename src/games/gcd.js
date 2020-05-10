// Helpers
import utils from '../utils.js';
import startGame from '../game-engine.js';

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

const startGCDGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  startGame(description, makeRound);
};

export default startGCDGame;
