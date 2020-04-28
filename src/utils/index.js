const getRandomNumber = (min, max) => (
  Math.floor(min + Math.random() * (max + 1 - min))
);

const makeArray = (size, fillValue = null) => Array(size).fill(fillValue);

const makeGameData = (description, numberOfRounds, makeGameRound) => ({
  description,
  rounds: makeArray(numberOfRounds).map(makeGameRound),
});

const makeGameRound = (question, correctAnswer) => [question, correctAnswer];

export default {
  getRandomNumber,
  makeArray,
  makeGameData,
  makeGameRound,
};
