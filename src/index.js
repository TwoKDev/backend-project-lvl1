import readlineSync from 'readline-sync';

// Games
import makeBrainEvenGame from './games/brain-even.js';
import makeBrainCalcGame from './games/brain-calc.js';

const NUMBER_OF_ROUNDS = 3;

const GameEnum = {
  BRAIN_EVEN: 'brain-even',
  BRAIN_CALC: 'brain-calc',
};

const greeting = (username) => console.log(`Hello, ${username}`);

const requestUsername = () => readlineSync.question('May I have your name? ');
const requestUserAnswer = () => readlineSync.question('Your answer: ');
const printQuestion = (question) => console.log(`Question: ${question}`);

const getSuccessAnswerMessage = () => 'Correct!';
const getFailureAnswerMessage = (userAnswer, correctAnswer) => (
  `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
);

const getSuccessEndGame = (username) => `Congratulations, ${username}!`;
const getFailureEndMessage = (username) => `Let's try again, ${username}!`;

const makeGameEngine = (game) => {
  const {
    description,
    questions,
    getCorrectAnswer,
  } = game;

  const startGame = () => {
    console.log(description);

    const isWin = questions.reduce((acc, question) => {
      if (!acc) {
        return false;
      }

      printQuestion(question);
      const userAnswer = requestUserAnswer();
      const correctAnswer = getCorrectAnswer(question);

      const isCorrectUserAnswer = correctAnswer === userAnswer;
      const message = isCorrectUserAnswer
        ? getSuccessAnswerMessage()
        : getFailureAnswerMessage(userAnswer, correctAnswer);

      console.log(message);

      return isCorrectUserAnswer;
    }, true);

    return isWin;
  };

  return startGame;
};

const makeGame = (gameName, numberOfRounds) => {
  switch (gameName) {
    case GameEnum.BRAIN_EVEN: {
      return makeGameEngine(makeBrainEvenGame(numberOfRounds));
    }

    case GameEnum.BRAIN_CALC: {
      return makeGameEngine(makeBrainCalcGame(numberOfRounds));
    }

    default: {
      throw new Error(`Game "${gameName}" does not exist.`);
    }
  }
};

const startGame = (gameName) => {
  console.log('Welcome to the Brain Games!');

  const username = requestUsername();
  greeting(username);

  const game = makeGame(gameName, NUMBER_OF_ROUNDS);

  const isSuccessEndGame = game();

  const endGameMessage = isSuccessEndGame
    ? getSuccessEndGame(username)
    : getFailureEndMessage(username);

  console.log(endGameMessage);
};

export default startGame;
