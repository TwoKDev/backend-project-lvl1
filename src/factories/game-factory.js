// Core
import makeGameEngine from '../core/game-engine';

// Games
import makeBrainEvenGameData from '../games/brain-even.js';
import makeBrainCalcGameData from '../games/brain-calc.js';
import makeBrainGCDGameData from '../games/brain-gcd.js';
import makeBrainProgressionGameData from '../games/brain-progression.js';
import makeBrainPrimeGameData from '../games/brain-prime.js';

const GAME_NUMBER_OF_ROUNDS = 3;

const GameEnum = {
  BRAIN_EVEN: 'brain-even',
  BRAIN_CALC: 'brain-calc',
  BRAIN_GCD: 'brain-gcd',
  BRAIN_PROGRESSION: 'brain-progression',
  BRAIN_PRIME: 'brain-prime',
};

const gameDict = {
  [GameEnum.BRAIN_EVEN]: makeBrainEvenGameData,
  [GameEnum.BRAIN_CALC]: makeBrainCalcGameData,
  [GameEnum.BRAIN_GCD]: makeBrainGCDGameData,
  [GameEnum.BRAIN_PROGRESSION]: makeBrainProgressionGameData,
  [GameEnum.BRAIN_PRIME]: makeBrainPrimeGameData,
};

const makeGame = (gameName, numberOfRounds = GAME_NUMBER_OF_ROUNDS) => {
  const makeGameData = gameDict[gameName];

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
