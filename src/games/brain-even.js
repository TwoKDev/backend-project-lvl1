// Helpers
import utils from '../utils/index.js';

const ANSWER_ENUM = {
  yes: 'yes',
  no: 'no',
};

const GAME_DESCRIPTION = `Answer "${ANSWER_ENUM.yes}" if the number is even, otherwise answer "${ANSWER_ENUM.no}".`;

const QUESTION_MIN_NUMBER = 0;
const QUESTION_MAX_NUMBER = 1000;

const isEvenNumber = (num) => num % 2 === 0;

const getCorrectAnswer = (question) => (
  isEvenNumber(question)
    ? ANSWER_ENUM.yes
    : ANSWER_ENUM.no
);

const makeBrainEvenQuestion = () => (
  utils.getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER)
);

const makeBrainCalcGameRound = () => {
  const question = makeBrainEvenQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return utils.makeGameRound(question, correctAnswer);
};

const makeBrainEvenGameData = (numberOfRounds) => utils.makeGameData(
  GAME_DESCRIPTION,
  numberOfRounds,
  makeBrainCalcGameRound,
);

export default makeBrainEvenGameData;
