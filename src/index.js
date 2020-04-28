import readlineSync from 'readline-sync';

import makeGame, { GAME_ENUM } from './factories/game-factory.js';

const startGame = (gameName) => {
  console.log('Welcome to the Brain Games!');

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);

  const runGame = makeGame(gameName);
  const isSuccessEndGame = runGame();

  const endGameMessage = isSuccessEndGame
    ? `Congratulations, ${username}!`
    : `Let's try again, ${username}!`;

  console.log(endGameMessage);
};

const startBrainCalcGame = () => startGame(GAME_ENUM.brainCalc);
const startBrainEvenGame = () => startGame(GAME_ENUM.brainEven);
const startBrainGCDGame = () => startGame(GAME_ENUM.brainGCD);
const startBrainPrimeGame = () => startGame(GAME_ENUM.brainPrime);
const startBrainProgressionGame = () => startGame(GAME_ENUM.brainProgression);

export default {
  startBrainCalcGame,
  startBrainEvenGame,
  startBrainGCDGame,
  startBrainPrimeGame,
  startBrainProgressionGame,
};
