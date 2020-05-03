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

const makeGameEngine = (description, rounds) => {
  const startGameLoop = () => {
    console.log('Welcome to the Brain Games!');

    const username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}`);

    console.log(description);

    const isSuccessEndGame = rounds.reduce(
      (isCorrectPrevUserAnswer, round) => {
        if (!isCorrectPrevUserAnswer) {
          return false;
        }

        return playRound(round);
      },
      true,
    );

    const endGameMessage = isSuccessEndGame
      ? `Congratulations, ${username}!`
      : `Let's try again, ${username}!`;

    console.log(endGameMessage);
  };

  return startGameLoop;
};

export default makeGameEngine;
