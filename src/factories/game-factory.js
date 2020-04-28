// Core
import makeGameEngine from '../core/game-engine.js';

// Games
import makeBrainEvenGameData from '../games/brain-even.js';
import makeBrainCalcGameData from '../games/brain-calc.js';
import makeBrainGCDGameData from '../games/brain-gcd.js';
import makeBrainProgressionGameData from '../games/brain-progression.js';
import makeBrainPrimeGameData from '../games/brain-prime.js';

const GAME_NUMBER_OF_ROUNDS = 3;

export const GAME_ENUM = {
  brainEven: 'brain-even',
  brainCalc: 'brain-calc',
  brainGCD: 'brain-gcd',
  brainProgression: 'brain-progression',
  brainPrime: 'brain-prime',
};

const GAME_DICT = {
  [GAME_ENUM.brainEven]: makeBrainEvenGameData,
  [GAME_ENUM.brainCalc]: makeBrainCalcGameData,
  [GAME_ENUM.brainGCD]: makeBrainGCDGameData,
  [GAME_ENUM.brainProgression]: makeBrainProgressionGameData,
  [GAME_ENUM.brainPrime]: makeBrainPrimeGameData,
};

const makeGame = (gameName, numberOfRounds = GAME_NUMBER_OF_ROUNDS) => {
  const makeGameData = GAME_DICT[gameName];

  if (makeGameData === undefined) {
    throw new Error(`Game "${gameName}" does not exist.`);
  }

  const {
    description,
    rounds,
  } = makeGameData(numberOfRounds);

  return makeGameEngine(description, rounds);
};

export default makeGame;
