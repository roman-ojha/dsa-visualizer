const generateRandomNumber = (from: number, to: number): number => {
  return Math.floor(Math.random() * to) + from;
};

export default generateRandomNumber;
