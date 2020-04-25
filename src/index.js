import readlineSync from 'readline-sync';

// Games
import makeBrainEvenGameData from './games/brain-even.js';
import makeBrainCalcGameData from './games/brain-calc.js';
import makeBrainGCDGameData from './games/brain-gcd.js';
import makeBrainProgressionGameData from './games/brain-progression.js';
import makeBrainPrimeGameData from './games/brain-prime.js';

const GAME_NUMBER_OF_ROUNDS = 3;

const GameEnum = {
  BRAIN_EVEN: 'brain-even',
  BRAIN_CALC: 'brain-calc',
  BRAIN_GCD: 'brain-gcd',
  BRAIN_PROGRESSION: 'brain-progression',
  BRAIN_PRIME: 'brain-prime',
};

const gameDict = {
  [GameEnum.BRAIN_EVEN]: makeBrainEvenGameData,
  [GameEnum.BRAIN_CALC]: makeBrainCalcGameData,
  [GameEnum.BRAIN_GCD]: makeBrainGCDGameData,
  [GameEnum.BRAIN_PROGRESSION]: makeBrainProgressionGameData,
  [GameEnum.BRAIN_PRIME]: makeBrainPrimeGameData,
};

const printQuestion = (question) => console.log(`Question: ${question}`);
const requestUserAnswer = () => readlineSync.question('Your answer: ');
const getSuccessAnswerMessage = () => 'Correct!';
const getFailureAnswerMessage = (userAnswer, correctAnswer) => (
  `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
);

const startRoundGame = (round) => {
  const [question, correctAnswer] = round;

  printQuestion(question);
  const userAnswer = requestUserAnswer();

  const isCorrectUserAnswer = userAnswer === correctAnswer;
  const responseMessage = isCorrectUserAnswer
    ? getSuccessAnswerMessage()
    : getFailureAnswerMessage(userAnswer, correctAnswer);

  console.log(responseMessage);

  return isCorrectUserAnswer;
};

const makeGameEngine = (description, rounds, startRound = startRoundGame) => {
  const startGameLoop = () => {
    console.log(description);

    const roundIter = (isCorrectPrevUserAnswer, round) => (
      isCorrectPrevUserAnswer
        ? startRound(round)
        : false
    );

    const isSuccessEndGame = rounds.reduce(roundIter, true);

    return isSuccessEndGame;
  };

  return startGameLoop;
};

const makeGame = (gameName, numberOfRounds) => {
  const makeGameData = gameDict[gameName];

  if (makeGameData === undefined) {
    throw new Error(`Game "${gameName}" does not exist.`);
  }

  const {
    description,
    rounds,
  } = makeGameData(numberOfRounds);

  return makeGameEngine(description, rounds);
};

const greeting = (username) => console.log(`Hello, ${username}`);
const requestUsername = () => readlineSync.question('May I have your name? ');
const getSuccessEndGameMessage = (username) => `Congratulations, ${username}!`;
const getFailureEndGameMessage = (username) => `Let's try again, ${username}!`;

const startGame = (gameName) => {
  console.log('Welcome to the Brain Games!');

  const username = requestUsername();
  greeting(username);

  const runGame = makeGame(gameName, GAME_NUMBER_OF_ROUNDS);

  const isSuccessEndGame = runGame();

  const endGameMessage = isSuccessEndGame
    ? getSuccessEndGameMessage(username)
    : getFailureEndGameMessage(username);

  console.log(endGameMessage);
};

export default startGame;
