// Helpers
import utils from '../utils.js';
import startGame from '../engine.js';

const OPERATOR_ENUM = {
  add: '+',
  subtract: '-',
  multiply: '*',
};

const calc = (num1, num2, operator) => {
  switch (operator) {
    case OPERATOR_ENUM.add: {
      return num1 + num2;
    }

    case OPERATOR_ENUM.subtract: {
      return num1 - num2;
    }

    case OPERATOR_ENUM.multiply: {
      return num1 * num2;
    }

    default: {
      throw new Error(`Operator "${operator}" does not exist.`);
    }
  }
};

const getRandomOperator = () => {
  const operators = Object.values(OPERATOR_ENUM);
  const randomIndex = utils.getRandomNumber(0, operators.length - 1);

  return operators[randomIndex];
};

const makeRound = () => {
  const leftOperand = utils.getRandomNumber(0, 300);
  const rightOperand = utils.getRandomNumber(0, 300);
  const operator = getRandomOperator();

  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const correctAnswer = calc(leftOperand, rightOperand, operator).toString();

  return [question, correctAnswer];
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';

  startGame(description, makeRound);
};

export default startCalcGame;
