import readlineSync from 'readline-sync';

/* Start Block Constants */

const GameEnum = {
  BRAIN_EVEN: 'brain-even',
};

const BrainEvenAnswerEnum = {
  YES: 'yes',
  NO: 'no',
};

/* End Block Constants */

const isEven = (num) => num % 2 === 0;
const getRandomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const requestUsername = () => readlineSync.question('May I have your name? ');
const greeting = (username) => console.log(`Hello, ${username}`);

const startBrainEvenGame = (countRound = 3) => {
  const rounds = Array(countRound)
    .fill(null)
    .map(() => getRandomNum(0, 500));

  console.log(`Answer "${BrainEvenAnswerEnum.YES}" if the number is even, otherwise answer "${BrainEvenAnswerEnum.NO}".`);

  const isWin = rounds.reduce((acc, question) => {
    if (!acc) {
      return false;
    }

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(question)
      ? BrainEvenAnswerEnum.YES
      : BrainEvenAnswerEnum.NO;

    const isCorrectAnswer = correctAnswer === userAnswer;

    const message = isCorrectAnswer
      ? 'Correct!'
      : `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;

    console.log(message);

    return isCorrectAnswer;
  }, true);

  return isWin;
};

const startGame = (gameName) => {
  switch (gameName) {
    case GameEnum.BRAIN_EVEN: {
      return startBrainEvenGame();
    }

    default: {
      throw new Error(`Game "${gameName}" does not exist.`);
    }
  }
};

const main = () => {
  console.log('Welcome to the Brain Games!');

  const username = requestUsername();
  greeting(username);

  const isFinished = startGame(GameEnum.BRAIN_EVEN);

  const finishedMessage = isFinished
    ? `Congratulations, ${username}!`
    : `Let's try again, ${username}!`;

  console.log(finishedMessage);
};

export default main;
