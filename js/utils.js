function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements)=> elements[getRandomPositiveInteger(0, elements.length-1)];

const getRandomArray = (elements) => {
  const maxNumber = getRandomPositiveInteger(1, elements.length);
  const minNumber = getRandomPositiveInteger(0, maxNumber - 1);
  const randomArray = elements.slice(minNumber, maxNumber);
  return randomArray;
};
export {getRandomPositiveFloat, getRandomPositiveInteger, getRandomArrayElement, getRandomArray};
