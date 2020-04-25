// Helpers
import getRandomNumber from '../helpers/getRandomNumber.js';
import makeGameData from '../helpers/makeGameData.js';
import makeGameRound from '../helpers/makeGameRound.js';

const AnswerEnum = {
  YES: 'yes',
  NO: 'no',
};

const GAME_DESCRIPTION = `Answer "${AnswerEnum.YES}" if given number is prime. Otherwise answer "${AnswerEnum.NO}".`;

const MIN_NUMBER = 2;
const MAX_NUMBER = 200;

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

const getCorrectAnswer = (question) => (
  isPrime(Number(question))
    ? AnswerEnum.YES
    : AnswerEnum.NO
);
const makeBrainPrimeQuestion = () => getRandomNumber(MIN_NUMBER, MAX_NUMBER);

const makeBrainPrimeGameRound = () => {
  const question = makeBrainPrimeQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return makeGameRound(question, correctAnswer);
};

const makeBrainPrimeGameData = (numberOfRounds) => makeGameData(
  GAME_DESCRIPTION,
  numberOfRounds,
  makeBrainPrimeGameRound,
);

export default makeBrainPrimeGameData;
