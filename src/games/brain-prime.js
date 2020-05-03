// Helpers
import utils from '../utils/index.js';
import makeGameEngine from '../core/game-engine.js';

const ANSWER_ENUM = {
  yes: 'yes',
  no: 'no',
};
const DESCRIPTION = `Answer "${ANSWER_ENUM.yes}" if given number is prime. Otherwise answer "${ANSWER_ENUM.no}".`;
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
    ? ANSWER_ENUM.yes
    : ANSWER_ENUM.no
);
const makeQuestion = () => utils.getRandomNumber(MIN_NUMBER, MAX_NUMBER);

const makeRound = () => {
  const question = makeQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return utils.makeGameRound(question, correctAnswer);
};

const startBrainPrimeGameData = () => {
  const rounds = utils.makeGameRounds(makeRound);

  const startGame = makeGameEngine(DESCRIPTION, rounds);
  startGame();
};

export default startBrainPrimeGameData;
