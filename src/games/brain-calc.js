// Helpers
import utils from '../utils/index.js';
import makeGameEngine from '../core/game-engine.js';

const DESCRIPTION = 'What is the result of the expression?';
const OPERATOR_ENUM = {
  add: '+',
  subtract: '-',
  multiply: '*',
};

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

const makeQuestion = () => {
  const questionMin = 0;
  const questionMax = 300;

  const leftOperand = utils.getRandomNumber(questionMin, questionMax);
  const rightOperand = utils.getRandomNumber(questionMin, questionMax);
  const operator = getRandomOperator();

  return `${leftOperand} ${operator} ${rightOperand}`;
};

const makeRound = () => {
  const question = makeQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return utils.makeGameRound(question, correctAnswer);
};

const startBrainCalcGameData = () => {
  const rounds = utils.makeGameRounds(makeRound);

  const startGame = makeGameEngine(DESCRIPTION, rounds);
  startGame();
};

export default startBrainCalcGameData;
