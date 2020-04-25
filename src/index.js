import readlineSync from 'readline-sync';

import makeGame from './factories/game-factory.js';

const greeting = (username) => console.log(`Hello, ${username}`);

const requestUsername = () => readlineSync.question('May I have your name? ');

const getSuccessEndGameMessage = (username) => `Congratulations, ${username}!`;

const getFailureEndGameMessage = (username) => `Let's try again, ${username}!`;

const startGame = (gameName) => {
  console.log('Welcome to the Brain Games!');

  const username = requestUsername();
  greeting(username);

  const runGame = makeGame(gameName);

  const isSuccessEndGame = runGame();

  const endGameMessage = isSuccessEndGame
    ? getSuccessEndGameMessage(username)
    : getFailureEndGameMessage(username);

  console.log(endGameMessage);
};

export default startGame;
