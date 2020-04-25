// Helpers
import isEvenNumber from '../helpers/isEven.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import makeArray from '../helpers/makeArray.js';

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

const makeQuestion = () => (
  getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER)
);

const makeBrainEvenGameInfo = (numberOfRounds) => ({
  description: GAME_DESCRIPTION,
  questions: makeArray(numberOfRounds).map(makeQuestion),
  getCorrectAnswer,
});

export default makeBrainEvenGameInfo;
