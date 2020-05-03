const getRandomNumber = (min, max) => (
  Math.floor(min + Math.random() * (max + 1 - min))
);

const makeArray = (size, fillValue = null) => Array(size).fill(fillValue);

const makeGameRounds = (makeGameRound, numberOfRounds = 3) => (
  makeArray(numberOfRounds).map(makeGameRound)
);

const makeGameRound = (question, correctAnswer) => [question, correctAnswer];

export default {
  getRandomNumber,
  makeArray,
  makeGameRound,
  makeGameRounds,
};
