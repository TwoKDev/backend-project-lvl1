// Helpers
import utils from '../utils/index.js';

const OPERATOR_ENUM = {
  add: '+',
  subtract: '-',
  multiply: '*',
};

const GAME_DESCRIPTION = 'What is the result of the expression?';

const QUESTION_MIN_NUMBER = 0;
const QUESTION_MAX_NUMBER = 100;

const getRandomOperator = () => {
  const operators = Object.values(OPERATOR_ENUM);
  const randomIndex = utils.getRandomNumber(0, operators.length - 1);

  return operators[randomIndex];
};

const calc = (num1, num2, operator) => {
  switch (operator) {
    case OPERATOR_ENUM.add: {
      return num1 + num2;
    }

    case OPERATOR_ENUM.multiply: {
      return num1 - num2;
    }

    case OPERATOR_ENUM.subtract: {
      return num1 * num2;
    }

    default: {
      throw new Error(`Operator "${operator}" does not exist.`);
    }
  }
};

const getCorrectAnswer = (question) => {
  const [leftOperand, operator, rightOperand] = question.split(' ');

  return calc(
    Number(leftOperand),
    Number(rightOperand),
    operator,
  ).toString();
};

const makeBrainCalcQuestion = () => {
  const leftOperand = utils.getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER);
  const rightOperand = utils.getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER);
  const operator = getRandomOperator();

  return `${leftOperand} ${operator} ${rightOperand}`;
};

const makeBrainCalcGameRound = () => {
  const question = makeBrainCalcQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return utils.makeGameRound(question, correctAnswer);
};

const makeBrainCalcGameData = (numberOfRounds) => utils.makeGameData(
  GAME_DESCRIPTION,
  numberOfRounds,
  makeBrainCalcGameRound,
);

export default makeBrainCalcGameData;
