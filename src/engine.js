import readlineSync from 'readline-sync';

const playRound = (round) => {
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

const playGame = (description, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log(description);

  const maxRoundsCount = 3;
  const isVictory = Array(maxRoundsCount)
    .fill(null)
    .reduce((isSuccessfulPrevRound) => (
      isSuccessfulPrevRound ? playRound(makeRound()) : false
    ), true);

  const endGameMessage = isVictory
    ? `Congratulations, ${username}!`
    : `Let's try again, ${username}!`;

  console.log(endGameMessage);
};

export default playGame;
