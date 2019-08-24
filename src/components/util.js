export const getRandomBoolean = () => {
  return Boolean(Math.round(Math.random()));
};

const getRandomNumber = (maxNumber) => Math.round(Math.random() * maxNumber);

export const getRandomArray = (array, length) => {
  return array.slice(0, getRandomNumber(length || array.length - 1));
};
