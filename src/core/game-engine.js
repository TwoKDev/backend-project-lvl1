import readlineSync from 'readline-sync';

const printQuestion = (question) => console.log(`Question: ${question}`);

const requestUserAnswer = () => readlineSync.question('Your answer: ');

const getSuccessAnswerMessage = () => 'Correct!';

const getFailureAnswerMessage = (userAnswer, correctAnswer) => (
  `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
);

const playRoundGame = (round) => {
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

const makeGameEngine = (description, rounds, playRound = playRoundGame) => {
  const startGameLoop = () => {
    console.log(description);

    const roundIter = (isCorrectPrevUserAnswer, round) => (
      isCorrectPrevUserAnswer
        ? playRound(round)
        : false
    );

    const isSuccessEndGame = rounds.reduce(roundIter, true);

    return isSuccessEndGame;
  };

  return startGameLoop;
};

export default makeGameEngine;
