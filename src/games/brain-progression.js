// Helpers
import utils from '../utils/index.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const PROGRESSION_SIZE = 10;

const PROGRESSION_MIN_START_NUMBER = 0;
const PROGRESSION_MAX_START_NUMBER = 100;

const PROGRESSION_MIN_ITERATOR = 2;
const PROGRESSION_MAX_ITERATOR = 100;

const SYMBOL_TO_REPLACE = '..';

const hideRandomElement = (arr, symbolToReplace = SYMBOL_TO_REPLACE) => {
  const hiddenNumberIndex = utils.getRandomNumber(0, arr.length - 1);

  return arr.map((num, index) => {
    if (index === hiddenNumberIndex) {
      return symbolToReplace;
    }

    return num;
  });
};

const makeProgression = (start, iterator, size) => (
  utils.makeArray(size, start).map((num, index) => num + (iterator * index))
);

const getCorrectAnswer = (question) => {
  const progression = question.split(' ').map(Number);

  const progressionIterator = progression.reduce(
    (acc, num, index, coll) => {
      const nextNumber = coll[index + 1];

      const isCalcIterator = acc === 0 && !Number.isNaN(num) && !Number.isNaN(nextNumber);

      return isCalcIterator ? nextNumber - num : acc;
    },
    0,
  );

  return progressionIterator.toString();
};

const makeBrainProgressionQuestion = () => {
  const progressionStartNumber = utils.getRandomNumber(
    PROGRESSION_MIN_START_NUMBER,
    PROGRESSION_MAX_START_NUMBER,
  );

  const progressionIterator = utils.getRandomNumber(
    PROGRESSION_MIN_ITERATOR,
    PROGRESSION_MAX_ITERATOR,
  );

  const progression = makeProgression(
    progressionStartNumber,
    progressionIterator,
    PROGRESSION_SIZE,
  );
  const question = hideRandomElement(progression).join(' ');

  return question;
};

const makeBrainProgressionGameRound = () => {
  const question = makeBrainProgressionQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return utils.makeGameRound(question, correctAnswer);
};

const makeBrainProgressionGameData = (numberOfRounds) => utils.makeGameData(
  GAME_DESCRIPTION,
  numberOfRounds,
  makeBrainProgressionGameRound,
);

export default makeBrainProgressionGameData;
