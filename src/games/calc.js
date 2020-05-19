import utils from '../utils.js';
import playGame from '../engine.js';

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+': {
      return num1 + num2;
    }

    case '-': {
      return num1 - num2;
    }

    case '*': {
      return num1 * num2;
    }

    default: {
      throw new Error(`Operator "${operator}" does not exist.`);
    }
  }
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
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

export default () => playGame('What is the result of the expression?', makeRound);
