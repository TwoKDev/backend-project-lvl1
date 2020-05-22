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
  for (let currentRound = 1; currentRound <= maxRoundsCount; currentRound += 1) {
    const isSuccessfulRound = playRound(makeRound());

    if (!isSuccessfulRound) {
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default playGame;
