import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;
const GAME_STATUS = {
  play: 'play',
  victory: 'victory',
  defeat: 'defeat',
};

const startRound = (round) => {
  const [question, correctAnswer] = round;

  console.log(`Question: ${question}`);

  const userAnswer = readlineSync.question('Your answer: ');

  const isCorrectUserAnswer = userAnswer === correctAnswer;
  const responseMessage = isCorrectUserAnswer
    ? 'Correct!'
    : `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;

  console.log(responseMessage);

  return isCorrectUserAnswer;
};

const startGame = (description, makeRound) => {
  console.log('Welcome to the Brain Games!');

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);

  console.log(description);

  let gameStatus = GAME_STATUS.play;
  let currentRound = 1;

  while (gameStatus === GAME_STATUS.play) {
    const round = makeRound();
    const isSuccessfullyRound = startRound(round);
    const isLastRound = currentRound === MAX_ROUNDS;

    if (!isSuccessfullyRound) {
      gameStatus = GAME_STATUS.defeat;
    }

    if (isLastRound && isSuccessfullyRound) {
      gameStatus = GAME_STATUS.victory;
    }

    currentRound += 1;
  }

  const endGameMessage = gameStatus === GAME_STATUS.victory
    ? `Congratulations, ${username}!`
    : `Let's try again, ${username}!`;

  console.log(endGameMessage);
};

export default startGame;
