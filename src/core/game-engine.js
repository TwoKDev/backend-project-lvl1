import readlineSync from 'readline-sync';

const playRoundGame = (round) => {
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
    console.log(description);

    const isSuccessEndGame = rounds.reduce(
      (isCorrectPrevUserAnswer, round) => {
        if (!isCorrectPrevUserAnswer) {
          return false;
        }

        return playRoundGame(round);
      },
      true,
    );

    return isSuccessEndGame;
  };

  return startGameLoop;
};

export default makeGameEngine;
