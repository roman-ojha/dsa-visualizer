const randomNumber10To99 = () => {
  // generating random from 10 - 99
  return Math.floor(Math.random() * 90 + 10);
};

const generateRandomArray = (length: number) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(randomNumber10To99());
  }
  return array;
};

export default generateRandomArray;
