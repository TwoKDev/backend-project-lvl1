// Helpers
import isEvenNumber from '../helpers/isEven.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import makeGameData from '../helpers/makeGameData.js';
import makeGameRound from '../helpers/makeGameRound.js';

const AnswerEnum = {
  YES: 'yes',
  NO: 'no',
};

const GAME_DESCRIPTION = `Answer "${AnswerEnum.YES}" if the number is even, otherwise answer "${AnswerEnum.NO}".`;

const QUESTION_MIN_NUMBER = 0;
const QUESTION_MAX_NUMBER = 1000;

const getCorrectAnswer = (question) => (
  isEvenNumber(question)
    ? AnswerEnum.YES
    : AnswerEnum.NO
);

const makeBrainEvenQuestion = () => (
  getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER)
);

const makeBrainCalcGameRound = () => {
  const question = makeBrainEvenQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return makeGameRound(question, correctAnswer);
};

const makeBrainEvenGameData = (numberOfRounds) => makeGameData(
  GAME_DESCRIPTION,
  numberOfRounds,
  makeBrainCalcGameRound,
);

export default makeBrainEvenGameData;
