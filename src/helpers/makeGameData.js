// Helpers
import makeArray from './makeArray.js';

const makeGameData = (description, numberOfRounds, makeGameRound) => ({
  description,
  rounds: makeArray(numberOfRounds).map(makeGameRound),
});

export default makeGameData;
