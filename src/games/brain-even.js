// Helpers
import utils from '../utils/index.js';
import makeGameEngine from '../core/game-engine.js';

const ANSWER_ENUM = {
  yes: 'yes',
  no: 'no',
};
const DESCRIPTION = `Answer "${ANSWER_ENUM.yes}" if the number is even, otherwise answer "${ANSWER_ENUM.no}".`;
const QUESTION_MIN_NUMBER = 0;
const QUESTION_MAX_NUMBER = 1000;

const isEvenNumber = (num) => num % 2 === 0;

const getCorrectAnswer = (question) => (
  isEvenNumber(question)
    ? ANSWER_ENUM.yes
    : ANSWER_ENUM.no
);

const makeQuestion = () => (
  utils.getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER)
);

const makeRound = () => {
  const question = makeQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return utils.makeGameRound(question, correctAnswer);
};

const startBrainEvenGameData = () => {
  const rounds = utils.makeGameRounds(makeRound);

  const startGame = makeGameEngine(DESCRIPTION, rounds);
  startGame();
};

export default startBrainEvenGameData;
